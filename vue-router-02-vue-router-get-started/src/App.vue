<template>
  <nav>
    <router-link to="/">頁面1</router-link>
    <router-link to="/2">頁面2</router-link>
    <router-link to="/3">頁面3</router-link>
  </nav>
  <router-view></router-view>
  <component :is="currentPage" />
</template>

<script>
import { RouterLink } from 'vue-router';

export default {};

// import PageOne from "./components/PageOne.vue";
// import PageTwo from "./components/PageTwo.vue";
// import PageThree from "./components/PageThree.vue";

// import { ref, computed } from "vue";

// const routes = {
//   "/": {
//     component: PageOne,
//     label: "頁面1",
//   },
//   "/2": {
//     component: PageTwo,
//     label: "頁面2",
//   },
//   "/3": {
//     component: PageThree,
//     label: "頁面3",
//   },
// };

// const currentPath = ref(location.pathname);

// const currentPage = computed(
//   () => routes[currentPath.value].component || PageOne
// );

// function changeRoute(path) {
//   history.pushState(null, null, path);
//   currentPath.value = location.pathname;
// }
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

nav {
  padding: 24px 0;
}

nav a {
  font-size: 18px;
  color: white;
  margin-right: 24px;
  /* cursor: pointer; */
}

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
