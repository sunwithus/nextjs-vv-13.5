import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Высоцкий // В каждом окне Советского Союза',
  description: 'Аккорды к песням Высоцкого',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-100">
      <body className={`${inter.className}`}>
        <Script src="https://vk.com/js/api/openapi.js?168" />
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
