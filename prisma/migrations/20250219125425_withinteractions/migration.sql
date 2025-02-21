/*
  Warnings:

  - You are about to drop the `interactionType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `observation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `contested` on the `interactions` table. All the data in the column will be lost.
  - Added the required column `paymentId` to the `interactions` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "interactionType";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "observation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "interaction_Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "factura" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_interactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accion" INTEGER NOT NULL,
    "interactionTypeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentId" INTEGER NOT NULL,
    "interaction_TypeId" INTEGER,
    CONSTRAINT "interactions_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "interactions_interaction_TypeId_fkey" FOREIGN KEY ("interaction_TypeId") REFERENCES "interaction_Type" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_interactions" ("accion", "createdAt", "id", "interactionTypeId") SELECT "accion", "createdAt", "id", "interactionTypeId" FROM "interactions";
DROP TABLE "interactions";
ALTER TABLE "new_interactions" RENAME TO "interactions";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
