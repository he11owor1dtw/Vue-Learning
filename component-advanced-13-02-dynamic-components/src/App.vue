<template>
  <main>
    <div>
      <Component :is="currentForm" /> <!-- 將 component 的 is 值設為一個參數 currentForm -->
      <div class="buttons">
        <!-- 若 currentForm 的值等於 RegisterForm 才顯示 -->
        <!-- 並於 Click 後切換值 currentForm 的值為 ProfileForm -->
        <button v-if="currentForm === 'RegisterForm'" @click="currentForm = 'ProfileForm'">
          下一步
        </button>
        <!-- 若 currentForm 的值等於 ProfileForm 則顯示用戶訊息表單 -->
        <template v-else-if="currentForm === 'ProfileForm'">
          <button @click="currentForm = 'RegisterForm'">
            上一步
          </button>
          <button>完成</button>
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue';
import ProfileForm from './components/ProfileForm.vue';
export default {
  components: {
    RegisterForm,
    ProfileForm,
  },

  data() {
    return {
      currentForm: "RegisterForm",  // 直接輸入元件名即可切換頁面顯示，先預設註冊頁面
    };
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "PingFang SC", "Microsoft Yahei", sans-serif;
}

body {
  background-color: #0f141c;
  opacity: 1;
  background-image: radial-gradient(#212943 0.6000000000000001px,
      #0f141c 0.6000000000000001px);
  background-size: 12px 12px;
  color: white;
}

#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

input {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

button {
  border: none;
  background: linear-gradient(90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%));
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
}

form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.buttons {
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 12px;
  justify-content: space-between;
}
</style>
