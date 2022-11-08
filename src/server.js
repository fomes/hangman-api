import express from "express";

const app = express();
const port = process.env.PORT || 3333;

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello API" });
});

app.listen(port, () => {
  console.log("Online...");
});
