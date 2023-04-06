import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Post from '@/models/post';
import Image from 'next/image';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function PostContent(props: { post: Post }) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img(image: { src?: string; alt?: string }) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt || ''}
          width={600}
          height={300}
        />
      );
    },
    code(code: any) {
      const { className, children } = code;
      const language = getLanguageFromMarkdownClassName(className);

      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

function getLanguageFromMarkdownClassName(className: string) {
  const languageKey: string = className.replace('language-', '');

  interface LanguageMap {
    [shortName: string]: string;
  }

  const languageMap: LanguageMap = {
    js: 'javascript',
  };

  return languageMap[languageKey];
}

export default PostContent;
