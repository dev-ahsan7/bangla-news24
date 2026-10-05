import MainNews from '@/components/News/MainNews';
import MostRead from '@/components/News/MostRead';
import NewsCard from '@/components/News/NewsCard';
import { SectionsResponse } from '@/types/news';

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const { data: sections }: SectionsResponse = await res.json();

  const [mainSection, ...otherSections] = sections;
  const mainNews = mainSection.articles.map((article) => ({
    ...article,
    description: article.description ?? '',
  }));
  const sanitizedOtherSections = otherSections.map((section) => ({
    ...section,
    articles: section.articles.map((article) => ({
      ...article,
      description: article.description ?? '',
    })),
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-4">
      {/* News section */}
      <div className="min-w-0 lg:col-span-2">
        <MainNews news={mainNews} />

        <div className="grid gap-8 mt-8">
          {sanitizedOtherSections.map((os) => (
            <section key={os.curationId}>
              <h2 className="font-bold text-lg border-b-2 border-red-700 pb-1 mb-4">
                {os.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {os.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Most read section */}
      <aside className="min-w-0 lg:col-span-1">
        <MostRead />
      </aside>
    </div>
  );
}
