// useRequest 函數接受三個參數：
// url：要請求的 URL (API 路徑)，預設為空字符串。
// method：HTTP 方法，預設為 "GET"。
// data：要發送的數據

async function useRequest(url = "", method = "GET", data) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",   // 指定了請求的內容類型為 JSON
      Authorization: "Bearer SOMEJWTTOKEN", // 設置了授權標頭，使用 JWT TOKEN 進行身份驗證。
    },
    body: data ? JSON.stringify(data) : undefined,
    // 請求的主體，如果 data 存在，則將其轉換為 JSON 字符串
    // 如果 data 不存在，則設為 undefined
  });

  if (res.status > 400) {
    const error = await res.json();
    const e = new Error(res.statusText);
    e.error = error;
    e.status = res.status;
    throw e;
  }

  // 如果狀態碼大於 400，則使用 await res.json() 來解析響應的 JSON 內容
  // 創建一個新的 Error 對象，並將 res.statusText（即 HTTP 狀態文本，如 "Not Found" 或 "Internal Server Error"）作為錯誤消息
  // 將解析出的錯誤信息（即 error）和狀態碼（即 res.status）附加到 Error 對象上，這樣可以保留更多的錯誤細節
  // 拋出這個錯誤對象，使得函數在發生錯誤時會停止執行，並將錯誤傳遞給調用者處理

  const result = await res.json();
  // 如果響應狀態碼不大於 400，則使用 await res.json() 來解析響應的 JSON 內容，這些內容通常是請求成功後返回的數據。
  return result;
  // 返回解析出的結果數據
}

// 這段程式碼增加了錯誤處理邏輯，以便在 HTTP 狀態碼大於 400 時能夠捕獲並拋出包含詳細錯誤信息的錯誤對象。
// 如果請求成功，則返回解析出的 JSON 結果，這樣設計可以讓調用此函數的代碼更好地處理請求失敗和成功的情況。

export default useRequest;
