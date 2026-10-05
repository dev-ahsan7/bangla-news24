'use client';

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const getInitials = (name?: string | null) =>
  (name ?? '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase() || '?';

const Avatar = ({
  src,
  name,
}: {
  src?: string | null;
  name?: string | null;
}) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        aria-hidden="true"
        className="flex size-24 items-center justify-center rounded-full bg-red-700 text-3xl font-bold text-white"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={name ?? 'প্রোফাইল ছবি'}
      onError={() => setFailed(true)}
      referrerPolicy="no-referrer"
      className="size-24 rounded-full border border-gray-200 object-cover"
    />
  );
};

const ProfileSkeleton = () => (
  <div className="flex animate-pulse flex-col items-center gap-3">
    <div className="size-24 rounded-full bg-gray-200" />
    <div className="h-5 w-40 rounded bg-gray-200" />
    <div className="h-4 w-56 rounded bg-gray-200" />
  </div>
);

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push('/sign-in'),
      },
    });
  };

  return (
    <div className="mx-auto mt-5 w-120 max-w-4xl px-4">
      <h2 className="mb-6 text-center text-2xl font-bold text-red-700">
        আমার প্রোফাইল
      </h2>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {isPending ? (
          <ProfileSkeleton />
        ) : !user ? (
          <div className="text-center">
            <p className="text-gray-600">আপনি সাইন ইন করেননি।</p>
            <Link
              href="/sign-in"
              className="mt-4 inline-block rounded-md bg-red-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
            >
              সাইন ইন করুন
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center">
            <Avatar src={user.image} name={user.name} />

            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {user.name}
            </h3>
            <p className="text-gray-600">{user.email}</p>

            <dl className="mt-6 w-full divide-y divide-gray-100 border-t border-gray-100 text-left text-sm">
              <div className="flex justify-between py-3">
                <dt className="text-gray-500">ইমেইল যাচাই</dt>
                <dd
                  className={
                    user.emailVerified ? 'text-green-700' : 'text-amber-700'
                  }
                >
                  {user.emailVerified ? 'যাচাইকৃত' : 'যাচাই করা হয়নি'}
                </dd>
              </div>
              <div className="flex justify-between py-3">
                <dt className="text-gray-500">সদস্য হয়েছেন</dt>
                <dd className="text-gray-900">
                  {new Date(user.createdAt).toLocaleDateString('bn-BD', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </dd>
              </div>
            </dl>

            <Link
              href={'/update-user'}
              className="mt-6 block w-full rounded-md bg-red-700 py-2.5 text-center font-semibold text-white transition-colors hover:bg-red-800"
            >
              প্রোফাইল এডিট করুন
            </Link>

            <button
              type="button"
              onClick={handleSignOut}
              className="mt-6 w-full cursor-pointer rounded-md border border-red-700 py-2.5 font-semibold text-red-700 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
            >
              সাইন আউট করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
