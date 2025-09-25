// app/dashboard/DashboardClient.tsx
"use client";

import { Suspense } from "react";
import PageContent from "./PageContent"; // tetap pakai file yang sudah ada

export default function Dashboard() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <PageContent />
    </Suspense>
  );
}
