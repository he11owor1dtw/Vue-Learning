<template>
  <div>
    <button @click="sortByKey('username','desc')">排序</button>  <!-- 根據用戶名降序排列 -->
    <table>
      <thead>
        <th>ID</th>
        <th>用戶名</th>
        <th>Email</th>
        <th>電話</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <button @click="removeUser(user.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import useListData from './composables/useListData';

export default {
  setup() {
    const { data: users, removeItem: removeUser, sortByKey } = useListData([
      { id: 1, username: "張三", email: "san@163.com", phone: "12345678901" },
      { id: 2, username: "李四", email: "si@163.com", phone: "13355554444" },
      { id: 3, username: "王五", email: "wu@163.com", phone: "15533229988" },
      { id: 4, username: "趙六", email: "liu@163.com", phone: "16677889932" },
      { id: 5, username: "錢七", email: "qi@163.com", phone: "17711225577" },
    ]);

    return { users, removeUser, sortByKey }
  },
};
</script>
<style scoped>
table {
  margin-top: 24px;
  border-collapse: collapse;
}

thead {
  border-bottom: 1px solid hsl(280deg, 50%, 50%);
}

td,
th {
  padding: 12px 24px;
}

tbody tr:nth-child(2n) {
  background-color: hsl(280deg, 50%, 50%, 0.1);
}
</style>
