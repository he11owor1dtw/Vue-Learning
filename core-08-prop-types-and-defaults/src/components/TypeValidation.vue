<template>
  <p>{{ name }} - {{ typeof name }}</p>
  <p>{{ age }} - {{ typeof age }}</p>
  <p>{{ isStudent }} - {{ typeof isStudent }}</p>
</template>
<script>
export default {
  props: {
    name: String,
    age: {
      type: Number,
      required: true,  // 必傳項
      validator(value) {
        return value > 0;
      },
    },
    isStudent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
