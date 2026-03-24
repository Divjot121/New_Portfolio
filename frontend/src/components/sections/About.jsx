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
              src="https://i.ibb.co/WWKxtKPD/divjot.jpg[/img][/url]"
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
              Divjot Singh
            </h3>
            <div className="font-['Manrope'] text-[#A1A1AA] space-y-4 leading-relaxed text-base lg:text-lg">
              <p>
                I’m Divjot Singh Arora, a 15-year-old developer, builder, and community-driven creator from Amritsar. I focus on turning ideas into real, usable tech—whether that’s building products, writing code, or designing modern digital experiences.

As the Growth Lead at Google Developer Groups Ludhiana, I work on growing and engaging developer communities, helping students and young builders get started in tech. I also run SOS TECH, where I aim to make technology more accessible and practical for learners across Punjab.

Beyond building, I’ve authored three coding books and shared ideas on platforms like Josh Talks. Recently, I was selected as the youngest national finalist for the Viksit Bharat Young Leaders Dialogue.

Right now, I’m focused on creating impactful tech, learning fast, and helping others build along the way.
              </p>
              <p>
                From launching SaaS products to leading tech communities, my mission is simple: enable young people to build, ship, and lead without waiting for traditional gatekeepers.
                Building early, learning fast, and creating things that actually make a difference.
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