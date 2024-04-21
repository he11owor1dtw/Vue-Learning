<template>
  <main>
    <div>
      <ContactList v-slot="{ contact }"> <!-- 若標籤內有多個 slot，不能使用解構語法 -->
        <!-- <template v-slot:default="props"> 由於標籤內只有一個 slot，可省略 template 標籤 -->
        <!-- <ContactList v-slot:default="props"> 由於標籤內只有一個 slot，:default 可省略 -->
        <!-- <ContactList v-slot="props"> -->
        <!-- <p>{{ props.contact.name }}</p>
        <p>{{ props.contact.email }}</p> -->
        <p>{{ contact.name }}</p>
        <p>{{ contact.email }}</p>
        <!-- </template> -->
      </ContactList>
    </div>
  </main>
</template>

<script>
import ContactList from "./components/ContactList.vue";

export default {
  components: {
    ContactList,
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
</style>
