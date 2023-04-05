import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './post-item.module.css';

interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: Date;
  slug: string;
}

function PostItem(props: Post) {
  const { title, image, excerpt, date, slug } = props;

  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/public/images/${slug}/${image}`;

  return (
    <li className={classes.post}>
      <Link>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>Some content</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
