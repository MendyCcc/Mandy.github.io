import { motion } from 'motion/react';
import { projects, Project } from '../data/projects';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ProjectDetailPageProps {
  projectSlug: string;
  onNavigate: (page: string, projectSlug?: string, subIndex?: number) => void;
}

export function ProjectDetailPage({ projectSlug, onNavigate }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === projectSlug);
  
  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-8 text-center">
        <h2>Project not found</h2>
        <button onClick={() => onNavigate('work')} className="mt-8 text-[var(--accent)]">
          ← Back to all works
        </button>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === projectSlug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <ImageWithFallback
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 pb-16 w-full">
          <motion.button
            onClick={() => onNavigate('work')}
            className="mb-8 flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.7, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ x: -4 }}
          >
            <ArrowLeft size={16} /> Back to all works
          </motion.button>

          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.p
            className="text-xl opacity-80 mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1 bg-[var(--accent)]/20 text-[var(--accent)] text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
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
          <h2 className="mb-8">Overview</h2>
          <p className="text-xl mb-12 leading-relaxed">
            {project.overview.background}
          </p>

          {/* Project Type Badge */}
          {project.projectType && (
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[var(--accent)]/10 text-[var(--accent)] text-sm rounded-md border border-[var(--accent)]/30">
                {project.projectType === 'hardware-software' && '🔧 Hardware + Software Integration'}
                {project.projectType === 'software-desktop' && '💻 Desktop Application'}
                {project.projectType === 'website-visual' && '🎨 Website + Visual Design'}
                {project.projectType === 'integrated-team' && '👥 Team Collaboration Project'}
                {project.projectType === 'multi-project' && '🔗 Multi-Project System'}
                {project.projectType === 'thesis' && '🎓 Thesis Project'}
                {project.projectType === 'other-works' && '✨ Diverse Creative Works'}
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="mb-4 text-[var(--accent)]">Objectives</h4>
              <ul className="space-y-2">
                {project.overview.objectives.map((obj, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-2">•</span>
                    <span className="opacity-80">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-[var(--accent)]">Role</h4>
                <p className="opacity-80">{project.overview.role}</p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--accent)]">Timeline</h4>
                <p className="opacity-80">{project.overview.timeline}</p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--accent)]">Tools</h4>
                <p className="opacity-80">{project.overview.tools.join(', ')}</p>
              </div>
              {project.overview.team && (
                <div>
                  <h4 className="mb-2 text-[var(--accent)]">Team</h4>
                  <p className="opacity-80">{project.overview.team}</p>
                </div>
              )}
              {project.overview.challenge && (
                <div>
                  <h4 className="mb-2 text-[var(--accent)]">Key Challenge</h4>
                  <p className="opacity-80 italic">{project.overview.challenge}</p>
                </div>
              )}
            </div>
          </div>

          {/* Technical Details Section (for hardware-software projects) */}
          {project.technicalDetails && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12 p-8 bg-[var(--light-gray)]/30 rounded-lg"
            >
              <h3 className="mb-6 text-[var(--accent)]">Technical Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.technicalDetails.hardware && (
                  <div>
                    <h4 className="mb-3 font-semibold">Hardware</h4>
                    <ul className="space-y-2">
                      {project.technicalDetails.hardware.map((item, index) => (
                        <li key={index} className="text-sm opacity-80 flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.technicalDetails.software && (
                  <div>
                    <h4 className="mb-3 font-semibold">Software</h4>
                    <ul className="space-y-2">
                      {project.technicalDetails.software.map((item, index) => (
                        <li key={index} className="text-sm opacity-80 flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {project.technicalDetails.integration && (
                <div className="mt-6 pt-6 border-t border-[var(--light-gray)]">
                  <h4 className="mb-3 font-semibold">Integration</h4>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {project.technicalDetails.integration}
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* Sub-Projects Section (for multi-project types) */}
          {project.subProjects && project.subProjects.length > 0 && (
            <motion.div
              id="sub-projects"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="mb-6 text-[var(--accent)]">Sub-Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.subProjects.map((subProject, index) => (
                  <motion.div
                    key={index}
                    className="bg-[var(--light-gray)]/30 rounded-lg overflow-hidden cursor-pointer group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => onNavigate('subproject', projectSlug, index)}
                  >
                    {subProject.image && (
                      <div className="aspect-video overflow-hidden relative">
                        <ImageWithFallback
                          src={subProject.image}
                          alt={subProject.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 text-white text-sm transition-opacity">
                            View Details →
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="mb-3 group-hover:text-[var(--accent)] transition-colors">{subProject.title}</h4>
                      <p className="text-sm opacity-80 leading-relaxed">
                        {subProject.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-24 bg-[var(--light-gray)]/30">
        <motion.h2
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Process
        </motion.h2>

        <div className="space-y-24">
          {project.process.map((stage, index) => (
            <motion.div
              key={stage.stage}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`grid grid-cols-1 ${
                stage.images ? 'md:grid-cols-2' : ''
              } gap-8 items-center`}
            >
              <div className={stage.images && index % 2 === 1 ? 'md:order-2' : ''}>
                <h3 className="mb-4 text-[var(--accent)]">{stage.stage}</h3>
                <p className="opacity-80 leading-relaxed mb-4">{stage.description}</p>
                
                {/* Process Details */}
                {stage.details && stage.details.length > 0 && (
                  <ul className="mt-4 space-y-2 pl-4 border-l-2 border-[var(--accent)]/30">
                    {stage.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-sm opacity-70 leading-relaxed">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {stage.images && (
                <div className={`grid gap-4 ${stage.images.length > 1 ? 'grid-cols-2' : ''}`}>
                  {stage.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="aspect-[4/3] bg-white overflow-hidden">
                      <ImageWithFallback
                        src={img}
                        alt={`${stage.stage} ${imgIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome Section */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8">Outcome</h2>
          <p className="text-xl mb-12 leading-relaxed">
            {project.outcome.description}
          </p>

          {/* Outcome Metrics */}
          {project.outcome.metrics && project.outcome.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {project.outcome.metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-[var(--light-gray)]/30 rounded-lg"
                >
                  <p className="text-3xl mb-2 text-[var(--accent)]">{metric.value}</p>
                  <p className="text-sm opacity-70">{metric.label}</p>
                </motion.div>
              ))}
            </div>
          )}

          {project.outcome.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {project.outcome.images.map((img, index) => (
                <motion.div
                  key={index}
                  className="aspect-video bg-[var(--light-gray)] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Outcome ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}

          <motion.blockquote
            className="border-l-4 border-[var(--accent)] pl-8 py-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl italic opacity-80">"{project.outcome.quote}"</p>
          </motion.blockquote>
        </motion.div>
      </section>

      {/* Navigation */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 border-t border-[var(--light-gray)]">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <motion.button
              onClick={() => onNavigate('project', prevProject.slug)}
              className="flex items-center gap-3 group cursor-hover"
              whileHover={{ x: -4 }}
            >
              <ArrowLeft className="text-[var(--accent)]" size={24} />
              <div className="text-left">
                <p className="text-xs opacity-60 mb-1">Previous Project</p>
                <p className="group-hover:text-[var(--accent)] transition-colors">
                  {prevProject.title}
                </p>
              </div>
            </motion.button>
          ) : (
            <div />
          )}

          {nextProject ? (
            <motion.button
              onClick={() => onNavigate('project', nextProject.slug)}
              className="flex items-center gap-3 group cursor-hover"
              whileHover={{ x: 4 }}
            >
              <div className="text-right">
                <p className="text-xs opacity-60 mb-1">Next Project</p>
                <p className="group-hover:text-[var(--accent)] transition-colors">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="text-[var(--accent)]" size={24} />
            </motion.button>
          ) : (
            <div />
          )}
        </div>
      </section>
    </div>
  );
}