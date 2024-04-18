'use client';
import React from 'react';

import SuffixesList from './_components/SuffixesList';
import KeyList from './_components/KeyList';
import ChordList from './_components/ChordList';

import { chords } from './guitar.json';

const allChords = Object.keys(chords) as (keyof typeof chords)[]; /* C, C#, D...*/

//нужно, чтоб при клике по аккордам в <KeyList /> сюда chordName={defaultChordName} передавались разные значения из allChords, а в <ChordList /> тогда оставались только список из аккордов с одним из значений из allChords

export default function GuitarChords() {
  const defaultChordName = 'D'; // Задаем значение по умолчанию

  if (!chords) {
    console.error('chords is null');
    return null;
  }

  return (
    <>
      <KeyList allChords={allChords} />
      <br />
      <div className="flex">
        <div>{SuffixesList && <SuffixesList chords={chords} chordName={defaultChordName} />}</div>
        <div>{ChordList && <ChordList chords={chords as any} allChords={allChords as string[]} />}</div>
      </div>
    </>
  );
}

