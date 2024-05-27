<template>
  <router-link v-if="!private || isLoggedIn()" v-bind="$props">
    <!--
      如果 private 屬性為 false，或者用戶已登錄（isLoggedIn() 返回 true），則渲染這個鏈接；否則不渲染。
      v-bind="$props"，將所有傳遞給這個自定義元件的屬性綁定到內部的 router-link 元件上。
    -->
    <slot></slot>
  </router-link>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  props: {
    ...RouterLink.props,
    private: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    isLoggedIn() {
      return true;
    },
  },
};
</script>