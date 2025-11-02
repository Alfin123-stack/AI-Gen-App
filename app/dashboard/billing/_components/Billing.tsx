"use client";
import { useBilling } from "@/app/_hooks/useBilling";
import PlanCard from "@/components/plan-card/PlanCard";
import BillingHeader from "./BillingHeader";
import BillingCurrentPlan from "./BillingCurrentPlan";

export default function Billing() {
  const { subscribing, t, handlePortalClick } = useBilling();

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <BillingHeader t={t} />
      <BillingCurrentPlan
        subscribing={subscribing}
        t={t}
        onManage={handlePortalClick}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanCard
          title={t.freePlan}
          description={t.freeDesc}
          features={t.freeFeatures}
          isActive={!subscribing}
          t={t}
        />
        <PlanCard
          title={t.proPlan}
          description={t.proDesc}
          features={t.proFeatures}
          isActive={subscribing}
          isPro
          t={t}
          onManage={handlePortalClick}
        />
      </div>
    </div>
  );
}
