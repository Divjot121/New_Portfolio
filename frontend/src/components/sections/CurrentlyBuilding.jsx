import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

export const CurrentlyBuilding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="currently-building" className="py-32 px-6" ref={ref} data-testid="currently-building-section">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="rounded-3xl p-8 lg:p-12 backdrop-blur-xl bg-white/5 border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C63FF] rounded-full blur-[100px] opacity-20" />
          
          <div className="relative z-10">
            {/* Header with pulse indicator */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D4FF]"></span>
              </div>
              <h2 className="font-['Outfit'] text-2xl lg:text-3xl font-bold tracking-tight" data-testid="currently-building-title">
                Currently Building
              </h2>
            </div>

            {/* Terminal-style content */}
            <div className="rounded-2xl backdrop-blur-xl bg-black/30 border border-white/10 p-6 font-mono text-sm mb-6">
              <div className="flex items-center gap-2 mb-4 text-[#A1A1AA]">
                <Terminal className="w-4 h-4" />
                <span>terminal@divjot:~$</span>
              </div>
              <div className="space-y-2 text-[#00D4FF]">
                <div data-testid="currently-building-project-1">→ Next-gen AI document platform</div>
                <div data-testid="currently-building-project-2">→ Community scaling framework</div>
                <div data-testid="currently-building-project-3">→ Youth founder network</div>
              </div>
            </div>

            {/* Description */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-[#6C63FF] to-[#00D4FF]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-['Manrope'] text-[#A1A1AA] leading-relaxed">
                  These are active projects in development. Building in public, iterating fast, and shipping what matters. Updates coming soon.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};