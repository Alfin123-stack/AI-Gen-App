"use client";

import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

import FormFields from "./FormFields";
import { useTemplate } from "@/app/_hooks/useTemplate";

import FormToolbar from "./FormToolbar";
import { Template } from "@/lib/types";

const ResponseEditor = dynamic(() => import("../editor/ResponseEditor"), {
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
    mappedTemplate,
  } = useTemplate(template);

  return (
    <div>
      <Toaster />

      {/* Header dengan tombol copy */}
      <div className="mb-6">
        <FormToolbar onCopy={handleCopy} disabled={!response} />
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
    </div>
  );
}
