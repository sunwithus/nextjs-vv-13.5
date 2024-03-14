import Link from 'next/link';
import Image from 'next/image';

import styles from './styles.module.css';

import { getAllAccordPages } from '@/components/Api';

type Page = {
  title: string;
  slug: string;
};

export default async function NavLinks() {
  const data = await getAllAccordPages();

  return (
    <>
      <aside className={`sticky h-screen sm:w-64 md:w-80 top-12 z-40 pb-4 ${styles.smallertext} `} aria-label="Sidebar">
        <div className="h-full pt-4 overflow-y-auto overflow-x-hidden bg-gray-150 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/accords" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <Image width="32" height="32" className="h-8 w-auto" src="/images/player.svg" alt="Your Company" />
                <span className="ms-3">Послушать плейлист</span>
              </Link>
            </li>

            {data.map((link: Page) => (
              <Link key={link.slug} href={`/accords/${link.slug}`}>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-300">
                  <div>{link.title}</div>
                </li>
              </Link>
            ))}
            <br />
            <br />
          </ul>
        </div>
      </aside>
    </>
  );
}
