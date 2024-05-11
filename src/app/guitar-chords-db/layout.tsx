import type { PropsWithChildren } from 'react';

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-16"></div>
      <div className="flex min-w-full px-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-900">
        <div className={`w-full pt-6 pb-6 pl-8 font-normal text-gray-700 dark:text-slate-300`}>
          <h1 className="font-bold text-2xl">База аккордов</h1>

          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
