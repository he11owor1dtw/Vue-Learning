<template>
  <div>
    <h2>{{ options.title }}</h2>
    <p>用戶名：{{ options.user.name }} , 活躍：{{ options.user.active ? "是" : "否" }}</p>
    <ul>
      <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
    </ul>
    <button @click="messages = []">刪除全部</button>
    <button @click="options.title = '這是修改後標題'">修改標題</button>
    <button @click="options.user.name = '李四'">修改用戶</button>
    <!-- reactive 會直接返回響應性數據，不用透過 .value -->
    <!-- 但 reactive 只支持 object / array 的數據-->
    <!-- 一般情況下使用 ref，在底層也會調用 reactive 函數 -->
  </div>
</template>
<script>
import { ref, reactive } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ]);

    const options = reactive({
      title: "消息列表標題",
      user: {
        name: "張三",
        active: "true",
      },
    });

    console.log(messages.value);

    return { messages, options };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
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
