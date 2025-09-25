"use client";

interface HeaderProps {
  t: { title: string; subtitle: string };
}

export default function Header({ t }: HeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        {t.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">{t.subtitle}</p>
    </div>
  );
}
