import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'AI & Tools',
    skills: ['OpenAI', 'LangChain', 'Vector DBs', 'RAG', 'Prompt Engineering']
  },
  {
    category: 'Other',
    skills: ['Firebase', 'Vercel', 'Git', 'Figma', 'Community Building']
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Tech <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-20 text-lg">
            Tools I use to build the future
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => {

            const CategoryCard = () => {
              const cardRef = useRef(null);
              const [pos, setPos] = useState({ x: 0, y: 0 });
              const [ripple, setRipple] = useState(null);

              const handleMove = (e) => {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                setPos({
                  x: (x - centerX) * 0.05,
                  y: (y - centerY) * 0.05,
                  glowX: x,
                  glowY: y
                });
              };

              const handleLeave = () => setPos({ x: 0, y: 0 });

              const handleClick = (e) => {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                setRipple({ x, y, key: Date.now() });
                setTimeout(() => setRipple(null), 600);
              };

              return (
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                  onClick={handleClick}
                  animate={{ x: pos.x, y: pos.y }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="relative rounded-3xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                  whileHover={{ boxShadow: '0 0 40px rgba(108,99,255,0.25)' }}
                >
                  {/* Glow */}
                  <div
                    className="pointer-events-none absolute w-40 h-40 rounded-full opacity-20 blur-3xl"
                    style={{
                      left: pos.glowX - 80,
                      top: pos.glowY - 80,
                      background: 'radial-gradient(circle, #6C63FF, transparent)'
                    }}
                  />

                  {/* Ripple */}
                  {ripple && (
                    <span
                      key={ripple.key}
                      className="absolute rounded-full bg-white/30 animate-ping"
                      style={{
                        left: ripple.x - 10,
                        top: ripple.y - 10,
                        width: 20,
                        height: 20
                      }}
                    />
                  )}

                  {/* Title */}
                  <h3 className="font-['Outfit'] text-xl font-bold mb-6 tracking-tight text-[#00D4FF]">
                    {category.category}
                  </h3>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-5 py-3 rounded-full font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#6C63FF] transition-all cursor-default"
                        whileHover={{ scale: 1.08, y: -2 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.05 * skillIndex }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            };

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * catIndex }}
              >
                <CategoryCard />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
