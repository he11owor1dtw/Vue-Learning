// 持久化 Vuex 狀態的函數
// 將 Vuex 的狀態保存在 localStorage，即使網頁重新加載或瀏覽器關閉後再打開，之前的狀態也能被恢復。

export default function persistState(store) {
  // window.addEventListener("beforeunload", e => {
  //   window.localStorage.setItem("vuex", JSON.stringify(store.state));
  // });
  store.subscribe((mutation, state) => {
    window.localStorage.setItem("vuex", JSON.stringify(state));
  })
  const prevState = window.localStorage.getItem("vuex");
  if (prevState) {
    store.replaceState(JSON.parse(prevState));
  }
}

// 1. export default function persistState(store) { ... }
// 這是一個 ES6 模組的導出語句，將 persistState 函數作為模組的預設導出。
// persistState 接受一個參數 store，這個參數是 Vuex 的 store 實例。
//
// 2. window.addEventListener("beforeunload", e => { ... })
// 這行程式碼為 window 添加了一個事件監聽器，用於監聽 beforeunload 事件。
// beforeunload 事件在網頁即將被卸載（例如，關閉瀏覽器或重新載入頁面）時觸發。
//
// 3. window.localStorage.setItem("vuex", JSON.stringify(store.state));
// 在 beforeunload 事件觸發時，將 Vuex 的狀態（store.state）序列化為 JSON 字符串，
// 並保存到 localStorage 中，鍵名為 "vuex"。localStorage 是一個可以在瀏覽器中持久化存儲數據的 API。
//
// 4. const prevState = window.localStorage.getItem("vuex");
// 從 localStorage 中取回先前保存的 Vuex 狀態。getItem 方法根據指定的鍵名（這裡是 "vuex"）獲取對應的數據。
// 如果 localStorage 中沒有這個鍵名，getItem 會返回 null。
//
// 5. if (prevState){ store.replaceState(JSON.parse(prevState)); }
// 如果從 localStorage 中成功獲取到先前保存的狀態（prevState 不是 null），
// 會將其解析（JSON.parse）成為一個 JavaScript 對象，並使用 Vuex 的 replaceState 方法替換當前的狀態。
// 這樣應用在重新加載時，可以恢復到之前保存的狀態。