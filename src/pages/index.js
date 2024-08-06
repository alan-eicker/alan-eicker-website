import Head from 'next/head';
import content from '../static/content.yaml';
import Section from '@/components/Section';
import Header from '@/components/Header';
import { useContentScrollContext } from '@/providers/ContentScrollProvider';

const { header } = content;

export default function Home() {
  const { section } = useContentScrollContext();

  return (
    <>
      <Head>
        <title>Alan Eicker | Front End Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header logo={header.logo} navItems={header.navItems} />
      <main className={section}>
        <Section title="Home">Home content...</Section>
        <Section title="About">About content...</Section>
        <Section title="Projects">Projects content...</Section>
        <Section title="Career">Career content...</Section>
      </main>
    </>
  );
}
