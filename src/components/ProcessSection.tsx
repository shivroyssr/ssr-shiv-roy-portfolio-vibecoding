import { PROCESS_STEPS } from '../data/portfolioData';

export function ProcessSection() {
  return (
    <section
      id="process"
      className="border-b border-[rgba(148,163,184,0.12)] bg-[#080B14] py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-[#06B6D4]">How I Work</p>
          <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
            From Idea to Digital Experience.
          </h2>
        </div>

        {/* Horizontal Timeline on Desktop / Vertical Timeline on Mobile */}
        <div className="relative mt-12">
          {/* Desktop Connecting Line */}
          <div
            className="pointer-events-none absolute top-6 right-8 left-8 hidden h-[1px] bg-gradient-to-r from-[#6366F1]/50 via-[#06B6D4]/50 to-[#6366F1]/50 lg:block"
            aria-hidden="true"
          />

          {/* Mobile Vertical Connecting Line */}
          <div
            className="pointer-events-none absolute top-6 bottom-6 left-6 w-[1px] bg-gradient-to-b from-[#6366F1]/60 via-[#06B6D4]/60 to-transparent lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="relative flex items-start gap-5 lg:flex-col lg:gap-4"
              >
                {/* Step Node */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6366F1]/40 bg-[#151D2E] font-mono text-sm font-semibold tabular-nums text-[#06B6D4] shadow-sm">
                  {item.step}
                </div>

                {/* Step Card Content */}
                <div className="flex-1 rounded-xl border border-[rgba(148,163,184,0.15)] bg-[#101626]/80 p-5 lg:w-full">
                  <h3 className="font-display text-lg font-semibold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
