// 示例：事件相關的修飾符
const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    handleUlClick() {
      alert(0);
    },
    handleLiClick() {
      alert(1);
    }
  },
});
app.mount("#app");
