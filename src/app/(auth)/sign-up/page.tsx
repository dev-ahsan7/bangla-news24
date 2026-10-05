'use client';

import { authClient } from '@/lib/auth-client';
import { LogoGooglePlay } from '@gravity-ui/icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-red-700 focus:ring-1 focus:ring-red-700';

const labelClass = 'mt-3 text-sm text-gray-700 first:mt-0';

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: '/',
    });

    if (error) {
      console.log(error);
      return;
    }

    if (data) {
      router.push('/');
    }
  };

  const handleSignUpwithGoogle = async () => {
    await authClient.signIn.social({
      provider: 'google',
      callbackURL: '/',
    });
  };

  return (
    <div className="mx-auto mt-5 w-full max-w-150 px-4">
      <h2 className="mb-6 text-center text-2xl font-bold text-red-700">
        সাইন আপ
      </h2>

      <form onSubmit={onSubmit} className="w-full">
        <fieldset className="flex w-120 flex-col gap-1.5">
          <label htmlFor="name" className={labelClass}>
            নাম
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="আপনার নাম লিখুন"
            className={inputClass}
          />

          <label htmlFor="image" className={labelClass}>
            ছবি
          </label>
          <input
            id="image"
            name="image"
            type="url"
            placeholder="ছবির লিংক দিন"
            className={inputClass}
          />

          <label htmlFor="email" className={labelClass}>
            ইমেইল
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="আপনার ইমেইল লিখুন"
            className={inputClass}
          />

          <label htmlFor="password" className={labelClass}>
            পাসওয়ার্ড
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="আপনার পাসওয়ার্ড লিখুন"
            className={inputClass}
          />

          <button
            type="submit"
            className="mt-4 w-full cursor-pointer rounded-md bg-red-700 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
          >
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-3" role="separator">
        <hr className="flex-1 border-t border-gray-300" />
        <span className="text-sm text-gray-500">অথবা</span>
        <hr className="flex-1 border-t border-gray-300" />
      </div>

      {/* Google button */}
      <button
        type="button"
        onClick={handleSignUpwithGoogle}
        className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-md border border-gray-300 bg-white py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-700 focus-visible:ring-offset-2"
      >
        <LogoGooglePlay width={20} height={20} />
        গুগল দিয়ে সাইন আপ করুন
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        অ্যাকাউন্ট আছে?{' '}
        <Link
          href="/sign-in"
          className="font-semibold text-red-700 hover:underline"
        >
          সাইন ইন করুন
        </Link>
      </p>
    </div>
  );
};

export default SignUpPage;
