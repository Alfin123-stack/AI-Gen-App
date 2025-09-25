"use client";

import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

import FormHeader from "./FormHeader";
import FormFields from "./FormFields";
import SignUpModal from "@/components/ui/SignUpModal";
import { useTemplate } from "@/app/_hooks/useTemplate";

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

export interface Template {
  name: {
    en: string;
    id: string;
  };
  desc: {
    en: string;
    id: string;
  };
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: {
    label: {
      en: string;
      id: string;
    };
    field: string;
    name: string;
    required: boolean;
    placeholder: {
      en: string;
      id: string;
    };
  }[];
}
const ResponseEditor = dynamic(() => import("./ResponseEditor"), {
  ssr: false,
});

export default function FormTemplate({ template }: { template: Template }) {
  const {
    formData,
    loading,
    response,
    theme,
    editorRef,
    handleChange,
    handleSubmit,
    handleCopy,
    derived,
    subscribing,
    mappedTemplate,
  } = useTemplate(template);

  return (
    <div>
      <Toaster />

      {/* Header dengan tombol copy */}
      <div className="mb-6">
        <FormHeader onCopy={handleCopy} disabled={!response} />
      </div>

      {/* Grid Form + Response */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-1">
          <FormFields
            template={mappedTemplate}
            formData={formData}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Response */}
        <div className="lg:col-span-2 min-h-[400px] border border-border rounded-lg overflow-hidden">
          <ResponseEditor editorRef={editorRef} theme={theme!} />
        </div>
      </div>

      {/* Pop-up kalau over limit */}
      {!subscribing && derived.isOverLimit && (
        <SignUpModal isOverLimit={true} />
      )}
    </div>
  );
}
