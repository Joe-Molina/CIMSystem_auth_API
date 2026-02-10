-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_first_contact_lote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "accion" TEXT NOT NULL,
    "contactAvailable" BOOLEAN NOT NULL DEFAULT false,
    "contact" BOOLEAN NOT NULL DEFAULT false,
    "contact_createdAt" DATETIME,
    "response" BOOLEAN NOT NULL DEFAULT false,
    "response_createdAt" DATETIME,
    "contactCall" BOOLEAN NOT NULL DEFAULT false,
    "contactCall_createdAt" DATETIME,
    "responseCall" BOOLEAN NOT NULL DEFAULT false,
    "responseCall_createdAt" DATETIME,
    "PromisePayment" BOOLEAN NOT NULL DEFAULT false,
    "Payment" BOOLEAN NOT NULL DEFAULT false,
    "PaymentId" INTEGER,
    "PromiseNonPayment" BOOLEAN NOT NULL DEFAULT false,
    "note" TEXT,
    "caseStatus" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "first_contact_lote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_first_contact_lote" ("PromiseNonPayment", "PromisePayment", "accion", "caseStatus", "contact", "contactAvailable", "contactCall", "contactCall_createdAt", "contact_createdAt", "createdAt", "id", "note", "response", "responseCall", "responseCall_createdAt", "response_createdAt", "userId") SELECT "PromiseNonPayment", "PromisePayment", "accion", "caseStatus", "contact", "contactAvailable", "contactCall", "contactCall_createdAt", "contact_createdAt", "createdAt", "id", "note", "response", "responseCall", "responseCall_createdAt", "response_createdAt", "userId" FROM "first_contact_lote";
DROP TABLE "first_contact_lote";
ALTER TABLE "new_first_contact_lote" RENAME TO "first_contact_lote";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
