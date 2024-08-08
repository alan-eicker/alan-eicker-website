import Head from 'next/head';
import content from '../static/content.yaml';
import HomeContent from '@/components/HomeContent';
import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';

const { docTitle, home } = content;

export default function Home(props, ref) {
  return (
    <PageTransition ref={ref}>
      <Head>
        <title>{docTitle} | Home</title>
      </Head>
      <Section title={home.title}>
        <HomeContent content={home.content} />
      </Section>
    </PageTransition>
  );
}
