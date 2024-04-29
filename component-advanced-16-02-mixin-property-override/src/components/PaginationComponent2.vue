<template>
  <div>
    <p>當前頁：{{ currentPage }}</p>
    <a v-for="n in totalPage" @click.prevent="changePage(n)">
      {{ n }}
    </a>
    <p v-if="showTotal">總計：{{ totalPage }}</p>
  </div>
</template>
<script>
import PaginationMixin from "../mixins/PaginationMixin";

export default {
  mixins: [PaginationMixin],
  props: ["showTotal"],
  data() {
    return {
      currentPage: 1,  // 元件中的會覆蓋 mixin 的
    }
  },
  mounted(){
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
