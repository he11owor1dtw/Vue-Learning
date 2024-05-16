<script setup>
import SearchNote from "./components/SearchNote.vue";
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";
import { onMounted, ref, watch } from "vue";
import useAxios from "./composables/useAxios";

const notes = ref([]);
const loading = ref(false);
const searchTerm = ref("");
const error = ref(null);

const axios = useAxios();

onMounted(async () => {
  loading.value = true;

  const controller = new AbortController();

  try {
    // setTimeout(() => {
    //   controller.abort();
    // }, 500);

    // const res = await axios.get("/api/notes", {
    //   signal: controller.signal,
    // });
    const res = await fetch("/api/notes");

    notes.value = await res.json(); // 異步，需使用 await
  } catch (e) {
    if (e?.response?.data) {
      error.value = e.response.data;
    }
  } finally {
    loading.value = false;
  }
});

// 這段代碼是一個搜尋請求 JS 函數，它的功能是監聽 searchTerm 的變化，
// 一旦 searchTerm 的值有所改變，就會執行一個異步函數。
// 這個異步函數的任務是向後端發送一個 HTTP 請求，以搜尋特定的筆記

// 1. 當 searchTerm 改變時，loading 的值被設置為 true，表示正在加載中。
// 2. 接著，它使用 fetch 函數向後端發送一個 GET 請求，該請求的路徑為 /api/notes，並且包含一個查詢參數 term，該參數的值就是新的搜尋詞 newSearchTerm。
// 3. 當後端返回結果時，它將結果解析為 JSON 格式，並將解析後的數據賦值給 notes 變數。
// 4. 最後，loading 的值被設置為 false，表示加載結束。

// 總之，這段代碼是一個用於根據給定的搜尋詞向後端發送請求的函數，並在處理請求的過程中更新相關的狀態。

watch(searchTerm, async (newSearchTerm) => {
  loading.value = true;
  // const res = await axios.get("/api/notes", {
  //   params: {
  //     term: newSearchTerm,
  //   },
  // });

  const res = await fetch(
    `/api/notes?${new URLSearchParams({
      term: newSearchTerm,
    })}`
  );

  notes.value = await res.json();
  loading.value = false;
});

async function handleNoteFormSubmit(note) {
  // const res = await axios.post("/api/notes", note, {
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   //   Authorization: "Bearer SOMEJWTTOKEN",
  //   // },
  // });

  // POST 請求
  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SOMEJWTTOKEN",
    },
    body: JSON.stringify(note),
  });

  notes.value.push(await res.json()); // 將 post 數據更新上去
}
</script>

<template>
  <main>
    <h1>我的筆記本</h1>
    <SearchNote v-model="searchTerm" />
    <div v-if="loading">loading...</div>
    <NoteList v-else :notes="notes" />
    <div v-if="error" style="color: red">{{ error.message }}</div>
    <AddNote @onNoteFormSubmit="handleNoteFormSubmit" />
  </main>
</template>

<style scoped>
main {
  width: 600px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  justify-items: center;
  padding: 48px 0;
}
</style>
