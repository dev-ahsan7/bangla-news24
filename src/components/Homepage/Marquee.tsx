import Link from 'next/link';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text';

interface Headlines {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
  const data = await res.json();
  const headlines: Headlines[] = data.data;
  return (
    <div className="bg-red-700 text-white mt-4">
      <div className="flex max-w-7xl mx-auto px-4 items-center">
        <div className="bg-red-800 py-1.5 px-2 font-bold">সর্বশেষ</div>
        <MarqueeText className="py-1.5" direction="right" duration={10}>
          {headlines.map((h) => (
            <span key={h.id}>
              <Link className="hover:underline" href={`/news/${h.id}`}>
                {h.title}
              </Link>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
