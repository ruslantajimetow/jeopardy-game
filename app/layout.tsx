import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/styles/globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Jeopardy Game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col w-screen h-screen">
          <Header />
          <main className="wrapper">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
