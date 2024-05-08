<template>
  <div class="card">
    <MovieItem :description="movie.description" />
  </div>
</template>
<script>
import { provide } from "vue";
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  setup() {
    const movie = {
      title: "電影",
      description: "這是一段電影的描述",
    };

    provide("title",movie.title);

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
