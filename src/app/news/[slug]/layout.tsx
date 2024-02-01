import type { PropsWithChildren } from 'react';

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-16 lg:ml-8">
        <article className="prose lg:prose-lg">{children}</article>
      </div>
    </>
  );
}
