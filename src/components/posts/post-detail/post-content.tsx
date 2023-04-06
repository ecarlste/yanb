import React from 'react';
import PostHeader from './post-header';
import classes from './post-content.module.css';

const fakePost = {
  slug: 'getting-started-nextjs',
  title: 'first post',
  image: 'getting-started-nextjs.png',
  date: new Date(),
  excerpt: 'my first post stuff',
};

function PostContent() {
  const imagePath = `/images/posts/${fakePost.slug}/${fakePost.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={fakePost.title} image={imagePath} />
      CONTENT
    </article>
  );
}

export default PostContent;
