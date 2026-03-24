import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref} data-testid="about-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-16 text-center">
            About <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Image Block */}
          <motion.div
            className="lg:col-span-1 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="about-image-card"
          >
            <img
              src="https://images.unsplash.com/photo-1638957361099-daf55b345543?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwzfHx5b3VuZyUyMHRlY2glMjBlbnRyZXByZW5ldXIlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3NDM0MjM3NHww&ixlib=rb-4.1.0&q=85"
              alt="Divjot Singh Arora"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Story Block */}
          <motion.div
            className="lg:col-span-2 rounded-3xl p-8 lg:p-12 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            data-testid="about-story-card"
          >
            <h3 className="font-['Outfit'] text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              Building the Future Early
            </h3>
            <div className="font-['Manrope'] text-[#A1A1AA] space-y-4 leading-relaxed text-base lg:text-lg">
              <p>
                I don't believe in waiting for permission to create. As a young entrepreneur and developer, I've built products that solve real problems, led communities that empower builders, and spoken on stages to inspire the next generation.
              </p>
              <p>
                From launching SaaS products to leading tech communities, my mission is simple: enable young people to build, ship, and lead without waiting for traditional gatekeepers.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Founder', 'Developer', 'Speaker'].map((tag, index) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 text-[#00D4FF]"
                  data-testid={`about-tag-${index}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};