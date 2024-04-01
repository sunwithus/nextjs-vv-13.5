import React from "react";
import Chord from "@tombatossals/react-chords/lib/Chord";
import guitarData from "./guitar.json";

const instrument = guitarData.main;
instrument.tunings = guitarData.tunings;

const ChordList = () => {
  const chords = guitarData.chords;
  const allChords = Object.keys(chords);

  return (
    <div className="flex flex-row flex-wrap flex-1">
      {allChords.map((chordName) =>
        chords[chordName].map((chord, index) => (
          <>
            <div className="m-auto">
              {chord.key +
                (chord.suffix === "minor"
                  ? "m"
                  : chord.suffix === "major"
                  ? ""
                  : chord.suffix)}
            </div>
            <Chord
              className=" max-w-10"
              key={index}
              chord={chord.positions[0]}
              instrument={instrument}
            />
          </>
        ))
      )}
    </div>
  );
};

export default function GuitarChords() {
  return (
    <>
      <h1>Guitar Chords</h1>
      <div>
        <ChordList />
      </div>
    </>
  );
}
