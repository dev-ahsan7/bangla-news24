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

// Rich-text shape of `description` in the single-article response
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
