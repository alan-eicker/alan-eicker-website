import Head from 'next/head';
import content from '../static/content.yaml';
import SkillsContent from '@/components/SkillsContent';

const { docTitle, skills } = content;

export default function Skills() {
  return (
    <>
      <Head>
        <title>{docTitle} | Skills</title>
      </Head>
      <SkillsContent content={skills.items} />
    </>
  );
}
