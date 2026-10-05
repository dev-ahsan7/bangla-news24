import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/formatDate';
import type { ArticleDetail } from '@/types/news';
import { notFound } from 'next/navigation';

interface NewsPageProps {
  params: Promise<{ newsId: string }>;
}

const NewsPage = async ({ params }: NewsPageProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const news: ArticleDetail = data.data;

  // description is a rich-text object, so take the first paragraph as the intro

  if (!news) {
    notFound();
  }
  const intro = news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
          {news.title}
        </h1>

        {intro && (
          <p className="mt-3 text-lg leading-relaxed text-gray-600">{intro}</p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-y border-gray-200 py-3 text-sm text-gray-500">
          {news.byline.length > 0 && (
            <span className="font-semibold text-gray-700">
              {news.byline.join(', ')}
            </span>
          )}
          <time dateTime={news.firstPublished}>
            {formatDate(news.firstPublished)}
          </time>
          <span>{news.wordCount.toLocaleString('bn-BD')} শব্দ</span>
        </div>
      </header>

      {/* Body */}
      <div className="mt-6 flex flex-col gap-5">
        {news.body.map((block, i) => {
          if (block.type === 'image') {
            return (
              <figure key={i} className="my-2">
                <Image
                  src={block.url}
                  width={block.width}
                  height={block.height}
                  alt={block.altText ?? block.caption ?? news.title}
                  priority={i === 0}
                  className="h-auto w-full rounded-lg object-cover"
                />
                {(block.caption || block.copyrightHolder) && (
                  <figcaption className="mt-2 text-sm text-gray-500">
                    {block.caption}
                    {block.copyrightHolder && (
                      <span className="text-gray-400">
                        {block.caption ? ' · ' : ''}
                        {block.copyrightHolder}
                      </span>
                    )}
                  </figcaption>
                )}
              </figure>
            );
          }

          // text blocks hold several paragraphs separated by "\n"
          return block.text
            .split('\n')
            .filter((p) => p.trim())
            .map((p, j) => (
              <p key={`${i}-${j}`} className="text-lg leading-8 text-gray-800">
                {p}
              </p>
            ));
        })}
      </div>

      {/* Topics */}
      {news.topics.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {news.topics.map((topic) => (
            <span
              key={topic.id}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600"
            >
              {topic.name}
            </span>
          ))}
        </div>
      )}

      {/* Source */}
      <footer className="mt-8 border-t border-gray-200 pt-4 text-sm text-gray-500">
        Source:{' '}
        <Link
          href={news.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-red-700"
        >
          {news.source}
        </Link>
      </footer>
    </article>
  );
};

export default NewsPage;
