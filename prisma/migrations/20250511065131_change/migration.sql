/*
  Warnings:

  - You are about to drop the column `vendorId` on the `ProductCate` table. All the data in the column will be lost.
  - You are about to drop the `Admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vendor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `ProductCate` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductCate" DROP CONSTRAINT "ProductCate_vendorId_fkey";

-- AlterTable
ALTER TABLE "ProductCate" DROP COLUMN "vendorId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "Admin";

-- DropTable
DROP TABLE "Vendor";

-- AddForeignKey
ALTER TABLE "ProductCate" ADD CONSTRAINT "ProductCate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
