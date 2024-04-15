// 示例：通過 Vue 實例訪問和修改應用的配置
const app = Vue.createApp({
  data() {
    return {
      msg: "你好！",
      name: "阿強",
    };
  },
  computed: {
    greetings() {
      return `${this.msg} ${this.name}`;
    },
  },
  methods: {
    changeName(name) {
      this.name = name;
    },
  },
  watch: {
    name(newName) {
      console.log("watch 監聽：" + newName);
    },
  },
});
const vm = app.mount("#app");
