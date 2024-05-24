import AddBlog from "./pages/AddBlog.vue";
import BlogDetails from "./pages/BlogDetails.vue";
import BlogManagement from "./pages/BlogManagement.vue";
import RightSidebar from "./pages/RightSidebar.vue";
import LoginPage from "./pages/LoginPage.vue";
import HomePage from "./pages/HomePage.vue";

import { createRouter, createWebHistory } from "vue-router";

const loggedIn = true;

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/blogs",
    component: BlogManagement,
    // beforeEnter 對子路由也會生效，也可設置為陣列
    beforeEnter: [authBlogsPage],
    children: [
      {
        path: "new",
        components: {
          default: AddBlog,
          rightSideBar: RightSidebar,
        },
      },
      {
        path: "details/:postId",
        component: BlogDetails,
        // 同路徑下，因為使用動態參數，只會執行一次 console.log
        beforeEnter(to, from) {
          console.log(to);
          console.log(from);
        }
      },
    ],
  },
];

function authBlogsPage(to, from) {
  if (!loggedIn) {
    return "/login";
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
