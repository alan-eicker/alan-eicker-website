import Head from 'next/head';
import content from '../static/content.yaml';
import HomeContent from '@/components/HomeContent';

const { docTitle, home } = content;

export default function Home() {
  return (
    <>
      <Head>
        <title>{docTitle} | Home</title>
      </Head>
      <HomeContent content={home.content} />
    </>
  );
}
