<template>
  <div class="card">
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import MovieItem from "./MovieItem.vue";
import { ref, provide, toRef } from "vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = ref({
      title: "電影",
      description: "這是一段電影的描述",
    });

    // provide("movie", movie);

    // provide("title", movie.value.title);
    // 由於 movie 內 title 屬性為字串，非響應性，使用 toRef() 轉換為響應性
    provide("title", toRef(movie.value, "title"));  

    setTimeout(() => {
      movie.value.title = "修改後的標題"
    }, 1500);

    return { movie };
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
