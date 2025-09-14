import type {Metadata} from 'next';
import './globals.css';
import {Bar} from '../components/Navigation/Bar';
import {Footer} from '../components/Footer/Footer';
import dynamic from 'next/dynamic';
import {GoogleAnalytics} from '@next/third-parties/google';

export const metadata: Metadata = {
  title: {
    default: 'Nauka pływania | Szkrab Szkoła Pływania',
    template: '%s | Szkrab Szkoła Pływania',
  },
  description:
    'Szkoła pływania Szkrab - zajęcia nauki pływania w Wolbromiu dla dzieci, młodzieży i dorosłych.',
  metadataBase: new URL('https://szkolaplywaniaszkrab.pl'),
  authors: [{name: 'Justyna Jurczyk'}],
  publisher: 'Justyna Jurczyk',
  alternates: {
    canonical: '/',
    languages: {
      'pl-PL': '/pl-PL',
    },
  },
  robots: {index: true, follow: true},
  openGraph: {
    images: '/og-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CookiesPopup = dynamic(
    () => import('@/src/components/Popups/CookiesPopup/CookiesPopup')
  );
  return (
    <html lang="en">
      <body>
        <CookiesPopup />
        <Bar />
        {/* Padding top 161px */}
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-QNXJD7X222" />
      </body>
    </html>
  );
}
