<template>
  <div>
    <button @click="sortByKey('content','desc')">排序</button>  <!-- 根據內容降序排列 -->
    <ul>
      <MessageListItem v-for="msg in messages" :key="msg.id" :id="msg.id" :msg="msg.content" @remove="removeMessage">
      </MessageListItem>
    </ul>
  </div>
</template>
<script>
import { ref, watch, watchEffect } from "vue";
import useListData from "./composables/useListData";
import MessageListItem from "./MessageListItem.vue";

export default {
  components: { MessageListItem },
  setup(props) {
    const { data: messages, removeItem: removeMessage, sortByKey, } = useListData(
      [
        { id: 1, content: "這是一條消息提醒1" },
        { id: 2, content: "這是一條消息提醒2" },
        { id: 3, content: "這是一條消息提醒3" },
        { id: 4, content: "這是一條消息提醒4" },
      ]);
    return { messages, removeMessage, sortByKey };
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
