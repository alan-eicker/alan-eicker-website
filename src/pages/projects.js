import Head from 'next/head';
import content from '../static/content.yaml';
import ProjectsSection from '@/components/ProjectsSection';

const { docTitle, projects } = content;

export default function Projects() {
  return (
    <>
      <Head>
        <title>{docTitle} | Projects</title>
      </Head>
      <ProjectsSection content={projects.items} />
    </>
  );
}
