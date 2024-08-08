import '@/styles/globals.scss';
import { usePathname } from 'next/navigation';
import Section from '@/components/Section';
import Header from '@/components/Header';
import content from '../static/content.yaml';

const { header } = content;

export default function App({ Component, pageProps }) {
  const pathname = usePathname().replace('/', '');
  const section = pathname === '' ? 'home' : pathname;
  const title = content[section].title;

  return (
    <>
      <Header logo={header.logo} navItems={header.navItems} />
      <main>
        <Section title={title}>
          <Component {...pageProps} />
        </Section>
      </main>
    </>
  );
}
