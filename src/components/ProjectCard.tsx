import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick: () => void;
  index: number;
}

export function ProjectCard({ title, subtitle, image, onClick, index }: ProjectCardProps) {
  return (
    <motion.div
      className="group cursor-pointer cursor-hover"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--light-gray)] mb-6">
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 bg-[var(--foreground)]/0 group-hover:bg-[var(--foreground)]/20 transition-all duration-400 flex items-center justify-center"
          initial={false}
        >
          <motion.span
            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            initial={false}
          >
            View Project
          </motion.span>
        </motion.div>
      </div>

      <motion.h3
        className="mb-2"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <p className="text-sm opacity-60">
        {subtitle}
      </p>
    </motion.div>
  );
}
