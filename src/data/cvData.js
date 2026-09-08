export const CV_DATA = {
  personalInfo: {
    fullName: "Farhod Soyilov",
    title: "Full-Stack Developer",
    subtitle: "FastAPI · Django · Node.js · React · Next.js",
    location: "Tashkent, Uzbekistan",
    phone: "+998 20 004 27 09",
    email: "fsoyilov@gmail.com",
    website: "https://farkhod.dev",
    websiteLabel: "farkhod.dev",
    github: "https://github.com/Farhodoff",
    githubLabel: "github.com/Farhodoff",
    linkedin: "https://linkedin.com/in/farhod-soyilov",
    linkedinLabel: "linkedin.com/in/farhod-soyilov",
    pdfUrl: "/Farhod_Soyilov_CV.pdf",
    pdfFilename: "Farhod_Soyilov_CV.pdf",
  },
  summary:
    "Full-Stack Developer with hands-on experience architecting scalable backend systems (FastAPI, Django, Node.js) and modern frontend applications (React, Next.js). Proven record of improving system performance, integrating AI-powered features, and shipping production tools used by 1,000+ daily active users. JDU student and JLPT N2 certified, with a strong focus on clean code and scalable architecture.",
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Pharmacy E-Commerce & Management Platform",
      location: "Remote",
      period: "Jun 2026 – Current",
      highlights: [
        "Architected and developed a full-stack platform from scratch using React 19, TypeScript, Node.js, Express, and PostgreSQL with Prisma to organize complex medical data and categories at scale.",
        "Engineered a responsive, high-performance shopping UI with React, Tailwind CSS, and Zustand state management for smooth multi-device interactions.",
        "Built a secure Admin Dashboard with JWT authentication and RESTful APIs, providing safe and efficient inventory and category control for internal staff."
      ],
      technologies: ["React 19", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Zustand", "Tailwind CSS"]
    },
    {
      role: "Mobile App Developer",
      company: "Receipt Splitter — AI-Powered Mobile App",
      location: "Onsite",
      period: "Jan 2026 – Mar 2026",
      highlights: [
        "Built a cross-platform mobile app using React Native, Tamagui, and Zustand, integrating Google Gemini AI to scan receipts and automate bill splitting with real-time receipt parsing.",
        "Engineered a Node.js/PostgreSQL/Prisma backend for authentication, group management, debt tracking, and multi-language support."
      ],
      technologies: ["React Native", "Tamagui", "Zustand", "Google Gemini AI", "Node.js", "PostgreSQL", "Prisma"]
    },
    {
      role: "Backend Developer",
      company: "Olma Market Platform (E-commerce)",
      location: "Remote",
      period: "Jun 2025 – Jan 2026",
      highlights: [
        "Engineered a high-performance REST API with FastAPI and PostgreSQL, implementing query optimization, indexing, and an event-driven Telegram bot with async updates—cutting response times by 35% and serving 1,000+ daily active users.",
        "Integrated Redis for distributed caching and Celery with RabbitMQ for background task processing (reporting, notifications), significantly boosting throughput.",
        "Designed and implemented a Role-Based Access Control (RBAC) system for a custom Admin Dashboard, automating logistics and inventory workflows."
      ],
      technologies: ["FastAPI", "Python", "PostgreSQL", "Redis", "Celery", "RabbitMQ", "Telegram Bot API"]
    },
    {
      role: "Frontend Developer",
      company: "Interactive Service Platform (Booking Platform)",
      location: "Tashkent",
      period: "Jan 2025 – May 2025",
      highlights: [
        "Engineered the platform frontend using Next.js and React with Server-Side Rendering (SSR) for optimal SEO and rapid initial page load performance.",
        "Implemented WebSocket-based real-time data streaming for live booking slot availability, eliminating manual refreshes.",
        "Constructed an accessible, reusable component system with Radix UI and Tailwind CSS, maintaining global state with custom hooks and React Context."
      ],
      technologies: ["Next.js", "React", "WebSockets", "Radix UI", "Tailwind CSS", "Context API"]
    }
  ],
  skills: {
    backend: ["Python (FastAPI, Django)", "Node.js", "Express", "RESTful APIs", "Redis", "Celery", "RabbitMQ"],
    frontend: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Radix UI", "Tailwind CSS", "i18next", "Zustand"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    tools: ["Git", "Docker", "Nginx", "Linux", "OpenAI API", "Google Gemini AI", "Telegram Bot API", "WebSockets"]
  },
  projects: [
    {
      title: "Nihongo Talk",
      description: "AI-powered Japanese learning and mastery platform (JLPT N5–N1) featuring real-time AI voice coaching, Anki SM-2 spaced repetition, and kanji stroke canvas.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "DeepSeek AI", "WebRTC"],
      github: "https://github.com/Farhodoff/nihongo-talk"
    },
    {
      title: "Components-main",
      description: "Accessible React component library with i18n support and theme customization.",
      tech: ["React", "Radix UI", "Tailwind CSS", "TypeScript", "i18next"],
      github: "https://github.com/Farhodoff/components-main"
    },
    {
      title: "Video-translate",
      description: "AI-driven tool for video analysis, speech-to-text transcription (STT), and automated translation into Uzbek.",
      tech: ["FastAPI", "Whisper / OpenAI", "FFmpeg", "Background Tasks", "React"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Information Technology",
      institution: "Japan Digital University (JDU)",
      location: "Tashkent, Uzbekistan",
      period: "Oct 2022 – Present"
    }
  ],
  languagesAndCertifications: [
    {
      language: "Japanese",
      level: "JLPT N2 Certified",
      badge: "JLPT N2"
    },
    {
      language: "English",
      level: "Technical Proficiency"
    },
    {
      language: "Uzbek",
      level: "Native"
    }
  ]
};
