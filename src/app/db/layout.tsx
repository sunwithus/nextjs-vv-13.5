import type { PropsWithChildren } from "react";

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="flex">{children}</div>
    </>
  );
}
