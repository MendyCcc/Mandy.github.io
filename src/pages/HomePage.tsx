import { motion } from 'motion/react';
import { ProjectCard } from '../components/ProjectCard';
import { ScrollIndicator } from '../components/ScrollIndicator';
import { projects } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695390838893-e11defdef98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYWJzdHJhY3QlMjBkZXNpZ258ZW58MXx8fHwxNzYzMDExMTU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Abstract background"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.h1
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Designing meaningful interactions
            <br />
            across cultures and contexts.
          </motion.h1>
          
          <motion.p
            className="text-xl opacity-70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Interaction and UX designer exploring the intersection of technology,
            culture, and human behavior.
          </motion.p>
        </div>

        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <ScrollIndicator />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1440px] mx-auto px-8 md:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-4">Selected Works</h2>
          <p className="opacity-60">
            A collection of recent projects spanning product design, service design,
            and interaction research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.slice(0, 4).map((project, index) => (
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

        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => onNavigate('work')}
            className="text-[var(--accent)] hover:opacity-70 transition-opacity"
            whileHover={{ scale: 1.05 }}
          >
            View all works →
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
