import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';

const Header = () => {
  const date = new Date().toLocaleDateString('bn-BD', {
    dateStyle: 'full',
  });

  return (
    <header className="w-full">
      <div className="mx-auto max-w-7xl ">
        <div className="px-4 py-3 grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left spacer keeps the brand centered */}
          <div />

          {/* Center: logo + name + date */}
          <div className="flex items-center gap-2">
            <Image
              className="w-10 h-10 rounded-lg"
              width={50}
              height={50}
              src="/logo.webp"
              alt="Bangla News 24 logo"
            />
            <div className="leading-tight">
              <div className="text-2xl font-bold font-serif text-red-700">
                Bangla News 24
              </div>
              <div className="text-xs text-gray-500">{date}</div>
            </div>
          </div>

          {/* Right: auth buttons */}
          <div className="flex items-center justify-end gap-3">
            <button className="text-sm text-gray-700 hover:text-black">
              সাইন ইন
            </button>
            <button className="btn rounded bg-red-700 px-4 py-2 text-sm text-white hover:bg-red-800">
              সাইন আপ
            </button>
          </div>
        </div>

        <Navlinks />
      </div>
    </header>
  );
};

export default Header;
