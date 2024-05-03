<template>
  <div>
    <h2>{{ options.title }}</h2>
    <p>
      用戶：{{ options.user.name }}，活躍：{{
        options.user.active ? "是" : "否"
      }}
    </p>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="options.title = '這是標題' + Math.random()">修改標題</button>
    <button @click="options.user.name = '李四'">修改用戶</button>
  </div>
</template>
<script>
import { ref, watch, watchEffect } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ]);

    const options = ref({
      title: "消息列表",
      user: {
        name: "張三",
        active: true,
      },
    });

    // onInvalidate() 會在「下次監聽代碼執行前」執行回呼函數，非「本次代碼執行完後」

    watchEffect((onInvalidate) => {
      console.log(options.value.title);
      console.log(options.value.user.name);

      onInvalidate(() => {
        console.log("做清理操作 watchEffect");
      })
    });

    // watch(() => options.value.title, (newVal, oldVal, onInvalidate) => {
    //   console.log(newVal, oldVal);
    //   onInvalidate(() => {
    //     console.log("做清理操作 watch");
    //   });
    // });

    // watch() 點擊修改按鈕時不會先執行監聽代碼，需要在下一次變化才會執行 console.log("做清理操作 watch")

    return { messages, options };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 24px;
}

h2 {
  color: hsl(280deg, 50%, 70%);
}

p {
  margin: 12px 0 24px 0;
}

ul {
  list-style: none;
  display: grid;
  gap: 24px;
}

li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
