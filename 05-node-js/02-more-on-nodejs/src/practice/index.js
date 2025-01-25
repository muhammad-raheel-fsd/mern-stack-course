console.log("Node js...");
// import users from "./data/index.js";
// console.log(users);

// 1- OS module
import os from "os";
// console.log(os);
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);
// console.log(os.cpus()[0]);
// console.log(os.freemem() / 1024 / 1024 / 1024);
// console.log(os.totalmem() / 1024 / 1024 / 1024);
// console.log(os.homedir());
// console.log(os.tmpdir());

// 2- Path module
import path from "path";
// console.log(path);
// console.log(path.basename("./data/index.js"));
// console.log(path.dirname("./data/index.js"));
// console.log(path.extname("./data/index.js"));
// console.log(path.parse("./data/index.js"));
// console.log(path.join("./", "data", "index.js"));
// console.log(path.resolve(""));
// console.log(path.resolve("./", "data", "index.js"));

// 3- URL module
import url from "url";
// console.log(url);
// console.log(url.parse(path.resolve("./", "data", "index.js")));
// console.log(new URL("https://www.google.com/search?q=nodejs"));
// console.log(new URLSearchParams("https://www.google.com/search?q=nodejs"));
