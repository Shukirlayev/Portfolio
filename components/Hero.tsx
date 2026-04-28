'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail, Send } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -60%)',
          background:
            'radial-gradient(circle, rgba(232,168,64,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,3rem)] pt-24 pb-16 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[900px]"
        >
          {/* Role badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs font-mono font-medium px-3 py-1.5 rounded-full"
              style={{
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-accent)',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: 'var(--color-accent)' }}
              />
              Frontend Developer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-display-2xl font-medium mb-6 text-balance"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Sarvar
            <br />
            <em
              className="not-italic"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Shukirlayev
            </em>
          </motion.h1>

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl leading-relaxed max-w-[560px] mb-10"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            I build{' '}
            <span
              style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}
            >
              clean, responsive
            </span>
            , and{' '}
            <span
              style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}
            >
              user-focused
            </span>{' '}
            web interfaces — with attention to performance, simplicity, and
            detail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-16"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              View my work
              <ArrowDown size={15} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Get in touch
              <Mail size={15} />
            </a>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6"
          >
            <span
              className="text-xs font-mono uppercase tracking-widest"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Find me on
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/shukirlayev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors duration-200 link-underline"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-primary)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-muted)')
                }
                aria-label="GitHub profile"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="https://t.me/Shukirlayev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm transition-colors duration-200 link-underline"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-primary)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-muted)')
                }
                aria-label="Telegram"
              >
                <Send size={14} />
                Telegram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
