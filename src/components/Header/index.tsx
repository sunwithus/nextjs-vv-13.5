'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Функция для объединения классов
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

// Компонент Header
const Header = () => {
  // Массив объектов для навигации
  const [navigation, setNavigation] = useState([
    { name: 'Аккорды', href: '/accords', current: false },
    { name: 'Новости', href: '/news', current: false },
    { name: 'Биография', href: '/biography', current: false },
    { name: 'Фильмы', href: '/films', current: false },
    { name: 'Список аккордов', href: '/guitar-chords-db/', current: false },
  ]);

  // Функция для обновления текущего элемента в навигации
  const handleNavigationClick = (index: any) => {
    const updatedNavigation = navigation.map((item, i) => ({
      ...item,
      /* true, если значение второго параметра (i-индекса) равно индексу в onClick={() => handleNavigationClick(index)} */
      current: i === index,
    }));
    // Обновляем состояние навигации
    setNavigation(updatedNavigation);
  };

  // Функция для сброса всех значений current в false при переходе по href="/"
  const handleHomeClick = () => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: false,
    }));
    // Обновляем состояние навигации
    setNavigation(updatedNavigation);
  };

  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-black fixed z-50 min-w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Кнопка для мобильного меню */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Меню</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    onClick={() => {
                      handleHomeClick();
                    }}
                  >
                    <Image width="32" height="32" className="h-8 w-auto" src="/images/logo/logo2.png" alt="" />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {/* Навигационные ссылки */}
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={clsx('text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium', {
                          //'bg-gray-600 text-white': pathname === item.href + '/',
                          'bg-gray-700 text-white': pathname.startsWith(item.href),
                        })}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={() => {
                          handleNavigationClick(index);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Дропдаун профиля */}
                <Link href="https://vk.com/vvsunwithusru" target="_blank">
                  <Image width={32} height={32} className="h-8 w-8 rounded-full" src="/images/vk.png" alt="" />
                </Link>
              </div>
            </div>
          </div>

          {/* Панель для мобильного меню */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Навигационные кнопки для мобильного меню */}
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? 'bg-gray-1000 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')} aria-current={item.current ? 'page' : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
