import Link from 'next/link';

interface IMostReadArticle {
  id: string | number;
  title: string;
}

interface IMostReadResponse {
  data: IMostReadArticle[];
}

const MostRead = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
  const { data: news }: IMostReadResponse = await res.json();

  return (
    <div className="bg-white card border border-gray-200  p-5">
      <h2 className="text-lg font-bold text-gray-900 mb-4">সর্বাধিক পঠিত</h2>

      <ol className="flex flex-col gap-4">
        {news.map((n, i) => (
          <li key={n.id}>
            <Link
              href={`/news/${n.id}`}
              className="group flex items-start gap-3"
            >
              <span className="w-7 shrink-0 text-center text-xl font-semibold leading-snug text-red-600/80">
                {i + 1}
              </span>
              <span className="text-lg font-bold leading-snug text-gray-900 group-hover:text-red-700 transition-colors">
                {n.title}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MostRead;
