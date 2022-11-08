-- CreateTable
CREATE TABLE "Ranking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nick" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Ranking_nick_key" ON "Ranking"("nick");
