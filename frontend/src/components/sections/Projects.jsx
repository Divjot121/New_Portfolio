import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Digital India Literating India',
    description: 'bridging the digital divide and tech literacy to the grassroots.',
    image: 'https://i.ibb.co/gFzxWppd/Screenshot-2026-03-26-at-2-17-11-PM.png',
    tags: ['Non-Profit', 'Social Work', 'Digital India'],
    link: 'https://literatingindia.vercel.app/'
  },
  {
    title: 'CalmNest',
    description: 'Mental wellness platform designed to reduce digital noise and promote clarity',
    image: 'https://images.unsplash.com/photo-1602192190451-97694b35b509?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['Web Dev', 'Product', 'React']
  },
  {
    title: 'Community Hub',
    description: 'Platform enabling student-led tech communities to thrive and scale',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['Community', 'Platform', 'Firebase']
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Selected <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6FD8] bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg">
            Building products that matter
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {

            const Card = () => {
              const cardRef = useRef(null);
              const [pos, setPos] = useState({ x: 0, y: 0 });
              const [ripple, setRipple] = useState(null);

              const handleMove = (e) => {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                // magnetic offset
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                setPos({
                  x: (x - centerX) * 0.08,
                  y: (y - centerY) * 0.08,
                  glowX: x,
                  glowY: y
                });
              };

              const handleLeave = () => {
                setPos({ x: 0, y: 0 });
              };

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
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                  className="relative group rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all cursor-pointer"
                  whileHover={{ boxShadow: '0 0 40px rgba(108,99,255,0.3)' }}
                >
                  {/* Cursor Glow */}
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

                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent opacity-60" />

                    {project.link && (
                      <ExternalLink className="absolute top-4 right-4 w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-['Outfit'] text-xl font-bold mb-2 tracking-tight">
                      {project.title}
                    </h3>

                    <p className="font-['Manrope'] text-[#A1A1AA] text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 text-[#00D4FF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            };

            const CardElement = <Card key={project.title} />;

            return project.link ? (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardElement}
              </a>
            ) : (
              <div key={project.title}>{CardElement}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
