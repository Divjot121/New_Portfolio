import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const handleLeave = () => {
    setPos({ x: 0, y: 0, glowX: 0, glowY: 0 });
  };

  const handleClick = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRipple({ x, y, key: Date.now() });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-5xl font-bold tracking-tighter mb-16 text-center">
            About <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Image */}
          <motion.div
            className="lg:col-span-1 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://i.ibb.co/WWKxtKPD/divjot.jpg"
              alt="Divjot Singh Arora"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Story */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            onClick={handleClick}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative lg:col-span-2 rounded-3xl p-8 lg:p-12 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
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

            <h3 className="font-['Outfit'] text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
              Divjot Singh Arora
            </h3>

            <div className="font-['Manrope'] text-[#A1A1AA] space-y-5 leading-relaxed text-base lg:text-lg">

              <p>
                I’m a 15-year-old developer and builder focused on turning ideas into real, usable technology. From SaaS products to community-driven platforms, I care about building things that actually get used.
              </p>

              <p>
                As Growth Lead at GDG Ludhiana, I work on scaling developer communities and helping students start their journey in tech. Through SOS TECH, I’m making technology more practical and accessible for learners across Punjab and different states.
              </p>

              <p>
                I’ve authored coding books, spoken on platforms like Tedx and Josh Talks, and recently became one of the youngest national finalists at the Viksit Bharat Young Leaders Dialogue.
              </p>

              <p className="text-white font-medium">
                My focus is simple: build early, learn fast, and help others do the same.
              </p>

            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Founder', 'Developer', 'Speaker'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm font-['Manrope'] font-medium backdrop-blur-xl bg-white/5 border border-white/10 text-[#00D4FF]"
                >
                  {tag}
                </span>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
