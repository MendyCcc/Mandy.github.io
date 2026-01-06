import { motion } from 'motion/react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { projects } from '../data/projects';

interface SubProjectDetailPageProps {
  projectSlug: string;
  subProjectIndex: number;
  onNavigate: (page: string, projectSlug?: string, subIndex?: number, sectionId?: string) => void;
}

export function SubProjectDetailPage({ projectSlug, subProjectIndex, onNavigate }: SubProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === projectSlug);
  
  if (!project || !project.subProjects || !project.subProjects[subProjectIndex]) {
    return (
      <div className="min-h-screen pt-32 px-8 text-center">
        <h2>Sub-project not found</h2>
        <button onClick={() => onNavigate('project', projectSlug)} className="mt-8 text-[var(--accent)]">
          ← Back to project
        </button>
      </div>
    );
  }

  const subProject = project.subProjects[subProjectIndex];
  const hasPrevious = subProjectIndex > 0;
  const hasNext = subProjectIndex < project.subProjects.length - 1;

  return (
    <div className="min-h-screen">
      {/* Elegant Back Button - Fixed Position */}
      <motion.div
        className="fixed top-24 left-8 z-50"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button
          onClick={() => onNavigate('project', projectSlug, undefined, 'sub-projects')}
          className="group flex items-center gap-3 px-6 py-3 bg-white/95 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--light-gray)]"
          whileHover={{ x: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft size={18} className="text-[var(--accent)] group-hover:text-[var(--text)] transition-colors" />
          <div className="flex flex-col items-start">
            <span className="text-xs opacity-60 leading-none mb-1">Back to</span>
            <span className="text-sm font-medium leading-none group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Hero Section with Full-Width Image */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {subProject.image && (
            <>
              <ImageWithFallback
                src={subProject.image}
                alt={subProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[var(--background)]" />
            </>
          )}
        </motion.div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="mb-6 text-white drop-shadow-2xl">{subProject.title}</h1>
            
            {subProject.tags && subProject.tags.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {subProject.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="px-5 py-2 bg-white/95 backdrop-blur-sm text-[var(--text)] text-sm rounded-full font-medium shadow-lg"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-[var(--accent)]">Overview</h2>
          <p className="text-2xl md:text-3xl opacity-90 leading-relaxed mb-12">
            {subProject.description}
          </p>
          
          {subProject.detailedDescription && (
            <p className="text-xl opacity-80 leading-relaxed">
              {subProject.detailedDescription}
            </p>
          )}
        </motion.div>
      </section>

      {/* Two Column Section: Objectives & Approach */}
      <section className="bg-[var(--light-gray)]/30 py-24">
        <div className="max-w-[1200px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Objectives */}
            {subProject.objectives && subProject.objectives.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-8 text-[var(--accent)]">Objectives</h3>
                <ul className="space-y-6">
                  {subProject.objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="text-[var(--accent)] text-2xl mt-1 group-hover:scale-125 transition-transform">•</span>
                      <span className="text-lg opacity-80 leading-relaxed">{objective}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Approach */}
            {subProject.approach && (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-8 text-[var(--accent)]">Approach</h3>
                <p className="text-lg opacity-80 leading-relaxed whitespace-pre-line">
                  {subProject.approach}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      {subProject.keyFeatures && subProject.keyFeatures.length > 0 && (
        <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-[var(--accent)]">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {subProject.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-5 p-6 rounded-xl bg-white hover:bg-[var(--accent)]/5 transition-all duration-300 border border-transparent hover:border-[var(--accent)]/20">
                    <span className="text-[var(--accent)] text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="opacity-80 text-lg leading-relaxed flex-1">{feature}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Image Gallery Section */}
      {subProject.images && subProject.images.length > 0 && (
        <section className="bg-[var(--light-gray)]/20 py-24">
          <div className="max-w-[1400px] mx-auto px-8 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-12 text-[var(--accent)]">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subProject.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group overflow-hidden rounded-xl cursor-pointer"
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-video overflow-hidden bg-white">
                      <ImageWithFallback
                        src={img}
                        alt={`${subProject.title} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Bottom Navigation Section */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 border-t border-[var(--light-gray)]">
        <div className="flex justify-between items-center gap-8">
          {hasPrevious ? (
            <motion.button
              onClick={() => onNavigate('subproject', projectSlug, subProjectIndex - 1)}
              className="flex items-center gap-4 group cursor-hover"
              whileHover={{ x: -4 }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-3 rounded-full bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] transition-all duration-300">
                <ChevronLeft className="text-[var(--accent)] group-hover:text-white transition-colors" size={24} />
              </div>
              <div className="text-left">
                <p className="text-xs opacity-60 mb-1">Previous</p>
                <p className="text-base font-medium group-hover:text-[var(--accent)] transition-colors">
                  {project.subProjects[subProjectIndex - 1].title}
                </p>
              </div>
            </motion.button>
          ) : (
            <div />
          )}

          {hasNext ? (
            <motion.button
              onClick={() => onNavigate('subproject', projectSlug, subProjectIndex + 1)}
              className="flex items-center gap-4 group cursor-hover"
              whileHover={{ x: 4 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-right">
                <p className="text-xs opacity-60 mb-1">Next</p>
                <p className="text-base font-medium group-hover:text-[var(--accent)] transition-colors">
                  {project.subProjects[subProjectIndex + 1].title}
                </p>
              </div>
              <div className="p-3 rounded-full bg-[var(--accent)]/10 group-hover:bg-[var(--accent)] transition-all duration-300">
                <ChevronRight className="text-[var(--accent)] group-hover:text-white transition-colors" size={24} />
              </div>
            </motion.button>
          ) : (
            <div />
          )}
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-12" />
    </div>
  );
}