import React from 'react';
import Link from 'next/link';
import Chord from '@tombatossals/react-chords/lib/Chord';
import guitarData from './guitar.json';

const instrument = guitarData.main;
instrument.tunings = guitarData.tunings;

const ChordList = () => {
  const chords = guitarData.chords;
  const allChords = Object.keys(chords);

  return (
    <>
      {allChords.map((chordName /* */) =>
        chords[chordName].map((chord, index) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/react-chords/guitar/${chord.key}/${chord.suffix}`}>
            <div className="text-lg text-center m-auto">{chord.key + (chord.suffix === 'minor' ? 'm' : chord.suffix === 'major' ? '' : chord.suffix)}</div>
            <Chord className=" max-w-10" key={index} chord={chord.positions[0]} instrument={instrument} />
          </Link>
        ))
      )}
    </>
  );
};

export default function GuitarChords() {
  return (
    <>
      <div>
        <ChordList />
      </div>
    </>
  );
}
