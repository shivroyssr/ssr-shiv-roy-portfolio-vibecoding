export interface HighlightItem {
  id: string;
  title: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  features: string[];
  url: string;
  domainLabel: string;
  screenshotSrc: string;
  screenshotAlt: string;
  previewTheme: 'education' | 'hospitality' | 'fitness';
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  whatsappMessage: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SocialLink {
  id: 'linkedin' | 'facebook' | 'instagram' | 'youtube';
  label: string;
  // Replace null with your actual profile URL when ready
  url: string | null;
}

export const CONTACT_INFO = {
  brandShort: 'SSR',
  fullName: 'Shiv Roy',
  title: 'AI & Digital Solutions Specialist',
  location: 'Patna, Bihar, India',
  email: 'shivroyssr@gmail.com',
  whatsappNumberDisplay: '+91 9229200467',
  whatsappBaseUrl: 'https://wa.me/919229200467',
};

export function getWhatsAppUrl(message?: string): string {
  if (!message) {
    return CONTACT_INFO.whatsappBaseUrl;
  }
  return `${CONTACT_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const ABOUT_HIGHLIGHTS: HighlightItem[] = [
  {
    id: 'genai',
    title: 'Generative AI',
    points: ['AI-assisted workflows', 'Prompt Engineering'],
  },
  {
    id: 'vibe-coding',
    title: 'Vibe Coding',
    points: ['AI-assisted development', 'Web application development'],
  },
  {
    id: 'digital-solutions',
    title: 'Digital Solutions',
    points: ['Landing pages', 'Digital transformation'],
  },
  {
    id: 'ai-content',
    title: 'AI Content Creation',
    points: ['Social media creatives', 'Digital branding'],
  },
];

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 'brightpath-academy',
    title: 'BrightPath Academy',
    category: 'Education / Coaching Institute Website',
    badge: 'Sample Project',
    description:
      'A sample website concept for a coaching institute to present courses, faculty information, class schedules, and student enquiries in one place.',
    features: [
      'Course Information',
      'Admission Enquiry',
      'Responsive Layout',
      'Educational Information Architecture',
    ],
    url: 'https://bpacademy.bolt.host/',
    domainLabel: 'bpacademy.bolt.host',
    screenshotSrc: '/assets/aistudio/sample-coaching-website-1_c7878d62.png',
    screenshotAlt: 'BrightPath Academy coaching institute sample website screenshot',
    previewTheme: 'education',
  },
  {
    id: 'apnaghar-hostel',
    title: 'ApnaGhar Hostel',
    category: 'Hospitality / Hostel Website',
    badge: 'Sample Project',
    description:
      'A sample website concept that helps students discover hostel facilities, room options, pricing, location, and contact details.',
    features: [
      'Room Information',
      'Facilities and Amenities',
      'Rent Information',
      'Location Details & Enquiry Section',
    ],
    url: 'https://apnagharhostel.bolt.host',
    domainLabel: 'apnagharhostel.bolt.host',
    screenshotSrc: '/assets/aistudio/Screenshot_2026-11-18_065145_a0c17522.png',
    screenshotAlt: 'ApnaGhar Hostel student accommodation sample website screenshot',
    previewTheme: 'hospitality',
  },
  {
    id: 'ironcorefit',
    title: 'IronCoreFit',
    category: 'Fitness / Gym Website',
    badge: 'Sample Project',
    description:
      'A sample website concept for a gym to showcase fitness services, membership plans, trainers, and contact information.',
    features: [
      'Membership Plans',
      'Fitness Services',
      'Training Information',
      'Join Now Enquiry',
    ],
    url: 'https://ironcorefit.bolt.host/',
    domainLabel: 'ironcorefit.bolt.host',
    screenshotSrc: '/assets/aistudio/Screenshot_2026-11-18_065216_8511d235.png',
    screenshotAlt: 'IronCoreFit gym and fitness sample website screenshot',
    previewTheme: 'fitness',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-dev',
    number: '01',
    title: 'AI-Powered Website Development',
    description:
      'Modern, responsive, and professional websites developed using AI-assisted coding workflows and modern web technologies.',
    includes: [
      'Business Websites',
      'Personal Portfolio Websites',
      'Coaching Institute Websites',
      'Landing Pages',
      'Local Business Websites',
      'Website Redesign',
    ],
    ctaLabel: 'Discuss Your Website',
    whatsappMessage:
      'Hello Shiv, I would like to discuss an AI-powered website development project for my business.',
  },
  {
    id: 'vibe-coding-apps',
    number: '02',
    title: 'Vibe Coding & Web Applications',
    description:
      'Transform ideas into functional web applications through AI-assisted development, rapid prototyping, and iterative improvements.',
    includes: [
      'AI-Assisted Web App Development',
      'Business Utility Applications',
      'Dashboard Interfaces',
      'Forms and Enquiry Systems',
    ],
    ctaLabel: 'Discuss Your Project',
    whatsappMessage:
      'Hello Shiv, I have an idea for a web application and would like to discuss building it with you.',
  },
  {
    id: 'ai-branding',
    number: '03',
    title: 'AI Content & Digital Branding',
    description:
      'Help businesses build a consistent and professional digital identity through AI-powered content creation and visual branding.',
    includes: [
      'Social Media Graphics',
      'Digital Branding',
      'Business Marketing Creatives',
      'AI-Assisted Content Creation',
    ],
    ctaLabel: 'Get Digital Branding',
    whatsappMessage:
      'Hello Shiv, I am interested in AI content creation and digital branding for my business.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description:
      "Understand the client's business, requirements, audience, and objectives.",
  },
  {
    step: '02',
    title: 'Plan & Design',
    description:
      'Create the website structure, content strategy, layout, and visual direction.',
  },
  {
    step: '03',
    title: 'Build with AI',
    description:
      'Use AI-assisted development and modern web technologies to build the website or web application.',
  },
  {
    step: '04',
    title: 'Test & Launch',
    description:
      'Review responsiveness, functionality, usability, and website performance before deployment.',
  },
];

// Configurable social media links (set `url` to the verified profile URL when available)
export const SOCIAL_LINKS: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivsroy/' },
  { id: 'facebook', label: 'Facebook', url: null },
  { id: 'instagram', label: 'Instagram', url: null },
  { id: 'youtube', label: 'YouTube', url: null },
];
