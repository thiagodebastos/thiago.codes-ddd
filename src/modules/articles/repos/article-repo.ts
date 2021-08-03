import { Article } from 'components/articles/models/article';

export interface IArticleRepo {
  getArticleBySlug(slug: string): Promise<Article>;
}
