"use client";

interface QueryCardBodyProps {
  queryText: string;
}

export default function QueryCardBody({ queryText }: QueryCardBodyProps) {
  return (
    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 flex-1">
      {queryText}
    </p>
  );
}
