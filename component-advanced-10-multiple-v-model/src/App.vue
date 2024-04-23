<template>
  <main>
    <div>
      <!-- v-model 後面的參數必須和子元件接收的屬性名相同，例如 searchTerm -->
      <SearchInput 
      v-model:searchTerm="searchTerm" 
      v-model:category="category" 
      />
      <hr>
      <p>查詢字：{{ searchTerm }}</p>
      <p>類別：{{ category }}</p>
    </div>
  </main>
</template>

<script>
import SearchInput from "./components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
  data() {
    return {
      // 名字無需和 SearchInput 中的屬性名相同
      searchTerm: "",
      category: "default",
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(#212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px);
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  margin-top: 12px;
  color: hsl(50deg, 100%, 80%);
}
</style>
