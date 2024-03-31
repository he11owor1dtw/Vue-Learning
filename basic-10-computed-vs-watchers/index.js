const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入門實戰",
        "Vue 3.x 完全指南",
        "React 18 新特性介紹",
        "JavaScript 基礎語法概覽",
      ],
      // newBlog: "",
      newBlogPost: "",   // 使用 computed 的方式
      // count: 4,       // 使用 watch 的方式
    };
  },
  computed: {
    count() {
      return this.blogPosts.length;
    },
    newBlog: {
      get() {
        return this.newBlogPost;
      },
      set(value) {
        this.newBlogPost = value;  // 需要手動赋值，無法訪問之前的值，繁瑣
        setTimeout(() => {
          this.blogPosts.push(value); // 雖然代碼中可以修改其它屬性，但推薦只對它所計算的屬性進行修改，且不要進行異步的修改。
        }, 2000);
      },
    },
  },
  watch: {
    // blogPosts: {
    //   handler(newVal) {
    //     this.count = newVal.length;
    //   },
    //   deep: true,
    // },
    // newBlog(newVal) {
    //   // 模擬耗時操作
    //   setTimeout(() => {
    //     this.blogPosts.push(newVal);
    //   }, 2000);
  },
});
app.mount("#app");
