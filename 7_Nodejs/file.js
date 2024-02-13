const fs = require("fs");
fs.mkdirSync("test_folder");
fs.rmdirSync("test_folder");

//existsync gives true or false
const isPathAvailable = fs.existsSync("test_folder");
console.log(isPathAvailable);

const data = fs.readFileSync("data.txt", "utf8");
console.log(data);

fs.writeFileSync("data.txt", "pritam Majhi");
const data2 = fs.readFileSync("data.txt", "utf8");
console.log(data2);

fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

fs.writeFile("data.txt", data, (err) => {
  if (err) console.log(err);
  else console.log("File written successfully");
});

//delete file
fs.unlink("data.txt", (err) => {
  if (err) console.log("file not deleted");
});
