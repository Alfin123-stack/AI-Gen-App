// app/_hooks/useTemplate.ts
"use client";

import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import { useTheme } from "next-themes";
import { useUser } from "@clerk/nextjs";
import { useCredit } from "@/app/_contexts/CreditContext";
import toast from "react-hot-toast";
import { Editor } from "@toast-ui/react-editor";

import { saveQuery } from "@/app/_services/mongoService";
import { generateText } from "@/app/_services/aiService";
import { useLanguage } from "../_contexts/LanguageContext";
import {
  Template,
  TemplateInfo,
} from "../dashboard/template/[slug]/_components/FormTemplate";

export type Language = "en" | "id";

export interface MultiLangTemplate {
  name: Record<Language, string>;
  desc: Record<Language, string>;
  category: Record<Language, string>;
  icon: string;
  aiPrompt: Record<Language, string>;
  slug: string;
  form: {
    label: Record<Language, string>;
    field: string;
    name: string;
    required: boolean;
    placeholder: Record<Language, string>;
  }[];
}

export function useTemplate(template: Template & MultiLangTemplate) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>("");

  const { user } = useUser();
  const emailUser = user?.emailAddresses.at(0)?.emailAddress;
  const { addCredit, derived, subscribing } = useCredit();
  const { theme } = useTheme();

  const editorRef = useRef<Editor>(null);

  const { language } = useLanguage();

  // ✅ Tanpa cast "as Record" lagi
  const mappedTemplate: TemplateInfo = {
    name: template.name[language],
    desc: template.desc[language],
    category: template.category[language],
    icon: template.icon,
    aiPrompt: template.aiPrompt[language],
    slug: template.slug,
    form: template.form.map((f): TemplateInfo["form"][0] => ({
      label: f.label[language],
      field: f.field,
      name: f.name,
      required: f.required,
      placeholder: f.placeholder?.[language] ?? "",
    })),
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!subscribing && derived.isOverLimit) {
      toast.error("You’ve reached your word limit. Please upgrade!");
      return;
    }

    setLoading(true);

    try {
      const data = await generateText({
        prompt: `${mappedTemplate.aiPrompt} ${
          formData[mappedTemplate.form[0].name]
        } `,
      });

      setResponse(data.text || "");

      if (data.text) {
        const wordsUsed = data.text.trim().split(/\s+/).length;

        await saveQuery({
          template: {
            name: mappedTemplate.name,
            desc: mappedTemplate.desc,
            icon: mappedTemplate.icon,
          },
          email: emailUser!,
          query: formData[mappedTemplate.form[0].name],
          content: data.text,
        });

        await addCredit(emailUser!, wordsUsed);
      }
    } catch (error) {
      console.error("Error generating text:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const markdown = editorInstance.getMarkdown();
      navigator.clipboard.writeText(markdown);
      toast.success("Copied to clipboard!");
    }
  };

  useEffect(() => {
    if (editorRef.current && response) {
      editorRef.current.getInstance().setMarkdown(response);
    }
  }, [response]);

  return {
    formData,
    loading,
    response,
    theme,
    editorRef,
    handleChange,
    handleSubmit,
    handleCopy,
    emailUser,
    derived,
    subscribing,
    mappedTemplate,
  };
}
