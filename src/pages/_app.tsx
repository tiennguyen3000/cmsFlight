/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';

import Page from '../components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import { store } from 'service/app/store';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Smile Strip.</title>
        </Head>
        <Page>
          <Component {...pageProps} />
        </Page>
      </PersistGate>
    </Provider>
  );
}
