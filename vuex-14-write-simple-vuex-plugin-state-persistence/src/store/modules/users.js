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
    addUserAsync({ commit, dispatch, rootState, ...rest }, payload) {
      setTimeout(() => {
        commit("addUser", payload);
        commit("blogs/addBlog", { blog: "bfromUser" });
        dispatch("blogs/addBlogAsync", { blog: "bfromUserAsync" });
      }, 1000);
    },
  },
  getters: {
    limitedUserCountStr(state, getters, rootState, rootGetters) {
      return rootGetters["blogs/limitedBlogCountStr"] + "用户";
    },
    limitedUsers(state, getters, rootState) {
      return state.list.slice(0, rootState.limit || -1);
    },
  },
};
