import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { SAMPLE_PROJECTS, type ProjectItem } from '../data/portfolioData';

function BrowserConceptPreview({ project }: { project: ProjectItem }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="overflow-hidden rounded-t-xl border-b border-[rgba(148,163,184,0.15)] bg-[#0B101D]">
      {/* Browser Top Chrome */}
      <div className="flex items-center justify-between border-b border-[rgba(148,163,184,0.12)] bg-[#101626] px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#475569]" />
        </div>
        <div className="mx-3 flex-1 truncate rounded-md bg-[#080B14] px-3 py-1 text-center font-mono text-[11px] text-[#94A3B8]">
          https://{project.domainLabel}
        </div>
        <span className="text-[11px] font-medium text-[#06B6D4]">Sample</span>
      </div>

      {/* Uploaded Website Screenshot Preview */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0B101D]">
        {!imgError ? (
          <img
            src={project.screenshotSrc}
            alt={project.screenshotAlt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#101626] to-[#151D2E] p-4 text-center">
            <span className="font-display text-sm font-semibold text-[#F8FAFC]">
              {project.title}
            </span>
            <span className="mt-1 text-xs text-[#94A3B8]">{project.domainLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="works"
      className="border-b border-[rgba(148,163,184,0.12)] bg-[#080B14] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#06B6D4]">Portfolio</p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Selected Projects &amp; Creative Work.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
            Explore sample website concepts demonstrating how I approach digital experiences for
            different business industries.
          </p>
        </div>

        {/* 3 Sample Project Concept Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SAMPLE_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[rgba(148,163,184,0.15)] bg-[#151D2E] transition-transform duration-200 hover:-translate-y-1 hover:border-[#6366F1]/50"
            >
              <div>
                <BrowserConceptPreview project={project} />

                <div className="p-6">
                  {/* Unboxed Metadata Line: Sample Project · Category */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium">
                    <span className="text-[#06B6D4]">{project.badge}</span>
                    <span className="text-[#94A3B8]/50" aria-hidden="true">
                      ·
                    </span>
                    <span className="text-[#94A3B8]">{project.category}</span>
                  </div>

                  <h3 className="font-display mt-2.5 text-xl font-bold text-[#F8FAFC]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <ul className="mt-5 space-y-2 border-t border-[rgba(148,163,184,0.12)] pt-4">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-[#F8FAFC]/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#6366F1]"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action */}
              <div className="border-t border-[rgba(148,163,184,0.12)] bg-[#101626]/60 px-6 py-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] w-full items-center justify-center gap-2 rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#151D2E] px-4 py-2 text-sm font-medium text-[#F8FAFC] whitespace-nowrap transition-colors duration-150 hover:border-[#6366F1] hover:bg-[#6366F1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
                >
                  <span>View Live Demo</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
