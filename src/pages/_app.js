import '@/styles/globals.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import Header from '@/components/Header';
import content from '../static/content.yaml';

const { header } = content;

export default function App({ Component, pageProps }) {
  const pathname = usePathname().replace('/', '');
  const section = pathname === '' ? 'home' : pathname;

  return (
    <>
      <Header logo={header.logo} navItems={header.navItems} />
      <main>
        <AnimatePresence initial={false} mode="wait">
          <Component key={section} {...pageProps} />
        </AnimatePresence>
      </main>
    </>
  );
}
