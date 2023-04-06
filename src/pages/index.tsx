import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import Post from '@/models/post';
import { Fragment } from 'react';

const fakePosts: Post[] = [
  {
    title: 'first post',
    image: 'getting-started-nextjs.png',
    excerpt: 'my first post stuff',
    date: new Date(),
    slug: 'getting-started-nextjs',
  },
  {
    title: 'second post',
    image: 'nextjs-file-based-routing.png',
    excerpt: 'my second post stuff',
    date: new Date(),
    slug: 'nextjs-file-based-routing',
  },
  {
    title: 'third post',
    image: 'getting-started-nextjs.png',
    excerpt: 'my second post stuff',
    date: new Date(),
    slug: 'my-third-post',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={fakePosts} />
    </Fragment>
  );
}

export default HomePage;
