// 示例：给 v-bind 和 v-on 設置動態參數
const app = Vue.createApp({
  data() {
    return {
      attr: "placeholder",
      value: "請輸入一些文字",
      event: "change",
    };
  },
  methods: {
    handleChange() {
      console.log("input 變化");
    }
  },
});
app.mount("#app");
