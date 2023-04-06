import Post from '@/models/post';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostDataBySlug(slug: string) {
  const filename = `${slug}.md`;

  return getPostDataByFilename(filename);
}

function getPostDataByFilename(filename: string) {
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath);
  const { data, content } = matter(fileContent);

  const postSlug = getPostSlugFromFilename(filename);

  const post: Post = {
    ...(data as Post),
    slug: postSlug,
    content,
  };

  return post;
}

function getPostSlugFromFilename(filename: string) {
  return filename.replace(/\.md$/, '');
}

export function getAllPosts() {
  const postFiles = getPostFilenames();

  const posts = postFiles
    .map((fileName) => getPostDataByFilename(fileName))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return posts;
}

function getPostFilenames() {
  return fs.readdirSync(postsDirectory);
}

export function getPostSlugs() {
  const filenames = getPostFilenames();

  return filenames.map((filename) => getPostSlugFromFilename(filename));
}

export function getFeaturedPosts() {
  return getAllPosts().filter((e) => e.isFeatured);
}
