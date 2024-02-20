import type { PropsWithChildren } from "react";
import NavLinks from "./NavLinks";
import styles from "./styles.module.css";

import VKontakteWidget from "@/components/Vk";
import Hosting from "@/components/Ads";

export default function AccordsLayout({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="pt-12 flex w-full px-6 bg-white border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:text-gray-400">
        <aside
          className={`sticky top-12 z-40 w-80 h-screen pb-4 ${styles.smallertext}`}
          aria-label="Sidebar"
        >
          <NavLinks />
        </aside>
        <div
          className={`accords w-full pt-6 pb-6 pl-8 font-normal text-gray-700 dark:text-gray-400 ${styles.accords}`}
        >
          {children}
        </div>
        <div className="pl-6 pt-8 w-56">
          <div className="w-52 mx-auto">
            <VKontakteWidget />
            <Hosting />
          </div>
        </div>
      </div>
    </>
  );
}
