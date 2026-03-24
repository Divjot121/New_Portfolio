import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Send } from 'lucide-react';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
    { icon: Mail, label: 'Email', href: 'mailto:divjot@example.com' }
  ];

  return (
    <section id="contact" className="py-32 px-6" ref={ref} data-testid="contact-section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-['Outfit'] text-4xl lg:text-6xl font-bold tracking-tighter mb-6" data-testid="contact-headline">
            <span className="bg-gradient-to-r from-[#6C63FF] via-[#00D4FF] to-[#FF6FD8] bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="text-white">Meaningful</span>
          </h2>
        </motion.div>

        <motion.p
          className="font-['Manrope'] text-lg text-[#A1A1AA] mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="contact-description"
        >
          Whether you're building a startup, organizing a community, or just want to connect — I'm always open to meaningful conversations.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] transition-all"
                data-testid={`contact-social-${index}`}
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
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="font-['Manrope'] text-[#A1A1AA] text-sm">
            © 2024 Divjot Singh Arora. Built with curiosity and purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
};