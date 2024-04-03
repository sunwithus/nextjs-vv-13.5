import type { PropsWithChildren } from "react";

const chordTest = {
  chords: {
    C: [
      {
        key: "C",
        suffix: "major",
        positions: [
          {
            frets: [-1, 3, 2, 0, 1, 0],
            fingers: [0, 3, 2, 0, 1, 0],
            baseFret: 1,
            barres: [],
            midi: [48, 52, 55, 60, 64],
          },
          {
            frets: [-1, 1, 3, 3, 3, 1],
            fingers: [0, 1, 2, 3, 4, 1],
            barres: [1],
            capo: true,
            baseFret: 3,
            midi: [48, 55, 60, 64, 67],
          },
          {
            frets: [-1, -1, 1, 1, 1, 4],
            fingers: [0, 0, 1, 1, 1, 4],
            barres: [1],
            baseFret: 5,
            midi: [55, 60, 64, 72],
          },
          {
            frets: [1, 3, 3, 2, 1, 1],
            fingers: [1, 3, 4, 2, 1, 1],
            barres: [1],
            capo: true,
            baseFret: 8,
            midi: [48, 55, 60, 64, 67, 72],
          },
        ],
      },
    ],
  },
};

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-24"></div>
      <h1>Guitar Chords</h1>
      <div>{children}</div>
    </>
  );
}
