import type { PropsWithChildren } from 'react';
import VKontakteWidget from '@/components/Vk';

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-16 lg:flex px-6">
        <div className=" lg:ml-8">
          <article className="prose lg:prose-lg">{children}</article>
        </div>
        <div className="pl-4 min-w-52 w-52 mx-auto">
          <VKontakteWidget />
  </div>
      </div>
    </>
  );
}
