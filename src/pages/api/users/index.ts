import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { userCreateSchema } from "@/schemas/user";
import { z } from "zod";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {

      case "GET": {
        const users = await prisma.user.findMany();
        return res.status(200).json(users);
      }

      case "POST": {
        const parsed = userCreateSchema.parse(req.body);

        const existingUser = await prisma.user.findFirst({
          where: { email: parsed.email },
        });
        if (existingUser) {
          return res.status(409).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(parsed.password, 10);
        const newUser = await prisma.user.create({
          data: {
            userName: parsed.userName,
            email: parsed.email,
            password: hashedPassword,
          },
        });

        return res.status(201).json({
          id: newUser.id,
          email: newUser.email,
          userName: newUser.userName,
        });
      }

      default: {
        res.setHeader("Allow", ["GET", "POST"]);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
      }
    }
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues });
    }
    const message = error instanceof Error ? error.message : "Unknown Error";
    return res.status(500).json({ error: message });
  }
}