// import "./practice/index.js";
// HTTP module
import http from "http";

// console.log(http)

const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log("REQ ==========>", req);

  //   res.writeHead(200, { "Content-Type": "text/html" });
  //   res.write("<h1>SERVER RESPONDED!</h1>");
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.writeHead(404, { "Content-Type": "application/json" });
  res.writeHead(500, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ message: "SERVER RESPONDED!" }));
  res.end();

  setTimeout(() => res.end(), 1000);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.on("connect", (socket) => {
//   console.log("New connection");
// });

// console.log("SERVER=====>", server);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end("<h1>Hello World</h1>");
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
