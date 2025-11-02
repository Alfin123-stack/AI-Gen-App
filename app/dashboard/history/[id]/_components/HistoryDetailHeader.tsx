"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function HistoryDetailHeader({
  template,
  createdAt,
  backLabel,
}: {
  template: { icon: string; name: string };
  createdAt: string;
  backLabel: string;
}) {
  return (
    <div
      className="flex items-center justify-between p-5 rounded-2xl border shadow-sm 
      bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/40">
          <Image
            src={template.icon}
            alt={template.name}
            width={48} // w-12 = 48px
            height={48} // h-12 = 48px
            className="object-contain rounded-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {template.name}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      </div>
      <Link
        href="/dashboard/history"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        {backLabel}
      </Link>
    </div>
  );
}
