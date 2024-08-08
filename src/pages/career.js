import Head from 'next/head';
import content from '../static/content.yaml';
import CareerSection from '@/components/CareerSection';

const { docTitle, career } = content;
const { history, referrals, resumeURL } = career;

export default function Projects() {
  return (
    <>
      <Head>
        <title>{docTitle} | Career</title>
      </Head>
      <CareerSection content={{ history, referrals, resumeURL }} />
    </>
  );
}
