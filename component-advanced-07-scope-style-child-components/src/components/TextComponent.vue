<template>
  <span class="text">
    <slot />
    <a href="#">子元件中的其他元素(非根元件)</a>
  </span>
</template>
<script>
export default {};
</script>
<style scoped>

/* Vue 預設傳入元件的 <slot/> 內容樣式，不會被當層元件的 scoped style 影響，因為 <slot/> 內容屬於他的父元件 */
/* 如果想在當前的元件做樣式管理，可以用:slotted()。 */

:slotted(div) {    /* 在子層影響外來的 slot 內容樣式 */
  color: blue;
}
</style>
