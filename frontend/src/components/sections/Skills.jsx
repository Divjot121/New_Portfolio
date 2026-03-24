import React, { useRef } from 'react';
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
    <section id="skills" className="py-32 px-6" ref={ref} data-testid="skills-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Tech <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">Stack</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg">Tools I use to build the future</p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
              data-testid={`skill-category-${catIndex}`}
            >
              <h3 className="font-['Outfit'] text-xl font-bold mb-4 tracking-tight text-[#00D4FF]" data-testid={`skill-category-title-${catIndex}`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-5 py-3 rounded-full font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#6C63FF] hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all cursor-default"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`skill-tag-${catIndex}-${skillIndex}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};