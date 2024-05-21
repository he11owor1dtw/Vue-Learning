<template>
  <main>
    <div className="blogPosts">
      <!-- 通過 v-for 指令遍歷 blogPosts 陣列，並為每個 blog 文章創建一個 article 元素。
        每個 article 的 key 屬性設置為 blogPost.id 來確保元素的唯一性 -->
      <article v-for="blogPost in blogPosts" :key="blogPost.id">
        <h2>
          <!-- ES6 的模板字符串（Template Literal），用來構建字符串 -->
          <!-- 假設 blogPost.id 是 123，那麼這個模板字符串的結果就是 "/123" -->
          <router-link :to="`/${blogPost.id}`">{{
            blogPost.title
          }}</router-link>
        </h2>
        <p>{{ blogPost.body.substring(0, 100) + "..." }}</p>
        <!-- 使用 substring(0, 100) 來節錄前 100 個字符，並在結尾添加省略號 -->
      </article>
    </div>
  </main>
</template>
<script>
import { getAllPosts } from "../data/blogPosts";

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  created() {
    this.blogPosts = getAllPosts();
  },
};
</script>
<style scoped>
.blogPosts {
  max-width: 600px;
  display: grid;
  row-gap: 48px;
}
</style>
