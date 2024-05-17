const observers = new WeakMap();
// observers 用於儲存目標物件和其屬性對應的觀察者函數集合
let currentObserver = null;
// currentObserver 是當前正在執行的觀察者函數

function observe(fn) {
  currentObserver = fn;
  fn();
  currentObserver = null;
}
// 這個函數用於設定和執行觀察者函數 fn
// 當前的觀察者函數 fn 被設置為 currentObserver，然後執行 fn
// 執行完後，將 currentObserver 重置為 null

function reactive(obj) {
  observers.set(obj, new Map());
  return new Proxy(obj, {
    get(target, key, receiver) {
      registerObserver(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const result = Reflect.set(target, key, value, receiver);
      execute(target, key);
      return result;
    },
  });
}
// reactive 函數將一個物件轉換為反應性物件
// 為 obj 在 observers 中創建一個新條目，值為 Map
// 返回一個代理物件，定制了 get 和 set 操作：
// get 操作會調用 registerObserver 將當前觀察者註冊到對應的屬性上
// set 操作會執行真正的賦值操作，然後調用 execute 函數通知所有觀察者

function registerObserver(target, key) {
  if (currentObserver) {
    let targetObserver = observers.get(target);
    if (targetObserver.has(key)) {
      targetObserver.get(key).add(currentObserver);
    } else {
      targetObserver.set(key, new Set([currentObserver]));
    }
  }
}
// 這個函數在讀取屬性時被調用，用於將當前觀察者註冊到對應的屬性上
// 如果 currentObserver 存在，將其添加到 observers 的對應屬性集合中

function execute(target, key) {
  let observersForkey = observers.get(target).get(key);
  observersForkey.forEach((fn) => fn());
}
// 這個函數在寫入屬性後被調用，用於通知所有註冊在該屬性上的觀察者函數

let obj = {
  a: 1,
  b: 2,
};

let reactiveObj = reactive(obj);
// 創建一個普通物件 obj 並將其轉換為反應性物件 reactiveObj

function sum() {
  console.log(reactiveObj.a + reactiveObj.b);
}
// 定義兩個觀察者函數 sum 和 sub，計算並輸出 a + b

function sub() {
  console.log(reactiveObj.a - reactiveObj.b);
}
// 定義兩個觀察者函數 sum 和 sub，計算並輸出 a - b。

// 類似於調用 computed()
observe(sum);
observe(sub);
// 通過 observe 函數註冊這兩個觀察者函數，使它們在 reactiveObj 的屬性改變時自動執行

setTimeout(() => {
  reactiveObj.a = 5;
}, 1000);
// 使用 setTimeout 在 1 秒後修改 reactiveObj.a 的值，這將觸發觀察者函數的執行，並輸出新的計算結果。

setTimeout(() => {
  reactiveObj.b = 10;
}, 2000);
// 使用 setTimeout 在 2 秒後修改 reactiveObj.b 的值，這將觸發觀察者函數的執行，並輸出新的計算結果。

// 執行順序
// 觀察者 sum 和 sub 被註冊並執行，它們分別讀取 reactiveObj.a 和 reactiveObj.b，因此被註冊為這些屬性的觀察者。
// 1 秒後，reactiveObj.a 被設置為 5，這會觸發 sum 和 sub 的執行，輸出 15 和 -5。
// 2 秒後，reactiveObj.b 被設置為 10，再次觸發 sum 和 sub 的執行，輸出 15 和 -5