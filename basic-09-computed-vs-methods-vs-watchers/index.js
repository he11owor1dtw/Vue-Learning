const app = Vue.createApp({
  data() {
    return {
      blogPosts: [
        "Vue 3.0x 入門實戰",
        "Vue 3.x 完全指南",
        "Vue 3.x 全局攻略",
        "React 18 新特性介紹",
        "JavaScript 基礎語法概覽",
      ],
      counter:0,  // 計算屬性和方法的區別
    };
  },
  computed: {
    vueBlogs() {
      console.log("調用了 vueBlogs 計算屬性函數");
      return this.blogPosts.filter((blog) => blog.includes("Vue")).slice(0,count);
    }
  },
  methods: {
    getVueBlogs(count) {
      console.log("調用了 vueBlogs 方法");
      return this.blogPosts.filter((blog) => blog.includes("Vue")).slice(0,count);
    }
  }
});
app.mount("#app");
