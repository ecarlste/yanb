import PostContent from '@/components/posts/post-detail/post-content';
import { getPostDataBySlug, getPostSlugs } from '@/lib/posts-util';
import Post from '@/models/post';
import Head from 'next/head';
import React, { Fragment } from 'react';

function PostDetailPage(props: { post: Post }) {
  const { post } = props;
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
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
