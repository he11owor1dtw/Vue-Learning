// 示例：局部註冊組件
import ComponentA from "./components/ComponentA.js";
import ComponentC from "./components/ComponentC.js";

const app = Vue.createApp({
  components: {
    ComponentA, ComponentC,
  },
});
const vm = app.mount("#app");
