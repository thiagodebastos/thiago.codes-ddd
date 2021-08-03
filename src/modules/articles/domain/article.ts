import { AggregateRoot } from '@/shared/domain/aggregate-root';

interface ArticleProps {
  slug: string;
  title: string;
  description: string;
  url: string;
  caninicalUrl?: string;
  collectionId?: string;
  path: string;
  readingTimeMinutes: number;
  createdAt: string | Date;
  publishedAt?: string | Date;
  tags: string;
  bodyMarkdown: any;
}

export class Article extends AggregateRoot<ArticleProps> {
  get articleId(): ArticleId;
}

// THIS IS FUCKING OVERKILLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
