<template>
  <div>
    <p>當前頁：{{ currentPage }}</p>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
  </div>
</template>
<script>
export default {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
};
</script>
<style scoped></style>
