const getTodos = () => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        {
          resolve(JSON.parse(request.responseText));
        }
      } else if (request.readyState === 4) {
        reject("Data not fetched successfully.");
      }
    });

    request.open("get", "https://jsonplaceholder.typicode.com/todos/1");
    request.send();
  });
};

getTodos()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

const getBookOne = new Promise((resolve, reject) => {
  resolve("Book one");
});
const getBookTwo = new Promise((resolve, reject) => {
  resolve("Book two");
});
const getBookThree = new Promise((resolve, reject) => {
  resolve("book Three");
});

Promise.all([getBookOne, getBookTwo, getBookThree])
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, "foo")
// );
// const promises = [promise1, promise2, getBookOne, getBookTwo, getBookThree];

// Promise.allSettled(promises).then((results) =>
//   results.forEach((result) => console.log(result.status))
// );

/* Promise.any */
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, "quick"));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, "slow"));

const promises = [promise1, promise2, getBookOne, getBookTwo, getBookThree];

Promise.any(promises).then((value) => console.log(value));
