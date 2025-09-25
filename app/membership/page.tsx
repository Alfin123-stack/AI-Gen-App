import type { Metadata } from "next";
import Membership from "./_components/Membership";

// ✅ Metadata bilingual (EN & ID)
export const metadata: Metadata = {
  title: "Membership Plans | AI Content Generator",
  description:
    "Choose the plan that best fits your needs. Start free or upgrade to premium for unlimited AI tools.",
  openGraph: {
    title: "Membership Plans | AI Content Generator",
    description:
      "Pilih paket keanggotaan sesuai kebutuhan Anda. Mulai gratis atau upgrade ke premium dengan fitur AI tanpa batas.",
    url: "https://yourdomain.com/membership",
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-membership.png",
        width: 1200,
        height: 630,
        alt: "Membership Plans Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Plans | AI Content Generator",
    description:
      "Nikmati akses penuh ke generator konten AI. Mulai gratis atau berlangganan bulanan untuk fitur tak terbatas.",
    images: ["https://yourdomain.com/og-membership.png"],
    creator: "@your_twitter",
  },
};

export default function Page() {
  return <Membership />;
}
