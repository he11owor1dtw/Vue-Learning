// 示例：根據條件添加或删除 class 樣式
const app = Vue.createApp({
  data() {
    return {
      textClass:"text-blue",
      stateClass:"danger",
      isHidden:"false",
    };
  },
});
app.mount("#app");
