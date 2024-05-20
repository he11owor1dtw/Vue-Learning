<!-- 
  這個設置允許在不同組件之間進行客戶端導航而不需要整頁重載。
  當點擊導航連結時，URL 會更新，並且根據新的 URL 路徑動態渲染對應的元件。
  這種方法使用 Vue 的基本響應式功能模擬了單頁應用（SPA）的行為。 
-->
<template>
  <nav>
    <a v-for="(route, path) in routes" :href="path" @click.prevent="changeRoute(path)">
      {{ route.label }}
    </a>
  </nav>
  <component :is="currentPage" />
</template>

<script setup>
import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageThree from "./components/PageThree.vue";
import { ref, computed } from "vue";

const routes = {
  "/": {
    component: PageOne,
    label: "頁面1",
  },
  "/2": {
    component: PageTwo,
    label: "頁面2",
  },
  "/3": {
    component: PageThree,
    label: "頁面3",
  },
};

const currentPath = ref(location.pathname);
const currentPage = computed(() =>
  routes[currentPath.value].component || PageOne
);
// currentPage 是一個計算屬性，返回基於當前路徑要渲染的元件
// 它使用當前路徑查找 routes 對象中的元件，如果未找到，預設返回 PageOne

// 以下 changeRoute 方法為點擊導航連結時，更新瀏覽器的地址欄（URL）而不重新加載頁面
// 並且更新 Vue 的響應式變數 currentPath，從而觸發 currentPage 計算屬性重新計算並渲染對應的組件

function changeRoute(path) {
  history.pushState(null, null, path);
  currentPath.value = location.pathname;
};

// 調用 history.pushState 不會引起頁面重載，因此非常適合用於單頁應用程序（SPA）中實現客戶端路由
// pushState 傳遞參數解釋
// state（第一個參數）: 可以是任何 JavaScript 對象，代表與新狀態相關的狀態對象。在這裡傳 null，表示不需要特殊狀態
// title（第二個參數）: 新頁面的標題。在這裡也傳 null，因為現代瀏覽器普遍忽略這個參數
// url（第三個參數）: 新的網址（相對或絕對）。這裡傳遞的是 path，表示將當前的 URL 更改為 path 指定的路徑

// 將 currentPath.value 設置為 location.pathname 的值，這樣就更新了 Vue 的響應式狀態
// 由於 currentPath 是響應式的，當它的值改變時，任何依賴它的計算屬性或監視器都會自動更新
// 在這個例子中，currentPage 計算屬性會重新計算，從而導致對應的組件重新渲染

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

nav {
  padding: 24px 0;
}

nav a {
  font-size: 18px;
  color: white;
  margin-right: 24px;
  /* cursor: pointer; */
}
</style>
