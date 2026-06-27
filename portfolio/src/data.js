// Single source of truth for all portfolio content.
export const profile = {
  name: 'B.T.V. Manikanta',
  fullName: 'Buddavarapu Taraka Venkata Manikanta',
  roles: [
    'Full-Stack Developer',
    'Machine Learning Enthusiast',
    'Google Cloud AI Intern',
    'Problem Solver',
    'CSE @ SRM University-AP',
  ],
  tagline:
    'Second-year B.Tech CSE student crafting full-stack apps, ML systems, and AI-powered platforms that solve real-world problems.',
  location: 'Vijayawada, Andhra Pradesh, India',
  email: 'manikanta_buddavarapu@srmap.edu.in',
  phone: '+91-8317664999',
  gpa: '9.63',
  links: {
    github: 'https://github.com/Manikanta-20-11',
    linkedin: 'https://www.linkedin.com/in/buddavarapu-taraka-venkata-manikanta-b77458325/',
    portfolio: 'https://manikanta-20-11.github.io',
    resume: '/Manikanta-Resume.pdf',
  },
}

export const stats = [
  { value: '9.63', suffix: '/10', label: 'Cumulative GPA' },
  { value: '6', suffix: '+', label: 'Projects Built' },
  { value: '3', suffix: '', label: 'Hackathons' },
  { value: '4', suffix: '', label: 'Semesters' },
]

export const about = {
  summary:
    'B.Tech CSE student at SRM University-AP with a 9.63 GPA and hands-on experience as a Google Cloud Generative AI Intern (APSCHE SMARTBRIDGE). Building full-stack web applications, ML systems, and AI-powered platforms. Passionate about solving real-world problems through software.',
  highlights: [
    "Dean's List Awardee (April 2026)",
    'Google Cloud Generative AI Intern (RAG, LLMs, Prompt Engineering)',
    'ML-driven product builder (Random Forest, Linear Programming)',
    'Full-stack across React, Node, FastAPI & Firebase',
  ],
}

export const education = {
  school: 'SRM University-AP',
  degree: 'B.Tech. Computer Science and Engineering',
  location: 'Amaravati, India',
  period: 'Aug 2024 – Present',
  gpa: '9.63 / 10 (Till 4th Semester)',
  award: "Dean's List Awardee (April 2026)",
  coursework: [
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Object-Oriented Programming',
    'Computer Networks',
    'Discrete Mathematics',
  ],
}

export const experience = [
  {
    role: 'Google Cloud Generative AI Intern',
    company: 'APSCHE SMARTBRIDGE',
    period: '2026 – Present',
    location: 'Remote',
    points: [
      'Developed and tested advanced prompt engineering strategies, including zero-shot and few-shot prompting, to control output formatting, accuracy, and consistency across tasks.',
      'Implemented Retrieval-Augmented Generation (RAG) workflows utilizing dense vectors and embeddings to ground LLM responses in specific data sources.',
      'Designed Responsible AI evaluation criteria to enforce safety controls, reduce bias, and structure hands-on prompts for extracting defined data formats like JSON.',
    ],
  },
]

export const projects = [
  {
    name: 'Eco-Vivah AI',
    badge: 'AI / ML',
    featured: true,
    tagline: 'AI-powered sustainable wedding planning',
    preview: '/preview-eco-vivah.png',
    description:
      'An AI platform for sustainable Indian weddings with ML-based food quantity prediction and vendor cost optimization — cutting estimated carbon output by targeting zero-waste catering.',
    points: [
      'Random Forest model (scikit-learn) for guest-wise food predictions',
      'PuLP linear-programming engine for optimal vendor selection',
      'Gemini API integration for natural-language recommendations',
    ],
    tech: ['Python', 'FastAPI', 'scikit-learn', 'PuLP', 'Gemini API', 'React 18', 'Vite', 'Tailwind', 'SQLite'],
    github: 'https://github.com/Manikanta-20-11',
  },
  {
    name: 'Darshan Ease',
    badge: 'Full-Stack',
    featured: true,
    tagline: 'Digital temple management system',
    preview: '/my-new-darshan-ease.png',
    description:
      'A temple management platform letting devotees pre-book darshan time slots, reducing on-site wait times and overcrowding.',
    points: [
      'JWT authentication & secure session handling',
      'Admin dashboard for real-time visitor capacity monitoring',
      'Crowd-control logic driven by live slot data',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST API', 'Render'],
    github: 'https://github.com/Manikanta-20-11',
  },
  {
    name: 'URL Shortener',
    badge: 'Full-Stack',
    featured: true,
    tagline: 'Full-stack URL shortener with click tracking',
    preview: '/my-new-url-shortner.png',
    description:
      'A full-stack URL shortener using Node.js, Express.js, and MongoDB Atlas to manage link generation, redirection, and click tracking.',
    points: [
      'REST API endpoints for URL management with nanoid for collision-resistant unique ID generation',
      'Backend logic for duplicate URL detection and redirection',
      'Deployed via Render with secure environment variable configuration',
    ],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST API', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Manikanta-20-11',
  },
  {
    name: 'JoinIn',
    badge: 'Social',
    featured: false,
    tagline: 'Just-in-time activity partner platform',
    preview: '/preview-joinin.png',
    description:
      'A platform where students broadcast temporary Beacons for impromptu plans, lowering social friction for peer-to-peer meetups.',
    points: [
      'Localized discovery of nearby ongoing activities',
      'One-tap join for instant participation',
      'Temporary Beacon broadcasting model',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Manikanta-20-11',
  },
  {
    name: 'Hospital Management System',
    badge: 'Database',
    featured: false,
    tagline: 'Normalized relational DB architecture',
    preview: '/preview-hospital.png',
    description:
      'A normalized relational database covering patient records, doctor scheduling, billing, appointments, and emergency contacts with full ER diagram documentation.',
    points: [
      'Full ER modeling & normalized schema design',
      'Role-based data access enforcing patient/doctor/admin privacy',
      'DBMS course project with complete documentation',
    ],
    tech: ['SQL', 'MySQL', 'ER Modeling'],
    github: 'https://github.com/Manikanta-20-11',
  },
]



export const skills = [
  { group: 'Languages', items: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'] },
  { group: 'Frontend', items: ['React 18', 'Vite', 'Tailwind CSS', 'Recharts'] },
  { group: 'Backend & APIs', items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'JWT'] },
  { group: 'Databases', items: ['MongoDB', 'Firebase', 'SQLite', 'MySQL'] },
  { group: 'ML / Data Science', items: ['scikit-learn', 'Random Forest', 'PuLP', 'LLMs', 'RAG', 'Prompt Engineering'] },
  { group: 'Tools & Platforms', items: ['Git', 'GitHub', 'Vertex AI', 'Google Gemini API', 'Firebase Auth'] },
]

export const achievements = [
  {
    title: "Dean's List Certificate",
    date: 'April 2026',
    description: 'Awarded for outstanding academic performance (SGPA 10.0 in 3rd Semester) at SRM University-AP.',
    tag: 'Award',
  },
  {
    title: 'Hack MSC 2.0',
    date: 'Nov 1–2, 2025',
    description: 'Built a working prototype within a 24-hour hackathon sprint.',
    tag: 'Hackathon',
  },
  {
    title: 'Code For Connection (CFC)',
    date: 'Feb 14, 2026',
    description: 'Participated in a social-impact focused hackathon.',
    tag: 'Hackathon',
  },
  {
    title: 'Amaravathi Quantum Valley Hackathon',
    date: 'Aug 28, 2025',
    description: 'Participated in a technology and innovation hackathon (AQVH).',
    tag: 'Hackathon',
  },
]
