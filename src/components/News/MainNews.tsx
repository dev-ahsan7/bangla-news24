import Image from 'next/image';
import Link from 'next/link';

interface News {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  if (!news?.length) return null;

  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex flex-col lg:flex-row items-stretch gap-4">
      {/* Featured News */}
      <Link
        href={`/news/${firstNews.id}`}
        className="card bg-white w-full lg:w-3/5 rounded-lg border border-gray-200 overflow-hidden group"
      >
        <figure className="overflow-hidden">
          <Image
            src={firstNews.imageUrl}
            height={600}
            width={600}
            alt={firstNews.imageAlt ?? firstNews.title}
            priority
            className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </figure>
        <div className="card-body p-4 gap-2">
          <span className="text-red-700 text-sm font-semibold">
            {firstNews.category}
          </span>
          <h2 className="card-title text-xl font-bold leading-snug text-gray-900 group-hover:text-red-700 transition-colors">
            {firstNews.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {firstNews.description}
          </p>
        </div>
      </Link>

      {/* Other News */}
      <div className="w-full lg:w-2/5 bg-white rounded-lg border border-gray-200 divide-y divide-gray-200 overflow-hidden">
        {otherNews.slice(0, 4).map((on) => (
          <Link
            key={on.id}
            href={`/news/${on.id}`}
            className="group flex flex-col gap-1.5 p-4 hover:bg-gray-50 transition-colors"
          >
            <span className="text-red-700 text-xs font-semibold">
              {on.category}
            </span>
            <h3 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-red-700 transition-colors line-clamp-3">
              {on.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
