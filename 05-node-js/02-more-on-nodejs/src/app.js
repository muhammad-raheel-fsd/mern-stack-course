import fs from "fs";
import path from "path";

const resolvedPath = path.resolve(path.dirname(""), "src");

console.log("FILE PATH ======================> ", resolvedPath);

// Asynchronous file system module
fs.readFile(path.join(resolvedPath, "./data/text.txt"), "utf8", (err, data) => {
  if (err) console.error("ERROR READING FILE ======================> ", err);
  // console.log("Asynchronous read ======================> ", data);
});

// Synchronous file system module
const data = fs.readFileSync(
  path.join(resolvedPath, "./data/text.txt"),
  "utf8"
);
// console.log("Synchronous read ======================> ", data);

// Write to a file Asynchronously
fs.writeFile(
  path.join(resolvedPath, "./data/written.txt"),
  "Hello, World!",
  "utf-8",
  (err) => {
    if (err) console.error("ERROR WRITING FILE ======================> ", err);
  }
);

// Append to a file Asynchronously
fs.appendFile(
  path.join(resolvedPath, "./data/written.txt"),
  "Hello, World again!",
  "utf-8",
  (err) => {
    if (err) console.error("ERROR APPENDING FILE ======================> ", err);
  }
);

// Delete a file
fs.unlink(path.join(resolvedPath, "./data/written.txt"), (err) => {
  if (err) console.error("ERROR DELETING FILE ======================> ", err);
});