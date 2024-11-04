import { I } from '@/interface';
import 'animate.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../style/globals.scss';

const allura = localFont({
  src: [
    {
      path: './fonts/Allura-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-allura',
});

const pw = localFont({
  src: [
    {
      path: './fonts/PlaywriteGBS-Regular.ttf',
      weight: '400',
    },
  ],
  variable: '--font-pw',
});

export const metadata: Metadata = {
  title: 'Rose and Jerome',
  description: 'The wedding of Rose Anne and Jerome',
};

export default function RootLayout({ children }: Readonly<I.Child>) {
  return (
    <html lang="en">
      <body className={`${allura.variable} ${pw.variable}`}>{children}</body>
    </html>
  );
}
