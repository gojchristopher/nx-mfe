import { ThemeProvider } from '@highoutput/hds';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {} from '@nexius/'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={}>
      <Head>
        <title>Welcome to host!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
