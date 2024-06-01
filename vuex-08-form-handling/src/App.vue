<template>
  <main>
    <div>
      <div class="form">
        <label for="username">姓名：</label>
        <!-- <input id="username" type="text" :value="user.username"
          @input="updateUser({ feild: 'username', value: $event.target.value })" /> -->
        <input id="username" type="text" v-model="username" />
        <label for="gender">性別：</label>
        <div id="gender" class="radio-group">
          <input name="gender" type="radio" value="male" v-model="gender" /><span>男</span>
          <input name="gender" type="radio" value="female" v-model="gender" /><span>女</span>
        </div>
        <label for="occupation">職業：</label>
        <select name="occupation" id="occupation" v-model="occupation">
          <option value="frontend">前端工程師</option>
          <option value="backend">後端工程師</option>
          <option value="fullstack">全端工程師</option>
        </select>
      </div>
      <div class="result">
        <ul>
          <li>姓名：{{ user.username }}</li>
          <li>性別：{{ user.gender }}</li>
          <li>職業：{{ user.occupation }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
    
    // username: {
    //   get() {
    //     return this.user.username;
    //   },
    //   set(value) {
    //     this.updateUser({ field: "username", value });
    //   },
    // },

    ...["username", "gender", "occupation"].reduce((obj, field) => {
      obj[field] = {
        get() {
          return this.user[field];
        },
        set(value) {
          this.updateUser({ field, value });
        },
      };
      return obj;
    }, {}),
  },
  // obj 為最終要返回的對象，由 reduce 方法第2個參數提供（非 reduce 第1個參數回調函數的第2個參數），即 {} 空對象。
  // field 為遍歷到的陣列元素，把它們作為計算屬性名，分別定義 getter 和 setter。
  methods: mapMutations(["updateUser"])
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

input,
textarea,
select {
  padding: 8px 14px;
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 4px;
  margin-left: 8px;
  outline: none;
  background: hsl(280deg, 50%, 30%, 0.2);
  color: white;
}

.form {
  display: grid;
  grid-template-columns: 80px 1fr;
  row-gap: 14px;
  width: 50%;
}

label {
  text-align: right;
}

.form> :is(input, select, div) {
  grid-column: 2 / 3;
}

.radio-group,
.checkbox-group {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 12px;
}

:is(.radio-group, .checkbox-group)>span {
  grid-column: 2 / 3;
}

.result {
  align-self: start;
  margin-top: 48px;
}

.result ul {
  list-style: none;
}

.result li {
  margin-top: 12px;
}
</style>
