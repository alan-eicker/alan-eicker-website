import Head from 'next/head';
import content from '../static/content.yaml';
import ProjectsSection from '@/components/ProjectsSection';
import PageTransition from '@/components/PageTransition';
import Section from '@/components/Section';

const { docTitle, projects } = content;

export default function Projects(props, ref) {
  return (
    <PageTransition ref={ref}>
      <Head>
        <title>{docTitle} | Projects</title>
      </Head>
      <Section title={projects.title}>
        <ProjectsSection content={projects.items} />
      </Section>
    </PageTransition>
  );
}
