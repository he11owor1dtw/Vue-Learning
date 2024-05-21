import BlogPostPage from "./pages/BlogPostPage.vue";
import UserDetailsPage from "./pages/UserDetailsPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/:id",
    name: "post",
    component: BlogPostPage,
  },
  {
    path: "/:id",
    name: "userDetails",
    component: UserDetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
