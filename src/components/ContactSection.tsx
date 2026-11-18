import { useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  User,
} from 'lucide-react';
import { CONTACT_INFO, SERVICES, getWhatsAppUrl } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  service: SERVICES[0].title,
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const validate = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message = 'Please share a brief description of your project (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...form });
  };

  const buildMailtoHref = (data: FormState) => {
    const subject = `Project Enquiry from ${data.name} (${data.service})`;
    const body = `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\nProject Details:\n${data.message}`;
    return `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const buildWhatsAppSummaryUrl = (data: FormState) => {
    const text = `Hello Shiv, my name is ${data.name} (${data.email}). I am interested in ${data.service}.\n\nProject details: ${data.message}`;
    return getWhatsAppUrl(text);
  };

  return (
    <section
      id="contact"
      className="border-b border-[rgba(148,163,184,0.12)] bg-[#101626]/55 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Direct Contact Info & Primary Channels */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#06B6D4]">Get in Touch</p>
              <h2 className="font-display mt-2 text-balance text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
                Have an Idea? Let&apos;s Build Something Together.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#94A3B8]">
                Looking for a website, web application, or digital branding solution? Share your
                requirements and let&apos;s discuss your project.
              </p>

              {/* Direct Info List */}
              <dl className="mt-8 space-y-4 border-t border-[rgba(148,163,184,0.15)] pt-6">
                <div className="flex items-center gap-3.5">
                  <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.15)] bg-[#151D2E] text-[#818CF8]">
                    <User className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Name</span>
                  </dt>
                  <dd>
                    <span className="block text-xs text-[#94A3B8]">Name</span>
                    <span className="text-sm font-medium text-[#F8FAFC]">
                      {CONTACT_INFO.fullName}
                    </span>
                  </dd>
                </div>

                <div className="flex items-center gap-3.5">
                  <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.15)] bg-[#151D2E] text-[#06B6D4]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Location</span>
                  </dt>
                  <dd>
                    <span className="block text-xs text-[#94A3B8]">Location</span>
                    <span className="text-sm font-medium text-[#F8FAFC]">
                      {CONTACT_INFO.location}
                    </span>
                  </dd>
                </div>

                <div className="flex items-center gap-3.5">
                  <dt className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[rgba(148,163,184,0.15)] bg-[#151D2E] text-[#818CF8]">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd>
                    <span className="block text-xs text-[#94A3B8]">Email</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm font-medium text-[#F8FAFC] transition-colors hover:text-[#06B6D4]"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#151D2E] px-5 py-2.5 text-sm font-medium text-[#F8FAFC] whitespace-nowrap transition-colors duration-150 hover:border-[#6366F1] hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
              >
                <Mail className="h-4 w-4 text-[#818CF8]" aria-hidden="true" />
                <span>Email Me</span>
              </a>

              <a
                href={getWhatsAppUrl('Hello Shiv, I would like to discuss a project with you.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#6366F1] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#5558E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Validated Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[rgba(148,163,184,0.15)] bg-[#151D2E] p-6 sm:p-8">
              {submittedData ? (
                <div className="space-y-6 py-4" role="status" aria-live="polite">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-[#34D399]"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                        Project Brief Prepared
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
                        Thank you, {submittedData.name}. Your enquiry details are validated and
                        ready—choose your preferred channel below to send it directly to Shiv Roy.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[rgba(148,163,184,0.12)] bg-[#080B14]/70 p-4 text-sm text-[#94A3B8] space-y-1.5">
                    <p>
                      <span className="text-[#F8FAFC] font-medium">Service:</span>{' '}
                      {submittedData.service}
                    </p>
                    <p>
                      <span className="text-[#F8FAFC] font-medium">Email:</span>{' '}
                      {submittedData.email}
                    </p>
                    <p>
                      <span className="text-[#F8FAFC] font-medium">Brief:</span>{' '}
                      {submittedData.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={buildWhatsAppSummaryUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#6366F1] px-5 py-2.5 text-sm font-medium text-white whitespace-nowrap transition-colors hover:bg-[#5558E6]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <a
                      href={buildMailtoHref(submittedData)}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#101626] px-5 py-2.5 text-sm font-medium text-[#F8FAFC] whitespace-nowrap transition-colors hover:border-[#06B6D4]"
                    >
                      <Mail className="h-4 w-4 text-[#06B6D4]" aria-hidden="true" />
                      <span>Open in Email App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmittedData(null);
                        setForm(INITIAL_FORM);
                      }}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
                    >
                      Edit Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                      Start a Conversation
                    </h3>
                    <p className="mt-1 text-sm text-[#94A3B8]">
                      Tell me briefly about what you want to build.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-xs font-medium text-[#F8FAFC]"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => {
                          setForm({ ...form, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="e.g., Rahul Sharma"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'contact-name-error' : undefined}
                        className="min-h-[44px] w-full rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#080B14] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                      />
                      {errors.name && (
                        <p
                          id="contact-name-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-medium text-[#F8FAFC]"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => {
                          setForm({ ...form, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'contact-email-error' : undefined}
                        className="min-h-[44px] w-full rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#080B14] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                      />
                      {errors.email && (
                        <p
                          id="contact-email-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="mb-1.5 block text-xs font-medium text-[#F8FAFC]"
                    >
                      What do you need help with?
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="min-h-[44px] w-full rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#080B14] px-3.5 py-2.5 text-sm text-[#F8FAFC] focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                    >
                      {SERVICES.map((svc) => (
                        <option key={svc.id} value={svc.title}>
                          {svc.title}
                        </option>
                      ))}
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-medium text-[#F8FAFC]"
                    >
                      Project Requirements
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => {
                        setForm({ ...form, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your business, website goals, or web app idea..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className="w-full rounded-lg border border-[rgba(148,163,184,0.2)] bg-[#080B14] px-3.5 py-2.5 text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:border-[#6366F1] focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
                    />
                    {errors.message && (
                      <p
                        id="contact-message-error"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#6366F1] px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-[#5558E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#151D2E] sm:w-auto"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Continue with Project Brief</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
