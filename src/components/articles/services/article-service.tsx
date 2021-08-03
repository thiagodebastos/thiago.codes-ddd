import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Article } from '../models/article';
import { ARTICLES_PATH } from '@/shared/utils/mdx-utils';

interface IArticleService {
  getArticleBySlug(slug: string): Promise<APIResponse<Article[]>>;
  getRecentArticles(offset?: number): Promise<APIResponse<Article[]>>;
}

export class ArticleService implements IArticleService {
  public async getArticleBySlug(slug: string): Promise<APIResponse<Article>> {
    try {
      const postFilePath = path.join(ARTICLES_PATH, `${slug}.mdx`); // TODO make sure params exist
      const source = fs.readFileSync(postFilePath);

      const { content, data } = matter(source);

      const mdxSource = await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
        scope: data,
      });

      return { mdxSource, data };
    } catch (error) {
      throw new Error(error);
    }
  }
}
