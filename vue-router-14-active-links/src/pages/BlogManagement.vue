<template>
  <div class="container">
    <aside class="leftSideBar">
      <h2>博客管理</h2>
      <nav>
        <router-link to="/blogs">管理首頁</router-link>
        <router-link to="/blogs/new">添加博客</router-link>
        <router-link to="/blogs/details">博客詳情</router-link>
      </nav>
    </aside>
    <main class="content">
      <router-view></router-view>
      <router-view name="rightSideBar"></router-view>
    </main>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
}

.leftSideBar {
  padding: 48px;
  border-right: 1px solid hsl(280deg, 50%, 50%);
}

.leftSideBar nav {
  margin-top: 48px;
  display: grid;
  gap: 24px;
  justify-content: center;
}

.content {
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: start;

}

/* 如果有同樣 url = /blogs，會導致高亮狀態錯誤同步顯示，需使用 router-link-exact-active */
.router-link-exact-active {
/* .router-link-active { */
  position: relative;
  color: hsl(280deg, 100%, 90%);
}

.router-link-exact-active::before {
  /* .router-link-active::before { */
  content: "";
  position: absolute;
  width: 3px;
  height: 100%;
  background: hsl(280deg, 100%, 70%);
  left: -14px;
}
</style>
