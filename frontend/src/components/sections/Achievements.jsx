import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Mic, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    icon: Mic,
    title: 'TEDx Speaker',
    description: 'Shared insights on youth entrepreneurship and building without permission',
    year: '2026',
    highlight: true
  },
  {
    icon: Trophy,
    title: 'VBYLD Finalist',
    description: 'Recognized among India\'s top young builders',
    year: '2026'
  },
  {
    icon: Mic,
    title: 'Josh Talks',
    description: 'Inspired thousands with the message of early execution',
    year: '2023'
  },
  {
    icon: Users,
    title: 'GDG Growth Lead',
    description: 'Led community initiatives reaching 1000+ developers',
    year: '2023-Present'
  }
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4">
            Key <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] mb-20 text-lg">
            Recognition and impact along the journey
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              const Card = () => {
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
                    x: (x - centerX) * 0.06,
                    y: (y - centerY) * 0.06,
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
                    className={`relative group rounded-3xl p-8 backdrop-blur-xl border transition-all cursor-pointer
                      ${achievement.highlight
                        ? 'bg-gradient-to-r from-[#6C63FF]/20 to-[#FF6FD8]/20 border-white/20 scale-[1.03]'
                        : 'bg-white/5 border-white/10 hover:border-white/20 hover:-translate-y-2'
                      }`}
                    whileHover={{ boxShadow: '0 0 40px rgba(0,212,255,0.25)' }}
                  >
                    {/* Glow */}
                    <div
                      className="pointer-events-none absolute w-40 h-40 rounded-full opacity-20 blur-3xl"
                      style={{
                        left: pos.glowX - 80,
                        top: pos.glowY - 80,
                        background: 'radial-gradient(circle, #00D4FF, transparent)'
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

                    {/* Content */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-[#6C63FF] group-hover:to-[#00D4FF] transition-all">
                        <Icon className="w-6 h-6 text-[#00D4FF] group-hover:text-white transition-colors" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-['Outfit'] text-xl font-bold tracking-tight">
                            {achievement.title}
                          </h3>
                          <span className="font-['Manrope'] text-sm text-[#A1A1AA]">
                            {achievement.year}
                          </span>
                        </div>

                        <p className="font-['Manrope'] text-[#A1A1AA] leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              };

              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15 }}
                  className={`flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}
                >
                  <div className="w-full md:w-[48%]">
                    <Card />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
