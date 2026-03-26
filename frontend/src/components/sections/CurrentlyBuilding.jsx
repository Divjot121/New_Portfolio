import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

export const CurrentlyBuilding = () => {
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
      x: (x - centerX) * 0.05,
      y: (y - centerY) * 0.05,
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

  // ✅ Safe typing logic
  const lines = [
    "→ Working on Digital India Literating India initiative",
    "→ Community scaling framework",
    "→ Youth founder network"
  ];

  const [typedLines, setTypedLines] = useState(["", "", ""]);

  useEffect(() => {
    if (!isInView) return;

    let lineIndex = 0;
    let charIndex = 0;

    const interval = setInterval(() => {
      if (lineIndex >= lines.length) {
        clearInterval(interval);
        return;
      }

      setTypedLines((prev) => {
        const updated = [...prev];
        const currentLine = lines[lineIndex];

        if (!currentLine) return prev;

        updated[lineIndex] = currentLine.slice(0, charIndex + 1);
        return updated;
      });

      charIndex++;

      if (charIndex >= lines[lineIndex].length) {
        lineIndex++;
        charIndex = 0;
      }

    }, 25);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="currently-building" className="py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        <motion.div
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onClick={handleClick}
          animate={{ x: pos.x, y: pos.y }}
          transition={{ type: "spring", stiffness: 120, damping: 14 }}
          className="relative rounded-3xl p-8 lg:p-12 backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
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

          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6C63FF] rounded-full blur-[100px] opacity-20" />

          <div className="relative z-10">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00D4FF]"></span>
              </div>
              <h2 className="font-['Outfit'] text-2xl lg:text-3xl font-bold tracking-tight">
                Currently Building
              </h2>
            </div>

            {/* Terminal */}
            <div className="rounded-2xl backdrop-blur-xl bg-black/30 border border-white/10 p-6 font-mono text-sm mb-6">
              <div className="flex items-center gap-2 mb-4 text-[#A1A1AA]">
                <Terminal className="w-4 h-4" />
                <span>terminal@divjot:~$</span>
              </div>

              <div className="space-y-2 text-[#00D4FF]">
                {typedLines.map((line, i) => (
                  <div key={i}>
                    {line}
                    {line.length < (lines[i]?.length || 0) && (
                      <span className="animate-pulse">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-[#6C63FF] to-[#00D4FF]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <p className="font-['Manrope'] text-[#A1A1AA] leading-relaxed">
                Building in public. Shipping fast. Learning faster. These are not ideas — these are active systems evolving in real time.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
