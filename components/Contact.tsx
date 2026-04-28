'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
} from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { socialLinks } from '@/lib/data';

interface FormState {
  name: string;
  email: string;
  message: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setSubmitState('loading');

    // Simulate API call — connect to Formspree / your backend here
    await new Promise((res) => setTimeout(res, 1200));

    // To use Formspree: replace with fetch("https://formspree.io/f/YOUR_ID", ...)
    setSubmitState('success');
    setForm({ name: '', email: '', message: '' });

    // Reset after 5s
    setTimeout(() => setSubmitState('idle'), 5000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shukirlayev',
      href: socialLinks.github,
    },
    {
      icon: Send,
      label: 'Telegram',
      value: '@Shukirlayev',
      href: socialLinks.telegram,
    },
  ];

  const inputBase = `
    w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200
    placeholder:text-[var(--color-text-muted)] font-body
  `;

  return (
    <section id="contact" className="section-container">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <p className="section-label">Contact</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Info */}
          <div>
            <FadeIn delay={0.1}>
              <h2
                className="font-display text-display-lg font-medium mb-5 text-balance"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Let&apos;s work{' '}
                <em
                  className="not-italic"
                  style={{ color: 'var(--color-accent)' }}
                >
                  together
                </em>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p
                className="text-base leading-relaxed mb-10"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                I&apos;m currently open to freelance projects and full-time
                frontend roles. If you have a project in mind or just want to
                connect — send a message or reach out directly.
              </p>
            </FadeIn>

            {/* Contact links */}
            <div className="space-y-3">
              {contactItems.map((item, i) => (
                <FadeIn key={item.label} delay={0.25 + i * 0.08}>
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith('mailto') ? undefined : '_blank'
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                    style={{
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-surface)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        'rgba(232,168,64,0.25)';
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = 'var(--color-surface-2)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        'var(--color-border)';
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.backgroundColor = 'var(--color-surface)';
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                      style={{
                        backgroundColor: 'var(--color-accent-dim)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      <item.icon size={15} />
                    </div>
                    <div>
                      <p
                        className="text-xs font-mono uppercase tracking-wider mb-0.5"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.15} direction="left">
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              <div className="flex items-center gap-2 mb-7">
                <MessageSquare
                  size={16}
                  style={{ color: 'var(--color-accent)' }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Send a message
                </span>
              </div>

              <AnimatePresence mode="wait">
                {submitState === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <CheckCircle2 size={40} style={{ color: '#4ade80' }} />
                    <div>
                      <p
                        className="font-medium text-lg mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        Message sent!
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    noValidate
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium mb-1.5"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Alex Smith"
                        className={inputBase}
                        style={{
                          backgroundColor: 'var(--color-surface-2)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-primary)',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            'rgba(232,168,64,0.4)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            'var(--color-border)')
                        }
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium mb-1.5"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className={inputBase}
                        style={{
                          backgroundColor: 'var(--color-surface-2)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-primary)',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            'rgba(232,168,64,0.4)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            'var(--color-border)')
                        }
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-medium mb-1.5"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or idea..."
                        className={`${inputBase} resize-none`}
                        style={{
                          backgroundColor: 'var(--color-surface-2)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-primary)',
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor =
                            'rgba(232,168,64,0.4)')
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            'var(--color-border)')
                        }
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitState === 'loading'}
                      className="btn-primary w-full justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitState === 'loading' ? (
                        <>
                          <Loader2 size={15} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <Send size={14} />
                        </>
                      )}
                    </button>

                    <p
                      className="text-xs text-center pt-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      No spam. I&apos;ll only reply about your message.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
