import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

interface WorkPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export function WorkPage({ onNavigate }: WorkPageProps) {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="mb-6">All Works</h1>
          <p className="text-xl opacity-60 max-w-3xl">
            A comprehensive collection of projects exploring interaction design,
            product development, and service innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-28">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.coverImage}
              index={index}
              onClick={() => onNavigate('project', project.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
