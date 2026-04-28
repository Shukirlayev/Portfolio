'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navLinks } from '@/lib/data';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${
            scrolled
              ? 'backdrop-blur-xl border-b'
              : 'bg-transparent border-transparent'
          }
        `}
        style={{
          backgroundColor: scrolled ? 'rgba(8,8,9,0.85)' : 'transparent',
          borderColor: scrolled ? 'var(--color-border)' : 'transparent',
        }}
      >
        <nav className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,3rem)] h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-lg font-medium tracking-tight"
            style={{ color: 'var(--color-text-primary)' }}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span
              style={{ color: 'var(--color-accent)', letterSpacing: '2px' }}
            >
              S
            </span>
            <span style={{ letterSpacing: '2px' }}>hukirlayev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium link-underline transition-colors duration-200"
                style={{ color: 'var(--color-text-secondary)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-primary)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-text-secondary)')
                }
              >
                {link.label}
              </button>
            ))}

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-primary text-sm py-2 px-4"
            >
              Hire me
            </a>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg"
              style={{ color: 'var(--color-text-primary)' }}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl border-b"
            style={{
              backgroundColor: 'rgba(8,8,9,0.95)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,3rem)] py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--color-text-secondary)' }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = 'var(--color-surface)';
                    (e.currentTarget as HTMLButtonElement).style.color =
                      'var(--color-text-primary)';
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.backgroundColor = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color =
                      'var(--color-text-secondary)';
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Hire me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
