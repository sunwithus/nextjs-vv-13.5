import React from 'react';
import Link from 'next/link';
import Chord from '@tombatossals/react-chords/lib/Chord';
import { useRouter, usePathname } from 'next/navigation';

export type ChordListProps = {
  allChords: string[];
  chords: { [key: string]: { suffix: string; key: string; positions: number[] }[] };
  chordName?: string;
};
const ChordList: React.FC<ChordListProps> = ({ chords, allChords, chordName }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    },
  };
  const chordData = chords[chordName];
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      {chordData &&
        chordData.map(({ key, suffix, positions }, index) => (
          <Link
            key={index}
            href={`/guitar-chords-db/${key}/${suffix}`}
            onClick={(event) => {
              handleClick(event);
            }}
          >
            <p className="text-lg text-center hover:text-blue-500">
              {key}
              <span>{suffix === 'minor' ? 'm' : suffix === 'major' ? '' : suffix}</span>
            </p>
            <Chord key={index} chord={positions[0]} instrument={instrument} />
          </Link>
        ))}

      {(chordName == 'All' || !chordName) &&
        allChords.map((chordName) =>
          chords[chordName].map(({ key, suffix, positions }, index) => (
            <Link
              key={index}
              href={`/guitar-chords-db/${key}/${suffix}`}
              onClick={(event) => {
                handleClick(event);
              }}
            >
              <p className="text-lg text-center hover:text-blue-500">
                {key}
                <span>{suffix === 'minor' ? 'm' : suffix === 'major' ? '' : suffix}</span>
              </p>
              <Chord key={index} chord={positions[0]} instrument={instrument} />
            </Link>
          ))
        )}
    </div>
  );
};

export default ChordList;
