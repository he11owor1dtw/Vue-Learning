<template>
  <div class="container">
    <p>Hi 你好！這是關於我</p>
    <p>更多詳情查看：</p>
    <nav>
      <router-link to="/about/work">工作經歷</router-link>
      <router-link to="/about/education">教育經歷</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { RouterView } from 'vue-router';

export default {};
</script>
<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  padding: 24px;

  background-color: hsl(280deg, 50%, 20%);
}

p {
  margin: 12px 0;
}

nav {
  padding-top: 16px;
}
</style>
