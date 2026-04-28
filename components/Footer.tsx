'use client';

import { Github, Mail, Send } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { navLinks, socialLinks } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-[clamp(1.25rem,5vw,3rem)] py-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Brand */}
            <div className="max-w-xs">
              <p
                className="font-display text-lg font-medium mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <span style={{ color: 'var(--color-accent)' }}>S</span>arvar
                Shukirlayev
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Frontend Developer — building clean, performant interfaces with
                React & TypeScript.
              </p>
            </div>

            {/* Nav links */}
            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Navigation
                </p>
                <ul className="space-y-2">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-sm link-underline transition-colors duration-200"
                        style={{ color: 'var(--color-text-secondary)' }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            'var(--color-text-primary)')
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            'var(--color-text-secondary)')
                        }
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Links
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1.5 link-underline transition-colors duration-200"
                      style={{ color: 'var(--color-text-secondary)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-text-primary)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-text-secondary)')
                      }
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${socialLinks.email}`}
                      className="text-sm flex items-center gap-1.5 link-underline transition-colors duration-200"
                      style={{ color: 'var(--color-text-secondary)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-text-primary)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-text-secondary)')
                      }
                    >
                      <Mail size={12} />
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href={socialLinks.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1.5 link-underline transition-colors duration-200"
                      style={{ color: 'var(--color-text-secondary)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-text-primary)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          'var(--color-text-secondary)')
                      }
                    >
                      <Send size={12} />
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            <p
              className="text-xs font-mono"
              style={{ color: 'var(--color-text-muted)' }}
            >
              © {currentYear} Sarvar Shukirlayev. All rights reserved.
            </p>
            <p
              className="text-xs font-mono"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Built with Next.js · TypeScript · Tailwind CSS
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
