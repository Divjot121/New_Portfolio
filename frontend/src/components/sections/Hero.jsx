import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, glowX: 0, glowY: 0 });
  const [ripple, setRipple] = useState(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({
      x: (x - rect.width / 2) * 0.02,
      y: (y - rect.height / 2) * 0.02,
      glowX: x,
      glowY: y
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0, glowX: 0, glowY: 0 });

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      key: Date.now()
    });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-5 sm:px-8 lg:px-12 py-28 lg:py-36"
    >

      {/* Cursor Glow */}
      <div
        className="pointer-events-none absolute w-64 h-64 rounded-full opacity-20 blur-3xl"
        style={{
          left: pos.glowX - 120,
          top: pos.glowY - 120,
          background: 'radial-gradient(circle, #6C63FF, transparent)'
        }}
      />

      {/* Ripple */}
      {ripple && (
        <span
          key={ripple.key}
          className="absolute rounded-full bg-white/20 animate-ping"
          style={{
            left: ripple.x - 15,
            top: ripple.y - 15,
            width: 30,
            height: 30
          }}
        />
      )}

      {/* Background Orbs */}
      <div className="absolute top-16 right-10 sm:right-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#6C63FF] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-16 left-10 sm:left-20 w-72 sm:w-96 h-72 sm:h-96 bg-[#00D4FF] rounded-full blur-[120px] opacity-20" />

      {/* Floating Object */}
      <motion.div
        className="absolute top-28 right-20 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <img
          src="https://images.unsplash.com/photo-1758979616631-d425001a1f2d?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="3D shape"
          className="w-56 xl:w-64 opacity-60"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="max-w-3xl sm:max-w-4xl lg:max-w-6xl text-center"
      >

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            font-['Outfit']
            font-bold
            tracking-tight
            mb-6
            leading-[1.1]
            text-[clamp(2.2rem,6vw,4.5rem)]
          "
        >
          <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">
            Don’t Wait for Permission.
          </span>
          <br />
          <span className="text-white">Start Building.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="
            font-['Manrope']
            text-[#A1A1AA]
            mb-12
            leading-relaxed
            mx-auto
            max-w-xl sm:max-w-2xl
            text-[clamp(1rem,2.5vw,1.25rem)]
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Developer. Builder. Community leader.
          Turning ideas into real products and helping others do the same.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-white relative overflow-hidden hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8]" />
            <span className="relative flex items-center justify-center gap-2">
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            Connect
          </button>
        </motion.div>

        {/* Socials */}
        <motion.div
          className="flex gap-6 justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Github className="w-6 h-6 text-[#A1A1AA] hover:text-[#00D4FF]" />
          <Linkedin className="w-6 h-6 text-[#A1A1AA] hover:text-[#00D4FF]" />
          <Mail className="w-6 h-6 text-[#A1A1AA] hover:text-[#00D4FF]" />
        </motion.div>

      </motion.div>
    </section>
  );
};
