// 示例：v-html：在模板中輸出原始的 HTML 代碼
const app = Vue.createApp({
  data() {
    return {
      content: `<p>這是一段<span style="color: hsl(0, 80%, 70%);">HTML</span>代碼</p>`,
    };
  },
});
app.mount("#app");
