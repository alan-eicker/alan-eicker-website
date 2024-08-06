import '@/styles/globals.scss';
import ContentScrollProvider from '@/providers/ContentScrollProvider';

export default function App({ Component, pageProps }) {
  return (
    <ContentScrollProvider>
      <Component {...pageProps} />
    </ContentScrollProvider>
  );
}
