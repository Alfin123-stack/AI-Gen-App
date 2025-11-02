"use client";

export default function PlanCardDescription({ text }: { text: string }) {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{text}</p>
  );
}
