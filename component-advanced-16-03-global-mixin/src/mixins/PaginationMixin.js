const PaginationMixin = {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    // 在 PaginationComponent 和 PaginationComponent2中都會執行
    console.log("執行 mixin 中的 mounted 方法 ");
  },
};

export default PaginationMixin;
