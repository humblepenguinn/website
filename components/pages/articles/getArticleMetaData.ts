import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ArticleMetadata } from '../../../types';

export default function getArticleMetadata(): ArticleMetadata[] {
  const folder = path.join(process.cwd(), 'articles');
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
}
