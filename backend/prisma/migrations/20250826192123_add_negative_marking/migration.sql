-- AlterTable
ALTER TABLE "public"."TestSeries" ADD COLUMN     "hasNegativeMarking" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "negativeMarkingValue" DOUBLE PRECISION NOT NULL DEFAULT 0.25;
