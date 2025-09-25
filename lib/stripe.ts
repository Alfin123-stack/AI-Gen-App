import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}

const stripe = new Stripe(secretKey, {
  apiVersion: "2025-08-27.basil",
});
export default stripe;
