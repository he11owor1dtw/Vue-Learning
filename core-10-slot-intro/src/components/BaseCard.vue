<template>
  <div class="card">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot>默認內容</slot>   <!-- 直接輸入也可顯示 -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.card {
  border: 1px solid hsl(250deg, 100%, 80%);
  padding: 20px;
  border-radius: 8px;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 12px;
}
</style>
