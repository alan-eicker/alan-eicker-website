import Head from 'next/head';
import content from '../static/content.yaml';
import SkillsContent from '@/components/SkillsContent';
import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';

const { docTitle, skills } = content;

export default function Skills(props, ref) {
  return (
    <PageTransition ref={ref}>
      <Head>
        <title>{docTitle} | Skills</title>
      </Head>
      <Section title={skills.title}>
        <SkillsContent content={skills.items} />
      </Section>
    </PageTransition>
  );
}
