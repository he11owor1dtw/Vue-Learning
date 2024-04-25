<template>
  <form @submit.prevent>
    <label>手機號：<input type="number" /></label>
    <label>驗證碼：<input type="number" />
      <button class="sendSMSCodeBtn">
        發送驗證碼
      </button>
    </label>
  </form>
</template>
<script>
export default {};
</script>
<style scoped>
.sendSMSCodeBtn {
  margin-left: 24px;
}
</style>
