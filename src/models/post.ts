interface Post {
  title: string;
  image: string;
  excerpt: string;
  date: Date;
  slug: string;
  content?: string;
  isFeatured?: boolean;
}

export default Post;
