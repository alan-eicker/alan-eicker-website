import Head from 'next/head';
import content from '../static/content.yaml';
import CareerSection from '@/components/CareerSection';
import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';

const { docTitle, career } = content;
const { history, referrals, resumeURL } = career;

export default function Projects(props, ref) {
  return (
    <PageTransition ref={ref}>
      <Head>
        <title>{docTitle} | Career</title>
      </Head>
      <Section title={career.title}>
        <CareerSection content={{ history, referrals, resumeURL }} />
      </Section>
    </PageTransition>
  );
}
