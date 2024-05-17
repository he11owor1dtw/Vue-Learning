let obj = {
  a: 1,
  b: 2,
};

let objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log(`訪問了 ${target} 中的 ${key}，值為 ${target[key]}`);
    // return target[key];
    // return 10;
    return Reflect.get(target, key, receiver);
  },
  set(target, key, value, receiver) {
    console.log(`修改了 ${target} 中的 ${key}，值為 ${value}`);
    // target[key] = value;
    return Reflect.set(target, key, value, receiver);
  },
});

// console.log(objProxy.a);

objProxy.a = 5;
// 訪問 proxy
console.log(objProxy.a);
// 訪問原始對象
console.log(obj.a);
