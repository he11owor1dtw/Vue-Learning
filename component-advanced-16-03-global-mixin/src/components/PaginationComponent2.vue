<template>
  <div>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
    <p>當前頁：{{ currentPage }}</p>
    <p v-if="showTotal">總計：{{ totalPage }}</p>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  mixins: [PaginationMixin],
  props: ["showTotal"], // 會和其它 props 合併
  data() {
    return {
      currentPage: 1,
    };
  },
  mounted() {
    console.log("執行 PaginationComponent2 中的 mounted 方法");
  },
};
</script>
<style scoped>
div {
  padding: 24px 0;
}

p {
  margin-top: 12px;
}

a {
  color: hsl(280deg, 100%, 80%);
  width: 24px;
  display: inline-block;
  text-decoration: underline;
  cursor: pointer;
}
</style>
