<script>
import { h } from "vue";

export default {
  props: ["title"],
  render() {
    return h("div", { class: "card" }, [
      h("div", { class: "title" }, this.title),
      h("div", { class: "content" }, this.$slots.default()),
      [1, 2, 3, 4].map((item) => h("h" + item, {}, item)),  
      // 用 map 方法遍歷陣列，第一個參數用 "h" 顯示成 h1-h4
      // 第二個參數不傳值，留空
      // 第三個參數為遍歷出來的內容作為子節點
    ]);
  },
};
</script>
<style scoped>
.card {
  border: 1px solid hsl(280deg, 50%, 50%);
  border-radius: 8px;
  padding: 12px;
  min-width: 240px;
}

.title {
  border-bottom: 2px solid hsl(280deg, 50%, 50%);
  padding-bottom: 8px;
}

.content {
  min-height: 20px;
  margin-top: 18px;
}
</style>
