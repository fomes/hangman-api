import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const port = process.env.PORT || 3333;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello API" });
});

app.get("/ranking", async (req, res) => {
  const rank = await prisma.ranking.findMany({});

  res.status(200).send({ rank });
});

app.post("/new", async (req, res) => {
  const { nick, points } = req.body;

  const alreadyNick = await prisma.ranking.findFirst({
    where: {
      nick,
    },
  });

  if (!alreadyNick) {
    await prisma.ranking.create({
      data: {
        nick,
        points,
      },
    });
  } else {
    await prisma.ranking.update({
      where: {
        nick,
      },

      data: {
        points,
      },
    });
  }

  res.status(201).send({ message: "success" });
});

app.listen(port, () => {
  console.log("Online...");
});