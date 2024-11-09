import { IMAGES } from '@/constant/media.constant';
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
  title: 'Jerome and Rose ',
  description:
    'Come Join us to witness the union of 2 beautiful soul. The wedding of Jerome and Rose Anne',
  openGraph: {
    images: [
      {
        url: IMAGES.og,
        alt: 'Wedding pic',
        type: 'image/jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }: Readonly<I.Child>) {
  return (
    <html lang="en">
      <body className={`${allura.variable} ${pw.variable}`}>{children}</body>
    </html>
  );
}
