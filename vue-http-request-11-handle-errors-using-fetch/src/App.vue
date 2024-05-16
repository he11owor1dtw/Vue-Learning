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

  // try {
  // setTimeout(() => {
  //   controller.abort();
  // }, 500);

  // const res = await axios.get("/api/notes", {
  //   signal: controller.signal,
  // });
  const res = await fetch("/api/notes");  
  // 若 http 發送請求成功並收到伺服器回應，fetch 不會返回錯誤，所以用 try,catch 沒用
  // 但可以用 try, catch 去辨別網路錯誤

  if (res.status > 400) {
    error.value = await res.json();
  } else {
    notes.value = await res.json();
  }

  // } catch (e) {
  // if (e?.response?.data) {
  //   error.value = e.response.data;
  // }
  // } finally {
  loading.value = false;
  // }
});

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

  const res = await fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SOMEJWTTOKEN",
    },
    body: JSON.stringify(note),
  });

  notes.value.push(await res.json());
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
