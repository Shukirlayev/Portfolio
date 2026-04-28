'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { skills } from '@/lib/data';
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiGithub,
  SiFigma,
  SiVite,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

export const skillIcons: Record<string, React.ReactNode> = {
  HTML5: <SiHtml5 />,
  CSS3: <FaCss3Alt />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Framer Motion': <SiFramer />,
  'Git & GitHub': <SiGithub />,
  Figma: <SiFigma />,
  Vite: <SiVite />,
};

const categoryMeta: Record<string, { label: string; description: string }> = {
  foundation: {
    label: 'Foundation',
    description: 'Core web technologies that power every project.',
  },
  modern: {
    label: 'Modern Stack',
    description: 'The tools I use to build production applications.',
  },
  tools: {
    label: 'Tools & Workflow',
    description: 'My day-to-day development environment.',
  },
};

const categories = ['foundation', 'modern', 'tools'] as const;

export default function Skills() {
  const skillsByCategory = categories.map((cat) => ({
    ...categoryMeta[cat],
    key: cat,
    skills: skills.filter((s) => s.category === cat),
  }));

  return (
    <section id="skills" className="section-container">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="section-label">Skills</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          {/* Header */}
          <FadeIn delay={0.1}>
            <h2
              className="font-display text-display-lg font-medium text-balance"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Technologies I{' '}
              <em
                className="not-italic"
                style={{ color: 'var(--color-accent)' }}
              >
                work with
              </em>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-base leading-relaxed lg:pt-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Focused on the modern JavaScript ecosystem. I&apos;m always adding
              to this list — currently deepening expertise in React.js,
              TypeScript patterns, and animation.
            </p>
          </FadeIn>
        </div>

        {/* Skills grid */}
        <div className="mt-14 space-y-10">
          {skillsByCategory.map((group, gi) => (
            <FadeIn key={group.key} delay={gi * 0.1}>
              <div>
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-mono font-medium uppercase tracking-widest"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {group.label}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: 'var(--color-border)' }}
                  />
                  <span
                    className="text-xs hidden sm:block"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {group.description}
                  </span>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9, y: 8 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: gi * 0.08 + si * 0.06,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      whileHover={{ y: -2, scale: 1.02 }}
                    >
                      <div
                        className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-primary)',
                        }}
                        onMouseEnter={(e) => {
                          (
                            e.currentTarget as HTMLDivElement
                          ).style.borderColor = 'rgba(232,168,64,0.3)';
                          (
                            e.currentTarget as HTMLDivElement
                          ).style.backgroundColor = 'var(--color-surface-2)';
                        }}
                        onMouseLeave={(e) => {
                          (
                            e.currentTarget as HTMLDivElement
                          ).style.borderColor = 'var(--color-border)';
                          (
                            e.currentTarget as HTMLDivElement
                          ).style.backgroundColor = 'var(--color-surface)';
                        }}
                      >
                        <span className="text-base leading-none" aria-hidden>
                          {skillIcons[skill.name] ?? '◆'}
                        </span>
                        <span>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Currently learning strip */}
        <FadeIn delay={0.3}>
          <div
            className="mt-10 px-6 py-4 rounded-xl flex flex-wrap items-center gap-3"
            style={{
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-surface)',
            }}
          >
            <span
              className="text-xs font-mono uppercase tracking-widest flex-shrink-0"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Currently exploring →
            </span>
            {['React Server Components', 'Node.js', 'PostgreSQL', 'Docker'].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs font-mono px-2.5 py-1 rounded-md"
                  style={{
                    backgroundColor: 'var(--color-accent-dim)',
                    color: 'var(--color-accent)',
                    border: '1px solid rgba(232,168,64,0.15)',
                  }}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
