import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter, usePathname } from 'next/navigation';

type KeyListProps = {
  allChords: string[];
  onClickKeyChord: (chord: string) => void;
};

const KeyList: React.FC<KeyListProps> = ({ allChords, onClickKeyChord }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent, path: string) => {
    event.preventDefault();
    //router.push(path); // переход по ссылке делает, надо псевдо переход
  };

  return (
    <>
      <ul className="pl-3 flex flex-wrap">
        <li className="font-bold p-1">Keys:</li>
        <li className="mr-3">
          <Link
            onClick={(event) => {
              handleClick(event, `/guitar-chords-db`);
              onClickKeyChord('All');
            }}
            className={clsx('border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3', {
              'bg-blue-500 hover:bg-blue-500 hover:border-blue-500 border-blue-500 text-white': /*pathname.endsWith('guitar-chords-db/')*/ 0,
            })}
            href={`/guitar-chords-db/`}
          >
            All
          </Link>
        </li>

        {allChords
          ? allChords.map((element) => (
              <li key={element} className="mr-3">
                <Link
                  onClick={(event) => {
                    handleClick(event, `/guitar-chords-db/${element}`);
                    onClickKeyChord(element);
                  }}
                  className={clsx('border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3', {
                    'bg-blue-500 hover:bg-blue-500 hover:border-blue-500 border-blue-500 text-white': pathname.endsWith(`/${element}`),
                  })}
                  href={`/guitar-chords-db/${element}`}
                >
                  {element.replace('sharp', '#')}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default KeyList;
