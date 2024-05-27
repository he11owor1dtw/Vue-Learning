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
    props: true,

    // 可設置一個對象
    // props: {
    //   postId: 5,  // 可直接給定一個動態參數
    // },

    // 可傳遞函數
    props: route => {
      console.log(route);
      return {
        postId: Number(route.params.postId),
      };
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
