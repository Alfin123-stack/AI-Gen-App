"use client";

interface CreditProgressBarProps {
  percent: number;
  isUnlimited: boolean;
}

export default function CreditProgressBar({
  percent,
  isUnlimited,
}: CreditProgressBarProps) {
  if (isUnlimited) {
    return (
      <div className="w-full h-2 rounded-full overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-green-400 to-green-500 animate-pulse" />
      </div>
    );
  }

  const colorClass =
    percent < 60
      ? "bg-gradient-to-r from-green-400 to-green-500"
      : percent < 90
      ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
      : "bg-gradient-to-r from-red-500 to-pink-500";

  return (
    <div className="w-full h-2 rounded-full overflow-hidden">
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className={`h-2 rounded-full transition-all duration-300 ${colorClass}`}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
