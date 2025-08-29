// src/app/api/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

// App Router does NOT use default export
export const POST = async (req: NextRequest) => {
  try {
    // Convert request body to buffer (Stripe requires raw body)
    const buf = Buffer.from(await req.arrayBuffer());
    const sig = req.headers.get("stripe-signature") || "";

    const event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        const userEmail = session.customer_email;
        if (userEmail) {
          await prisma.user.update({
            where: { email: userEmail },
            data: {
              stripeCustomerId: session.customer as string,
              stripeSubscriptionId: session.subscription as string | null,
              plan: "pro",
              subscriptionStatus: "active",
              periodEnd: session.expires_at
                ? new Date(session.expires_at * 1000)
                : null,
            },
          });

          console.log(`✅ User ${userEmail} upgraded to Pro`);
        }
        break;

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;

        // Extract needed info
        const status = subscription.status;
        const currentPeriodEnd = new Date(
          (subscription as any)["current_period_end"] * 1000
        );

        // Find user by Stripe customerId
        await prisma.user.update({
          where: { stripeCustomerId: subscription.customer as string },
          data: {
            subscriptionStatus: status,
            subscriptionPeriodEnd: currentPeriodEnd,
            stripeSubscriptionId: subscription.id, // keep it fresh
          },
        });

        console.log(
          `Subscription updated: ${subscription.id}, status: ${status}`
        );
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;

        await prisma.user.update({
          where: { stripeCustomerId: subscription.customer as string },
          data: {
            subscriptionStatus: "canceled",
            subscriptionPeriodEnd: null,
          },
        });

        console.log(`Subscription canceled: ${subscription.id}`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
};
