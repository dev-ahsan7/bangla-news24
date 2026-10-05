import Image from 'next/image';
import React from 'react';
import Navlinks from './Navlinks';
import UserInfo from './UserInfo';

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
          <UserInfo />
        </div>

        <Navlinks />
      </div>
    </header>
  );
};

export default Header;
