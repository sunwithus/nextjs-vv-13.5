import type { PropsWithChildren } from "react";
import VKontakteWidget from "@/components/Vk";
import Hosting from "@/components/Ads";

export default function NewsLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <div className="mt-16 lg:flex lg:flex-row flex-col justify-between">
        <div className=" lg:ml-4">
          <article className="prose lg:prose-lg">{children}</article>
        </div>
        <div className="w-56">
          <div className="w-52 mx-auto">
            <VKontakteWidget />
            <Hosting />
          </div>
        </div>
      </div>
    </>
  );
}
