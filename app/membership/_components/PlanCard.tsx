"use client";
import { ReactNode, useState } from "react";
import PlanFeature from "./PlanFeature";
import toast from "react-hot-toast";
import { Loader2Icon } from "lucide-react";
import { createCheckoutSession } from "@/app/_services/stripeService";

interface PlanCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: { text: string; included: boolean }[];
  text: string; // button atau link
  highlighted?: boolean;
  disable?: boolean;
}

export default function PlanCard({
  title,
  description,
  icon,
  text,
  features,
  disable,
  highlighted = false,
}: PlanCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
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
      toast.error("An unexpected error occurred " + err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`rounded-2xl p-6 shadow-sm flex flex-col border 
        bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm transition-colors
        ${
          highlighted
            ? "ring-2 ring-indigo-500 border-indigo-500"
            : "border-gray-200 dark:border-gray-800"
        }`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/40">
          {icon}
        </div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, i) => (
          <PlanFeature
            key={i}
            text={feature.text}
            included={feature.included}
          />
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={handleCheckout}
        disabled={isLoading || disable}
        className={`w-full rounded-xl px-4 py-2 border shadow-sm font-medium 
                    flex justify-center items-center gap-2 
                    transition-colors 
                    ${
                      isLoading || disable
                        ? "bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        : highlighted
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-muted"
                    }`}>
        {isLoading ? <Loader2Icon className="animate-spin h-5 w-5" /> : text}
      </button>
    </div>
  );
}
