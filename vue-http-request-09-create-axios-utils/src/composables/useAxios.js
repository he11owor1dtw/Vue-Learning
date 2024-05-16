import axios from "axios";

function useAxios() {
  const instance = axios.create({
    timeout: 1000,
    // baseURL: "http://localhost:3000"  // 後端 api
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SOMEJWTTOKEN",
    },
  });

  // 增加攔截器，以便在出錯時或者響應時捕捉訊息
  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    // 請求出錯時
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    // 攔截響應時
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log("發生了錯誤", error);
      return Promise.reject(error);
    }
  );

  return instance;
}

export default useAxios;
