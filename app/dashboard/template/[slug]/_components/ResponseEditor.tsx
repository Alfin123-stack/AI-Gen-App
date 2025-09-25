"use client";

import { Editor } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import { RefObject } from "react";
import { useLanguage } from "@/app/_contexts/LanguageContext";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"; 
import "prismjs/themes/prism.css"; 
interface ResponseEditorProps {
  editorRef: RefObject<Editor | null>;
  theme: string;
}

// 🔹 Dictionary multi-bahasa
const translations = {
  en: {
    title: "Response",
    subtitle: "Your generated content will appear here",
  },
  id: {
    title: "Respon",
    subtitle: "Konten yang dihasilkan akan muncul di sini",
  },
};

export default function ResponseEditor({
  editorRef,
  theme,
}: ResponseEditorProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div
      className="col-span-2 p-6 rounded-2xl shadow-sm 
                 bg-white/95 dark:bg-gray-900/80 backdrop-blur-sm 
                 border">
      {/* Header */}
      <div className="pb-4 mb-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {t.title}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{t.subtitle}</p>
      </div>

      {/* Editor */}
      <Editor
        ref={editorRef}
        initialValue=""
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}
