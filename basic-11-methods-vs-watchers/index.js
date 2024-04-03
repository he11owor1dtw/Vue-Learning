const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入門實戰",
        "Vue 3.x 完全指南",
        "React 18 新特性介紹",
        "JavaScript 基礎語法概覽",
      ],
      newBlog: "",
    };
  },
  methods: {
    addANewBlog() {
      setTimeout(() => {
        this.blogPosts.push(this.newBlog);
      }, 2000);
    },
    handleButtonClick() {
      this.newBlog = "Vue 3.x 方法和監聽器的區別";
    },
  },
  watch: {
    newBlog(newVal) {
      this.addANewBlog();
    },
  },
});
app.mount("#app");
