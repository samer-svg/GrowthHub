-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "periodEnd" TIMESTAMP(3),
ADD COLUMN     "plan" TEXT,
ADD COLUMN     "stripeCustomerId" TEXT,
ADD COLUMN     "subscriptionStatus" TEXT;
