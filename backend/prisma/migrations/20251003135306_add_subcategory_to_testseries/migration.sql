/*
  Warnings:

  - You are about to drop the column `score` on the `Activity` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `score` on the `Resource` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Activity" DROP COLUMN "score";

-- AlterTable
ALTER TABLE "public"."Question" DROP COLUMN "score";

-- AlterTable
ALTER TABLE "public"."Resource" DROP COLUMN "score";

-- AlterTable
ALTER TABLE "public"."TestSeries" ADD COLUMN     "subcategory" TEXT;
