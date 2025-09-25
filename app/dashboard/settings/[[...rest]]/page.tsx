// app/dashboard/settings/page.tsx
import type { Metadata } from "next";
import Setting from "./Setting";

export const metadata: Metadata = {
  title: "Settings | AI Content Generator",
  description:
    "Manage your account settings, profile, and preferences for your AI Content Generator dashboard.",
  openGraph: {
    title: "Settings | AI Content Generator",
    description:
      "Kelola pengaturan akun, profil, dan preferensi Anda di dashboard AI Content Generator.",
    url: "https://yourdomain.com/dashboard/settings",
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-settings.png",
        width: 1200,
        height: 630,
        alt: "Settings Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Settings | AI Content Generator",
    description:
      "Atur preferensi akun, kelola profil, dan sesuaikan pengalaman dashboard AI Anda.",
    images: ["https://yourdomain.com/og-settings.png"],
    creator: "@your_twitter",
  },
};

export default function Page() {
  return <Setting />;
}
