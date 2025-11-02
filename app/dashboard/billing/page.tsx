// app/dashboard/billing/page.tsx (Server Component)
import type { Metadata } from "next";
import Billing from "./_components/Billing";

export const metadata: Metadata = {
  title: {
    default: "Billing | AI Content Generator",
    template: "%s | AI Content Generator",
  },
  description: "Manage your subscription, payment methods, and invoices.",
  openGraph: {
    title: "Billing | AI Content Generator",
    description: "Manage your subscription, payment methods, and invoices.",
  },
  alternates: {
    languages: {
      en: "/dashboard/billing",
      id: "/id/dashboard/billing",
    },
  },
};

export default function BillingPage() {
  return <Billing />;
}
