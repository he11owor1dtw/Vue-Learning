<template>
  <div>
    <a :href="link">{{ title }}</a>
  </div>
</template>
<script>
export default {
  props: ["link", "title"],
  inheritAttrs:false,     // 設定後會阻止/應用未定義的屬性，如 App.vue 中的 blogLink class
  mounted(){
    console.log(this.$attrs.class);
  }
};
</script>
