import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@highoutput/hds';
import { theme } from '@nexius/microapps';

import '@module-federation/nextjs-mf/src/include-defaults';

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Nexius Authentication</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
