import { Cpu, Code2, Globe, PenTool } from 'lucide-react';
import { ABOUT_HIGHLIGHTS } from '../data/portfolioData';

const HIGHLIGHT_ICONS: Record<string, typeof Cpu> = {
  genai: Cpu,
  'vibe-coding': Code2,
  'digital-solutions': Globe,
  'ai-content': PenTool,
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-slate-200 bg-slate-50 py-20 dark:border-[rgba(148,163,184,0.12)] dark:bg-[#101626]/45 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Narrative & Career Objective */}
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold tracking-wide text-[#0891B2] dark:text-[#06B6D4]">
              About Me
            </p>
            <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-4xl">
              Building Digital Experiences with AI &amp; Creativity.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
              <p>
                I am Shiv Roy, a GenAI practitioner and web developer based in Patna, Bihar, India.
              </p>
              <p>
                I specialize in Vibe Coding, AI-assisted website development, web application
                prototyping, and AI-driven content creation.
              </p>
              <p>
                I help local businesses, startups, and entrepreneurs establish their digital
                presence through modern websites and practical digital solutions.
              </p>
              <p>
                My goal is to make professional digital solutions more accessible to businesses that
                want to grow online.
              </p>
            </div>

            {/* Career Objective Box (hairline border, no thick left bar) */}
            <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-[rgba(148,163,184,0.15)] dark:bg-[#151D2E]/80 dark:shadow-none sm:p-6">
              <p className="font-display text-sm font-semibold text-slate-900 dark:text-[#F8FAFC]">
                Career Objective
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                To leverage my experience in Generative AI and modern web development to build
                practical, high-converting digital solutions for local enterprises, helping
                businesses establish their online presence and grow with minimal friction.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Professional Highlight Cards */}
          <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {ABOUT_HIGHLIGHTS.map((item) => {
                const Icon = HIGHLIGHT_ICONS[item.id] ?? Cpu;
                return (
                  <article
                    key={item.id}
                    className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#6366F1]/50 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#151D2E] dark:shadow-none dark:hover:border-[#6366F1]/40"
                  >
                    <div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366F1]/10 text-[#4F46E5] dark:bg-[#6366F1]/12 dark:text-[#818CF8]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display mt-4 text-lg font-semibold text-slate-900 dark:text-[#F8FAFC]">
                        {item.title}
                      </h3>
                    </div>

                    <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4 text-sm text-slate-600 dark:border-[rgba(148,163,184,0.12)] dark:text-[#94A3B8]">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span
                            className="h-1 w-1 shrink-0 rounded-full bg-[#0891B2] dark:bg-[#06B6D4]"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
