<template>
  <article>
    <h2>{{ blog.title }}</h2>
    <p>{{ blog.body }}</p>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";
export default {
  data() {
    return {
      blog: {},
    };
  },

  // 元件創建前執行，不能直接訪問 this，但可以通過 next 來訪問
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      setTimeout(() => {
        vm.blog = getBlogPostById(to.params.postId)
      }, 1000);
    });
  },

  // 動態參數發生變化、元件被覆用時調用
  beforeRouteUpdate(to) {
    this.blog = {};
    setTimeout(() => {
      this.blog = getBlogPostById(to.params.postId)
    }, 1000);
  },
};
</script>
<style scoped>
article {
  padding: 48px;
}
</style>
