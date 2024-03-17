const app = Vue.createApp({
  data() {
    return {
      books: ["JavaScript 基礎語法詳解", "Vue 實戰入門", "Reach 入門到精通"],
    };
  },
});
app.mount("#app");
