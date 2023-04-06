import AllPosts from '@/components/posts/all-posts';
import { getAllPosts } from '@/lib/posts-util';
import Post from '@/models/post';
import React from 'react';

function PostsPage(props: { posts: Post[] }) {
  const { posts } = props;
  return <AllPosts posts={posts} />;
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
