import React from "react";
import ReactDOM from "react-dom";

import Chord from "@tombatossals/react-chords/lib/Chord";
import guitarData from "./guitar.json";

const instrument = guitarData.main;
instrument.tunings = guitarData.tunings;

// Функциональный компонент для отображения одного аккорда
const MyChord = () => {
  const chord = guitarData.chords.C[0].positions[0];
  const lite = false; // defaults to false if omitted
  return <Chord chord={chord} instrument={instrument} lite={lite} />;
};

// Функциональный компонент для отображения списка аккордов
const ChordList = () => {
  const chords = guitarData.chords;
  const allChords = Object.keys(chords);
  /* //
  const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
};

  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]
  */

  return (
    <div className="flex flex-row">
      {allChords.map((chordName) => (
        <Chord
          key={chordName}
          chord={chords[chordName][0].positions[0]}
          instrument={instrument}
        />
      ))}
    </div>
  );
};

export default function DB() {
  return (
    <>
      <div>
        <ChordList />
      </div>
    </>
  );
}
