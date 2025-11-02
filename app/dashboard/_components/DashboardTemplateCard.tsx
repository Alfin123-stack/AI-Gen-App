"use client";

import Image from "next/image";
import Link from "next/link";

interface TemplateCardProps {
  slug: string;
  icon: string;
  name: string;
  desc: string;
}

export default function DashboardTemplateCard({
  slug,
  icon,
  name,
  desc,
}: TemplateCardProps) {
  return (
    <Link href={`/dashboard/template/${slug}`}>
      <div
        className="group p-6 border rounded-xl shadow-sm 
                   bg-white/70 dark:bg-gray-900/60 backdrop-blur-md
                   hover:shadow-xl hover:-translate-y-1 hover:border-indigo-500 
                   transition-all duration-300 cursor-pointer h-full flex flex-col justify-between">
        {/* Icon + Title */}
        <div className="flex flex-col gap-3 mb-4">
          <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 w-fit">
            <Image
              src={icon}
              alt={name}
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 transition-colors">
            {name}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>
      </div>
    </Link>
  );
}
