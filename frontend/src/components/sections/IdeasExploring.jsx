import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Lightbulb, Rocket, Brain } from 'lucide-react';

const ideas = [
  {
    title: 'AI That Understands Documents Like Humans',
    description: 'Rethinking how we interact with PDFs beyond search and chat',
    tags: ['AI', 'SaaS'],
    status: 'Exploring'
  },
  {
    title: 'Student-Led Tech Ecosystems',
    description: 'Building communities where students don\'t wait for permission to lead',
    tags: ['Community'],
    status: 'Building'
  },
  {
    title: 'Calm Tech for Mental Clarity',
    description: 'Digital experiences that reduce noise instead of adding to it',
    tags: ['Mental Health', 'Product'],
    status: 'Exploring'
  },
  {
    title: 'India\'s Young Builders Movement',
    description: 'Enabling teenagers to build startups before college',
    tags: ['Startup', 'India'],
    status: 'Thinking'
  },
  {
    title: 'Invisible UI',
    description: 'Interfaces that feel natural, almost disappearing into behavior',
    tags: ['Design', 'UX'],
    status: 'Exploring'
  },
  {
    title: 'Learning by Shipping',
    description: 'Education systems built around real-world execution, not theory',
    tags: ['Education'],
    status: 'Building'
  }
];

const statusConfig = {
  'Exploring': { color: 'text-[#00D4FF]', bg: 'bg-[#00D4FF]/10', icon: Lightbulb },
  'Building': { color: 'text-[#6C63FF]', bg: 'bg-[#6C63FF]/10', icon: Rocket },
  'Thinking': { color: 'text-[#FF6FD8]', bg: 'bg-[#FF6FD8]/10', icon: Brain }
};

export const IdeasExploring = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ideas" className="py-32 px-6" ref={ref} data-testid="ideas-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Ideas I'm <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">Exploring</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg max-w-2xl mx-auto">
            A glimpse into unfinished experiments and future directions. Not polished products — just curiosity in motion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => {
            const StatusIcon = statusConfig[idea.status].icon;
            return (
              <motion.div
                key={idea.title}
                className="group rounded-3xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ boxShadow: '0 0 40px rgba(108,99,255,0.2)' }}
                data-testid={`idea-card-${index}`}
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig[idea.status].bg} backdrop-blur-xl border border-white/10`}>
                    <StatusIcon className={`w-4 h-4 ${statusConfig[idea.status].color}`} />
                    <span className={`text-xs font-['Manrope'] font-medium ${statusConfig[idea.status].color}`} data-testid={`idea-status-${index}`}>
                      {idea.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Outfit'] text-xl font-bold mb-3 tracking-tight leading-tight" data-testid={`idea-title-${index}`}>
                  {idea.title}
                </h3>

                {/* Description */}
                <p className="font-['Manrope'] text-[#A1A1AA] text-sm mb-4 leading-relaxed" data-testid={`idea-description-${index}`}>
                  {idea.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {idea.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 text-[#A1A1AA]"
                      data-testid={`idea-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};