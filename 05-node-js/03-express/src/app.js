import http from "http";
import express from "express";
import dotenv from "dotenv";
import { db } from "./data/db.js";

const arr = ["raheel", "rehman", "basit", "usman"];

// const str = "Allexander";

// console.log("includes ========>", str.search("z"));

console.log(
  "every",
  arr.every((name) => name === "usman")
);
console.log(
  "some",
  arr.some((name) => name === "usman")
);

// const arr = [
//   { id: 1, name: "raheel" },
//   { id: 2, name: "rehman" },
//   { id: 3, name: "basit" },
//   { id: 4, name: "usman" },
// ];

// console.log(arr.find((user) => user.name === "basit"));

dotenv.config();
const PORT = process.env.PORT ?? 8080;

const app = express(http.createServer());

app.get("/homes", (req, res) => {
  const query = req.query;
  if (query.search) {
    const homes = db.homes.filter((home) => {
      return home.title.toLowerCase().search(query.search.toLowerCase()) !== -1;
    });
    return res.status(200).json(homes);
  }
  if (Object.keys(query).length > 0) {
    const homes = db.homes.filter((home) => {
      return Object.keys(query).every((key) => {
        return home[key] === query[key];
      });
    });
    return res.status(200).json(homes);
  }
  return res.status(200).json(db.homes);
});

app.get("/homes/:id", (req, res) => {
  const { id } = req.params;
  const home = db.homes.find((home) => home.id === id);
  res.status(200).json(home);
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
