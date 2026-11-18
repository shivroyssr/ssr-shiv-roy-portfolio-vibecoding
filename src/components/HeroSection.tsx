import { useState } from 'react';
import {
  ArrowDownRight,
  Code2,
  Cpu,
  Globe,
  Layers,
  MapPin,
  MessageCircle,
  Moon,
  Sparkles,
  Sun,
  Terminal,
} from 'lucide-react';
import { CONTACT_INFO, getWhatsAppUrl } from '../data/portfolioData';
import type { ThemeMode } from '../App';

type StudioTab = 'prompt' | 'workflow' | 'output';

const STUDIO_TABS: { id: StudioTab; label: string }[] = [
  { id: 'prompt', label: '01. Prompt' },
  { id: 'workflow', label: '02. AI Stack' },
  { id: 'output', label: '03. Web Output' },
];

interface HeroSectionProps {
  theme: ThemeMode;
  onThemeChange: (next: ThemeMode) => void;
}

export function HeroSection({ theme, onThemeChange }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<StudioTab>('prompt');

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-200 bg-white dark:border-[rgba(148,163,184,0.12)] dark:bg-[#080B14]"
    >
      {/* Subtle Architectural Grid & Ambient Gradient */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 opacity-70 dark:opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#6366F1]/12 via-[#06B6D4]/8 to-transparent dark:from-[#6366F1]/18 dark:via-[#06B6D4]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-[#06B6D4]/10 via-[#6366F1]/8 to-transparent dark:from-[#06B6D4]/10 dark:via-[#6366F1]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-14 lg:pb-20">
        {/* Top Hero Utility Row: Role Kicker & 2-Option Theme Switcher */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-medium tracking-wide text-[#0891B2] dark:text-[#06B6D4]">
            GenAI Practitioner <span className="mx-2 text-slate-400 dark:text-[#94A3B8]/50" aria-hidden="true">·</span> Vibe Coding Developer
          </p>

          <div
            role="group"
            aria-label="Theme selection"
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 p-1 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#101626]"
          >
            <button
              type="button"
              onClick={() => onThemeChange('light')}
              aria-pressed={theme === 'light'}
              className={`inline-flex min-h-[34px] items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] ${
                theme === 'light'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
              }`}
            >
              <Sun className="h-3.5 w-3.5 text-amber-500" aria-hidden="true" />
              <span>White Theme</span>
            </button>
            <button
              type="button"
              onClick={() => onThemeChange('dark')}
              aria-pressed={theme === 'dark'}
              className={`inline-flex min-h-[34px] items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] ${
                theme === 'dark'
                  ? 'bg-[#151D2E] text-[#F8FAFC] border border-[rgba(148,163,184,0.18)]'
                  : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
              }`}
            >
              <Moon className="h-3.5 w-3.5 text-[#06B6D4]" aria-hidden="true" />
              <span>Dark Theme</span>
            </button>
          </div>
        </div>

        {/* Two-Column Split Hero */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Introduction & Conversion CTAs */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="font-display mb-2 text-lg font-medium text-slate-600 dark:text-[#94A3B8] sm:text-xl">
              Hello, I&apos;m <span className="text-slate-900 dark:text-[#F8FAFC]">Shiv Roy</span>.
            </p>

            <h1
              className="font-display text-balance font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC]"
              style={{ fontSize: 'clamp(2.25rem, 4.1vw, 3.5rem)', lineHeight: 1.12 }}
            >
              Turning Ideas into Fast Web Apps Using{' '}
              <span className="bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#0891B2] dark:from-[#6366F1] dark:via-[#818CF8] dark:to-[#06B6D4] bg-clip-text text-transparent">
                AI &amp; Vibe Coding.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-[#94A3B8] sm:text-[17px]">
              I help local businesses and entrepreneurs transform their ideas into modern websites,
              web applications, and digital solutions using AI-powered development workflows.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-[#94A3B8]/85 sm:text-[15px]">
              Building practical digital experiences with Generative AI, modern web technologies,
              and creative problem-solving.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#works"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#6366F1] px-6 py-3 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#5558E6] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#080B14]"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={getWhatsAppUrl('Hello Shiv, I would like to discuss a website or web app project.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 dark:border-[rgba(148,163,184,0.2)] dark:bg-[#101626] dark:text-[#F8FAFC] whitespace-nowrap shrink-0 transition-all duration-150 hover:border-[#6366F1] hover:bg-slate-50 dark:hover:border-[#06B6D4]/60 dark:hover:bg-[#151D2E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#080B14]"
              >
                <MessageCircle className="h-4 w-4 text-[#0891B2] dark:text-[#06B6D4]" aria-hidden="true" />
                <span>Hire Me / WhatsApp Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive SSR Developer Studio Composition */}
          <div className="flex flex-col lg:col-span-5">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/95 p-5 shadow-lg shadow-slate-900/5 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#101626]/90 dark:shadow-2xl dark:shadow-black/40 backdrop-blur-md sm:p-6">
              {/* Studio Header with SSR Initials Crest */}
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-[rgba(148,163,184,0.12)] pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#6366F1]/30 bg-gradient-to-br from-[#6366F1]/15 to-[#06B6D4]/15 dark:border-[#6366F1]/40 dark:from-[#6366F1]/25 dark:to-[#06B6D4]/20 font-display text-base font-bold tracking-wider text-slate-900 dark:text-[#F8FAFC]">
                    {CONTACT_INFO.brandShort}
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-slate-900 dark:text-[#F8FAFC]">
                      {CONTACT_INFO.fullName}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-[#94A3B8]">{CONTACT_INFO.title}</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#0891B2] dark:text-[#06B6D4]">
                  {CONTACT_INFO.location.split(',')[0]}
                </span>
              </div>

              {/* Interactive Studio Mode Tabs */}
              <div
                role="tablist"
                aria-label="AI development workflow stages"
                className="mt-4 grid grid-cols-3 gap-1 rounded-lg border border-slate-200 bg-slate-200/70 p-1 dark:border-[rgba(148,163,184,0.1)] dark:bg-[#080B14]"
              >
                {STUDIO_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      role="tab"
                      aria-selected={isActive}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`min-h-[36px] rounded-md px-2 py-1.5 text-xs font-medium whitespace-nowrap transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] ${
                        isActive
                          ? 'bg-white text-slate-900 shadow-sm border border-slate-200 dark:bg-[#151D2E] dark:text-[#F8FAFC] dark:border-[rgba(148,163,184,0.15)]'
                          : 'text-slate-600 hover:text-slate-900 dark:text-[#94A3B8] dark:hover:text-[#F8FAFC]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panel */}
              <div className="mt-4 flex-1 rounded-xl border border-slate-200 bg-white p-4 font-mono text-xs leading-relaxed dark:border-[rgba(148,163,184,0.12)] dark:bg-[#080B14]/80">
                {activeTab === 'prompt' && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#0891B2] dark:text-[#06B6D4]">
                      <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Client Requirement Brief</span>
                    </div>
                    <p className="text-slate-800 dark:text-[#F8FAFC]/90">
                      &quot;Build a fast, mobile-first website with clear services, lead capture,
                      and direct WhatsApp enquiry for a growing business.&quot;
                    </p>
                    <div className="border-t border-slate-200 dark:border-[rgba(148,163,184,0.1)] pt-3 text-slate-600 dark:text-[#94A3B8]">
                      <div className="flex items-center justify-between py-1">
                        <span>Target</span>
                        <span className="text-slate-900 dark:text-[#F8FAFC]">Business &amp; Web Apps</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span>Approach</span>
                        <span className="text-slate-900 dark:text-[#F8FAFC]">GenAI + Vibe Coding</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span>Focus</span>
                        <span className="text-[#0891B2] dark:text-[#06B6D4]">Clarity &amp; Conversion</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'workflow' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-[#4F46E5] dark:text-[#818CF8]">
                      <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Vibe Coding Workflow</span>
                    </div>
                    <div className="space-y-2 pt-1 font-sans text-xs">
                      <div className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2 dark:bg-[#151D2E]">
                        <span className="text-slate-900 dark:text-[#F8FAFC]">Structured Prompting</span>
                        <span className="text-[#0891B2] dark:text-[#06B6D4]">Architecture</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2 dark:bg-[#151D2E]">
                        <span className="text-slate-900 dark:text-[#F8FAFC]">AI-Assisted UI Build</span>
                        <span className="text-[#4F46E5] dark:text-[#818CF8]">Responsive</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2 dark:bg-[#151D2E]">
                        <span className="text-slate-900 dark:text-[#F8FAFC]">Iterative Refinement</span>
                        <span className="text-emerald-600 dark:text-[#34D399]">Usability</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'output' && (
                  <div className="space-y-3 font-sans">
                    <div className="flex items-center gap-2 font-mono text-xs text-emerald-600 dark:text-[#34D399]">
                      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Delivered Digital Experience</span>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-[rgba(148,163,184,0.14)] dark:bg-[#151D2E]">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900 dark:text-[#F8FAFC]">
                          Modern Web Presence
                        </span>
                        <span className="text-[11px] text-[#0891B2] dark:text-[#06B6D4]">
                          Mobile + Desktop
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-600 dark:text-[#94A3B8]">
                        Clean responsive layout, accessible typography, and fast direct client
                        enquiry via WhatsApp &amp; Email.
                      </p>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <div className="rounded border border-slate-200 bg-white px-2 py-1.5 text-center text-[11px] text-slate-900 dark:border-transparent dark:bg-[#080B14] dark:text-[#F8FAFC]">
                          Responsive
                        </div>
                        <div className="rounded border border-slate-200 bg-white px-2 py-1.5 text-center text-[11px] text-slate-900 dark:border-transparent dark:bg-[#080B14] dark:text-[#F8FAFC]">
                          SEO Ready
                        </div>
                        <div className="rounded border border-slate-200 bg-white px-2 py-1.5 text-center text-[11px] text-slate-900 dark:border-transparent dark:bg-[#080B14] dark:text-[#F8FAFC]">
                          Fast Load
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Studio Footer */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 dark:border-[rgba(148,163,184,0.12)] pt-3 text-xs text-slate-600 dark:text-[#94A3B8]">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#6366F1]" aria-hidden="true" />
                  <span>Practical AI Solutions</span>
                </span>
                <a
                  href="#works"
                  className="font-medium text-slate-900 transition-colors hover:text-[#4F46E5] dark:text-[#F8FAFC] dark:hover:text-[#06B6D4]"
                >
                  Explore Works &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Professional Information Strip Below Split */}
        <div className="mt-12 grid grid-cols-1 gap-3 border-t border-slate-200 pt-8 dark:border-[rgba(148,163,184,0.12)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-[rgba(148,163,184,0.12)] dark:bg-[#101626]/70">
            <MapPin className="h-4 w-4 shrink-0 text-[#0891B2] dark:text-[#06B6D4]" aria-hidden="true" />
            <span className="text-sm text-slate-900 dark:text-[#F8FAFC]">Based in Patna, India</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-[rgba(148,163,184,0.12)] dark:bg-[#101626]/70">
            <Globe className="h-4 w-4 shrink-0 text-[#6366F1]" aria-hidden="true" />
            <span className="text-sm text-slate-900 dark:text-[#F8FAFC]">Available for Freelance Projects</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-[rgba(148,163,184,0.12)] dark:bg-[#101626]/70">
            <Cpu className="h-4 w-4 shrink-0 text-[#0891B2] dark:text-[#06B6D4]" aria-hidden="true" />
            <span className="text-sm text-slate-900 dark:text-[#F8FAFC]">AI-Powered Development</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-[rgba(148,163,184,0.12)] dark:bg-[#101626]/70">
            <Layers className="h-4 w-4 shrink-0 text-[#6366F1]" aria-hidden="true" />
            <span className="text-sm text-slate-900 dark:text-[#F8FAFC]">Website &amp; Web App Solutions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
