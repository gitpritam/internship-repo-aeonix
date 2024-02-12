const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    {
      console.log(JSON.parse(request.responseText));
    }
  } else if (request.readyState === 4) {
    console.log("Data not fetched successfully.");
  }
});

request.open("get", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
