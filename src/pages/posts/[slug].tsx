import PostContent from '@/components/posts/post-detail/post-content';
import { getPostDataBySlug, getPostSlugs } from '@/lib/posts-util';
import Post from '@/models/post';
import React from 'react';

function PostDetailPage(props: { post: Post }) {
  const { post } = props;
  return <PostContent post={post} />;
}

export function getStaticProps(context: { params: any }) {
  const { params } = context;
  const { slug } = params;

  const post = getPostDataBySlug(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const paths = getPostSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

export default PostDetailPage;
