import type { PropsWithChildren } from 'react';
import NavLinks from './NavLinks';
import NavSmallScreen from './NavSmallScreen';

import styles from './styles.module.css';

import VKontakteWidget from '@/components/Vk';
import Hosting from '@/components/Ads';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Высоцкий // Аккорды к песням',
  description: 'Аккорды к песням В.С. Высоцкого',
};

export default function AccordsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:min-w-[1148px] justify-between pt-24 sm:pt-12 px-2 bg-white lg:border border-gray-400 lg:rounded-lg shadow dark:bg-gray-800 dark:text-gray-400">
        <div className="flex flex-col sm:flex-row ">
          {/* client component */}
          <NavSmallScreen>
            <NavLinks /> {/* server component */}
          </NavSmallScreen>

          <div className={`accords w-11/12 lg:w-[520px] xl:w-[640px] sm:w-full pt-6 pb-6 pl-2 md:pl-10 font-normal text-gray-700 dark:text-gray-400 ${styles.accords}`}>{children}</div>
        </div>
        <div className="pl-4 lg:mx-2 mx-auto pt-8 w-56">
          <div className="w-52">
            <VKontakteWidget />
            <Hosting />
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
