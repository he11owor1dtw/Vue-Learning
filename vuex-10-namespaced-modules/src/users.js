export const users = {
  state() {
    return {
      list: ["u1", "u2", "u3", "u4", "u5"],
    };
  },
  mutations: {
    addUser(state, payload) {
      state.list.push(payload.user);
    },
  },
  actions: {
    addUserAsync({ commit, dispatch, rootState, getters }, payload) {
      setTimeout(() => {
        commit("addUser", payload);
        commit("blogs/addBlog", { blog: "bfromUser" });
        dispatch("blogs/addBlogAsync", { blog: "bfromUser" });
      }, 1000);
    },
  },
  getters: {
    limitedUserCountStr(state, getters, rootState, rootGetters) {
      // return getters.limitedBlogCountStr + "用戶";
      return rootGetters["blogs/limitedBlogCountStr"] + "用戶";
    },
    limitedUsers(state, getters, rootState) {
      return state.list.slice(0, rootState.limit || -1);
    },
  },
};
