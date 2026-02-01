import { Github, Linkedin, Youtube, Mail, Code, Terminal, BookOpen, Layers } from "lucide-react";

export const SKILLS = [
    "React", "Next.js", "TypeScript", "Node.js", "Python",
    "Django", "MongoDB", "PostgreSQL", "Firebase",
    "Supabase", "AWS", "Docker", "Kubernetes"
];

export const STATS = [
    // { label: "Years Experience", value: "0", icon: Terminal },
    // { label: "Projects Completed", value: "0", icon: Code },
    // { label: "Blog Posts", value: "0", icon: BookOpen },
    // { label: "Technologies", value: "0", icon: Layers },
];

export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/Farhodoff/", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/farhod-soyilov/", icon: Linkedin },
    { name: "YouTube", comment: "Coming soon..." },//url: "https://youtube.com", icon: Youtube },
    { name: "Email", url: "mailto:soyilovfarhod157@gmail.com", icon: Mail },
];

export const PROJECTS = [
    {
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with STRIPE integration, user authentication, and admin dashboard.",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        github: "https://github.com/Farhodoff",
        demo: "https://github.com/Farhodoff",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
        title: "Task Management App",
        description: "Real-time task collaboration tool with drag-and-drop interface and team features.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
        github: "https://github.com/Farhodoff",
        demo: "https://github.com/Farhodoff",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
    },
    {
        title: "AI Image Generator",
        description: "SaaS application that generates images from text using OpenAI's DALL-E API.",
        tech: ["React", "Express", "OpenAI API", "Stripe"],
        github: "https://github.com/Farhodoff",
        demo: "https://github.com/Farhodoff",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
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
        linkText: "Watch Videos",
        linkHref: "https://youtube.com"
    }
];
