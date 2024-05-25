<template>
  <form>
    <label for="title">博客標題：</label>
    <input type="text" name="title" id="title" />
    <label for="content">博客內容：</label>
    <textarea name="content" id="content" cols="30" rows="10"></textarea>
  </form>
</template>
<script>
export default {
  // 離開當前頁面前，元件失效前調用
  beforeRouteLeave() {
    const result = confirm("確定要離開嗎？")
    if (!result) {
      return false;
    }
  },
};
</script>
<style scoped>
form {
  padding: 48px;
  display: grid;
}

label {
  margin-bottom: 12px;
}

form>label:last-of-type {
  margin-top: 12px;
}
</style>
