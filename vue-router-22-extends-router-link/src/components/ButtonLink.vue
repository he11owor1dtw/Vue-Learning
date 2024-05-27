<template>
  <router-link custom v-bind="$props" v-slot="{ navigate }">
    <button @click="navigate">
      <slot></slot>
    </button>
  </router-link>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    ...RouterLink.props
    // 其它額外屬性
  },
};
</script>