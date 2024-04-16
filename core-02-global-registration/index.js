// 示例：全局註冊組件
const app = Vue.createApp({});

app.component("WordCount", {
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
  template: `
    <div>
      <input v-model="content" />
      <p>你共輸入了 {{ count }} 個文字</p>
    </div>
  `,
});

app.component("WordCountApp", {
  template: `
  <div>
    <h1>字數統計應用</h1>
    <WordCount />
  </div>
  `,
});

const vm = app.mount("#app");
