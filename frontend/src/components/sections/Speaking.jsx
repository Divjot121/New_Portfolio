import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Speaking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="speaking" className="py-32 px-6" ref={ref} data-testid="speaking-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Speaking & <span className="bg-gradient-to-r from-[#FF6FD8] to-[#6C63FF] bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg">Inspiring builders to take action</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <motion.div
            className="rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1762968274962-20c12e6e8ecd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwzfHxzcGVha2VyJTIwb24lMjBzdGFnZSUyMHRlY2glMjBldmVudHxlbnwwfHx8fDE3NzQzNDIzNzZ8MA&ixlib=rb-4.1.0&q=85"
              alt="Speaking at tech event"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Quote Card */}
            <div className="rounded-3xl p-8 backdrop-blur-xl bg-white/5 border border-white/10" data-testid="speaking-quote-card">
              <Quote className="w-10 h-10 text-[#6C63FF] mb-4" />
              <p className="font-['Manrope'] text-lg text-[#A1A1AA] leading-relaxed mb-4">
                "The future belongs to those who build it. Don't wait for permission, don't wait for the perfect moment. Start now."
              </p>
              <p className="font-['Outfit'] font-semibold text-white">— Divjot Singh Arora</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl p-6 backdrop-blur-xl bg-white/5 border border-white/10" data-testid="speaking-stat-talks">
                <div className="font-['Outfit'] text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <div className="font-['Manrope'] text-[#A1A1AA]">Speaking Events</div>
              </div>
              <div className="rounded-3xl p-6 backdrop-blur-xl bg-white/5 border border-white/10" data-testid="speaking-stat-audience">
                <div className="font-['Outfit'] text-4xl font-bold bg-gradient-to-r from-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent mb-2">
                  5K+
                </div>
                <div className="font-['Manrope'] text-[#A1A1AA]">People Reached</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};