import React, { useRef, useState } from 'react';
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
    title: 'Literating India',
    description: 'Bridging the digital divide by bringing tech literacy to grassroots communities across India.',
    tags: ['Social Impact', 'Digital India', 'Education'],
    status: 'Building'
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
  Exploring: { color: 'text-[#00D4FF]', bg: 'bg-[#00D4FF]/10', icon: Lightbulb },
  Building: { color: 'text-[#6C63FF]', bg: 'bg-[#6C63FF]/10', icon: Rocket },
  Thinking: { color: 'text-[#FF6FD8]', bg: 'bg-[#FF6FD8]/10', icon: Brain }
};

export const IdeasExploring = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ideas" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Ideas I'm <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">Exploring</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg max-w-2xl mx-auto">
            Not finished products — just thinking in motion. Some become products. Some become movements.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => {
            const StatusIcon = statusConfig[idea.status].icon;

            const Card = () => {
              const cardRef = useRef(null);
              const [pos, setPos] = useState({ x: 0, y: 0, glowX: 0, glowY: 0 });
              const [ripple, setRipple] = useState(null);

              const handleMove = (e) => {
                const rect = cardRef.current.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                setPos({
                  x: (x - centerX) * 0.04,
                  y: (y - centerY) * 0.04,
                  glowX: x,
                  glowY: y
                });
              };

              const handleLeave = () => setPos({ x: 0, y: 0, glowX: 0, glowY: 0 });

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
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  className={`relative group rounded-3xl p-6 backdrop-blur-xl border transition-all cursor-pointer
                    ${idea.status === 'Building'
                      ? 'bg-gradient-to-r from-[#6C63FF]/10 to-[#00D4FF]/10 border-white/20 scale-[1.02]'
                      : 'bg-white/5 border-white/10 hover:border-white/20 hover:-translate-y-2'
                    }`}
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

                  {/* Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${statusConfig[idea.status].bg} border border-white/10`}>
                      <StatusIcon className={`w-4 h-4 ${statusConfig[idea.status].color}`} />
                      <span className={`text-xs font-medium ${statusConfig[idea.status].color}`}>
                        {idea.status}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Outfit'] text-xl font-bold mb-3 tracking-tight">
                    {idea.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Manrope'] text-[#A1A1AA] text-sm mb-4 leading-relaxed">
                    {idea.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {idea.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#A1A1AA]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                </motion.div>
              );
            };

            return (
              <motion.div
                key={idea.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <Card />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
