import Link from 'next/link';
import Image from 'next/image';

import { getAllAccordPages } from '@/components/Api';

type Page = {
  title: string;
  slug: string;
};

export default async function NavLinks() {
  const data = await getAllAccordPages();

  return (
    <>
      <div className="h-full pt-4 overflow-y-auto overflow-x-hidden bg-gray-150 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {/*<div className="stiky top-0 ">
            <div className="flex items-center">
              <svg aria-hidden="true" display="block" className="w-4 h-4 absolute left-3" viewBox="0 0 16 16" width="16" height="16"></svg>
              <input placeholder="Поиск" data-t="left-menu-search" className="px-3 py-4" value="" />
            </div>
            <div className="h-6 absolute bottom-0 mb-[-24px]"></div>
          </div>*/}

          <li>
            <Link href="/accords" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <Image width="32" height="32" className="h-8 w-auto" src="/images/player.svg" alt="Your Company" />
              <span className="ms-3">Послушать плейлист</span>
            </Link>
          </li>

          {data.map((link: Page) => (
            <Link key={link.slug} href={`/accords/${link.slug}`}>
              <li className="dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
                <div>{link.title}</div>
              </li>
            </Link>
          ))}
          <li>
            <br />
          </li>
        </ul>
      </div>
    </>
  );
}
