<template>
  <main>
    <div>
      <BaseLayout>
        <template v-slot:header>
          <nav>
            <a href="#">首頁</a>
            <a href="#">關於</a>
            <a href="#">聯絡我</a>
          </nav>
        </template>
        <template v-slot:default>
          <p>這是內容</p>
        </template>
      </BaseLayout>
    </div>
  </main>
</template>

<script>
import BaseLayout from "./components/BaseLayout.vue";
export default {
  components: {
    BaseLayout,
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

nav {
  display: flex;
  gap: 24px;
  margin-bottom: 36px;
}

nav a {
  color: hsl(280deg, 100%, 80%);
}
</style>
