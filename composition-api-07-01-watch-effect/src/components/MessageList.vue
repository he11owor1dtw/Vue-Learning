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
    <button @click="options.title = '這是標題'">修改標題</button>
    <button @click="options.user.name = '李四'">修改用戶</button>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";

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

    // watchEffect(()=>{})用來監聽，且不用傳入欲監聽參數，只要在 {} 中直接使用參數值，就會自動監聽
    watchEffect(() => {
      console.log(options.value.title);
      console.log(options.value.user.name);
    })

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
