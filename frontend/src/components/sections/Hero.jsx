import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-32" data-testid="hero-section">
      {/* Background gradient orb */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#6C63FF] rounded-full blur-[120px] opacity-20" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#00D4FF] rounded-full blur-[120px] opacity-20" />
      
      {/* Floating 3D element */}
      <motion.div
        className="absolute top-32 right-32 hidden lg:block"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1758979616631-d425001a1f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMGdsb3dpbmclMjBmdXR1cmlzdGljJTIwM2QlMjBzaGFwZXN8ZW58MHx8fHwxNzc0MzQyMzc3fDA&ixlib=rb-4.1.0&q=85"
          alt="Abstract 3D shape"
          className="w-64 h-64 object-contain opacity-60"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-['Outfit'] text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6" data-testid="hero-headline">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">
              Don't Wait for Permission.
            </span>
            <br />
            <span className="text-white">Build.</span>
          </h1>
        </motion.div>

        <motion.p
          className="font-['Manrope'] text-lg sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          data-testid="hero-subtext"
        >
          Young tech entrepreneur, developer, and community builder creating the future one project at a time. Founder. Speaker. Leader.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-8 py-4 rounded-full font-['Manrope'] font-semibold text-white overflow-hidden transition-all hover:scale-105"
            data-testid="view-work-btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] transition-all" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6FD8] via-[#6C63FF] to-[#00D4FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2">
              View Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full font-['Manrope'] font-semibold backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] transition-all"
            data-testid="connect-btn"
          >
            Connect
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex gap-6 justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors" data-testid="social-github">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors" data-testid="social-linkedin">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:divjot@example.com" className="text-[#A1A1AA] hover:text-[#00D4FF] transition-colors" data-testid="social-email">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};