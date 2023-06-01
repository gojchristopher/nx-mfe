import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@highoutput/hds';
import { theme } from '@nexius/microapps';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Welcome to auth!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
