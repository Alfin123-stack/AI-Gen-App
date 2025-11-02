"use client";

import Image from "next/image";

interface QueryCardHeaderProps {
  icon: string;
  name: string;
  createdAt: string;
}

export default function QueryCardHeader({
  icon,
  name,
  createdAt,
}: QueryCardHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 w-fit">
        <Image
          src={icon}
          alt={name}
          width={36}
          height={36}
          className="object-contain"
        />
      </div>
      <div>
        <h2 className="text-base font-semibold text-gray-800 dark:text-gray-100">
          {name}
        </h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
