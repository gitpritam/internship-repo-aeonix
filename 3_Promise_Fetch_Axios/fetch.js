fetch("https://jsonplaceholde.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
