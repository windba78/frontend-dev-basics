const fetch = (params, callback) => {
  /**
   * 비동기 코드: 파일 시스템 접근, 네트워크, SQL to DB, setTimeout
   */
  setTimeout(() => {
    if (params === "param-data") {
      callback(null, "ok");
    } else {
      callback(new Error("fail"), null);
    }
  }, 2000);
};

// readFile(options, (error, data) => {});

// test01: success
fetch("param-data", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});

// test01: fail
fetch("param-error", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(data);
});

console.log("wait....");
