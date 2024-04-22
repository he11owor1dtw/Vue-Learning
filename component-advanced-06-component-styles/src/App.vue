<script>
import ScopedStyle from './components/ScopedStyle.vue';
import CssModules from './components/CssModules.vue';
import SassStyle from './components/SassStyle.vue';  // 須安裝 sass > npm add -D sass
import "./style.css";

export default {
  components: { ScopedStyle, CssModules, SassStyle },
};
</script>

<template>
  <main>
    <div>
      <p>
        這是 App.vue 中的樣式，它的 style 不帶 scoped，所以會影響全局
      </p>
      <ScopedStyle></ScopedStyle>
      <CssModules></CssModules>
      <SassStyle></SassStyle>
    </div>
  </main>
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  background-color: hsl(200deg, 100%, 60%, 0.7);
  padding: 2em;
  border-radius: 8px;
}
</style>
