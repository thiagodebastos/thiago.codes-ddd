// model used in the frontend for Article entity in backend
// TODO explain better
export interface Article {
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
