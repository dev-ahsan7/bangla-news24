'use client';
import { authClient } from '@/lib/auth-client';
import React from 'react';

const inputClass =
  'w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 placeholder:text-gray-400 outline-none transition-colors focus:border-red-700 focus:ring-1 focus:ring-red-700';

const labelClass = 'mt-3 text-sm text-gray-700 first:mt-0';

const UpdateUserPage = () => {
  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  return (
    <div>
      <form onSubmit={handleUpdateUser} className="w-full">
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
          <button
            type="submit"
            className="mt-4 w-full cursor-pointer rounded-md bg-red-700 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
          >
            Update User
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateUserPage;
