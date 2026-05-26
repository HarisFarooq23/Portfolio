import React from 'react';
import { motion } from 'framer-motion';

export const HeroFallback = () => {
  return (
    <div className="hero-container cosmos-style" style={{ background: 'linear-gradient(180deg, #050814 0%, #0a1628 50%, #050814 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.7 + 0.1,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 4 + 's',
            }}
          />
        ))}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 20%, rgba(99,102,241,0.15) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(59,130,246,0.1) 0%, transparent 60%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: '30%', background: 'linear-gradient(0deg, #050814 0%, transparent 100%)' }} />
      </div>

      <div className="hero-content cosmos-content" style={{ visibility: 'visible' }}>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ visibility: 'visible' }}
        >
          {'HARIS FAROOQ'.split('').map((char, i) => (
            <span key={i} className="title-char">{char === ' ' ? '\u00A0' : char}</span>
          ))}
        </motion.h1>

        <motion.div
          className="hero-subtitle cosmos-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          style={{ visibility: 'visible' }}
        >
          <p className="subtitle-line font-mono text-primary">AI Engineer &middot; ML Researcher</p>
          <p className="subtitle-line">Building intelligent systems at the edge of possible</p>
        </motion.div>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        >
          <a href="#projects" className="cta-button" data-testid="link-projects">View Projects</a>
          <a href="#contact" className="cta-button cta-outline" data-testid="link-contact">Get in Touch</a>
        </motion.div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};
