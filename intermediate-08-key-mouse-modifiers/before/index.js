// 示例：處理鍵盤、按鍵事件的修飾符
const app = Vue.createApp({
  data() {
    return {
      comments: ["好", "非常好", "讚"],
      comment: "",
    };
  },
  methods: {
    addComment() {
      this.comments.push(this.comment);
      this.comment = "";
    },
  },
});
app.mount("#app");
