import BlogListPage from "./pages/BlogListPage.vue";
import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: BlogListPage,
    name: "blogList",
  },
  {
    path: "/posts",
    // redirect:"/"  // 直接跳轉其他網址就不需設定 component
    redirect: {
      name: "blogList"
    }
  },
  {
    path: "/:postId",
    component: BlogPostPage,
    name: "blogPost",
  }, {
    path: "/posts/:postId",
    // redirect:"/:postId",  // 無法直接跳轉到動態參數網址
    redirect: (to) => {
      return {
        // path: `/${to.params.postId}`,  // 可返回路徑
        name: "blogPost", // 也可返回已命名的 name 屬性
        params: {
          postId: to.params.postId,
        },
      };
    },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
