<template>
  <div>
    <p :class="$style.paragraph">這是使用 css modules 的元件</p>
  </div>
</template>
<script>
export default {};
</script>
<style module>
.paragraph {
  background: hsl(320deg, 100%, 60%);
  font-size: 24px;
}
</style>
