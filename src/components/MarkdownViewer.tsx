'use client';

import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownViewerProps {
  blog: string;
}

export default function MarkdownViewer({ blog }: MarkdownViewerProps) {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the markdown file
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/blogs/${blog}.md`);
        if (!response.ok) {
          throw new Error(`Failed to fetch the markdown file: ${response.statusText}`);
        }
        const text = await response.text();
        setMarkdown(text);
      } catch (err) {
        setError("Could not load the markdown file.");
        console.error(err);
      }
    };

    if (blog) {
      fetchMarkdown();
    }
  }, [blog]); // Re-run when `blog` changes

  if (error) {
    return (
      <div className="bg-white p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="prose max-w-none mx-auto p-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
