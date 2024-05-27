import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
  },
  {
    path: "/:postId",
    component: BlogPostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 控制頁面跳轉時頁面的定位
  scrollBehavior(to, from, savePosition) {
    // return {
    //   top: 100,  // 單位為 px
    //   // left:0,
    //   behavior: "smooth"  // 平滑滾動
    // };

    // 一秒後發生滾動
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve({
    //       top: -60,
    //       behavior: "smooth",
    //       el:"#app", // 可設置抓取 DOM 元素
    //     });
    //   }, 1000)
    // })

    // 記憶上次滑動的位置，但僅生效於上一頁/下一頁
    console.log(savePosition);
    if (savePosition) {
      return savePosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
