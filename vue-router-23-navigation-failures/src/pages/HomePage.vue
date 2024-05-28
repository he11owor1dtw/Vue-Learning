<template>
  <nav class="globalNav">
    <router-link to="/login">登入</router-link>
    <button @click="redirectToManagementPage">博客管理</button>
  </nav>
</template>
<script>
import { NavigationFailureType, isNavigationFailure } from 'vue-router';

export default {
  methods: {
    async redirectToManagementPage() {
      // // 1. aborted 類型的錯誤
      // const failure = await this.$router.push("/blogs");
      // console.log(failure);
      // // Error: Navigation aborted from "/" to "/blogs" via a navigation guard.
      // console.log(isNavigationFailure(failure));
      // // true
      // console.log(isNavigationFailure(failure, NavigationFailureType.aborted));
      // // true
      // console.log(failure.to, failure.from);

      // alert("請先登入");
      // // 實際開發中，可以用一個彈窗提示

      // 2. canceled 類型的錯誤
      // new Promise(async (resolve) => {
      //   const failure = await this.$router.push("/blogs");
      //   console.log(failure);
      //   console.log(
      //     isNavigationFailure(failure, NavigationFailureType.cancelled)
      //   );
      //   // true
      //   resolve();
      // });
      // this.$router.push("/login");

      // 3. duplicated 類型的錯誤
      // const failure = await this.$router.push("/");
      // console.log(failure);
      // console.log(
      //   isNavigationFailure(failure, NavigationFailureType.duplicated)
      // );

      // 4. redirect
      // 無需保存為 failure，因為重定向不是錯誤
      await this.$router.push("/blogs");
      console.log(this.$router.currentRoute.value);
    },
  },
};
</script>
<style scoped>
.globalNav {
  height: 200px;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
}
</style>
