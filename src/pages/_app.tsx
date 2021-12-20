import * as React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LazyMotion } from 'framer-motion';

import 'tailwindcss/tailwind.css';
import 'src/styles/index.css';

const loadFeatures = () => import('src/libs/animationFeature').then((res) => res.domAnimation);

function MinswapFisoDashboardApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Minswap FISO Dashboard</title>
        <meta charSet="UTF-8" />
        <meta content="Multi-pool decentralized exchange on Cardano" name="description" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
        <meta content="width=device-width, initial-scale=1, viewport-fit=cover" name="viewport" />
        <link href={`${process.env['NEXT_PUBLIC_URL']}${router.pathname}`} rel="cannonical" />
      </Head>

      <LazyMotion features={loadFeatures} strict>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MinswapFisoDashboardApp;
