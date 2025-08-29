/*
  Warnings:

  - You are about to drop the column `subscriptoinPeriodEnd` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "subscriptoinPeriodEnd",
ADD COLUMN     "subscriptionPeriodEnd" TIMESTAMP(3);
