import React from 'react';
import Head from 'next/head';
import { Provider } from 'mobx-react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from 'src/theme';
import { useStore } from 'src/setUpStore';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider {...store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
