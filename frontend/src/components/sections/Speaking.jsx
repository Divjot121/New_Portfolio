import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

export const Speaking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const useInteractive = () => {
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

    return { cardRef, pos, ripple, handleMove, handleLeave, handleClick };
  };

  return (
    <section id="speaking" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-4 text-center">
            Speaking & <span className="bg-gradient-to-r from-[#FF6FD8] to-[#6C63FF] bg-clip-text text-transparent">Community</span>
          </h2>
          <p className="font-['Manrope'] text-[#A1A1AA] text-center mb-16 text-lg">
            Inspiring builders to take action
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* IMAGE */}
          {(() => {
            const { cardRef, pos, ripple, handleMove, handleLeave, handleClick } = useInteractive();

            return (
              <motion.div
                ref={cardRef}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={handleClick}
                animate={{ x: pos.x, y: pos.y }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10"
              >
                {/* Glow */}
                <div
                  className="pointer-events-none absolute w-40 h-40 rounded-full opacity-20 blur-3xl"
                  style={{
                    left: pos.glowX - 80,
                    top: pos.glowY - 80,
                    background: 'radial-gradient(circle, #FF6FD8, transparent)'
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

                <img
                  src="https://i.ibb.co/7t47Dq1c/quote-pic-divjot.png"
                  alt="Speaking"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })()}

          {/* RIGHT SIDE */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >

            {/* QUOTE */}
            {(() => {
              const { cardRef, pos, ripple, handleMove, handleLeave, handleClick } = useInteractive();

              return (
                <motion.div
                  ref={cardRef}
                  onMouseMove={handleMove}
                  onMouseLeave={handleLeave}
                  onClick={handleClick}
                  animate={{ x: pos.x, y: pos.y }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="relative rounded-3xl p-8 backdrop-blur-xl bg-white/5 border border-white/10"
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

                  <Quote className="w-10 h-10 text-[#6C63FF] mb-4" />

                  <p className="font-['Manrope'] text-lg text-[#A1A1AA] leading-relaxed mb-4">
                    "The future belongs to those who build it. Don't wait for permission. Start now."
                  </p>

                  <p className="font-['Outfit'] font-semibold text-white">
                    — Divjot Singh Arora
                  </p>
                </motion.div>
              );
            })()}

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '15+', label: 'Speaking Events' },
                { value: '10K+', label: 'People Reached' }
              ].map((stat, i) => {
                const { cardRef, pos, ripple, handleMove, handleLeave, handleClick } = useInteractive();

                return (
                  <motion.div
                    key={i}
                    ref={cardRef}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    onClick={handleClick}
                    animate={{ x: pos.x, y: pos.y }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="relative rounded-3xl p-6 backdrop-blur-xl bg-white/5 border border-white/10"
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

                    <div className="font-['Outfit'] text-4xl font-bold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="font-['Manrope'] text-[#A1A1AA]">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
