import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Moon, Sun, Youtube } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, type SocialLink } from '../data/portfolioData';
import type { ThemeMode } from '../App';

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

function SocialIcon({ id }: { id: SocialLink['id'] }) {
  switch (id) {
    case 'linkedin':
      return <Linkedin className="h-4 w-4" aria-hidden="true" />;
    case 'facebook':
      return <Facebook className="h-4 w-4" aria-hidden="true" />;
    case 'instagram':
      return <Instagram className="h-4 w-4" aria-hidden="true" />;
    case 'youtube':
      return <Youtube className="h-4 w-4" aria-hidden="true" />;
  }
}

interface FooterProps {
  theme: ThemeMode;
  onThemeChange: (next: ThemeMode) => void;
}

export function Footer({ theme, onThemeChange }: FooterProps) {
  const [notice, setNotice] = useState<string | null>(null);

  const handleUnconfiguredSocial = (label: string) => {
    setNotice(`${label} profile URL placeholder — configure in portfolioData.ts or contact directly.`);
  };

  return (
    <footer className="bg-white py-12 dark:bg-[#080B14]">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 border-b border-slate-200 pb-10 dark:border-[rgba(148,163,184,0.12)] md:flex-row md:items-center">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              className="font-display inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC]"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#6366F1] to-[#06B6D4] text-xs font-bold tracking-wider text-white">
                {CONTACT_INFO.brandShort}
              </span>
              <span>{CONTACT_INFO.fullName}</span>
            </a>
            <p className="mt-3 text-sm text-slate-600 dark:text-[#94A3B8]">
              Building Digital Experiences with AI &amp; Vibe Coding.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 whitespace-nowrap transition-colors hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Configurable Social Links */}
          <div className="flex flex-col items-start gap-2 md:items-end">
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) =>
                social.url ? (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-[#6366F1]/60 hover:text-slate-900 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#101626] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]"
                  >
                    <SocialIcon id={social.id} />
                  </a>
                ) : (
                  <button
                    key={social.id}
                    type="button"
                    onClick={() => handleUnconfiguredSocial(social.label)}
                    aria-label={`${social.label} profile placeholder`}
                    title={`${social.label} (Profile URL configurable)`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-[#6366F1]/60 hover:text-slate-900 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#101626] dark:text-[#94A3B8] dark:hover:text-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1]"
                  >
                    <SocialIcon id={social.id} />
                  </button>
                )
              )}
            </div>
            {notice && (
              <p className="text-xs text-slate-600 dark:text-[#94A3B8]" role="status">
                {notice}
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright + Theme Switcher */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-slate-600 dark:text-[#94A3B8] sm:flex-row sm:items-center">
          <p>&copy; 2025 Shiv Roy. All Rights Reserved.</p>

          <div className="flex flex-wrap items-center gap-4">
            <span>{CONTACT_INFO.location}</span>
            <div
              role="group"
              aria-label="Footer theme selection"
              className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-100 p-0.5 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#101626]"
            >
              <button
                type="button"
                onClick={() => onThemeChange('light')}
                aria-pressed={theme === 'light'}
                className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] font-medium transition-colors ${
                  theme === 'light'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                <Sun className="h-3 w-3 text-amber-500" aria-hidden="true" />
                <span>White</span>
              </button>
              <button
                type="button"
                onClick={() => onThemeChange('dark')}
                aria-pressed={theme === 'dark'}
                className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-[#151D2E] text-[#F8FAFC]'
                    : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                }`}
              >
                <Moon className="h-3 w-3 text-[#06B6D4]" aria-hidden="true" />
                <span>Dark</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
