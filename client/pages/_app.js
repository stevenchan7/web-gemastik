import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google';
import Layout from '@/layout/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />;
    </Layout>
  );
}
