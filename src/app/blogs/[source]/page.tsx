'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import MarkdownViewer from '@/components/MarkdownViewer';

export default function MarkdownPage() {
  const params = useParams(); // Access dynamic route parameters
  const source = params?.source; // Extract the `source` parameter

  // Ensure source is a string
  const blogSource = Array.isArray(source) ? source[0] : source || '';

  return (
    <div className="bg-white h-full">
      <MarkdownViewer blog={blogSource} />
    </div>
  );
}
