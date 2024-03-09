import type { PropsWithChildren } from "react";
import NavLinks from "./NavLinks";
import NavSmallScreen from "./NavSmallScreen";

import styles from "./styles.module.css";

import VKontakteWidget from "@/components/Vk";
import Hosting from "@/components/Ads";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Высоцкий // Аккорды к песням",
  description: "Аккорды к песням В.С. Высоцкого",
};

export default function AccordsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="pt-12 flex flex-col lg:flex-row px-6 bg-white lg:border border-gray-400 lg:rounded-lg shadow dark:bg-gray-800 dark:text-gray-400">
        {/* client component */}
        <NavSmallScreen>
          <NavLinks /> {/* server component */}
        </NavSmallScreen>

        <div
          className={`accords w-full pt-6 pb-6 pl-8 font-normal text-gray-700 dark:text-gray-400 ${styles.accords}`}
        >
          {children}
        </div>
        <div className="pl-6 sm:mx-0 mx-auto pt-8 w-56">
          <div className="w-52">
            <VKontakteWidget />
            <Hosting />
          </div>
        </div>
      </div>
    </>
  );
}
