import Post from '@/models/post';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  // remove file extension
  const postSlug = fileName.replace(/\.md$/, '');

  const post: Post = {
    title: data.title,
    image: data.image,
    excerpt: data.excerpt,
    isFeatured: data.isFeatured,
    date: new Date(data.date),
    slug: postSlug,
    content,
  };

  return post;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const posts = postFiles
    .map((fileName) => getPostData(fileName))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((e) => e.isFeatured);
}
