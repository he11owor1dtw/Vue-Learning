import { createStore, createLogger } from "vuex";
import actions from "./actions";
import getters from "./getters";

import { blogs } from "./modules/blogs";
import { users } from "./modules/users";
import mutations from "./mutations";

// 或者使用默認導出也可以
export const store = createStore({
  plugins: [createLogger()],
  modules: {
    users,
    blogs,
  },
  state() {
    return {
      limit: 0,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});
