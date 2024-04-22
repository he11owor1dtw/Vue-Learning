<template>
  <p>這是 Scoped Style 元件中的內容，這裡定義的樣式只在元件內有效</p>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  background-color: hsl(260deg, 100%, 60%, 0.7);
  padding: 1em;
  border-radius: 4px;
}
</style>
