<template>
  <form class="loginForm">
    <h2>登入</h2>
    <label for="username">帳號：</label>
    <input id="username" type="text" />
    <label for="password">密碼：</label>
    <input id="password" type="password" />
    <button>登入</button>
  </form>
</template>
<style scoped>
.loginForm {
  display: grid;
  gap: 12px;
}

.loginForm h2 {
  justify-self: center;
}
.loginForm label {
  margin-top: 12px;
}
</style>
