/*
  Warnings:

  - A unique constraint covering the columns `[locationId,productId]` on the table `inventories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "inventories_locationId_productId_key" ON "inventories"("locationId", "productId");
