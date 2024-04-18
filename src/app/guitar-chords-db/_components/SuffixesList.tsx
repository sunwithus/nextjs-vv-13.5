import React from 'react';
import Link from 'next/link';

type SuffixesListProps = {
  chords: { [key: string]: { suffix: string }[] };
  chordName?: string;
};

const SuffixesList: React.FC<SuffixesListProps> = ({ chords, chordName = 'D' }) => {
  const chordData = chords[chordName];
  const suffixes = chordData?.map((elem) => elem.suffix) ?? [];

  return (
    <>
      <ul className="pl-3"><li className="text-xl p-1">Suffixes:</li>
        {suffixes.map((suffix) => (
          <li key={`${chordName}${suffix}`} className="mr-3 block">
            <Link href={`/guitar-chords-db/${chordName}/${suffix}`} passHref>
              <a className="text-grey-800 hover:text-blue-500 py-1 px-3">{chordName}{suffix}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SuffixesList;