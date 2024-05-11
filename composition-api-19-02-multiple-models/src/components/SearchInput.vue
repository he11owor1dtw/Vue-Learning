<template>
  <label><span>搜索：</span><input type="text" v-model="searchModel" /> </label>
  <label>
    <span>類別：</span>
    <select v-model="categoryModel">
      <option value="default">預設</option>
      <option value="fontend">前端</option>
      <option value="backend">後端</option>
      <option value="fullstack">全端</option>
    </select>
  </label>
</template>

<script setup>
const searchModel = defineModel("searchModel");
const categoryModel = defineModel("categoryModel");
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 20px;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

select {
  border: 1px solid hsl(280deg, 50%, 50%);
  background: none;
  color: rgb(255, 255, 255);
  padding: 6px;
  border-radius: 4px;
  background-color: #392e2e;
}
</style>
