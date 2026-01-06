import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'Work', page: 'work' },
    { name: 'About', page: 'about' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
        scrolled ? 'bg-[var(--background)]/90 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 flex justify-between items-center">
        <motion.button
          onClick={() => onNavigate('home')}
          className="text-xl tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          Designer Zhang
        </motion.button>

        <div className="flex gap-8 md:gap-12">
          {navItems.map((item) => (
            <motion.button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`relative ${
                currentPage === item.page ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/50'
              } hover:text-[var(--foreground)] transition-colors`}
              whileHover={{ scale: 1.05 }}
            >
              {item.name}
              {currentPage === item.page && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--accent)]"
                  layoutId="navbar-indicator"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
