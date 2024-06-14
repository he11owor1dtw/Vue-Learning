import { blogs } from "./modules/blogs";
import { users } from "./modules/users";

import { createLogger, createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters"

const store = createStore({
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
  mutations,
  actions,
  getters,
});

export default store;
