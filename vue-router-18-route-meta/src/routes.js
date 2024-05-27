import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/blogs",
    component: BlogManagement,
    meta: { private: true },
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
        // meta: { private2: true },
      },
      {
        path: "details",
        component: BlogDetails,
        // meta: { private: false }, 
        // 若子路由設置 false，後的會蓋前的，正常情況下，直接設置父路由為 true 即可，其底下的子路由皆會為 true
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = false;

router.beforeEach((to, from) => {
  // console.log(to);

  // 嘗試訪問某些設置了 meta 標籤為 private 的路由時，
  // 如果用戶尚未登錄（loggedIn 為 false），將用戶重定向到登錄頁面
  // if (to.matched.some(record => record.meta.private) && !loggedIn) {
  //   return "/login";
  // }
  
  // to 是一個目標路由對象，表示即將要進入的路由
  // matched 是一個數組，包含了目標路由匹配到的所有路由記錄（路由記錄包括嵌套路由）

  // some 是 JavaScript 數組方法，用於測試數組中的至少一個元素是否通過了由提供的函數實現的測試
  // 這裡的測試函數是 record => record.meta.private，
  // 它會檢查每一個路由記錄 (record) 的 meta 屬性中是否包含 private 並且其值為 true
  // 如果 to.matched 中至少有一個路由記錄的 meta.private 為 true，則 some 方法返回 true

  // && 是邏輯與運算符，表示兩個條件都必須為真，整個表達式才會為真

  // 上方代碼可直接簡寫成判斷 meta 屬性是否為 private，如下
  if (to.meta.private && !loggedIn) {
    return "/login";
  }

});

export default router;
