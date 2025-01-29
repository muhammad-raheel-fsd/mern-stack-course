import http from "http";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import events from "events";
dotenv.config();

// const users = ["Usman", "John", "Jane", "Doe"];
// console.log(users.includes("john"));

// export const generateRandomString = (length = 10) => {
//   return Math.random()
//     .toString(36)
//     .substring(2, length + 2);
// };

console.log(Math.floor(Math.random() * 2));

// const str = "A quick brown fox jumps over the lazy dog";
// const str = "a-quick-brown-fox-jumps-over-the-lazy-dog";
// console.log(str.split("-"));

// const pathname = "/api/v1/users/123";
const pathname = "/written";
console.log(pathname.split("/")[1]);

const eventEmitter = new events.EventEmitter();

//Create an event handler:
const myEventHandler = function () {
  console.log("I hear a cry!");
};

//Assign the event handler to an event:
eventEmitter.on("cry", myEventHandler);

//Fire the 'scream' event:
// eventEmitter.emit("scream");

const PORT = process.env.PORT ?? 3000;
const resolvedPath = path.resolve(path.dirname(""), "src");

const server = http.createServer((req, res) => {
  const files = fs.globSync(path.join(resolvedPath, "./data/*.txt"));
  const randomFilePath = files[Math.floor(Math.random() * files.length)];
  console.log("Random File Path ==========>", randomFilePath);
  const method = req.method;
  const url = new URL(`http://localhost:${PORT}${req.url}`);
  const dynamicPathFromUrl =
    url.pathname.split("/")[1] &&
    path.join(resolvedPath, `./data/${url.pathname.split("/")[1]}.txt`);
  const pathname =
    dynamicPathFromUrl && files.includes(dynamicPathFromUrl)
      ? dynamicPathFromUrl
      : randomFilePath;
  const searchParams = url.searchParams;
  if (method === "GET") {
    const data = fs.readFileSync(pathname, "utf-8");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(data);
  }

  if (method === "POST") {
    eventEmitter.emit("cry");
    let body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      fs.writeFileSync(
        path.join(resolvedPath, "./data/written.txt"),
        body,
        "utf-8"
      );
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "File created successfully",
        })
      );
    });
  }

  if (method === "PUT") {
    res.end("Hello, World!");
  }

  if (method === "DELETE") {
    res.end("Hello, World!");
  }

  //   const url = req.url;
  //   const headers = req.headers;
  //   res.end("Hello, World!");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
