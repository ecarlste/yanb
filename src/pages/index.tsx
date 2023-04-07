import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getFeaturedPosts } from '@/lib/posts-util';
import Post from '@/models/post';
import Head from 'next/head';
import { Fragment } from 'react';

function HomePage(props: { posts: Post[] }) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>Erik&apos;s Blog</title>
        <meta
          name="description"
          content="I post weekly on architecture and platform engineering..."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
