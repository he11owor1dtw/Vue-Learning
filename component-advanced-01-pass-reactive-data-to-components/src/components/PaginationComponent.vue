<template>
  <div>
    <p>當前頁：{{ currentPage }}</p>
    <!-- 透過 v-for 生成對應數量的分頁按鈕 -->
    <button v-for="n in totalPage" @click="changePage(n)">
      {{ n }}
    </button>
  </div>
</template>
<script>
export default {
  // props: ["totalPage", "currentPage"],  // 接收 totalPage 作為屬性
  // methods: {
  //   changePage(n) {          // 錯誤範例
  //     this.currentPage = n;  // Vue 不支持由子元件直接修改父元件傳遞的屬性值，從而保證單向的數據流
  //   }
  // }
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,   // 在子元件中定義新屬性，將預設值設為父元件傳遞來的屬性值，
                                              // 再修改元件自身的屬性
    }
  },
  methods: {
    changePage(n) {
      this.currentPage = n;
    }
  },
};

// 單向數據流
// 父元件屬性變化，子元件自動刷新
// 子元件不能直接修改父元件屬性

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
