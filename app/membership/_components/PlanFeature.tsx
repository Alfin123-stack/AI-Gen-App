import { CheckCircle, XCircle } from "lucide-react";

interface PlanFeatureProps {
  text: string;
  included: boolean;
}

export default function PlanFeature({ text, included }: PlanFeatureProps) {
  return (
    <li className="flex items-center gap-3 text-sm py-1">
      {included ? (
        <CheckCircle className="w-4 h-4 text-green-500" />
      ) : (
        <XCircle className="w-4 h-4 text-red-500" />
      )}
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </li>
  );
}
