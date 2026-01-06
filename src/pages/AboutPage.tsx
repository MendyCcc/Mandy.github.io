import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="mb-6">About</h1>
        </motion.div>

        {/* Split Layout */}
 {/*       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32"> */}
         {/* Portrait */}
 {/*           <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="aspect-[3/4] overflow-hidden bg-[var(--light-gray)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ImageWithFallback
                src="https://github.com/MendyCcc/Mendy.github.io/blob/main/src/assets/my%20photo.jpg?raw=true"
                alt="Wenting Zhang"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
*/}
          
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
            className="w-full max-w-6xl mb-32"
          >
            <p className="text-xl mb-8 leading-relaxed">
              I’m a Designer crafting emotionally intelligent interfaces 
              across physical and digital environments. 
            </p>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              With a focus on human-centered AI and interaction systems, my
               current work explores how technology can meaningfully support memory, 
              attention, and emotional connection—quietly embedded in everyday experiences.
            </p>
            <p className="text-lg opacity-70 leading-relaxed">
              My practice is shaped by cross-cultural collaboration and grounded 
              in a belief that the best experiences are not the loudest—but the most resonant.
            </p>
          </motion.div>
 {/*       </div> */}

      
        {/* Education */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="mb-8 text-[var(--accent)]">Education</h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p className="opacity-60">2022 - 2024</p>
              <div className="md:col-span-2">
                <h4 className="mb-2">Master of Arts in Interaction Design</h4>
                <p className="opacity-80">Hochschule für Technik und Wirtschaft Dresden, Germany</p>
                <p className="text-sm opacity-60 mt-2">
                  Focus: Human-Centered Design, Speculative Design, Cultural Technology
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p className="opacity-60">2021 - 2022</p>
              <div className="md:col-span-2">
                <h4 className="mb-2">Kunst und Multimedia(H), Medieninformatik(N)</h4>
                <p className="opacity-80">Ludwig-Maximilians-Universität München, Germany</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p className="opacity-60">2015 - 2019</p>
              <div className="md:col-span-2">
                <h4 className="mb-2">Bachelor of Fine Arts in Product Design</h4>
                <p className="opacity-80">Central Academy of Fine Arts, Beijing, China</p>
                <p className="text-sm opacity-60 mt-2">
                  Graduated with Honors · Thesis on Sustainable Design Systems
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Focus Areas */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="mb-8 text-[var(--accent)]">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'UX Strategy',
                description: 'Designing holistic user experiences that balance business goals with human needs'
              },
              {
                title: 'Interaction Design',
                description: 'Crafting intuitive interfaces and meaningful micro-interactions'
              },
              {
                title: 'Motion & Prototyping',
                description: 'Bringing designs to life through animation and interactive prototypes'
              },
              {
                title: 'Service Design',
                description: 'Orchestrating complex systems and touchpoints for seamless experiences'
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-[var(--accent)] pl-4"
              >
                <h4 className="mb-2">{area.title}</h4>
                <p className="text-sm opacity-70">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Awards & Recognition */}
        <motion.section {...fadeInUp} className="mb-24">
          <h2 className="mb-8 text-[var(--accent)]">Awards & Recognition</h2>
          <div className="space-y-6 opacity-80">
            
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-[var(--light-gray)]">
              <div>
                <h4 className="mb-1">Architecture Meets Design - Impulses for Sustainability & Urban Development</h4>
                <p className="text-sm opacity-70">Urban:Base - Service Design</p>
              </div>
              <span className="text-sm opacity-60">2023</span>
            </div>
            
            <div className="flex justify-between items-start gap-4 pb-4 border-b border-[var(--light-gray)]">
              <div>
                <h4 className="mb-1">CAFA Outstanding Graduate Award</h4>
                <p className="text-sm opacity-70">Thesis: Shared Umbrella System</p>
              </div>
              <span className="text-sm opacity-60">2019</span>
            </div>

            <div className="flex justify-between items-start gap-4">
              <div>
                <h4 className="mb-1">Published in Design Magazine</h4>
                <p className="text-sm opacity-70">"Cross-Cultural Interaction Design"</p>
              </div>
              <span className="text-sm opacity-60">2023</span>
            </div>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section {...fadeInUp} className="max-w-6xl">
          <h2 className="mb-8 text-[var(--accent)]">Design Philosophy</h2>
          <div className="space-y-6 text-xl leading-relaxed opacity-80">
            <p>
              Design is not just about solving problems — it's about understanding the
              human condition and creating experiences that resonate on an emotional level.
            </p>
            <p>
              I believe in design as a form of cultural translation, bridging Eastern and
              Western perspectives to create solutions that are both functionally robust
              and emotionally meaningful.
            </p>
            <p>
              Every project is an opportunity to explore new interactions, challenge
              assumptions, and push the boundaries of what's possible when technology
              meets humanity.
            </p>
          </div>
        </motion.section>
      </div>
     </div> 
  );
}
