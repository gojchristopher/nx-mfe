import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@highoutput/hds';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
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
