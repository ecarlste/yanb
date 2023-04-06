import React from 'react';
import PostsGrid from './posts-grid';
import classes from './all-posts.module.css';
import Post from '@/models/post';

function AllPosts(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default AllPosts;
