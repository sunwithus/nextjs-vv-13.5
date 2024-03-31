import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Высоцкий // В каждом окне Советского Союза",
  description: "Аккорды к песням Высоцкого",
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Script src="https://vk.com/js/api/openapi.js?169" />
        <div className="flex flex-col lg:h-screen">
          <Header />
          <div className="max-w-7xl lg:m-auto xl:w-[1280px] ">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
