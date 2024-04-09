// 示例：在 inline-style 行內樣式中綁定 data 數據
const app = Vue.createApp({
  data() {
    return {
      fontSize: 16,
    }
  },
  computed: {
    pStyle() {
      return {
        color: "white",
        fontSize: this.fontSize + "px",
      }
    }
  }
});
app.mount("#app");
