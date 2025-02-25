import type { Metadata } from 'next';
import '@/assets/styles/globals.css';
import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import { APP_DECRIPTION, APP_NAME, SERVER_URL } from '@/lib/constants';
import { JetBrains_Mono } from 'next/font/google';
import { Separator } from '@/components/ui/separator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AnimatedBackground from '@/components/animated-background';

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Jeopardy game',
    default: APP_NAME,
  },
  description: APP_DECRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetBrainsMono.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <div className="flex flex-col w-screen h-screen">
            <Header />
            <Separator />
            <main className="wrapper">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
