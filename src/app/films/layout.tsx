import type { PropsWithChildren } from 'react';

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="min-w-full px-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800">
        <div className={`w-full min-w-96 pt-6 pb-6 pl-8 font-normal text-gray-700 dark:text-gray-400`}>{children}</div>
      </div>
    </>
  );
}
