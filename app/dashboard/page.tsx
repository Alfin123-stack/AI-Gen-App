// app/dashboard/page.tsx
import type { Metadata } from "next";
import Dashboard from "./_components/Dashboard";

export const metadata: Metadata = {
  title: "Dashboard | AI Content Generator",
  description:
    "Access your personalized AI dashboard. Manage projects, track usage, and explore all AI tools.",
  openGraph: {
    title: "Dashboard | AI Content Generator",
    description:
      "Akses dashboard AI Anda. Kelola proyek, pantau penggunaan, dan jelajahi semua tools.",
    url: "https://yourdomain.com/dashboard",
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboard | AI Content Generator",
    description:
      "Nikmati pengalaman personal di dashboard AI Anda. Kelola konten, cek progress, dan gunakan fitur premium.",
    images: ["https://yourdomain.com/og-dashboard.png"],
    creator: "@your_twitter",
  },
};

export default function Page() {
  return <Dashboard />;
}
