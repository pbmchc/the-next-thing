import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Next Thing (TNT)',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen ${inter.className}`}>
        <Navigation />
        <main className="flex flex-1 flex-col p-16">{children}</main>
        <div id="dialog-root" />
      </body>
    </html>
  );
}
