import http from "http";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT ?? 8080;

const app = express(http.createServer());

app.get("/", (req, res) => {
  //   res.header("Content-Type", "application/json");
  res.status(200).send({ message: "Hello World" });
  //   res.send({ message: "Hello World" });
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

app.put("/", (req, res) => {
  res.send("Hello World");
});

app.delete("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
