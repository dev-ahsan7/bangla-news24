export interface ArticleTopic {
  id: string;
  name: string;
}

export interface ImageBlock {
  type: 'image';
  url: string;
  width: number;
  height: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

export interface TextBlock {
  type: 'text';
  text: string;
}

export type BodyBlock = ImageBlock | TextBlock;

export interface DescriptionFragment {
  type: string;
  model: { text: string; attributes: unknown[] };
}

export interface DescriptionParagraph {
  type: string;
  model: { text: string; blocks: DescriptionFragment[] };
}

export interface DescriptionBlock {
  type: string;
  model: { blocks: DescriptionParagraph[] };
}

export interface ArticleDescription {
  blocks: DescriptionBlock[];
}

export interface ArticleDetail {
  id: string;
  title: string;
  description: ArticleDescription;
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: string[];
  topics: ArticleTopic[];
  tags: string[];
  imageUrl: string;
  body: BodyBlock[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

export interface ArticleDetailResponse {
  success: boolean;
  cachedAt: string;
  data: ArticleDetail;
}

// ---------- NEW: used by the home page ----------

export interface NewsArticle {
  id: string;
  title: string;
  description: string | null;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: 'article' | 'commentary' | 'video' | 'link';
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
}

export interface NewsSection {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: NewsArticle[];
}

export interface SectionsResponse {
  success: boolean;
  count: number;
  cachedAt: string;
  data: NewsSection[];
}
