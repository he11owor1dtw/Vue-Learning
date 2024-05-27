// import BlogListPage from "./pages/BlogListPage.vue";
// import BlogPostPage from "./pages/BlogPostPage.vue";

import { createRouter, createWebHistory } from "vue-router";

// 把元件使用 import 函數異步導入，再放到一個函數中，形成懶加載
const BlogListPage = () => import("./pages/BlogListPage.vue");
const BlogPostPage = () => import("./pages/BlogPostPage.vue");

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
});

export default router;
