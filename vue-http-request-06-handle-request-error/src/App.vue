<script setup>
import SearchNote from "./components/SearchNote.vue";
import NoteList from "./components/NoteList.vue";
import AddNote from "./components/AddNote.vue";
import { onMounted, ref, watch } from "vue";
import axios from "axios";

const notes = ref([]);
const loading = ref(false);
const searchTerm = ref("");
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await axios.get("http://localhost:3000/notes");
    notes.value = res.data;
  } catch (e) {
    error.value = e.response.data;
  } finally {
    loading.value = false;
  }
});

watch(searchTerm, async (newSearchTerm) => {
  loading.value = true;
  const res = await axios.get("http://localhost:3000/notes", {
    params: {
      term: newSearchTerm,
    },
  });
  notes.value = res.data;
  loading.value = false;
});

async function handleNoteFormSubmit(note) {
  const res = await axios.post("http://localhost:3000/notes", note, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SOMEJWTTOKEN",
    },
  });
  notes.value.push(res.data);
}
</script>

<template>
  <main>
    <h1>我的筆記本</h1>
    <SearchNote v-model="searchTerm" />
    <div v-if="loading">loading...</div>
    <NoteList v-else :notes="notes" />
    <div v-if="error" style="color: red">{{ error.message }}</div>  <!-- 顯示錯誤訊息 -->
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
