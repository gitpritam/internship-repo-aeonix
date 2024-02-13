const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello");
});

server.listen(5000, "127.0.0.1");
console.log("Listening to Port: 5000");
