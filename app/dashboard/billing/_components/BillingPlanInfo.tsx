import { CreditCard } from "lucide-react";

interface BillingPlanInfoProps {
  subscribing: boolean;
  proPlan: string;
  freePlan: string;
  proCurrent: string;
  freeCurrent: string;
}

export default function BillingPlanInfo({
  subscribing,
  proPlan,
  freePlan,
  proCurrent,
  freeCurrent,
}: BillingPlanInfoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-3 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
        <CreditCard className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {subscribing ? proPlan : freePlan}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {subscribing ? proCurrent : freeCurrent}
        </p>
      </div>
    </div>
  );
}
