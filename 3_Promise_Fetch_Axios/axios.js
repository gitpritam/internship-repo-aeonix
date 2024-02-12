const axios = require("axios");
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.data;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

getData();
