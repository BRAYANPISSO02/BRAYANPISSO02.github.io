/**
 * Single source of truth for all factual content.
 *
 * Every claim below traces to the current authoritative CV, whose redacted
 * `pdftotext -layout` extract is committed at `scripts/fixtures/cv.txt`.
 * Composed strings that are not literal substrings of that extract are listed
 * explicitly in `scripts/check-privacy.mjs` under `EDITORIAL_ALLOWLIST`.
 */

export const SITE = {
  displayName: 'Brayan Pisso',
  fullName: 'Brayan Pisso',
  title: 'Electronic Engineer',
  location: 'Manizales, Caldas, Colombia',
  email: 'bpisso@unal.edu.co',
  phoneDisplay: '(+57) 3152162946',
  phoneHref: 'tel:+573152162946',
  linkedin:
    'https://www.linkedin.com/in/brayan-ricardo-pisso-ramirez-8a089a363',
  github: 'https://github.com/BRAYANPISSO02',
} as const;

/** PDF filename served from /public (copied to dist/ as-is at build time). */
export const CV_FILENAME = 'Brayan_Ricardo_Pisso_Ramirez_CV.pdf';

/** Absolute path to the served PDF, base-aware (works under GitHub Pages). */
export const CV_URL = import.meta.env.BASE_URL + CV_FILENAME;

/** The exact hero subtitle. Deliberately not a job title claim. */
export const HERO_SUBTITLE =
  'Electronic Engineer · M.S. Candidate in Industrial Automation (Machine Learning)';

/**
 * The protagonist section immediately after the hero. It composes only CV
 * facts: the summary restates the CV's own positioning alongside key areas
 * of work.
 */
export const PROFILE = {
  summary:
    'Electronic Engineer and M.S. candidate in Industrial Automation, with a focus on Machine Learning. I automate operational and technical workflows through systems that combine Artificial Intelligence, Electronics, and the Internet of Things (IoT): computer vision and deep learning in PyTorch, cloud deployment on Amazon SageMaker and Docker, telemetry with ThingsBoard remote monitoring, and wireless communication over Mesh and Wi-Fi HaLow networks. The same work spans hardware and data — a vision pipeline cut manual design time by approximately 2 hours per image for a laser cutting and engraving business, while a long-range acquisition system covered 8 electric energy meters using Modbus RTU/TCP and DLMS/COSEM over Wi-Fi HaLow.',
  focus: [
    'Computer Vision',
    'Deep Learning',
    'PyTorch',
    'Amazon SageMaker',
    'Docker',
    'ThingsBoard',
    'Wi-Fi HaLow',
    'Mesh',
  ],
} as const;

export interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  description: string;
  tags: readonly string[];
  /** Null until a specific repository is published for this entry. */
  repoUrl: string | null;
}

/** All four CV experience entries, most recent first. */
export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    // TODO: Replace with specific repo URL
    title: 'Automated Human Vector Generation via Deep Learning',
    org: 'Small Business',
    period: 'Feb 2026 – May 2026',
    description:
      'Implemented a computer vision solution to automatically generate vector representations (SVG) of people from photographs for a laser cutting and engraving business, cutting manual design time by approximately 2 hours per image. Leveraged Deep Learning models built in PyTorch, including the Segment Anything Model (SAM) for interactive segmentation. Built a data engineering pipeline for dataset creation to run supervised training of a vision model on Amazon SageMaker focused on image-to-image translation.',
    tags: ['Computer Vision', 'PyTorch', 'Segment Anything Model (SAM)', 'Amazon SageMaker'],
    repoUrl: null,
  },
  {
    // TODO: Replace with specific repo URL
    title: 'Long-Range Telemetry Project',
    org: 'Perception and Intelligent Control (PCI) Research Group',
    period: 'Jun 2025 – Dec 2025',
    description:
      'Developed and deployed a pilot long-range data acquisition system at Universidad Nacional de Colombia (La Nubia Campus) for 8 electric energy meters using Modbus RTU/TCP and DLMS/COSEM protocols over Wi-Fi HaLow connectivity. Integrated the system with the ThingsBoard IoT monitoring and management platform, engineered to operate over self-organizing multi-hop mesh topologies.',
    tags: ['Modbus RTU/TCP', 'DLMS/COSEM', 'Wi-Fi HaLow', 'ThingsBoard'],
    repoUrl: null,
  },
  {
    // TODO: Replace with specific repo URL
    title: 'Image Processing Project',
    org: 'Universidad Nacional de Colombia',
    period: 'Aug 2024 – Dec 2024',
    description:
      'Developed a computer vision system for image classification using Convolutional Neural Networks (CNNs) in TensorFlow/Keras, covering data preprocessing, supervised training, Dropout regularization, and experimental performance evaluation across multiple benchmark datasets.',
    tags: ['CNNs', 'TensorFlow/Keras', 'Computer Vision'],
    repoUrl: null,
  },
  {
    // TODO: Replace with specific repo URL
    title: 'Electronic Circuit Designer',
    org: 'Small Business',
    period: 'Jan 2021 – Jul 2026',
    description:
      'Responsible for PCB schematic design and 2D/3D layout in KiCad, electronic board prototyping, and designing mechanical enclosures/structures for CNC and laser-cutting fabrication.',
    tags: ['KiCad', 'PCB schematic design', 'CNC', 'laser-cutting fabrication'],
    repoUrl: null,
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  researchNote?: string;
}

export const EDUCATION: readonly EducationItem[] = [
  {
    degree: 'M.S. Candidate in Engineering - Industrial Automation',
    institution: 'Universidad Nacional de Colombia, Manizales Campus',
    period: 'Jun 2026 – Present',
    researchNote: 'Research track: Machine Learning and Automatic Recognition',
  },
  {
    degree: 'B.S. in Electronic Engineering',
    institution: 'Universidad Nacional de Colombia, Manizales Campus',
    period: 'Aug 2020 – Apr 2026',
  },
  {
    degree: 'Technical Diploma in Software Programming',
    institution: 'Servicio Nacional de Aprendizaje (SENA), La Plata, Huila',
    period: 'Feb 2019 – Nov 2019',
  },
];

export interface SkillGroup {
  label: string;
  items: readonly string[];
}

/** CV skill groups, with the Spanish parentheticals cleaned into English. */
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    label: 'Programming languages',
    items: ['Python', 'Rust', 'C', 'C++', 'Git / GitHub'],
  },
  {
    label: 'Cloud Infrastructure',
    items: ['AWS (Lambda, SageMaker, Bedrock, S3)', 'Docker'],
  },
  {
    label: 'Modeling and simulation tools',
    items: ['Matlab', 'AutoCAD', 'Proteus', 'Multisim', 'KiCad'],
  },
  {
    label: 'Embedded Systems',
    items: ['STM32', 'ESP32', 'BeaglePlay', 'Raspberry Pi'],
  },
  {
    label: 'Operation of CNC machinery',
    items: ['Router', 'Laser'],
  },
] as const;

export const LANGUAGE_SKILLS = 'English B2 (CEFR), Spanish (Native)';

export const SOFT_SKILLS: readonly string[] = [
  'Proactivity & Initiative',
  'Effective Communication',
  'Resilience',
  'Requirements Analysis',
  'Teamwork',
  'Leadership',
] as const;

export interface CertificationItem {
  label: string;
  provider: string;
}

/** The four CV certifications, in CV order. Rendered as `label — provider`. */
export const CERTIFICATIONS: readonly CertificationItem[] = [
  {
    label: 'English Upper Intermediate B2 | Coursera (Certified)',
    provider: 'University of Naples Federico II',
  },
  {
    label: 'GenAI and LLMs on AWS | Coursera (Certified)',
    provider: 'Duke University',
  },
  {
    label:
      'Data Science & Artificial Intelligence Applied to Business | Coursera (Certified)',
    provider: 'University of Palermo',
  },
  {
    label: 'AWS S3 Basics | Coursera (Certified)',
    provider: 'Coursera',
  },
];

export interface ReferenceItem {
  name: string;
  credentials: string;
  affiliation: string;
}

const REFERENCE_AFFILIATION =
  'Professor, Department of Electrical, Electronic, and Communications Engineering, Universidad Nacional de Colombia, Manizales Campus';

export const REFERENCES: readonly ReferenceItem[] = [
  {
    name: 'Gustavo Adolfo Osorio Londoño',
    credentials: 'Ph.D. in Industrial Automation, M.Sc. in Engineering',
    affiliation: REFERENCE_AFFILIATION,
  },
  {
    name: 'Andrés Marino Álvarez Meza',
    credentials: 'Ph.D., M.Sc.',
    affiliation: REFERENCE_AFFILIATION,
  },
];

export const REFERENCES_NOTE = 'Reference contacts available upon request';

/**
 * One document the owner is willing to hand over, described but never linked.
 *
 * There is deliberately no `href`, `path` or `url` field. Adding one is a type
 * error, which is the structural closure of the document-exposure class.
 */
export interface DocumentEntry {
  readonly title: string;
  /** What the file is, so the reader knows what they are asking for. */
  readonly kind: string;
  /** One line on what it covers and when it was last current. */
  readonly note: string;
}

/**
 * A data-only switch, discriminated so the inactive path is type-enforced.
 * `mode: 'form'` requires an `endpoint`; a `mailto` config cannot carry one.
 */
export type DocRequestConfig =
  | {
      readonly mode: 'mailto';
      readonly documents: readonly DocumentEntry[];
    }
  | {
      readonly mode: 'form';
      readonly endpoint: string;
      /** Only read by the form branch; never serialised anywhere else. */
      readonly accessKey?: string;
      readonly documents: readonly DocumentEntry[];
    };

export const DOC_REQUEST_COPY = {
  heading: 'Documents',
  intro: 'Documents are shared on request. Tell me who you are and which one you need, and I will send it over.',
  action: 'Request',
  mailSubject: 'Document request',
  mailGreeting: 'Hello Brayan,',
  mailIdentityLine: 'Your name / your email:',
  privacy: 'Send me only your name and email address, and only what the document needs. No cookies and no tracking are used on this site.',
  decline: 'You can also say no, and nothing will be sent.',
} as const;

export const DOC_REQUEST: DocRequestConfig = {
  mode: 'mailto',
  documents: [
    {
      title: 'Curriculum Vitae',
      kind: 'PDF',
      note: 'Machine learning and computer vision profile, project and academic record.',
    },
  ],
};

export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
  /** `false` keeps the entry in the mobile menu but out of the desktop bar. */
  desktop?: boolean;
}

/** One entry per rendered section, in document order. */
export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Education', href: '#education', sectionId: 'education' },
  { label: 'Certifications', href: '#certifications', sectionId: 'certifications' },
  { label: 'References', href: '#references', sectionId: 'references', desktop: false },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
] as const;
