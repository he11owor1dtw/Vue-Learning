import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// 增加全域錯誤處理方法的過程
app.config.errorHandler=(err,vm,info)=>{
  console.log(err);  // err = 異常訊息
  console.log(vm);   // vm = 實例/實體
  console.log(info); // info = 出錯位置
}

app.mount("#app");
