import http from "http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT ?? 3000;
console.log(PORT);
http
  .createServer((req, res) => {
    // res.end("Hello, World!");
    // res.end("<h1>Hello, World!</h1>");
    // res.writeHead(200, { "Content-Type": "application/json" });

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.write(
      JSON.stringify({
        message: "Not Found",
        status: 200,
        data: {
          name: "John Doe",
          age: 20,
        },
      })
    );
    res.end();
    // res.end(
    //   JSON.stringify({
    //     message: "Found",
    //     status: 200,
    //     data: {
    //       name: "John Doe",
    //       age: 20,
    //     },
    //   })
    // );
  })
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT} is running...`);
  });
