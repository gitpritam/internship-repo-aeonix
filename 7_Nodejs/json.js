const http = require("http");
const fs = require("fs");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = { name: "Pritam", age: 2 };
  res.end(JSON.stringify(data));
});

server.listen(5000, "127.0.0.1");
console.log("Listening to Port: 5000");
