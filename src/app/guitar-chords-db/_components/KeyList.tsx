import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

type KeyListProps = {
  allChords: string[];
};

const KeyList: React.FC<KeyListProps> = ({ allChords }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="pl-3 flex flex-wrap">
        <li className="font-bold p-1">Keys:</li>
        <li className="mr-3">
          <Link
            className={clsx('border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3', {
              'bg-blue-500 hover:bg-blue-500 hover:border-blue-500 border-blue-500 text-white': pathname.endsWith('guitar-chords-db/'),
            })}
            href={`/guitar-chords-db/`}
          >
            All
          </Link>
        </li>
        {allChords.map((element) => (
          <li key={element} className="mr-3">
            <Link
              className={clsx('border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3', {
                'bg-blue-500 hover:bg-blue-500 hover:border-blue-500 border-blue-500 text-white': pathname.endsWith(`/${element}`),
              })}
              href={`/guitar-chords-db/${element}`}
            >
              {element.replace('sharp', `#`)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default KeyList;
