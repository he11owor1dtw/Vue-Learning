import { createStore, createLogger } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

import { blogs } from "./modules/blogs";
import { users } from "./modules/users";

// 或者使用默認導出也可以
export const store = createStore({
  plugins: [
    createLogger({
      collapsed: false,  // console.log 內容全部展開
      // logActions: false,  // 不顯示 actions 的內容
      // logMutations: false,  // 不顯示 mutations 的內容

      // 過濾 mutation
      // filter(mutation, stateBefore, stateAfter) {
      //   return mutation.type === "addUser";
      // },

      // 過濾 action
      // actionFilter(action, state) {
      //   return action.type === "addUserAsync";
      // },

      // 只關注 Users 下的 list state 的變化
      // transformer(state){
      //   return state.users.list;
      // }
      
      // 控制 log 格式
      // mutationTransformer(mutation) {
      //   return `觸發了 ${mutation.type}，payload 為 ${JSON.stringify(
      //     mutation.payload
      //   )}`;
      // },

      // actionTransformer(action) {
      //   return `觸發了 ${action.type}，payload 為 ${JSON.stringify(
      //     action.payload
      //   )}`;
      // },

      // details，例如觸發的 action、mutation 等信息和狀態的變化
      // logger: {
      //   log: (log, styles, details) => console.error(log, styles, details), 
      // },
    })],
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
