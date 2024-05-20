import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";

import { createRouter, createWebHistory } from "vue-router";
// 導入 Vue Router 模塊:
// createRouter 是用來創建路由實例的函數
// createWebHistory 是用來創建 HTML5 History 模式的路由歷史記錄

const routes = [
  {
    path: "/",
    component: PageOne,
  },
  {
    path: "/2",
    component: PageTwo,
  },
  {
    path: "/3",
    component: PageThree,
  },
];
// path: 指定 URL 路徑。例如，"/" 對應根路徑，"/2" 和 "/3" 分別對應 PageTwo 和 PageThree
// component: 指定在這個路徑下應該渲染的 Vue 組件

const router = createRouter({
  history: createWebHistory(),
  routes, // routes:routes 直接簡寫
});
// createRouter 函數: 用於創建路由器實例，並傳入一個配置對象
// history:
// 使用 createWebHistory() 創建 HTML5 History 模式的路由歷史記錄
// 這種模式利用瀏覽器的 history.pushState API 來完成 URL 跳轉而無需頁面重新加載
// routes:
// 這是之前定義的路由數組，配置路由器應用的所有路由

export default router;
// 導出以便在 App.vue 使用