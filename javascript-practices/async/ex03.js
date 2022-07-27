const fetch = require("./ex02");

const ex03 = async (param) => {
  try {
    const result = await fetch(param);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

ex03("param-data");
ex03("param-error");

console.log("wait.....");
