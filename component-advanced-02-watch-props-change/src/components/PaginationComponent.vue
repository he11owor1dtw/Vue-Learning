<template>
  <div>
    <p>當前頁：{{ currentPage }}</p>
    <button v-for="n in totalPage" @click="currentPage = n">
      {{ n }}
    </button>
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
  watch: {                         // 監聽對象必須為響應式的(於 data 中定義的)，靜態的不行
    totalPage(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.currentPage = 1;        // 當點擊增加頁數按鈕時，將當前頁顯示為 1
    }
  }
};
</script>
<style scoped>
input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
  margin-top: 1em;
}

/* button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 1em 2em;
  margin-top: 24px;
  margin-right: 12px;
  border-radius: 4px;
  color: white;
} */

/* div {
  border-radius: 4px;
  border: 1px solid hsl(280deg, 100%, 50%);
  background-color: hsl(280deg, 40%, 50%, 0.2);
  padding: 2em;
  width: 100%;
  position: relative;
}

button {
  border: none;
  background: none;
  font-size: 18px;
  position: absolute;
  right: 18px;
  top: 12px;
  color: white;
} */
</style>
