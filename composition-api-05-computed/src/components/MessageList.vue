<template>
  <div>
    <input type="text" placeholder="查詢消息" v-model="searchTerm">
    <ul>
      <li v-for="msg in searchedMessages" :key="msg.id">{{ msg.content }}</li>
    </ul>
  </div>
</template>

<!-- 
流程：
1. 用戶在 input 中輸入查詢字詞
2. 該字詞儲存在 searchTerm 中
3. searchedMessages 計算屬性根據 searchTerm 過濾 messages
4. 過濾後的消息列表渲染到 ul 中。
-->

<script>
import { computed, ref } from "vue";

export default {
  setup() {
    // 儲存了多個消息，每個消息都有一個 id & content。
    const messages = ref([
      { id: 1, content: "這是一條消息提醒1" },
      { id: 2, content: "這是一條消息提醒2" },
      { id: 3, content: "這是一條消息提醒3" },
      { id: 4, content: "這是一條消息提醒4" },
    ]);

    // 儲存用戶輸入的查詢字詞，預設為空值
    const searchTerm = ref("");

    const searchedMessages = computed(() => {
      if (searchTerm.value === "") return messages.value;  // searchTerm 為空，返回所有消息。
      return messages.value.filter((msg) => {
        return msg.content.includes(searchTerm.value);
      });
    });

    console.log(searchedMessages.value);

    return { messages, searchTerm, searchedMessages };
  },
};
</script>
<style scoped>
div {
  display: grid;
  place-items: center;
  gap: 24px;
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
