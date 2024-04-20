'use client';
import React, { useState } from 'react';
import SuffixesList from './_components/SuffixesList';
import KeyList from './_components/KeyList';
import ChordList from './_components/ChordList';

import guitarJson from './guitar.json';

const chords = guitarJson.chords;
const allChords = Object.keys(chords) as (keyof typeof chords)[]; /* C, C#, D...*/

export default function GuitarChords() {
  interface ChordListProps {
    chords: { [key: string]: { suffix: string; key: string; positions: number[] }[] };
    allChords: string[];
    chordName: string; // Add the chordName prop here
  }

  const [chordName, setChordName] = React.useState('');

  return (
    <>
      <KeyList allChords={allChords} onClickKeyChord={(chord) => setChordName(chord)} />
      <br />
      <div className="flex">
        <div>
          <SuffixesList chords={chords} chordName={chordName} />
        </div>
        <div>
          <ChordList chords={chords as any} allChords={allChords as string[]} chordName={chordName} />
        </div>
      </div>
    </>
  );
}
