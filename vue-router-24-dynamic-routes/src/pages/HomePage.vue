<template>
  <div class="container">
    <nav class="globalNav">
      <router-link to="/">首頁</router-link>
      <router-link v-for="page in pages" :to="page.pageUrl" :key="page.pageUrl">
        {{ page.pageName }}
      </router-link>
    </nav>
    <main>
      <form @submit.prevent>
        <h2>添加頁面</h2>
        <label for="page_url">頁面路徑：</label>
        <input id="page_url" type="text" placeholder="請輸入頁面路徑，如 /about" v-model="pageUrl" />
        <label for="page_name">頁面名稱：</label>
        <input id="page_name" type="text" placeholder="請輸入頁面名稱，如 /關於我們" v-model="pageName" />
        <label for="page_content">頁面內容：</label>
        <textarea id="page_content" cols="30" rows="10" placeholder="請輸入頁面內容" v-model="pageContent"></textarea>
        <button type="submit" @click="handlePageSubmit">提交</button>
      </form>
      <div>
        <ul>
          <li v-for="page in pages" :key="page.pageUrl">
            {{ page.pageName }}
            <span @click="removePage(page.pageUrl)">刪除</span>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
import PageTemplate from "../components/PageTemplate.vue";

export default {
  data() {
    return {
      pageUrl: "",
      pageName: "",
      pageContent: "",
      pages: [],
    };
  },
  methods: {
    handlePageSubmit() {
      this.pages.push({
        pageUrl: this.pageUrl,
        pageName: this.pageName,
        pageContent: this.pageContent,
      });
      this.$router.addRoute({
        path: this.pageUrl,
        name: this.pageUrl.slice(1),
        component: PageTemplate,
        props: {
          pageContent: this.pageContent,
        },
      });
      console.log(this.$router.getRoutes());
      // 查詢當前有多少路由頁面
    },
    removePage(pageUrl) {
      this.$router.removeRoute(pageUrl.slice(1));
      // 使用 Vue Router 的 removeRoute 方法來移除指定的路由
      // pageUrl.slice(1) 是在移除 URL 的第一個字元（通常是 /），因為 Vue Router 的路由名稱通常不包括這個字元
      console.log(this.$router.getRoutes());
      // 打印結果，看有沒有刪除成功
      this.pages.splice(
        this.pages.findIndex((page) => page.pageUrl === pageUrl),
        // 用 findIndex 方法在 this.pages 陣列中找到對應的頁面索引，條件是 page.pageUrl 等於 pageUrl。
        1
        //  1 是 splice 方法的第二個參數，表示要移除一個元素。
      );
    },
  },
};
</script>
<style scoped>
.container {
  height: 100%;
}

.globalNav {
  height: 120px;
  width: 100%;
  align-self: start;
  justify-self: center;
  padding: 24px;
}

.globalNav a {
  padding: 12px;
  font-size: 18px;
}

main {
  max-width: 50vw;
}

form {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
}

h2 {
  grid-column: 1 / 3;
  justify-self: center;
  margin-bottom: 24px;
}

label {
  grid-column: 1 / 2;
}

button {
  grid-column: 1 / 3;
  justify-self: end;
}
</style>
