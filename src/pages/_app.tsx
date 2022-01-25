import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globals';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
