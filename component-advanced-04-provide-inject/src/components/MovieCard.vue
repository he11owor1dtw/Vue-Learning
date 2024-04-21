<template>
  <div class="card">
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  data() {
    return {
      movie: {
        title: "電影",
        description: "這是一段電影的描述",
      },
    };
  },
  // provide/inject 解決資料多層傳遞的問題
  provide() {   // 須定義為一個函數，像 data 一樣
    return { title: this.movie.title };  // 非響應式的呈現 data 數據
  },
};
</script>
<style scoped>
.card {
  padding: 12px;
  border: 1px solid hsl(240deg, 100%, 80%);
  border-radius: 4px;
}
</style>
