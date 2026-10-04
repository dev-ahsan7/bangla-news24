import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear().toLocaleString('bn-BD', {
    useGrouping: false,
  });

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        {/* Brand */}
        <div>
          <Link href="/" className="font-serif text-xl font-bold text-red-700">
            Bangla News 24
          </Link>
          <p className="mt-1 text-sm text-gray-500">
            দেশ ও বিশ্বের সর্বশেষ খবর
          </p>
        </div>

        {/* Credits */}
        <div className="flex flex-col gap-1 text-sm text-gray-500 md:items-end">
          <p>© {year} Bangla News 24। সর্বস্বত্ব সংরক্ষিত।</p>
          <p>
            Source:{' '}
            <Link
              href="https://www.bbc.com/bengali"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-red-700"
            >
              BBC Bangla
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
