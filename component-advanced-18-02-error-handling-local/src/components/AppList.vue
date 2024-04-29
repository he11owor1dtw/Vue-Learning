<template>
  <p v-if="error">喔喔～出錯了！</p>
  <ul v-else>
    <AppListItem v-for="item in data">{{ item }}</AppListItem>
  </ul>
</template>
<script>
import AppListItem from "./AppListItem.vue";
export default {
  props: ["data"],
  components: {
    AppListItem,
  },
  date() {
    return {
      error: false,
    };
  },
  errorCaptured(err, instance, info) {
    this.error = true;
    // return false;
  },
};
</script>
<style scoped></style>
