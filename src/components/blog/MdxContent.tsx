'use client';

import React from 'react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import MdxComponents from './MdxComponents';

interface MdxContentProps {
  source: MDXRemoteSerializeResult;
}

const MdxContent: React.FC<MdxContentProps> = ({ source }) => {
  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      <MDXRemote {...source} components={MdxComponents} />
    </div>
  );
};

export default MdxContent;