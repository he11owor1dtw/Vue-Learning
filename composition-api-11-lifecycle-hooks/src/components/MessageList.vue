<template>
  <div>
    <div v-if="loading">讀取中</div>
    <ul v-else>
      <MessageListItem v-for="msg in messages" :key="msg.id" :msg="msg.content"></MessageListItem>
    </ul>
  </div>
</template>
<script>
import { ref, watch, watchEffect, onMounted } from "vue";
import MessageListItem from "./MessageListItem.vue";

export default {
  components: { MessageListItem },
  setup(props) {
    const loading = ref(false);
    onMounted(() => {
      loading.value = true;
      setTimeout(() => {
        messages.value = [
          { id: 1, content: "這是一條消息提醒1" },
          { id: 2, content: "這是一條消息提醒2" },
          { id: 3, content: "這是一條消息提醒3" },
          { id: 4, content: "這是一條消息提醒4" },];
        loading.value = false;
      }, 2000)
    })
    const messages = ref([
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ]);
    return { messages,loading };
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
