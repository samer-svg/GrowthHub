// src/pages/api/stats.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Get user
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      stats: true,
      goals: true,
      habits: true,
    },
  });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  // If no stats record exists yet, create one
  if (!user.stats) {
    await prisma.stat.create({
      data: {
        userId: user.id,
        streak: 0,
        goalsDone: 0,
        habitsTracked: 0,
      },
    });
  }

  // Count completed goals and habits
  const completedGoals = await prisma.goal.count({
    where: { userId: user.id, completed: true },
  });

  const trackedHabits = await prisma.habit.count({
    where: { userId: user.id },
  });

  // Update stats table
  const updatedStats = await prisma.stat.update({
    where: { userId: user.id },
    data: {
      goalsDone: completedGoals,
      habitsTracked: trackedHabits,
      // you can add streak logic here, e.g., checking consecutive days
    },
  });

  return res.json(updatedStats);
}
