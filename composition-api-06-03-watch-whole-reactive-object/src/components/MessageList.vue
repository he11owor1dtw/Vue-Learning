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

    // without deep
    // 比較的是引用，所以不會生效，陣列也是一樣
    // watch(
    //   () => options.value,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal);
    //   }
    // );

    // with deep true，可以比對對象的屬性
    watch(
      () => options.value,
      (newVal, oldVal) => {
        console.log(newVal, oldVal, newVal === oldVal); // 相同的引用
      },
      { deep: true }  // 如果希望當物件內任一屬性改變，都會觸發 watch 回呼函式，需開啟深度監視 { deep:true }。
    );                // 加上 { deep: true } 之後，無論換掉物件內的屬性，還是一整個物件重新賦值，
                      // watch 都能監測到，並且觸發回呼函式。

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
