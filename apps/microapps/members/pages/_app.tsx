import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { ThemeProvider } from '@highoutput/hds';
import { theme } from '@nexius/microapps';

import '@module-federation/nextjs-mf/src/include-defaults';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Nexius members!</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
