<template>
  <div class="card">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot></slot>  <!-- 未命名插槽，默認屬性為 #default -->
    </div>
  </div>
</template>
<script>
export default {};
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
