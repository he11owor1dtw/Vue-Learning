<template>
  <div>
    <a :href="link">{{ title }}</a>
    <button @click="$emit('deletePost', id)">刪除</button>  <!-- $emit 傳遞回子組件 -->
  </div>
</template>
<script>
export default {
  props: ["id", "link", "title"],
  emits: ["deletePost"],
};
</script>
<style scoped>
div {
  margin-bottom: 1em;
}

button {
  border: none;
  background: linear-gradient(90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%));
  padding: 3px 4px;
  margin-left: 12px;
  border-radius: 4px;
  color: white;
}
</style>
