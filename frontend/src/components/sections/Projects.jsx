import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'PDF SaaS Platform',
    description: 'AI-powered document intelligence platform that transforms how users interact with PDFs',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3NzQzNDIzNzV8MA&ixlib=rb-4.1.0&q=85',
    tags: ['AI', 'SaaS', 'Next.js']
  },
  {
    title: 'CalmNest',
    description: 'Mental wellness platform designed to reduce digital noise and promote clarity',
    image: 'https://images.unsplash.com/photo-1602192190451-97694b35b509?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwzfHxzYWFzJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3NzQzNDIzNzV8MA&ixlib=rb-4.1.0&q=85',
    tags: ['Web Dev', 'Product', 'React']
  },
  {
    title: 'Community Hub',
    description: 'Platform enabling student-led tech communities to thrive and scale',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxzYWFzJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwwfHx8fDE3NzQzNDIzNzV8MA&ixlib=rb-4.1.0&q=85',
    tags: ['Community', 'Platform', 'Firebase']
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref} data-testid="projects-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Selected <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6FD8] bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg">Building products that matter</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ boxShadow: '0 0 40px rgba(108,99,255,0.3)' }}
              data-testid={`project-card-${index}`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent opacity-60" />
                <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6">
                <h3 className="font-['Outfit'] text-xl font-bold mb-2 tracking-tight" data-testid={`project-title-${index}`}>
                  {project.title}
                </h3>
                <p className="font-['Manrope'] text-[#A1A1AA] text-sm mb-4 leading-relaxed" data-testid={`project-description-${index}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 text-[#00D4FF]"
                      data-testid={`project-tag-${index}-${tagIndex}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};