<template>
  <div class="addNote">
    <h2>添加新筆記</h2>
    <form @submit.prevent>
      <input type="text" placeholder="請輸入筆記標題" />
      <textarea rows="6" placeholder="請輸入筆記內容"></textarea>
      <button type="submit">添加筆記</button>
    </form>
  </div>
</template>
<script setup></script>
<style scoped>
.addNote {
  width: 100%;
  border-top: 1px solid hsl(0, 0%, 95%);
  padding-top: 24px;
}

.addNote h2 {
  margin-bottom: 12px;
}

.addNote form {
  display: grid;
  gap: 24px;
}
</style>
