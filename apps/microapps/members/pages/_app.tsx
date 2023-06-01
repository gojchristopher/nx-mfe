import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import '@module-federation/nextjs-mf/src/include-defaults';
import { ThemeProvider } from '@highoutput/hds';
import { theme } from '@nexius/microapps';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Welcome to members!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
