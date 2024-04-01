import type { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Высоцкий // Биография",
  description: "Биография В.С. Высоцкого",
};

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="flex min-w-full px-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800">
        <div className={`w-full pt-6 pb-6 pl-8 font-normal text-gray-700 dark:text-slate-300`}>
          {children}
        </div>
      </div>
    </>
  );
}
