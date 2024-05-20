<template>
  <main>
    <div class="container">
      <!-- 
        使用 TransitionGroup 來包裹列表元素，這樣可以在元素進出時應用過渡效果
        name="fade" 指定過渡效果的名稱為 fade
        tag="div" 指定過渡組的根元素為 div
      -->
      <TransitionGroup name="fade" tag="div">
        <!-- 增加 @click 事件處理，點擊矩形框時從 nums 列表中刪除該元素 -->
        <RectangleBox v-for="(num, index) in nums" :key="num" @click="nums.splice(index, 1)">
          {{ num }}
        </RectangleBox>
      </TransitionGroup>
      <!-- 點擊按鈕時會在列表中的位置 next % nums.length 處插入 next，並使 next 遞增 -->
      <button @click="nums.splice(next % nums.length, 0, next++)">增加元素按鈕</button>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import RectangleBox from './components/RectangleBox.vue';

const nums = ref([0, 1, 2, 3, 4, 5, 6])
const next = ref(7);
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

.container {
  display: grid;
  gap: 48px;
}

.container>div {
  display: flex;
  gap: 24px;
}

.container button {
  justify-self: start;
}

button {
  border: none;
  background: linear-gradient(90deg,
      hsl(200deg, 50%, 50%),
      hsl(240deg, 50%, 50%));
  padding: 12px 18px;
  margin-top: 12px;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
  transform: rotate(0deg);
}

.fade-leave-to {
  opacity: 0;
  transform: rotate(360deg);
}

.fade-enter-active {
  transition: all 0.7s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-move {
  transition: transform 0.3s ease-out;
}
</style>
