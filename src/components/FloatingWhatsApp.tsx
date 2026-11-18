import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/portfolioData';

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl('Hello Shiv, I visited your portfolio and would like to discuss a project.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shiv Roy on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2.5 rounded-full border border-[#06B6D4]/30 bg-[#101626]/95 px-4 text-sm font-medium text-[#F8FAFC] shadow-lg shadow-black/40 backdrop-blur-md transition-transform duration-150 hover:-translate-y-0.5 hover:border-[#06B6D4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4]"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#10B981]/15 text-[#34D399]">
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
