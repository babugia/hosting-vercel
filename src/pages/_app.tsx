import { AppProps } from 'next/app';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title={Component.name}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
