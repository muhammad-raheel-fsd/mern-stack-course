// import "./practice/httpModule.js";

// File System module
// import fs from "fs";
// import path from "path";

// console.log("FILE SYSTEM MODULE ===========>", fs);

// const filePath = path.resolve(path.dirname(""), "data.txt");
// console.log("FILE PATH ===========>", filePath);

const fs = require("fs");
// Asynchronous file system module
fs.readFile("input.txt", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Asynchronous read ======================> ", data);
});

console.log(
  "===============================AFTER FILE READ================================"
);
