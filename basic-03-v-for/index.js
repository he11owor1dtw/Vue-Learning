const app = Vue.createApp({
  data() {
    return {
      todos: [
        {
          content: "吃飯",
          complete: true,
        },
        {
          content: "睡覺",
          complete: true,
        },
        {
          content: "打遊戲",
          complete: false,
        },
      ],
    };
  },
});
app.mount("#app");
