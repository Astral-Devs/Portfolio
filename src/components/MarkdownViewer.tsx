'use client'
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
  blog: string;
}

export default function MarkdownViewer({ blog }: MarkdownViewerProps){
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(`${blog}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  });

  return (
    <div className="prose max-w-none mx-auto p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

