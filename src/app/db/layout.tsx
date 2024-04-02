import type { PropsWithChildren } from 'react';
import './style.css';

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-24"> </div>
      <div className="container">
        <h1>Guitar Chords</h1>
        <ul className="pl-3 flex flex-wrap">
          <li className="font-bold p-1">Keys:</li>
          <li className="mr-3">
            <a className="bg-blue-500 text-white hover:bg-blue-500 hover:border-blue-200 inline-block border font-bold rounded py-1 px-3" href="/react-chords/guitar" aria-current="page">
              All
            </a>
          </li>
          <li className="mr-3">
            <a className="border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3" href="/react-chords/guitar/C">
              C
            </a>
          </li>
          <li className="mr-3">
            <a className="border-white text-blue-500 hover:border-gray-200 hover:bg-gray-200 inline-block border font-bold rounded py-1 px-3" href="/react-chords/guitar/Csharp">
              C#
            </a>
          </li>
        </ul>
        <div className="w-full">
          <div className="litegrid">{children}</div>
        </div>
      </div>
    </>
  );
}
