<template>
  <div>
    <ul>
      <MessageListItem v-for="msg in messages" :key="msg.id" :msg="msg.content"></MessageListItem>
    </ul>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";
import MessageListItem from "./MessageListItem.vue";

export default {
  components: { MessageListItem },
  setup(props, { attrs }) {
    const messages = ref([
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ]);

    // console.log(attrs);  // 取出的為 proxy，是一響應性對象
    // console.log(attrs.class);  // 直接取值
    // console.log(attrs["data-title"]);  // 直接取值

    const { test } = attrs;

    watchEffect(() => {
      console.log(test, "in MessageList.vue");
    })

    return { messages };
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
