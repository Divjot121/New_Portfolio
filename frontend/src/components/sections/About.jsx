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

        setPos({
            x: (x - rect.width / 2) * 0.04,
            y: (y - rect.height / 2) * 0.04,
            glowX: x,
            glowY: y
        });
    };

    const handleLeave = () => {
        setPos({ x: 0, y: 0, glowX: 0, glowY: 0 });
    };

    const handleClick = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        setRipple({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            key: Date.now()
        });
        setTimeout(() => setRipple(null), 600);
    };

    return (
        <section
            id="about"
            className="py-[clamp(4rem,8vw,8rem)] px-[clamp(1.25rem,4vw,2rem)]"
            ref={ref}
        >
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-[clamp(2.5rem,6vw,4rem)]"
                >
                    <h2 className="text-center font-['Outfit'] font-bold tracking-tight text-[clamp(2rem,5vw,3rem)]">
                        About <span className="bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] bg-clip-text text-transparent">Me</span>
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-[clamp(1.25rem,3vw,2rem)] lg:grid-cols-3">

                    {/* Image */}
                    <motion.div
                        className="lg:col-span-1 rounded-3xl overflow-hidden bg-white/5 border border-white/10 h-full"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="w-full h-[320px] sm:h-[420px] lg:h-full">
                            <img
                                src="https://i.ibb.co/WWKxtKPD/divjot.jpg"
                                alt="Divjot Singh Arora"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Story */}
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMove}
                        onMouseLeave={handleLeave}
                        onClick={handleClick}
                        animate={{ x: pos.x, y: pos.y }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        className="relative lg:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-[clamp(1.5rem,3vw,3rem)]"
                        initial={{ opacity: 0, x: 40 }}
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

                        <h3 className="font-['Outfit'] font-bold mb-5 text-[clamp(1.5rem,3vw,2rem)]">
                            Divjot Singh Arora
                        </h3>

                        <div className="font-['Manrope'] text-[#A1A1AA] leading-relaxed space-y-4 max-w-2xl text-[clamp(0.95rem,1.8vw,1.1rem)]">

                            <p>
                                I’m a developer and builder focused on turning ideas into real, usable technology. From SaaS products to community-driven platforms, I care about building things that actually get used.
                            </p>

                            <p>
                                As Growth Lead at GDG Ludhiana, I work on scaling developer communities and helping students start their journey in tech. Through SOS TECH, I’m making technology more practical and accessible for learners.
                            </p>

                            <p>
                                I’ve authored coding books, spoken on platforms like TEDx and Josh Talks, and became one of the youngest national finalists at the Viksit Bharat Young Leaders Dialogue.
                            </p>

                            <p className="text-white font-medium">
                                Build early. Learn fast. Help others do the same.
                            </p>

                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {['Founder', 'Developer', 'Speaker'].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-[#00D4FF]"
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
