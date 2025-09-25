"use client";
import { Header, CurrentPlan, PlanCard } from ".";
import { useBilling } from "@/app/_hooks/useBilling";

export default function Billing() {
  const { subscribing, t, handlePortalClick } = useBilling();

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8">
      <Header t={t} />
      <CurrentPlan
        subscribing={subscribing}
        t={t}
        onManage={handlePortalClick}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PlanCard
          title={t.freePlan}
          desc={t.freeDesc}
          features={t.freeFeatures}
          isActive={!subscribing}
          t={t}
        />
        <PlanCard
          title={t.proPlan}
          desc={t.proDesc}
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
