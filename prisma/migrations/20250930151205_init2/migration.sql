-- CreateTable
CREATE TABLE "first_contact_lote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "accion" INTEGER NOT NULL,
    "contact" BOOLEAN NOT NULL DEFAULT false,
    "contact_createdAt" DATETIME,
    "response" BOOLEAN NOT NULL DEFAULT false,
    "response_createdAt" DATETIME,
    CONSTRAINT "first_contact_lote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "datos_actualizados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accion" INTEGER NOT NULL,
    "tipo_socio" INTEGER NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "cedula" INTEGER NOT NULL,
    "parentesco" TEXT NOT NULL,
    "rif" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "profesion" TEXT NOT NULL,
    "nacionalidad" TEXT NOT NULL,
    "edo_civil" TEXT NOT NULL,
    "fecha_nacimiento" TEXT NOT NULL,
    "lugar_nacimiento" TEXT NOT NULL,
    "residencia" TEXT NOT NULL,
    "telefono_celular" TEXT NOT NULL,
    "telofono_hogar" TEXT NOT NULL,
    "telefono_trabajo" TEXT NOT NULL
);
