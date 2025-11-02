"use client";
import PlanActionButton from "@/components/PlanActionButton";
import BillingPlanInfo from "./BillingPlanInfo";

interface BillingCurrentPlanProps {
  subscribing: boolean;
  t: {
    proPlan: string;
    freePlan: string;
    proCurrent: string;
    freeCurrent: string;
    manage: string;
    upgrade: string;
  };
  onManage: () => void;
}

export default function BillingCurrentPlan({
  subscribing,
  t,
  onManage,
}: BillingCurrentPlanProps) {
  return (
    <div
      className="p-6 rounded-2xl border shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm 
                 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <BillingPlanInfo
        subscribing={subscribing}
        proPlan={t.proPlan}
        freePlan={t.freePlan}
        proCurrent={t.proCurrent}
        freeCurrent={t.freeCurrent}
      />

      {subscribing ? (
        <PlanActionButton
          variant="manage"
          label={t.manage}
          onClick={onManage}
        />
      ) : (
        <PlanActionButton
          variant="upgrade"
          label={t.upgrade}
          onClick={() => (window.location.href = "/membership")}
        />
      )}
    </div>
  );
}
