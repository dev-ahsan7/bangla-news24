'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const UserInfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="flex items-center justify-end gap-3">
      {user ? (
        <div className="flex flex-col justify-center items-center">
          <Link href={'/profile'}>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind-CSS-Avatar-component"
                  src={user?.image as string}
                />
              </div>
            </div>
          </Link>
          <h4>{user?.name}</h4>
          <button
            onClick={handleSignOut}
            className="btn rounded bg-red-700 px-4 py-2 text-sm text-white hover:bg-red-800"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-end gap-3">
            <Link href="/sign-in">
              <button className="text-sm cursor-pointer text-gray-700 hover:text-black">
                সাইন ইন
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="btn rounded bg-red-700 px-4 py-2 text-sm text-white hover:bg-red-800">
                সাইন আপ
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
