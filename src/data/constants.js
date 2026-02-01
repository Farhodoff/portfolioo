import { Github, Linkedin, Youtube, Mail, Code, Terminal, BookOpen, Layers } from "lucide-react";

export const SKILLS = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "Django", "MongoDB", "PostgreSQL",
    "Supabase", "Docker"
];

export const STATS = [
    // { label: "Years Experience", value: "0", icon: Terminal },
    // { label: "Projects Completed", value: "0", icon: Code },
    // { label: "Blog Posts", value: "0", icon: BookOpen },
    // { label: "Technologies", value: "0", icon: Layers },
];

export const EXPERIENCE = [
    {
        role: "Backend Developer",
        company: "Market Platform",
        period: "Sep 2025 – Dec 2025",
        description: "Architected high-performance backend services using FastAPI."
    },
    {
        role: "Frontend Developer (Self-Initiated)",
        company: "Booking Platform (Maydon.uz)",
        period: "Mar 2025 – Aug 2025",
        description: "Developed a comprehensive booking system for sports venues in Tashkent. Built responsive UI with React and Redux, implementing secure user authentication and real-time slot availability."
    }
];

export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/Farhodoff/", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/farhod-soyilov/", icon: Linkedin },
    { name: "YouTube", comment: "Coming soon..." },//url: "https://youtube.com", icon: Youtube },
    { name: "Email", url: "mailto:soyilovfarhod157@gmail.com", icon: Mail },
];

export const PROJECTS = [
    {
        title: "Maydon.uz",
        description: "An online booking platform for football fields and sports venues.",
        note: "⚠️ This is the first prototype of the project I worked on.",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        github: "https://github.com/Farhodoff/maydonuz.uz",
        demo: "https://maydonuz.netlify.app/",
        image: "/images/maydonuz.png"
    },
    {
        title: "AI Study Planner",
        description: "AI-powered study/task planner with gamification, Pomodoro timer, and deep work focus tools.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
        github: "https://github.com/Farhodoff/task_planner",
        demo: "https://task-planner-tau.vercel.app/",
        image: "/images/task_planner.png"
    },
    {
        title: "Super UI (Components)",
        description: "Comprehensive React UI library with accessible, themeable components and documentation.",
        tech: ["React", "Tailwind CSS", "Class Variance Authority"],
        github: "https://github.com/Farhodoff/components-main",
        demo: "https://components-main-nu.vercel.app/",
        image: "/images/components_library.png"
    }
];

export const FEATURES = [
    {
        title: "Latest Blog Post",
        icon: BookOpen,
        description: "Check out my latest thoughts on software engineering and web development.",
        linkText: "Read My Blog",
        linkHref: "/blogs"
    },
    {
        title: "Open Source",
        icon: Github,
        description: "I love contributing to open source. Check out my GitHub profile.",
        linkText: "View GitHub",
        linkHref: "https://github.com/Farhodoff/"
    },
    {
        title: "YouTube Channel",
        icon: Youtube,
        description: "I share tutorials and tech reviews. Subscribe to stay updated.",
        linkText: "Coming Soon...",
        linkHref: "#"
    }
];
