<template>
  <main>
    <div>
      <!-- <p v-fsize="18">這是一個段落</p>   寫死在 main.js -->
      <p v-fsize:[unit]="fontSize">這是一個段落</p>  <!-- 響應式 -->
      <button class="btn increase" @click="fontSize += 1">A</button>
      <button class="btn decrease" @click="fontSize -= 1">a</button>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 18,
      unit:"em",
    };
  },
};
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

div {
  text-align: center;
}

p {
  width: 300px;
  height: 100px;
  overflow: auto;
}

button {
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  width: 40px;
  padding: 4px 6px;
  margin-right: 8px;
  margin-top: 8px;
  background: none;
  color: white;
  font-size: 20px;
}
</style>
