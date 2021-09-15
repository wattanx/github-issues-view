import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { config } from 'site.config';

import theme from '../theme';
import { AppProps } from 'next/app';
import { AxiosClient, HttpClientProvider } from 'framework';
import { SiteHeader } from 'components/SiteHeader';

const client = new AxiosClient();

function MyApp({ Component, pageProps }: AppProps) {
  const SafeHydrate = dynamic(() => import('components/SafeHydrate'), {
    ssr: false,
  });
  const title = config.siteMeta.title;
  const pageUrl = config.baseUrl;
  const description = config.siteMeta.description;
  return (
    <SafeHydrate>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site" content={title} />
        <meta />
        {!!description && (
          <>
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
          </>
        )}
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <HttpClientProvider client={client}>
          <SiteHeader />
          <Component {...pageProps} />
        </HttpClientProvider>
      </ChakraProvider>
    </SafeHydrate>
  );
}

export default MyApp;
