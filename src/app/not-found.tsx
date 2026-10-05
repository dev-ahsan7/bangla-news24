import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto mt-16 w-full max-w-150 px-4 text-center">
      <p className="text-7xl font-bold text-red-700">৪০৪</p>

      <h2 className="mt-4 text-2xl font-bold text-gray-900">
        পেজটি খুঁজে পাওয়া যায়নি
      </h2>

      <p className="mt-2 text-gray-600">
        আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, মুছে ফেলা হয়েছে অথবা লিংকটি
        ভুল।
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-md bg-red-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
        >
          হোম পেজে যান
        </Link>

        <Link
          href="/news"
          className="rounded-md border border-red-700 px-5 py-2.5 font-semibold text-red-700 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
        >
          সংবাদ দেখুন
        </Link>
      </div>
    </div>
  );
}
