const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  //   const myWriteStream = fs.createWriteStream(__dirname + "/writeme.txt");

  // myReadStream.on("data", (chunk) => {
  //   console.log(chunk);
  //   myWriteStream.write(chunk);
  // });

  myReadStream.pipe(res);
  //   res.end("Hello");
});

server.listen(5000, "127.0.0.1");
console.log("Listening to Port: 5000");
