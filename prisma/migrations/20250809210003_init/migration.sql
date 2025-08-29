-- CreateEnum
CREATE TYPE "public"."SkillLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "public"."DifficultyLevel" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "public"."ResourceType" AS ENUM ('VIDEO', 'COURSE', 'ARTICLE', 'DOCUMENTATION');

-- CreateEnum
CREATE TYPE "public"."DSAName" AS ENUM ('ARRAYS_HASHMAPS', 'DYNAMIC_PROGRAMMING');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserSkill" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "skillName" TEXT NOT NULL,
    "skillLevel" "public"."SkillLevel" NOT NULL,

    CONSTRAINT "UserSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProjectIdea" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficultyLevel" "public"."DifficultyLevel" NOT NULL,
    "requiredSkills" TEXT[],
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectIdea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."LearningPath" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "LearningPath_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Resource" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" "public"."ResourceType" NOT NULL,
    "learningPathId" INTEGER NOT NULL,

    CONSTRAINT "Resource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."DSATopic" (
    "id" SERIAL NOT NULL,
    "name" "public"."DSAName" NOT NULL,
    "slug" TEXT NOT NULL,
    "difficulty" "public"."DifficultyLevel" NOT NULL,

    CONSTRAINT "DSATopic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InterviewQuestion" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "questionBody" TEXT NOT NULL,
    "difficulty" "public"."DifficultyLevel" NOT NULL,
    "topic" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InterviewQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_DSATopicResources" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_DSATopicResources_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_InterviewQuestionResources" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_InterviewQuestionResources_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserSkill_userId_skillName_key" ON "public"."UserSkill"("userId", "skillName");

-- CreateIndex
CREATE INDEX "_DSATopicResources_B_index" ON "public"."_DSATopicResources"("B");

-- CreateIndex
CREATE INDEX "_InterviewQuestionResources_B_index" ON "public"."_InterviewQuestionResources"("B");

-- AddForeignKey
ALTER TABLE "public"."UserSkill" ADD CONSTRAINT "UserSkill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Resource" ADD CONSTRAINT "Resource_learningPathId_fkey" FOREIGN KEY ("learningPathId") REFERENCES "public"."LearningPath"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_DSATopicResources" ADD CONSTRAINT "_DSATopicResources_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."DSATopic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_DSATopicResources" ADD CONSTRAINT "_DSATopicResources_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_InterviewQuestionResources" ADD CONSTRAINT "_InterviewQuestionResources_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."InterviewQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_InterviewQuestionResources" ADD CONSTRAINT "_InterviewQuestionResources_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;
