import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import { users } from "./data/users";
import { blogs } from "./data/blogs";

const store = createStore({
  state() {
    return {
      users: [],
      blogs: [],
    };
  },

  // mutations 是 Vuex 中的同步方法，用來修改存儲中的狀態
  // state：這是當前存儲的狀態對象。在這裡，它包含了 users 和 blogs 兩個狀態屬性
  // payload：這是一個負載（payload），它攜帶了需要用來修改狀態的數據。在這裡，payload 是一個對象，包含了 users 屬性

  mutations: {
    // loadUsers 方法的作用是將傳入的 payload.users 賦值給 state.users
    loadUsers(state, payload) {
      state.users = payload.users;
    },
    loadBlogs(state, payload) {
      state.blogs = payload.blogs;
    },
  },

  // actions 是 Vuex 中的異步方法，用來執行異步操作（如數據請求），然後在操作完成後調用 mutation 來修改狀態
  // commit 是 Vuex 中用來調用 mutation 的方法。它接收兩個參數：
  // mutation 名稱：這裡是 "loadUsers"，表示我們要調用 loadUsers 這個 mutation
  // payload：這裡是一個對象 { users }，它包含了需要傳遞給 loadUsers mutation 的數據

  actions: {
    async fetchUsers({ commit }) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("loadUsers", { users });
    },
    async fetchUsersAndBlogs({ dispatch, commit }) {
      await dispatch("fetchUsers");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      commit("loadBlogs", { blogs });
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount("#app");
