<template>
  <li>
    {{ msg }} <button @click="$emit('remove', id)">刪除</button>
  </li>
</template>
<script setup>
const props = defineProps(["msg", "id"]);
const emits = defineEmits(["remove"]);

// props 和 emits 可以在這裡使用，模板中可以繼續直接使用 props 屬性名，以及 this.$emit();
</script>
<style scoped>
li {
  display: flex;
  align-items: center;
  gap: 12px;
}

li::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  background-color: hsl(280deg, 100%, 70%);
  border-radius: 100%;
}
</style>
