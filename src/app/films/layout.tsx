import type { PropsWithChildren } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Высоцкий // Фильмография',
  description: 'Фильмы с участием В.С. Высоцкого',
};

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="min-w-full lg:min-w-[1148px] px-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800">
        <div className={`w-full pt-6 pb-6 pl-8 font-normal text-gray-700 dark:text-gray-400`}>{children}</div>
      </div>
    </>
  );
}
