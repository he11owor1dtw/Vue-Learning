<template>
  <button @click="onclick('點擊了按鈕')">按鈕</button>
</template>
<script>
export default {
  props: ["onclick"],  // 值為一個事件處理函數
};
</script>
<style scoped>
button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
}
</style>
