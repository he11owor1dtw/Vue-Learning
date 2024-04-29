const PaginationMixin = {
  props: ["totalPage", "defaultCurrentPage", "showTotal"],
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
    console.log("執行 mixin 中的 mounted 方法");
  },

  // 生命週期會先執行 mixin，後執行元件的
};

export default PaginationMixin;
