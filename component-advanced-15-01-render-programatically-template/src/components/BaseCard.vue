<script>
import { h } from "vue";

export default {
  props: ["title"],
  render() {
    return h("div", { class: "card" }, [
      h("div", { class: "title" }, this.title),
      h("div", { class: "content" }, this.$slots.default()),  
      // 第三節點為 slot，需使用 this.$slots.default()，只有一個預設 slot 使用 default()
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
