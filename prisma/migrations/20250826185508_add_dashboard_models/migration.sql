/*
  Warnings:

  - You are about to drop the `DSATopic` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InterviewQuestion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_DSATopicResources` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_InterviewQuestionResources` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."_DSATopicResources" DROP CONSTRAINT "_DSATopicResources_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_DSATopicResources" DROP CONSTRAINT "_DSATopicResources_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_InterviewQuestionResources" DROP CONSTRAINT "_InterviewQuestionResources_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_InterviewQuestionResources" DROP CONSTRAINT "_InterviewQuestionResources_B_fkey";

-- DropTable
DROP TABLE "public"."DSATopic";

-- DropTable
DROP TABLE "public"."InterviewQuestion";

-- DropTable
DROP TABLE "public"."_DSATopicResources";

-- DropTable
DROP TABLE "public"."_InterviewQuestionResources";

-- DropEnum
DROP TYPE "public"."DSAName";

-- CreateTable
CREATE TABLE "public"."Stat" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "streak" INTEGER NOT NULL DEFAULT 0,
    "goalsDone" INTEGER NOT NULL DEFAULT 0,
    "habitsTracked" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Stat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Goal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Habit" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "trackedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Habit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stat_userId_key" ON "public"."Stat"("userId");

-- AddForeignKey
ALTER TABLE "public"."Stat" ADD CONSTRAINT "Stat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Goal" ADD CONSTRAINT "Goal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Habit" ADD CONSTRAINT "Habit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
