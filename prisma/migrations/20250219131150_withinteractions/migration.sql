/*
  Warnings:

  - Made the column `paymentId` on table `interactions` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_interactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accion" INTEGER NOT NULL,
    "paymentId" INTEGER NOT NULL,
    "interaction_TypeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "interactions_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "interactions_interaction_TypeId_fkey" FOREIGN KEY ("interaction_TypeId") REFERENCES "interaction_Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_interactions" ("accion", "createdAt", "id", "interaction_TypeId", "paymentId") SELECT "accion", "createdAt", "id", "interaction_TypeId", "paymentId" FROM "interactions";
DROP TABLE "interactions";
ALTER TABLE "new_interactions" RENAME TO "interactions";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
