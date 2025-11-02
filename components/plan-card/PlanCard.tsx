"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { createCheckoutSession } from "@/app/_services/stripeService";
import PlanCardHeader from "./PlanCardHeader";
import PlanCardDescription from "./PlanCardDescription";
import PlanCardFeatures from "./PlanCardFeatures";
import PlanActionButton from "@/components/PlanActionButton";
import { getLabel, getVariant } from "@/lib/utils";
import { Feature, PlanCardProps } from "@/lib/types";

/* -------------------- Component -------------------- */
export default function PlanCard({
  title,
  description,
  icon,
  features,
  text,
  isActive = false,
  isPro = false,
  highlighted = false,
  disable = false,
  t,
  onManage,
}: PlanCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const variant = getVariant(disable, highlighted, isPro, isActive);
  const label = getLabel(text, t, isActive, isPro);
  const handleCheckout = async () => {
    if (disable) return;

    setIsLoading(true);
    try {
      const response = await createCheckoutSession();

      if (response.error) {
        toast.error(response.error);
        return;
      }

      if (response.url) {
        window.location.href = response.url;
      }
    } catch (err) {
      toast.error(`An unexpected error occurred: ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    if (isPro && !isActive) {
      window.location.assign("/membership");
    } else if (onManage) {
      onManage();
    } else {
      handleCheckout();
    }
  };

  /* -------------------- Styles -------------------- */
  const baseCard =
    "p-6 rounded-2xl border shadow-sm backdrop-blur-sm flex flex-col justify-between transition-colors";
  const cardStyle = highlighted
    ? "ring-2 ring-indigo-500 border-indigo-500 bg-white/95 dark:bg-gray-900/80"
    : isPro
    ? isActive
      ? "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/20 border-indigo-300"
      : "bg-white/95 dark:bg-gray-900/80"
    : "bg-white/95 dark:bg-gray-900/80";

  return (
    <div className={`${baseCard} ${cardStyle}`}>
      {/* Header */}
      {icon ? (
        <>
          <PlanCardHeader icon={icon} title={title} />
          {description && <PlanCardDescription text={description} />}
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {description}
            </p>
          )}
        </>
      )}

      {/* Features */}
      <div className="mb-6">
        <PlanCardFeatures features={features as Feature[]} />
      </div>

      {/* Action Button */}
      <PlanActionButton
        variant={variant}
        label={label}
        onClick={handleClick}
        isLoading={isLoading}
        className="w-full justify-center"
      />
    </div>
  );
}
