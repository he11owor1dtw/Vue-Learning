<template>
  <main>
    <div v-if="loading">讀取中請稍等</div>
    <div v-else>
      <p v-for="user in users">
        user:<span>{{ user }}</span>
      </p>
    </div>
  </main>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex/dist/vuex.cjs.js";

export default {
  created() {
    // this.$store.dispatch("fetchUsers");
    this.fetchUsers({ limit: 3 });
  },
  computed: mapState(["users","loading"]),
  methods: mapActions(["fetchUsers"]),
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

/* #app {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
} */

main {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  display: grid;
  place-items: center;
}

p {
  margin: 12px 0;
}

p>span {
  color: hsl(280deg, 100%, 80%);
}

button {
  border: none;
  background: linear-gradient(90deg,
      hsl(240deg, 50%, 50%),
      hsl(280deg, 50%, 50%));
  padding: 0.8em 1.4em;
  font-size: 16px;
  border-radius: 4px;
  color: white;
  margin-bottom: 36px;
  margin-top: 8px;
}
</style>
