// app/dashboard/history/page.tsx
import type { Metadata } from "next";
import History from "./_components/History";

export const metadata: Metadata = {
  title: "History | AI Content Generator",
  description:
    "View and manage your past AI queries. Search, filter, and revisit generated content in your history.",
  openGraph: {
    title: "History | AI Content Generator",
    description:
      "Lihat dan kelola riwayat kueri AI Anda. Cari, filter, dan tinjau ulang konten yang pernah dihasilkan.",
    url: "https://yourdomain.com/dashboard/history",
    siteName: "AI Content Generator",
    images: [
      {
        url: "https://yourdomain.com/og-history.png",
        width: 1200,
        height: 630,
        alt: "History Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "History | AI Content Generator",
    description:
      "Akses riwayat kueri Anda di dashboard AI. Kelola, cari, dan buka ulang hasil konten dengan mudah.",
    images: ["https://yourdomain.com/og-history.png"],
    creator: "@your_twitter",
  },
};

export default function Page() {
  return <History />;
}
