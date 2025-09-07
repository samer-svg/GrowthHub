import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { userCreateSchema } from "@/schemas/user";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

// GET /api/users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users", details: error },
      { status: 500 },
    );
  }
}

// POST /api/users
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = userCreateSchema.parse(body);

    const existingUser = await prisma.user.findFirst({
      where: { email: parsed.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(parsed.password, 10);
    const newUser = await prisma.user.create({
      data: {
        userName: parsed.userName,
        email: parsed.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      {
        id: newUser.id,
        email: newUser.email,
        userName: newUser.userName,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    const message = error instanceof Error ? error.message : "Unknown Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
