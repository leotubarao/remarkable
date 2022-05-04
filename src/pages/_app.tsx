import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';

import { Footer } from '~/components/Footer';
import { Header } from '~/components/Header';

import '~/styles/main.scss';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Remarkable Cars</title>
      </Head>

      <NextNProgress
        color="#FF8146"
        startPosition={0.3}
        stopDelayMs={200}
        height={8}
        showOnShallow={true}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
