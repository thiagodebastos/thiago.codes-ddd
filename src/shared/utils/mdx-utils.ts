import fs from 'fs';
import path from 'path';

export const ARTICLES_PATH = path.join(process.cwd(), 'data');

export const articleFilePaths = fs
  .readdirSync(ARTICLES_PATH)
  .filter(function onlyIncludeMdxFiles(path: string) {
    return /\.mdx?$/.test(path);
  });
