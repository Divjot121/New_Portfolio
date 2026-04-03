import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';

export const Contact = () => {
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
            x: (x - centerX) * 0.03,
            y: (y - centerY) * 0.03,
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

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/divjot121' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/divjot-aroraa/' },
        { icon: Twitter, label: 'Twitter', href: 'https://x.com/Divjot121' },
        { icon: Mail, label: 'Email', href: 'mailto:contact@divjotsingh.com' }
    ];

    return (
        <section id="contact" className="py-32 px-6" ref={ref}>
            <div className="max-w-4xl mx-auto text-center">

                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMove}
                    onMouseLeave={handleLeave}
                    onClick={handleClick}
                    animate={{ x: pos.x, y: pos.y }}
                    transition={{ type: "spring", stiffness: 90, damping: 18 }}
                    className="relative"
                >

                    {/* Glow */}
                    <div
                        className="pointer-events-none absolute w-56 h-56 rounded-full opacity-20 blur-3xl"
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

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="font-['Outfit'] text-4xl lg:text-6xl font-bold tracking-tighter mb-6"
                    >
                        <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">
                            Let’s Build Something
                        </span>
                        <br />
                        <span className="text-white">Meaningful</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="font-['Manrope'] text-lg text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                    >
                        If you’re building something real, leading a community, or just thinking differently — let’s connect.
                    </motion.p>

                    {/* 🔥 Primary CTA */}
                    <motion.a
                        href="mailto:contact@divjotsingh.com"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-[#6C63FF] to-[#00D4FF] text-white shadow-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(108,99,255,0.5)] transition-all mb-12"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                    >
                        <Send className="w-5 h-5" />
                        Start a Conversation
                    </motion.a>

                    {/* Socials */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-4 mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 px-6 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] transition-all"
                                >
                                    <Icon className="w-5 h-5 text-[#00D4FF] group-hover:scale-110 transition-transform" />
                                    <span className="font-['Manrope'] font-medium">{social.label}</span>
                                </a>
                            );
                        })}
                    </motion.div>

                    {/* Footer */}
                    <motion.div
                        className="pt-12 border-t border-white/10"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                    >
                        <p className="font-['Manrope'] text-[#A1A1AA] text-sm">
                            © 2026 Divjot Singh Arora. Built with intent, not just code.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};
