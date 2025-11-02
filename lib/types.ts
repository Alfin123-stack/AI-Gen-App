// templates.ts
import { Language } from "@/app/_contexts/LanguageContext";
import { transactionTryAI } from "@/app/_hooks/useTryAI";
import { ReactNode } from "react";

export interface TemplateInfo {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: {
    label: string;
    field: string;
    name: string;
    required: boolean;
    placeholder: string;
  }[];
}

export interface FormField {
  label: Record<Language, string>;
  field: "input" | "textarea";
  name: string;
  required: boolean;
  placeholder?: Record<Language, string>;
}

export interface Template {
  name: Record<Language, string>;
  desc: Record<Language, string>;
  category: Record<Language, string>;
  icon: string;
  slug: string;
  aiPrompt: Record<Language, string>;
  form: FormField[];
}

export interface PlanActionButtonProps {
  /** Jenis tombol: "manage" | "upgrade" | "current" | "disabled" */
  variant: "manage" | "upgrade" | "current" | "disabled";
  label: string;
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

export interface Feature {
  text: string;
  included: boolean;
}

export interface Translations {
  currentPlan: string;
  upgrade: string;
  notActive: string;
}

export type PlanActionVariant = "disabled" | "upgrade" | "current" | "manage";

export interface PlanCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  features: string[] | Feature[];
  text?: string;
  isActive?: boolean;
  isPro?: boolean;
  highlighted?: boolean;
  disable?: boolean;
  t?: Translations;
  onManage?: () => void;
}

export interface CheckoutSessionResponse {
  url?: string;
  error?: string;
}

// Struktur template yang disimpan di query
export interface TemplateInfo {
  name: string;
  desc: string;
  icon: string;
}

// Payload untuk menyimpan query
export interface SaveQueryPayload {
  template: TemplateInfo;
  email: string;
  query: string;
  content: string;
}

// Response untuk saveQuery
export interface SaveQueryResponse {
  ok: boolean;
  data?: {
    _id: string;
    template?: TemplateInfo;
    email: string;
    query: string;
    content: string;
    createdAt?: string;
  };
  message?: string;
}

// Struktur query di database
export interface Query {
  _id: string;
  template: { name: string; desc: string; icon: string };
  email: string;
  query: string;
  content: string;
  createdAt: string;
}

// Struktur pagination
export interface Pagination {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// Response untuk getQueries
export interface GetQueriesResponse {
  ok: boolean;
  data?: Query[] | [];
  pagination?: Pagination;
  message?: string;
}

// Response untuk getQueryById
export interface GetQueryByIdResponse {
  ok: boolean;
  data?: Query;
  message?: string;
}

export interface CreditResponse {
  ok: boolean;
  data?: {
    usedWords: number;
    maxWords: number;
  };
  message?: string;
}

export interface GeneratePayload {
  prompt: string;
}

export interface GenerateResponse {
  text: string;
}

export type TranslationsTryAI = typeof transactionTryAI;
