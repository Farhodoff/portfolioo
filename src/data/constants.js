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
        title: "Maydonuz - Sport E-Commerce",
        description: "A comprehensive e-commerce platform for sport equipment booking and sales.",
        tech: ["React", "Node.js", "MongoDB", "Redux"],
        github: "https://github.com/Farhodoff/maydonuz.uz",
        demo: "https://maydonuz.netlify.app/",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
        title: "Task Planner App",
        description: "Real-time task collaboration tool with drag-and-drop interface and team features.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
        github: "https://github.com/Farhodoff/task_planner",
        demo: "https://task-planner-tau.vercel.app/",
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80"
    },
    {
        title: "UI Components Library",
        description: "A collection of reusable, accessible, and modern React components built with Tailwind CSS.",
        tech: ["React", "Tailwind CSS", "Class Variance Authority"],
        github: "https://github.com/Farhodoff/components-main",
        demo: "https://components-main-nu.vercel.app/",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
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
