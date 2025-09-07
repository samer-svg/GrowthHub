import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email)
    return new Response("Unauthorized", { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      subscriptionStatus: true,
      plan: true,
      subscriptionPeriodEnd: true,
    },
  });

  return new Response(JSON.stringify(user), { status: 200 });
}
