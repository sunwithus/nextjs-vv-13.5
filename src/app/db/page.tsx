import React from "react";
import Link from "next/link";
import Chord from "@tombatossals/react-chords/lib/Chord";
import guitarData from "./guitar.json";

const instrument = guitarData.main;
instrument.tunings = guitarData.tunings;

const chords = guitarData.chords;
//console.log(chords.C[0].suffix);
const allChords = Object.keys(chords); /* C, C#, D...*/

const KeyList = () => {
  return (
    <>
      <ul className="pl-3 flex flex-wrap">
        <li className="font-bold p-1">Keys:</li>
        <li className="mr-3">
          <Link
            className="border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3"
            href={`/react-chords/guitar/`}
          >
            All
          </Link>
        </li>
        {allChords.map((element) => (
          /*(element = element.replace("sharp", `#`)),*/
          <li key={element} className="mr-3">
            <Link
              className="border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3"
              href={`/react-chords/guitar/${element}`}
            >
              {element.replace("sharp", `#`)}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const SuffixesList = (props: any) => {
  //chords.C[0].suffix
  const chordName = props.chord;
  //console.log(chords[chordName][0].suffix);
  //console.log(chords[chordName]);
  const chordData = chords[chordName] ? chords[chordName] : null;

  return (
    <>
      <ul className="pl-3">
        <li className="text-xl p-1">Suffixes:</li>
        {chordData.map((elem) => (
          <li key={elem.suffix} className="mr-3 block">
            <Link
              className="text-blue-500 font-bold hover:text-grey-800 py-1 px-3"
              href={`/react-chords/guitar/${chordName}/${elem.suffix}`}
            >
              {chordName}
              {elem.suffix}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const ChordList = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
      {allChords.map((chordName) =>
        chords[chordName].map((chord, index) => (
          // eslint-disable-next-line react/jsx-key
          <Link href={`/react-chords/guitar/${chord.key}/${chord.suffix}`}>
            <p className="text-lg text-center">
              {chord.key}
              <span>
                {chord.suffix === "minor"
                  ? "m"
                  : chord.suffix === "major"
                  ? ""
                  : chord.suffix}
              </span>
            </p>
            <Chord
              key={index}
              chord={chord.positions[0]}
              instrument={instrument}
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default function GuitarChords() {
  return (
    <>
      <KeyList />
      <br />
      <div className="flex">
        <div>
          <SuffixesList chord="B" />
        </div>
        <div>
          <ChordList />
        </div>
      </div>
    </>
  );
}
