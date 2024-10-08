import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import { Providers } from './components/Providers'; // import Providers

const inter = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cali Pro',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
