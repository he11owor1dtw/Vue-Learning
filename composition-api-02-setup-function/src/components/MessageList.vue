<template>
  <ul>
    <li v-for="msg in messages" :key="msg.id">{{ msg.content }}</li>
  </ul>
</template>
<script>
export default {
  setup() {
    const messages = [
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ];

    return { messages };
  },
};
</script>
<style scoped>
h2 {
  color: hsl(280deg, 100%, 70%);
  margin-bottom: 24px;
  text-align: center;
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
