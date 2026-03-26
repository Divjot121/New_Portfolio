import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0, glowX: 0, glowY: 0 });
  const [ripple, setRipple] = useState(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setPos({
      x: (x - centerX) * 0.02,
      y: (y - centerY) * 0.02,
      glowX: x,
      glowY: y
    });
  };

  const handleLeave = () => {
    setPos({ x: 0, y: 0, glowX: 0, glowY: 0 });
  };

  const handleClick = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipple({ x, y, key: Date.now() });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32"
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
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#6C63FF] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-[120px] opacity-20" />

      {/* Floating Object */}
      <motion.div
        className="absolute top-32 right-32 hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <img
          src="https://images.unsplash.com/photo-1758979616631-d425001a1f2d?crop=entropy&cs=srgb&fm=jpg&q=85"
          alt="3D shape"
          className="w-64 h-64 object-contain opacity-60"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="max-w-6xl mx-auto text-center relative z-10"
      >

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Outfit'] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
        >
          <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">
            Don’t Wait for Permission.
          </span>
          <br />
          <span className="text-white">Start Building.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="font-['Manrope'] text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-12 leading-relaxed"
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
            className="group relative px-8 py-4 rounded-full font-semibold text-white overflow-hidden hover:scale-105 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8]" />
            <span className="relative flex items-center gap-2">
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full font-semibold backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] transition-all"
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
          <a href="https://github.com/divjot121" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#00D4FF] transition">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/divjot-aroraa/" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#00D4FF] transition">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:aroradivjotsingh@gmail.com" className="text-[#A1A1AA] hover:text-[#00D4FF] transition">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};
