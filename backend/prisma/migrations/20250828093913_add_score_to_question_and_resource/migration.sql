-- AlterTable
ALTER TABLE "public"."Question" ADD COLUMN     "score" DOUBLE PRECISION NOT NULL DEFAULT 1.0;

-- AlterTable
ALTER TABLE "public"."Resource" ADD COLUMN     "score" DOUBLE PRECISION;
