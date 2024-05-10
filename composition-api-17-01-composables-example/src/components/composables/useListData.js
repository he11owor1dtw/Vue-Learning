// composable 是一個普通的 js 函數
// setup() 中的代碼全都可以在 composables 中編寫
// composables 邏輯越獨立越好
// 能減少元件文件的代碼，增加共用性

import { ref } from "vue";

function useListData(data) {
  const dataRef = ref(data);

  // [
  //   { id: 1, content: "這是一條消息提醒1" },
  //   { id: 2, content: "這是一條消息提醒2" },
  //   { id: 3, content: "這是一條消息提醒3" },
  //   { id: 4, content: "這是一條消息提醒4" },
  // ]

  function removeItem(id) {
    // console.log(id);
    dataRef.value = dataRef.value.filter((item) => item.id !== id);
  };

  function sortByKey(key, direction = "asc") {
    dataRef.value = dataRef.value.sort((a, b) => {
      if (direction === "asc") {
        return a[key].localeCompare(b[key]);
      } else {
        return -a[key].localeCompare(b[key]);
      }
    });
  };

  // 1. 函式參數：
  // a. key: 要排序的鍵，即數據對象中的一個屬性名稱。
  // b. direction: 排序方向，可以是 "asc"（默認值，表示升序）或 "desc"（表示降序）。

  // 2. 數據排序：
  // a. 使用 dataRef.value.sort() 方法對 dataRef 中的數據列表進行排序。
  // b. sort() 方法接受一個比較函式作為參數。
  // c. 比較函式根據 key 的值來比較兩個數據對象 a 和 b。
  // d. 如果 direction 是 "asc"，比較函式返回 a[key] 和 b[key] 之間的 localeCompare() 的結果。這將根據字符串的當地語言順序來排序 a 和 b 的 key 屬性值。
  // e. 如果 direction 是 "desc"，比較函式返回 -a[key].localeCompare(b[key])。這將逆向排序 a 和 b 的 key 屬性值。

  // 3. 總結
  // 根據給定的鍵和方向對數據列表進行排序，數據列表存儲在 dataRef.value 中，
  // 排序過程使用了字符串的當地語言順序 (localeCompare) 來比較鍵的值。

  return { data: dataRef, removeItem, sortByKey };  // 返回 data，返回 data 的值：dataRef
}

export default useListData;