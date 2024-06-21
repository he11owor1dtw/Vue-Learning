<template>
  <main>
    <div>
      <p>
        users 模塊 users: <span>{{ users.list }}</span>
      </p>
      <p>
        users 模塊 limitedUserCountStr:
        <span>{{ limitedUserCountStr }}</span>
      </p>
      <button @click="addUser({ user: 'u' + (users.list.length + 1) })">
        添加用戶
      </button>
      <button @click="addUserAsync({ user: 'u' + (users.list.length + 1) })" style="margin-left: 12px">
        添加用戶（異步）
      </button>
      <p>
        blogs 模塊 blogs: <span>{{ blogs.list }}</span>
      </p>
      <p>
        blogs 模塊 limitedBlogCountStr:
        <span>{{ limitedBlogCountStr }}</span>
      </p>
      <button @click="addBlog({ blog: 'blog' + (blogs.list.length + 1) })">
        添加博客
      </button>
    </div>
  </main>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    const store = useStore();
    const users = computed(() => store.state.users);
    const blogs = computed(() => store.state.blogs);

    // useStore 是 Vuex 提供的一個 Composition API，用於在組合式函數中訪問 Vuex 的 Store 實例。
    // store 是 Vuex 的狀態管理實例，包含了應用的所有狀態（state）、獲取器（getters）、突變（mutations）和動作（actions）。

    // computed 是 Vue 3 提供的函數，用於創建響應式的計算屬性，會根據依賴的狀態自動更新。
    // users 和 blogs 是 Vuex state 中的兩個屬性，分別表示用戶列表和博客列表。
    // 通過 computed 包裹後，這兩個屬性會自動響應 Vuex state 的變化，並更新依賴它們的視圖。

    const limitedUserCountStr = computed(() => store.getters.limitedUserCountStr);
    const limitedBlogCountStr = computed(() => store.getters["blogs/limitedBlogCountStr"]);

    // getters 是 Vuex 提供的計算屬性，可以基於 state 派生出一些需要的數據。
    // limitedUserCountStr 和 limitedBlogCountStr 分別是兩個 getters，從 Vuex state 中獲取到派生出的數據。
    // 其中，limitedBlogCountStr 使用了模塊化的 getter 名稱，這意味著它位於一個名為 blogs 的模塊中。

    const addUser = (payload) => store.commit("addUser", payload);
    const addUserAsync = (payload) => store.dispatch("addUserAsync", payload);
    const addBlog = (payload) => store.commit("blogs/addBlog", payload);

    // commit 用於調用 Vuex 的 mutation，直接修改 Vuex state。
    // addUser 和 addBlog 分別調用了 addUser 和 blogs/addBlog 的 mutation，向 state 中添加用戶和博客。
    // dispatch 用於調用 Vuex 的 action，可以執行異步操作。
    // addUserAsync 調用了一個異步 action addUserAsync，可能是用來異步添加用戶的操作。

    return { users, blogs, limitedUserCountStr, limitedBlogCountStr, addUser, addUserAsync, addBlog };

    // 返回一個對象，便於在 Vue 組件中直接使用這些屬性和方法。
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(#212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px);
  background-size: 12px 12px;
  color: white;
}

/* #app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
} */

main {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  margin: 12px 0;
}

p>span {
  color: hsl(280deg, 100%, 80%);
}

button {
  border: none;
  background: linear-gradient(90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%));
  padding: 0.8em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
  margin-bottom: 36px;
  margin-top: 8px;
}
</style>
