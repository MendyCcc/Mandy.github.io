import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="mt-32 border-t border-[var(--light-gray)] py-12 px-8 md:px-16">
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm opacity-60">
            © 2025 Designer Zhang — All Rights Reserved
          </p>
          <div className="flex gap-6">
            <motion.a
              href="#"
              className="text-sm opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="text-sm opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all"
              whileHover={{ y: -2 }}
            >
              Behance
            </motion.a>
            <motion.a
              href="#"
              className="text-sm opacity-60 hover:opacity-100 hover:text-[var(--accent)] transition-all"
              whileHover={{ y: -2 }}
            >
              Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
