import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/style-dark.css';
// import '@styles/style-light.css';
// import '@styles/style.css';
// import '@styles/main.css';
// import '@styles/colors/default.css';
// import 'bootstrap/dist/css/bootstrap.css';

import Footer from '@components/footer';
import Navbar from '@components/navbar';
import ImportBsJS from '@utils/importBsJS';
// import ScriptComponent from '@utils/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Masalief Maulana - Personal Portfolio',
  description:
    'Personal Portfolio of Masalief Maulana with Next.js and TypeScript',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={inter.className}
        data-bs-spy="scroll"
        data-bs-target=".navbar"
        data-bs-offset="80"
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          {/* <ScriptComponent /> */}
          <ImportBsJS />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
