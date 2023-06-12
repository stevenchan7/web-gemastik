import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/layout/Layout';
import styles from '@/styles/globals.css';

function commonLayout(page) {
  return <Layout>{page}</Layout>;
}

export default function App({ Component, pageProps }) {
  // Use layout defined at page level, if not, use default layout
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
