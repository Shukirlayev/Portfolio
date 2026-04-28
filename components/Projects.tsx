'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { projects, type Project } from '@/lib/data';

const statusColors: Record<
  Project['status'],
  { bg: string; text: string; dot: string }
> = {
  Live: { bg: 'rgba(74,222,128,0.08)', text: '#4ade80', dot: '#4ade80' },
  'In Progress': {
    bg: 'rgba(232,168,64,0.08)',
    text: '#e8a840',
    dot: '#e8a840',
  },
  Concept: { bg: 'rgba(148,163,184,0.08)', text: '#94a3b8', dot: '#94a3b8' },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusColors[project.status];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4 }}
      className="card group flex flex-col h-full relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(232,168,64,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Featured dot */}
      {project.featured && (
        <div
          className="absolute top-4 right-4 text-xs font-mono px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: 'var(--color-accent-dim)',
            color: 'var(--color-accent)',
            border: '1px solid rgba(232,168,64,0.2)',
          }}
        >
          Featured
        </div>
      )}

      <div className="p-7 flex flex-col h-full gap-5">
        {/* Header */}
        <div>
          {/* Status */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full"
              style={{ backgroundColor: status.bg, color: status.text }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: status.dot }}
              />
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-display text-xl font-medium mb-3 group-hover:text-accent transition-colors duration-300"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-md"
              style={{
                backgroundColor: 'var(--color-surface-2)',
                color: 'var(--color-text-muted)',
                border: '1px solid var(--color-border)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div
          className="flex items-center gap-1 pt-4"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'var(--color-surface-2)';
              (e.currentTarget as HTMLAnchorElement).style.color =
                'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color =
                'var(--color-text-secondary)';
            }}
            aria-label={`View ${project.title} on GitHub`}
          >
            <Github size={13} />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'var(--color-surface-2)';
              (e.currentTarget as HTMLAnchorElement).style.color =
                'var(--color-text-primary)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color =
                'var(--color-text-secondary)';
            }}
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <FadeIn>
              <p className="section-label">Projects</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display text-display-lg font-medium text-balance"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Things I&apos;ve{' '}
                <em
                  className="not-italic"
                  style={{ color: 'var(--color-accent)' }}
                >
                  built
                </em>
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <a
              href="https://github.com/shukirlayev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium link-underline pb-0.5 flex-shrink-0"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--color-text-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--color-text-secondary)')
              }
            >
              View all on GitHub
              <ArrowUpRight size={14} />
            </a>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div key={project.id} className={i >= 3 ? 'hidden md:block' : ''}>
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <FadeIn delay={0.4}>
          <p
            className="mt-8 text-sm text-center"
            style={{ color: 'var(--color-text-muted)' }}
          >
            More projects in progress — follow on{' '}
            <a
              href="https://github.com/shukirlayev"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
              style={{ color: 'var(--color-text-secondary)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = 'var(--color-text-primary)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = 'var(--color-text-secondary)')
              }
            >
              GitHub
            </a>{' '}
            for updates.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
