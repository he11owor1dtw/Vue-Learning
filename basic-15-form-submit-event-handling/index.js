// 示例：表单事件处理
const app = Vue.createApp({
  data() {
    return {
      username: "",
      gender: "",
      interests: [],
      occupation: "",
      intro: "",
    };
  },
  methods: {
    handleSubmit(e) {
      // e.preventDefault();  // 倘若在前端設置了 prevent 事件修飾符就不需要了
      console.log(
        this.username,
        this.gender,
        this.interests,
        this.occupation,
        this.intro,
      );
    }
  }
});
app.mount("#app");
