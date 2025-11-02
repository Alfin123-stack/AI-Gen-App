"use client";

import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

interface ResultMarkdownProps {
  content: string;
  templateName: string;
}

export default function ResultMarkdown({
  content,
  templateName,
}: ResultMarkdownProps) {
  const markdownComponents: Components = {
    p: ({ children }) => <p className="my-3 leading-relaxed">{children}</p>,
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-3 space-y-1">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-3 space-y-1">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    h2: ({ children }) => (
      <h2 className="text-lg font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-semibold mt-5 mb-2 text-gray-800 dark:text-gray-200">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-purple-400 pl-4 italic my-4 text-gray-700 dark:text-gray-300">
        {children}
      </blockquote>
    ),
    code(props) {
      const { inline, className, children } = props as {
        inline?: boolean;
        className?: string;
        children?: React.ReactNode;
      };
      const match = /language-(\w+)/.exec(className || "");
      if (!inline && match) {
        return (
          <CodeBlock
            language={match[1]}
            value={String(children).replace(/\n$/, "")}
          />
        );
      }
      return (
        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded-md text-sm font-mono text-purple-600 dark:text-purple-400">
          {children}
        </code>
      );
    },
  };

  return (
    <div className="prose prose-gray dark:prose-invert max-w-none text-[15px] leading-relaxed break-words">
      {templateName === "Explain Code" ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={markdownComponents}>
          {content}
        </ReactMarkdown>
      )}
    </div>
  );
}
