// 示例：如何創建組件/元件 Component
const app = Vue.createApp({});

app.component("WordCount", {
  template: `
            <div>
            <input v-model="content"/>
            <p>你輸入了 {{ count }} 個字</p>
            </div>
            `,
  data() {
    return {
      content: "",
    };
  },
  computed: {
    count() {
      return this.content.length;
    },
  },
});

const vm = app.mount("#app");
