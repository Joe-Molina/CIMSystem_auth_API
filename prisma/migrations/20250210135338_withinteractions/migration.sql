/*
  Warnings:

  - You are about to drop the `Emails` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Msj_ws` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `contested` on the `observation` table. All the data in the column will be lost.
  - Added the required column `interactionsId` to the `observation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `observation` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Emails";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Msj_ws";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "interactionType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "interactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accion" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contested" BOOLEAN NOT NULL DEFAULT false,
    "interactionTypeId" INTEGER NOT NULL,
    CONSTRAINT "interactions_interactionTypeId_fkey" FOREIGN KEY ("interactionTypeId") REFERENCES "interactionType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_observation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "interactionsId" INTEGER NOT NULL,
    CONSTRAINT "observation_interactionsId_fkey" FOREIGN KEY ("interactionsId") REFERENCES "interactions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_observation" ("createdAt", "id") SELECT "createdAt", "id" FROM "observation";
DROP TABLE "observation";
ALTER TABLE "new_observation" RENAME TO "observation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
