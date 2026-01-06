import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { SubProjectDetailPage } from './pages/SubProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

type PageType = 'home' | 'work' | 'project' | 'subproject' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [projectSlug, setProjectSlug] = useState<string>('');
  const [subProjectIndex, setSubProjectIndex] = useState<number>(0);
  const [scrollToSection, setScrollToSection] = useState<string>('');

  const handleNavigate = (page: string, slug?: string, subIndex?: number, sectionId?: string) => {
    setCurrentPage(page as PageType);
    if (slug) {
      setProjectSlug(slug);
    }
    if (typeof subIndex === 'number') {
      setSubProjectIndex(subIndex);
    }
    if (sectionId) {
      setScrollToSection(sectionId);
    } else {
      setScrollToSection('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle scroll to section after page renders
  useEffect(() => {
    if (scrollToSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          const offsetTop = element.offsetTop - 100; // 100px offset from top
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        setScrollToSection('');
      }, 100);
    }
  }, [scrollToSection, currentPage]);

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage + projectSlug + subProjectIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
          {currentPage === 'work' && <WorkPage onNavigate={handleNavigate} />}
          {currentPage === 'project' && (
            <ProjectDetailPage projectSlug={projectSlug} onNavigate={handleNavigate} />
          )}
          {currentPage === 'subproject' && (
            <SubProjectDetailPage projectSlug={projectSlug} subProjectIndex={subProjectIndex} onNavigate={handleNavigate} />
          )}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'contact' && <ContactPage />}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}