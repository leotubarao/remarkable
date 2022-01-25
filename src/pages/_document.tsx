import React from 'react';

import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="theme-color" content="#FF8146" />

          <meta
            name="author"
            content="Design: SINAIS Publicidade | Programação: ltco.com.br"
          />

          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Language" content="pt-br" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
