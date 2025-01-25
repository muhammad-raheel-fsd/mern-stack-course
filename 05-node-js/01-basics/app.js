// import "./practice/httpModule.js";

// File System module
// import fs from "fs";
// import path from "path";

// console.log("FILE SYSTEM MODULE ===========>", fs);

// const filePath = path.resolve(path.dirname(""), "data.txt");
// console.log("FILE PATH ===========>", filePath);

const fs = require("fs");
const path = require("path");

const filePath = path.resolve(path.dirname(""), "input.txt");
console.log("FILE PATH ======================> ", filePath);

// Asynchronous file system module
fs.readFile(filePath, "utf8", function (err, data) {
  if (err) {
    return console.error("ERROR READING FILE ======================> ", err);
  }
  console.log("Asynchronous read ======================> ", data);
});

// Synchronous file system module
const data = fs.readFileSync(filePath, "utf8");
console.log("Synchronous read ======================> ", data);

console.log(
  "===============================AFTER FILE READ================================"
);

