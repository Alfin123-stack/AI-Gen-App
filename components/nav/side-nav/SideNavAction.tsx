"use client";

import SignUpModal from "@/components/ui/SignUpModal";
import { Translations } from "../SideNav";
import PlanActionButton from "@/components/PlanActionButton";

export default function SideNavAction({
  t,
  isUnlimited,
  isOverLimit,
}: {
  t: Translations;
  isUnlimited: boolean;
  isOverLimit: boolean;
}) {
  return (
    <div className="mt-4">
      {isUnlimited ? (
        <PlanActionButton
          variant="upgrade"
          label={t.plan.manage}
          href="/dashboard/billing"
          className="w-full justify-center"
        />
      ) : (
        <SignUpModal isOverLimit={isOverLimit} />
      )}
    </div>
  );
}
