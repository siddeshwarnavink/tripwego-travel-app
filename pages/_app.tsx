import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>TripWeGo</title>
        <link rel='icon' href='/favicon.png' />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          colors: {
            brand: ['#d8e4b4', '#cedda1', '#c4d68f', '#bbd07c', '#b1c969', '#a7c256', '#9FBD48', '#9dbb44', '#8ea93d','#7e9636' ],
          },
          primaryColor: 'brand',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}