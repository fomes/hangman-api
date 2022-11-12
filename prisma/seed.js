import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.ranking.create({
    data: {
      nick: "Fomes",
      points: 100,
    },
  });
}

main();
