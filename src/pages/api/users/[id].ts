import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import { userUpdateSchema } from "@/pages/schemas/user";
import { z } from "zod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const userId = String(id)

  if (!id ) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    switch (req.method) {
      case "GET": {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
          return res.status(404).json({ error: "User Not Found" });
        }
        return res.status(200).json(user);
      }

      case "PUT": {
        const parsed = userUpdateSchema.parse(req.body);
        const updateData: Prisma.UserUpdateInput = {};

        if (parsed.email) updateData.email = parsed.email.toLowerCase();
        if (parsed.password)
          updateData.password = await bcrypt.hash(parsed.password, 10);
        if (parsed.userName) updateData.userName = parsed.userName;

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: updateData,
        });

        return res.status(200).json(updatedUser);
      }

      case "DELETE": {
        await prisma.user.delete({ where: { id: userId } });
        return res.status(204).end();
      }

      default: {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }
    const message = error instanceof Error ? error.message : "Unknown error";
    return res.status(500).json({ error: "Server Error", details: message });
  }
}