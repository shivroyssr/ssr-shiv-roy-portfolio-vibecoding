import { ArrowUpRight, Code2, Globe, Sparkles } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/portfolioData';

const SERVICE_ICONS: Record<string, typeof Globe> = {
  'website-dev': Globe,
  'vibe-coding-apps': Code2,
  'ai-branding': Sparkles,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-slate-50 py-20 dark:border-[rgba(148,163,184,0.12)] dark:bg-[#101626]/45 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#0891B2] dark:text-[#06B6D4]">
            My Services
          </p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-[#F8FAFC] sm:text-4xl">
            Digital Solutions Designed to Move Your Ideas Forward.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#94A3B8]">
            From business websites to AI-powered digital experiences, I help turn concepts into
            practical online solutions.
          </p>
        </div>

        {/* 3 Service Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] ?? Globe;
            return (
              <article
                key={service.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[#6366F1]/50 dark:border-[rgba(148,163,184,0.15)] dark:bg-[#151D2E] dark:shadow-none dark:hover:border-[#6366F1]/50 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-sm font-medium tabular-nums text-[#0891B2] dark:text-[#06B6D4]">
                      {service.number}.
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366F1]/10 text-[#4F46E5] dark:bg-[#6366F1]/12 dark:text-[#818CF8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-[#94A3B8]">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-slate-200 pt-5 dark:border-[rgba(148,163,184,0.12)]">
                    <p className="text-xs font-medium text-slate-500 dark:text-[#94A3B8]">
                      Services include
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-[#F8FAFC]/90"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#6366F1] px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#5558E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#151D2E]"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
