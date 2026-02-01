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
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "YouTube", url: "https://youtube.com", icon: Youtube },
    { name: "Email", url: "mailto:soyilovfarhod157@gmail.com", icon: Mail },
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
        linkHref: "https://github.com"
    },
    {
        title: "YouTube Channel",
        icon: Youtube,
        description: "I share tutorials and tech reviews. Subscribe to stay updated.",
        linkText: "Watch Videos",
        linkHref: "https://youtube.com"
    }
];
