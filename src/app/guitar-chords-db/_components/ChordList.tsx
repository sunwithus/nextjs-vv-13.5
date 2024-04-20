import React from 'react';
import Link from 'next/link';
import Chord from '@tombatossals/react-chords/lib/Chord';

export type ChordListProps = {
  allChords: string[];
  chords: { [key: string]: { suffix: string; key: string; positions: number[] }[] };
};
const ChordList: React.FC<ChordListProps> = ({ chords, allChords }) => {
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: 'Guitar',
    keys: [],
    tunings: {
      standard: ['E', 'A', 'D', 'G', 'B', 'E'],
    },
  };
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      {allChords.map((chordName) =>
        chords[chordName]
          .filter((chord) => chord.key === chordName)
          .map(({ key, suffix, positions }, index) => (
            //chords[chordName].map(({ key, suffix, positions }, index) => (
            <Link key={index} href={`/guitar-chords-db/${key}/${suffix}`}>
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
