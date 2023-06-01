import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from '@highoutput/hds';
import { theme } from '@nexius/microapps';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
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
