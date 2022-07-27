const fetch = (params) => {
  return new Promise((resolve, reject) => {
    /**
     * 비동기 코드: 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
     */
    setTimeout(() => {
      if (params === "param-data") {
        resolve("ok");
      } else {
        reject(new Error("fail"), null);
      }
    }, 2000);
  });
};

if (require.main == module) {
  // test02: success
  fetch("param-data").then((result) => {
    console.log(result);
  });

  // test02: fail
  fetch("param-error").catch((error) => {
    console.error(error);
  });
  console.log("wait......");
} else {
  module.exports = fetch;
}

// 일반적으로 사용하는 방법
// fetch("param...")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
