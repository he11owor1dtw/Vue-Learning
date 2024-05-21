import PrintRoute from "./pages/PrintRoute.vue";

import { createRouter, createWebHistory } from "vue-router";

// 請一個一個嘗試，註釋掉其它路徑
const routes = [
  // {
  //   path: "/users/:userId/posts/:postId",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:categories+",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:categories*",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:categories?",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/posts/:title([a-zA-Z0-9-]+)",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:notFound(.*)*",
  //   component: PrintRoute,
  // },
  // 優先級  // 先定義的先匹配
  // {
  //   path: "/:postId",
  //   component: PrintRoute,
  // },
  // {
  //   path: "/:userId",
  //   component: PrintRoute,
  // },
];

// https://paths.esm.dev 匹配度優先級查詢網站

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
