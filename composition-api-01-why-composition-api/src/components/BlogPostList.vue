<template>
  <div>
    <div class="options">
      <input type="text" v-model="searchTerm" placeholder="搜索標題..." />
      <select v-model="category">
        <option value="all">全部</option>
        <option value="vue">Vue</option>
        <option value="react">React</option>
        <option value="javascript">JavaScript</option>
        <option value="css">CSS</option>
      </select>
    </div>

    <div class="blogList">
      <div v-for="blog in resultBlogs" :key="blog.id" class="blogCard">
        <h2>{{ blog.title }}</h2>
        <p class="category">分類：{{ blog.category }}</p>
        <p class="author">作者：{{ blog.author }}</p>
        <p class="pubDate">發佈日期：{{ blog.pubDate }}</p>
        <p class="content">{{ blog.content }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchTerm: "",
      category: "all",
      blogs: [
        {
          id: 1,
          title: "Vue 完全指南教程",
          category: "vue",
          author: "張三",
          pubDate: "2022-01-01",
          content: "這是 Vue 內容",
        },
        {
          id: 2,
          title: "React 完全指南教程",
          category: "react",
          author: "李四",
          pubDate: "2022-02-01",
          content: "這是 React 內容",
        },
        {
          id: 3,
          title: "JavaScript 完全指南教程",
          category: "javascript",
          author: "王五",
          pubDate: "2022-03-01",
          content: "這是 JavaScript 內容",
        },
        {
          id: 4,
          title: "CSS 完全指南教程",
          category: "css",
          author: "趙六",
          pubDate: "2022-04-01",
          content: "這是 CSS 內容",
        },
      ],
    };
  },
  computed: {
    resultBlogs() {
      let result = this.searchBlogs(this.blogs);
      result = this.filterBlogs(result);
      return result;
    },
  },
  methods: {
    searchBlogs(blogs) {
      if (this.searchTerm === "") return blogs;
      return blogs.filter((blog) => {
        return blog.title.includes(this.searchTerm);
      });
    },
    filterBlogs(blogs) {
      if (this.category === "all") return blogs;
      return blogs.filter((blog) => {
        return blog.category === this.category;
      });
    },
  },
};
</script>
<style scoped>
.options {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  padding-bottom: 24px;
}
.blogList {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.blogCard {
  border: 1px solid hsl(280deg, 50%, 50%);
  padding: 12px;
  display: grid;
  grid-template-areas:
    "title title title"
    "category author pubDate"
    "content content content";
  gap: 12px;
  align-items: center;
}

h2 {
  grid-area: title;
}

.category {
  grid-area: category;
}

.author {
  grid-area: author;
}

.pubDate {
  grid-area: pubDate;
}

.category,
.author,
.pubDate {
  font-size: 14px;
  margin-bottom: 12px;
  color: hsl(280deg, 50%, 70%);
}

.content {
  grid-area: content;
}
</style>
