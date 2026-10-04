import Image from 'next/image';
import Link from 'next/link';

type NewsCardProps = {
  news: {
    id: string | number;
    imageUrl: string;
    imageAlt?: string;
    title: string;
    category: string;
    description: string;
    publishedAt?: string;
  };
};

const NewsCard = ({ news }: NewsCardProps) => {
  if (!news) return null;

  return (
    <Link
      href={`/news/${news.id}`}
      className="group flex h-full min-w-0 flex-col bg-white rounded-lg border border-gray-200 overflow-hidden"
    >
      <figure className="overflow-hidden">
        <Image
          src={news.imageUrl}
          height={600}
          width={600}
          alt={news.imageAlt ?? news.title}
          className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="flex flex-col gap-1.5 p-4">
        <span className="text-red-700 text-xs font-semibold">
          {news.category}
        </span>
        <h3 className="text-base font-bold leading-snug text-gray-900 group-hover:text-red-700 transition-colors line-clamp-3">
          {news.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {news.description}
        </p>
        {news.publishedAt && (
          <span className="text-gray-400 text-xs">{news.publishedAt}</span>
        )}
      </div>
    </Link>
  );
};

export default NewsCard;
