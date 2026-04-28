'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { MapPin, Code2, Zap } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    label: 'Frontend Focus',
    description:
      'React, TypeScript, and modern CSS — building interfaces that are both fast and beautiful.',
  },
  {
    icon: Zap,
    label: 'Self-Taught Drive',
    description:
      '6+ months of dedicated study. Every project is a step toward professional-grade work.',
  },
  {
    icon: MapPin,
    label: 'Based in Uzbekistan',
    description:
      'Available for remote work globally. Open to freelance and full-time opportunities.',
  },
];

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="section-label">About</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Bio */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="font-display text-display-lg font-medium mb-6 text-balance"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Building modern interfaces,{' '}
                <em
                  className="not-italic"
                  style={{ color: 'var(--color-accent)' }}
                >
                  one component at a time.
                </em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                <p>
                  I&apos;m a self-taught frontend developer focused on building
                  modern and responsive web interfaces. I work with{' '}
                  <span style={{ color: 'var(--color-text-primary)' }}>
                    React and TypeScript
                  </span>
                  , and continuously improve by shipping real-world projects.
                </p>
                <p>
                  My approach is straightforward: write clean, maintainable
                  code, care about performance, and always think about the user.
                  I believe good UI is not just visual — it&apos;s about{' '}
                  <span style={{ color: 'var(--color-text-primary)' }}>
                    how it feels to use something.
                  </span>
                </p>
                <p>
                  Currently focused on growing as a developer and finding
                  opportunities where I can contribute meaningfully while
                  continuing to learn.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector('#projects')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-primary text-sm"
                >
                  See my projects
                </a>
                <a
                  href="mailto:shukirlayevs@gmail.com"
                  className="btn-secondary text-sm"
                >
                  shukirlayevs@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-4">
            {highlights.map((item, i) => (
              <FadeIn key={item.label} delay={0.15 + i * 0.1} direction="left">
                <div
                  className="card p-5 flex gap-4 group"
                  style={{ backgroundColor: 'var(--color-surface)' }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: 'var(--color-accent-dim)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3
                      className="font-medium text-sm mb-1"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {item.label}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Open to work badge */}
            <FadeIn delay={0.45} direction="left">
              <div
                className="rounded-xl p-5 flex items-center gap-3"
                style={{
                  border: '1px solid rgba(232,168,64,0.2)',
                  backgroundColor: 'rgba(232,168,64,0.05)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                  style={{ backgroundColor: '#4ade80' }}
                />
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    Open to opportunities
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    Freelance & full-time — remote preferred
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
