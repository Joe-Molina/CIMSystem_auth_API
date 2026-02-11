-- CreateTable
CREATE TABLE "comprobantes_de_pago" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accion" TEXT NOT NULL,
    "tipo_pago" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "monto" REAL NOT NULL,
    "verificacion" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'PENDIENTE',
    "msj" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL
);
