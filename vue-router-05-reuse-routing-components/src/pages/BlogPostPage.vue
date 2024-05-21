<template>
  <article>
    <h2>
      {{ blogPost.title }}
    </h2>
    <p>{{ blogPost.body }}</p>
    <footer>
      <router-link to="/">回到主頁</router-link>
      <router-link :to="`/${blogPost.id - 1}`">上一篇</router-link>
      <router-link :to="`/${blogPost.id + 1}`">下一篇</router-link>
    </footer>
  </article>
</template>
<script>
import { getBlogPostById } from "../data/blogPosts";

export default {
  data() {
    return { blogPost: {} };
  },
  created() {
    this.blogPost = getBlogPostById(this.$route.params.postId);
  },
  // 元件創建完成後立即調用此鉤子，從路由參數中獲取當前文章 ID
  // 並調用 getBlogPostById 方法獲取相應的文章數據。
  watch: {
    "$route.params": {
      handler(params, oldParams) {
        this.blogPost = getBlogPostById(params.postId);
      },
      immediate: true,
    }
  },
  // watch 選項：監視 $route.params 的變化，當路由參數變化時（例如用戶導航到不同的文章），調用處理函數重新獲取文章數據
  // handler(params, oldParams)：處理函數，當路由參數變化時，調用 getBlogPostById 方法更新 blogPost 數據
  // immediate: true：表示立即觸發處理函數，以確保組件初始化時立即獲取並顯示正確的文章數據
};
</script>
<style scoped>
article {
  max-width: 700px;
}

footer {
  margin-top: 48px;
  display: flex;
  gap: 24px;
}

footer a {
  background: linear-gradient(90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%));
  padding: 0.9em 1.4em;
  border-radius: 4px;
  color: white;
}
</style>
