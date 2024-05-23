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
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details",
        component: BlogDetails,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const loggedIn = true;

// beforeEach 通常用於驗證權限時
router.beforeEach((to, from) => {
  // console.log(from);
  // console.log(to);

  // 確保必須登入狀態下才能進入網址以 /blogs 開頭的頁面
  if (to.path.startsWith("/blogs")) {
    if (!loggedIn) {
      return "/login";
    };

    // 若只返回 false，會無法跳轉
    // return false; 

    // 也可直接返回對象
    // return {
    //   name: "login",
    // };
  };
});

// 在 beforeEach 後，但在頁面跳轉前執行
router.beforeResolve((to) => {
  if (to.path.startsWith("/blogs")) {
    console.log("用戶已登入");
  };
});

// 頁面跳轉後執行，可操作 dom 或 api
router.afterEach(to => {
  document.title = to.path; // 更改網站標題
})

export default router;
