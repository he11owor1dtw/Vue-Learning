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
      title: "消息列表",
      user: {
        name: "張三",
        active: true,
      },
    });

    // 箭頭函數返回的是一個淺拷貝（spread operator {...}）options.value 的值
    // 這樣做的目的是在監視 options.value 的整體變化時，也能監視其子屬性或嵌套對象的變化
    // 淺拷貝只會複製頂層屬性，把引用傳遞給新的對象，因此 consol.log 中看不到點擊修改用戶後的結果
    watch(() => ({ ...options.value }), (newVal, oldVal) => {
      console.log(newVal, oldVal);
    });

    // 此為監視 options.value 的深度拷貝
    // JSON.parse(JSON.stringify(options.value))：這是一種常用的方法來對對象進行深度拷貝
    // 首先將對象 options.value 轉換為 JSON 字符串，然後再將 JSON 字符串解析回對象
    // 這種方法可以創建一個新的對象，確保這個對象與 options.value 沒有引用關係
    watch(() => JSON.parse(JSON.stringify(options.value)), (newVal, oldVal) => {
      console.log(newVal, oldVal, newVal === oldVal);
    });

    // 上方代碼使用 Vue 3 的 composition API 監視 options.value 數據的變化，並在其發生變化時記錄新的值和舊的值
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
