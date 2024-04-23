<template>
  <p>
    <TextComponent>一些文字</TextComponent>
  </p>
  <p>
    <TextComponent>
      <div>slot 中的文字</div>  
    </TextComponent>
  </p>
</template>
<script>
import TextComponent from "./TextComponent.vue";
export default {
  components: {
    TextComponent,
  },
};
</script>
<style scoped>
p {
  background-color: rgb(132, 83, 33);
  padding: 1em;
  border-radius: 4px;
  margin-bottom: 20px;
}

.text{
  color: rgb(159, 247, 155);
}

.text :deep(a){     /* 從父元件影響子元件的樣式，且不影響到全域，可用 :deep() 深度選擇器，來突破 scoped 的限制 */
  display: block;
  text-decoration: none;
  color: rgb(62, 214, 191);
}
</style>
