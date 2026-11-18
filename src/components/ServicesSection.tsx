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
      className="border-b border-[rgba(148,163,184,0.12)] bg-[#101626]/45 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#06B6D4]">My Services</p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Digital Solutions Designed to Move Your Ideas Forward.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
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
                className="flex flex-col justify-between rounded-xl border border-[rgba(148,163,184,0.15)] bg-[#151D2E] p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-1 hover:border-[#6366F1]/50"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-sm font-medium tabular-nums text-[#06B6D4]">
                      {service.number}.
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366F1]/12 text-[#818CF8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="font-display mt-5 text-xl font-bold text-[#F8FAFC]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-[rgba(148,163,184,0.12)] pt-5">
                    <p className="text-xs font-medium text-[#94A3B8]">Services include</p>
                    <ul className="mt-3 space-y-2">
                      {service.includes.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-[#F8FAFC]/90"
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
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#6366F1] px-4 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#5558E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151D2E]"
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
