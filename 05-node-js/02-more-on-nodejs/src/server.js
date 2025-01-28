import http from "http";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import events from "events";
dotenv.config();

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
  const method = req.method;

  if (method === "GET") {
    const data = fs.readFileSync(
      path.join(resolvedPath, "./data/text.txt"),
      "utf-8"
    );
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
