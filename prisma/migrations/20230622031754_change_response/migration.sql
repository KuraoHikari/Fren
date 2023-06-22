/*
  Warnings:

  - You are about to drop the column `Dislike` on the `responses` table. All the data in the column will be lost.
  - You are about to drop the column `Like` on the `responses` table. All the data in the column will be lost.
  - You are about to drop the column `desc` on the `responses` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `responses` table. All the data in the column will be lost.
  - Added the required column `dislike` to the `responses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like` to the `responses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "responses" DROP COLUMN "Dislike",
DROP COLUMN "Like",
DROP COLUMN "desc",
DROP COLUMN "imageUrl",
ADD COLUMN     "dislike" BOOLEAN NOT NULL,
ADD COLUMN     "like" BOOLEAN NOT NULL;
