"use client";

import PlanFeature from "./PlanFeature";

interface PlanCardFeaturesProps {
  features: { text: string; included: boolean }[];
}

export default function PlanCardFeatures({ features }: PlanCardFeaturesProps) {
  return (
    <ul className="space-y-2 mb-6">
      {features.map((feature, i) => (
        <PlanFeature key={i} text={feature.text} included={feature.included} />
      ))}
    </ul>
  );
}
