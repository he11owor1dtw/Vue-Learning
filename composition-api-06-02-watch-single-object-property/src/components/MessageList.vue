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
import { ref, reactive, computed, watch } from "vue";

export default {
  setup() {
    const messages = ref([
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ]);

    const options = ref({
 // const options = reactive({
      title: "消息列表",
      user: {
        name: "張三",
        active: true,
      },
    });

    // 監聽淺層 Object 屬性
    watch(() => options.value.title, (newVal, oldVal) => {
      // () => options.title, 如果是監聽 reactive(), 不用寫.value
      console.log(newVal, oldVal);
    });

    // 監聽深層 Object 屬性
    watch(() => options.value.user.name, (newVal, oldVal) => {
      // () => options.user.name, 如果是監聽 reactive(), 不用寫.value
      console.log(newVal, oldVal);
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
