import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Аккорды к песням Высоцкого',
  description: 'Поём под гитару Высоцкого вместе',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 pb-16 min-h-full">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="m-5 left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">На сайте представленны аккорды к песням и новости о Владимире Семеновиче Высоцком, вы сможете найти увлекательные и информативные материалы об этом выдающемся артисте. Здесь вы сможете окунуться в его музыкальный мир, узнать интересные факты из его жизни и карьеры, а также быть в курсе последних новостей и событий, связанных с ним. Анализ его песен, тексты и переводы его композиций, обзоры его фильмов и театральных постановок, а также интервью с людьми, работавшими с ним и знающими его лично.</p>
      </div>

      <div className="mb-4 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <Link href="accords" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Accords <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Аккорды к песням Высоцкого</p>
        </Link>

        <Link href="https://sunwithus.ru" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" rel="noopener noreferrer">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            sunwithus.ru <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Сайт в разработке...</p>
        </Link>
      </div>
    </main>
  );
}
