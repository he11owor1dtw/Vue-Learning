<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script></script>

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

h2 {
  margin-bottom: 12px;
  font-size: 32px;
  color: hsl(280deg, 100%, 80%);
}

a {
  color: hsl(280deg, 100%, 80%);
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fadeAndMove-enter-active {
  transition: all 0.4s;
}

.fadeAndMove-enter-from {
  transform: translateY(-10px); /* 產生位移效果 */
  opacity: 0;
}

/* nav {
  padding: 24px 0;
}

nav a {
  font-size: 18px;
  color: white;
  margin-right: 24px;
} */

/* button {
  border: none;
  background: linear-gradient(
    90deg,
    hsl(240deg, 50%, 50%),
    hsl(280deg, 50%, 50%)
  );
  padding: 0.5em 1.4em;
  border-radius: 4px;
  color: white;
} */
</style>
