import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 flex items-center">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's collaborate or
            <br />
            talk about design.
          </motion.h1>

          <motion.p
            className="text-xl opacity-70 mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm always interested in new opportunities, interesting projects,
            and conversations about design, culture, and technology.
          </motion.p>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <p className="text-sm opacity-60 mb-3 tracking-widest">EMAIL</p>
            <motion.a
              href="mailto:zhaing55@gmail.com"
              className="text-3xl md:text-4xl hover:text-[var(--accent)] transition-colors inline-block relative group cursor-hover"
              whileHover={{ scale: 1.02 }}
            >
              zhaing55@gmail.com
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <SocialLink
              href="www.linkedin.com/in/wenting-zhang-423946282"
              icon={<Linkedin size={20} />}
              label="LinkedIn"
            />
            <SocialLink
              href="https://behance.net"
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
                </svg>
              }
              label="Behance"
            />
            <SocialLink
              href="https://instagram.com"
              icon={<Instagram size={20} />}
              label="Instagram"
            />
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 pt-12 border-t border-[var(--light-gray)]"
          >
            <p className="opacity-60 max-w-2xl mx-auto">
              Currently based Shenzhen. Available for freelance work,
              full-time opportunities and design collaborations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-6 py-3 border border-[var(--foreground)]/20 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all cursor-hover group"
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}
