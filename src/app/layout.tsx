import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../style/globals.scss';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pw.variable}`}>{children}</body>
    </html>
  );
}
