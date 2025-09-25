import { useCredit } from "@/app/_contexts/CreditContext";
import { useLanguage } from "@/app/_contexts/LanguageContext";
import { createCustomerPortalSession } from "@/app/_services/stripeService";

const translations = {
  en: {
    title: "Billing",
    subtitle: "Manage your subscription, payment methods, and invoices",
    freePlan: "Free Plan",
    proPlan: "Pro Plan",
    freeDesc: "Basic features for individuals getting started.",
    proDesc: "Advanced features for power users.",
    freeCurrent: "You are currently on the Free plan.",
    proCurrent: "You are currently subscribed to the Pro plan.",
    manage: "Manage Subscription",
    upgrade: "Upgrade to Pro",
    currentPlan: "Current Plan",
    notActive: "Not Active",
    freeFeatures: ["5 queries / month", "Community support"],
    proFeatures: [
      "Unlimited queries",
      "Priority support",
      "Access to new templates",
    ],
  },
  id: {
    title: "Tagihan",
    subtitle: "Kelola langganan Anda, metode pembayaran, dan faktur",
    freePlan: "Paket Gratis",
    proPlan: "Paket Pro",
    freeDesc: "Fitur dasar untuk pemula.",
    proDesc: "Fitur lanjutan untuk pengguna tingkat lanjut.",
    freeCurrent: "Anda sedang menggunakan Paket Gratis.",
    proCurrent: "Anda berlangganan Paket Pro.",
    manage: "Kelola Langganan",
    upgrade: "Upgrade ke Pro",
    currentPlan: "Paket Saat Ini",
    notActive: "Tidak Aktif",
    freeFeatures: ["5 kueri / bulan", "Dukungan komunitas"],
    proFeatures: [
      "Kueri tanpa batas",
      "Dukungan prioritas",
      "Akses ke template baru",
    ],
  },
};

export function useBilling() {
  const { subscribing } = useCredit();
  const { language } = useLanguage();
  const t = translations[language];

  const handlePortalClick = async () => {
    try {
      const response = await createCustomerPortalSession();
      if (response) {
        window.location.href = response;
      } else {
        console.error("Stripe portal session URL is null.");
      }
    } catch (err) {
      console.error("Failed to create portal session:", err);
    }
  };

  return { subscribing, t, handlePortalClick };
}
