<template>
  <li>
    {{ msg }} <button @click="$emit('remove', id)">删除</button>
  </li>
</template>
<script setup>
import { ref, watch, watchEffect, toRefs } from "vue";

// 於 <script> 內增加 setup 並利用 defineProps, defineEmits 以簡化代碼
defineProps(["msg", "id"]);
defineEmits(["remove"]);

// export default {
//   props: ["msg", "id"],
//   emits: ["remove"],
//   setup(props) {
//     return {};
//   },
// };

</script>
<style scoped>
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
