import { motion } from 'motion/react';

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <span className="text-xs tracking-widest opacity-60">SCROLL</span>
      <motion.div
        className="w-px h-16 bg-[var(--foreground)]"
        animate={{
          scaleY: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <path
          d="M6 0L6 10M6 10L2 6M6 10L10 6"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.svg>
    </motion.div>
  );
}
