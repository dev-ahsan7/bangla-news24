import NewsCard from '@/components/News/NewsCard';

interface CategoryNewsProps {
  params: Promise<{ categoryId: string }>;
}

interface News {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  category: string;
  imageAlt: string;
}

interface CategoryResponse {
  title: string;
  data: News[];
}

const CategoryNews = async ({ params }: CategoryNewsProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );
  const { title, data: categoryNews }: CategoryResponse = await res.json();

  return (
    <div>
      <div className="px-4 mt-8">
        <h1 className="font-bold text-2xl border-b-2 border-red-700 pb-1 mb-4">
          {title}
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
