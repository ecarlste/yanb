import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import Post from '@/models/post';
import Head from 'next/head';
import React, { Fragment } from 'react';

function PostsPage(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all cloud architecture and platform engineering related posts."
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default PostsPage;
