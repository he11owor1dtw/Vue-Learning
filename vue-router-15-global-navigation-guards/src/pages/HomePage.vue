<template>
  <nav class="globalNav">
    <router-link to="/login">登入</router-link>
    <router-link to="/blogs">博客管理</router-link>
  </nav>
</template>
<style scoped>
.globalNav {
  height: 200px;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
}
</style>
