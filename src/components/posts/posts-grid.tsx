import React from 'react';
import PostItem from './post-item';
import classes from './posts-grid.module.css';
import Post from '@/models/post';

function PostsGrid(props: { posts: Post[] }) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
