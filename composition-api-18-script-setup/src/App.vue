<template>
  <main>
    <div class="container">
      <MessageList />
    </div>
  </main>
</template>

<script setup>
import MessageList from "./components/MessageList.vue";

// 於 <script> 內增加 setup 以簡化代碼
// export default {
//   components: {
//     MessageList,
//   },
//   setup() {},
// };

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
  background-image: radial-gradient(
    #212943 0.6000000000000001px,
    #0f141c 0.6000000000000001px
  );
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

button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
}
</style>
