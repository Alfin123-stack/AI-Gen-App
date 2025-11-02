import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FormField, PlanActionVariant, PlanCardProps, Template } from "./types";
import { Language } from "@/app/_contexts/LanguageContext";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper function to get template text in the current language
export const getTemplateText = (
  template: Template,
  language: Language,
  field: keyof Template
): string => {
  if (
    field === "name" ||
    field === "desc" ||
    field === "category" ||
    field === "aiPrompt"
  ) {
    return (template[field] as Record<Language, string>)[language];
  }
  return "";
};

// Helper function to get form field label in the current language
export const getFormFieldLabel = (
  field: FormField,
  language: Language
): string => {
  return field.label[language as keyof typeof field.label];
};

// Helper function to get form field placeholder in the current language
export const getFormFieldPlaceholder = (
  field: FormField,
  language: Language
): string => {
  return field.placeholder?.[language as keyof typeof field.placeholder] || "";
};

/* -------------------- Helpers -------------------- */

export function getVariant(
  disabled: boolean,
  highlighted: boolean,
  isPro: boolean,
  isActive: boolean
): PlanActionVariant {
  if (disabled) return "disabled";
  if (highlighted || (isPro && !isActive)) return "upgrade";
  if (isActive) return "current";
  return "manage";
}

export function getLabel(
  text: string | undefined,
  t: { currentPlan: string; upgrade: string; notActive: string } | undefined,
  isActive: boolean,
  isPro: boolean
): string {
  if (text) return text;
  if (!t) return "Select";

  if (isActive && isPro) return t.currentPlan;
  if (!isActive && isPro) return t.upgrade;
  if (!isPro) return t.notActive;

  return "Select Plan";
}
