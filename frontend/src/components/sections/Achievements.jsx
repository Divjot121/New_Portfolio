import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Mic, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    icon: Mic,
    title: 'TEDx Speaker',
    description: 'Shared insights on youth entrepreneurship and building without permission',
    year: '2024'
  },
  {
    icon: Mic,
    title: 'Josh Talks',
    description: 'Inspired thousands with the message of early execution',
    year: '2023'
  },
  {
    icon: Trophy,
    title: 'VBYLD Finalist',
    description: 'Recognized among India\'s top young builders',
    year: '2023'
  },
  {
    icon: Users,
    title: 'GDG Growth Lead',
    description: 'Led community initiatives reaching 1000+ developers',
    year: '2023-24'
  }
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-32 px-6" ref={ref} data-testid="achievements-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Key <span className="bg-gradient-to-r from-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg">Recognition and impact along the journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                className="group rounded-3xl p-8 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:-translate-y-2 transition-all"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ boxShadow: '0 0 40px rgba(0,212,255,0.2)' }}
                data-testid={`achievement-card-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-[#6C63FF] group-hover:to-[#00D4FF] transition-all">
                    <Icon className="w-6 h-6 text-[#00D4FF] group-hover:text-white transition-colors" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-['Outfit'] text-xl font-bold tracking-tight" data-testid={`achievement-title-${index}`}>
                        {achievement.title}
                      </h3>
                      <span className="font-['Manrope'] text-sm text-[#A1A1AA]" data-testid={`achievement-year-${index}`}>
                        {achievement.year}
                      </span>
                    </div>
                    <p className="font-['Manrope'] text-[#A1A1AA] leading-relaxed" data-testid={`achievement-description-${index}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};