import http from "http";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
dotenv.config();

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
    const body = req.body;
    res.end("Hello, World!");
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
