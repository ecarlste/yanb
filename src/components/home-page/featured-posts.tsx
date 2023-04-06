import React from 'react';
import classes from './featured-posts.module.css';
import Post from '@/models/post';
import PostsGrid from '../posts/posts-grid';

function FeaturedPosts(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
