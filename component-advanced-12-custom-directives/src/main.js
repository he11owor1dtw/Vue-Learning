import { createApp } from "vue";
import App from "./App.vue";
import { onMounted } from "vue";
import { onUpdated } from "vue";

const app = createApp(App);

// 定義自定義指令
// app.directive('fsize', {
  // 原生寫法
  // mounted(el, binding) {
  //   el.style.fontSize = binding.value + "px";
  // },
  // // data 更新時，才會觸發
  // updated(el, binding) {
  //   el.style.fontSize = binding.value + "px";
  // },
  // 如果 mounted 和 updated 的代碼相同，可以合併成：
  // app.directive("fsize", (el, binding) => {
  //   el.style.fontSize = binding.value + "px";
  // });

  // 有變數 args 的：
app.directive("fsize", (el, binding) => {
  el.style.fontSize = binding.value + (binding.arg || "px");   // 判斷若傳遞的參數為字體的單位則使用，否則用 px
});
// });

app.mount("#app");
