'use client';
import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownViewer from '@/components/MarkdownViewer';

export default function MarkdownPage() {
  const { source } = useParams(); // Get the markdown file name from the URL

  return (
    <div className="bg-white h-full">
      <MarkdownViewer blog={source || ''} />
    </div>
  );
}
