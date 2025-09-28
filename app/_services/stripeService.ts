"use server";

import db from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import Transaction from "../_models/transaction";
import stripe from "@/lib/stripe";

interface CheckoutSessionResponse {
  url?: string;
  error?: string;
}

export async function createCheckoutSession(): Promise<CheckoutSessionResponse> {
  const user = await currentUser();
  const customerEmail = user?.emailAddresses[0]?.emailAddress;

  if (!customerEmail) {
    return { error: "No email found for the user" };
  }

  try {
    await db();

    // Check existing transaction
    const existingTransaction = await Transaction.findOne({ customerEmail });

    if (existingTransaction) {
      const subscriptions = await stripe.subscriptions.list({
        customer: existingTransaction.customerId,
        status: "all",
        limit: 1,
      });

      const currentSubscription = subscriptions.data.find(
        (sub) => sub.status === "active"
      );

      if (currentSubscription) {
        return { error: "You already have an active subscription" };
      }
    }

    // Create new checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_MONTLY_PLAN_ID!,
          quantity: 1,
        },
      ],
      mode: "subscription",
      customer_email: customerEmail,
      success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
    });

    return { url: session.url ?? undefined };
  } catch (error) {
    console.error("Error creating Stripe Checkout session:", error);
    return { error: "Error creating Stripe Checkout session" };
  }
}

export async function checkUserSubscription() {
  const user = await currentUser();
  const customerEmail = user?.emailAddresses[0]?.emailAddress;
  try {
    // Find the latest transaction for the given customer email
    const transaction = await Transaction.findOne({
      customerEmail,
      status: "complete",
    });
    if (transaction && transaction.subscriptionId) {
      // Retrieve subscription details from Stripe
      const subscription = await stripe.subscriptions.retrieve(
        transaction.subscriptionId
      );
      // Check if the subscription status is active
      if (subscription.status === "active") {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    }
  } catch (error) {
    console.error("Error checking subscription status:", error);
    return {
      message: "Error checking subscription status. Please try again later.",
    };
  }
}

export async function createCustomerPortalSession() {
  const user = await currentUser();
  const customerEmail = user?.emailAddresses[0]?.emailAddress;
  try {
    const transaction = await Transaction.findOne({
      customerEmail,
    });
    const session = await stripe.billingPortal.sessions.create({
      customer: transaction.customerId,
      return_url: `${process.env.NEXT_PUBLIC_URL}/dashboard`,
    });
    return session.url ?? `${process.env.NEXT_PUBLIC_URL}/dashboard`;
  } catch (error) {
    console.error("Error creating Stripe Customer Portal session:", error);
    return null;
  }
}
