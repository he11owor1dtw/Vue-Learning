import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";

const store = createStore({
  state() { // state 方法可視為 data 方法
    return {
      color: [100, 100, 100], // RGB 三個顏色的值
    };
  },
  mutations: {
    randomColor(state) {
      state.color = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
      ];
    },
  },
});

const app = createApp(App);
app.mount("#app");
app.use(store);