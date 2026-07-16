import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import SEO from "../components/ui/SEO";
import { PROJECTS } from "../data/constants";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="container py-10 md:py-20 overflow-x-hidden">
            <SEO
                title="Projects - Farhod Soyilov"
                description="Showcase of my latest software engineering projects and open source contributions."
            />

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h1 className="text-4xl font-bold mb-4">My Projects</h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Here are some of the projects I've worked on. Each one presented its own unique challenges and learning opportunities.
                </p>
            </motion.div>

            <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        className="h-full"
                    >
                        <GlassCard className="overflow-hidden group h-full flex flex-col p-0">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                                        aria-label="View Source Code"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-2 bg-background rounded-full hover:scale-110 transition-transform"
                                        aria-label="View Live Demo"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                                    {project.description}
                                    {project.note && (
                                        <span className="block mt-2 text-xs text-yellow-500/80 italic">
                                            {project.note}
                                        </span>
                                    )}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded-md bg-accent/50 text-accent-foreground font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-16 text-center"
            >
                <p className="text-muted-foreground mb-4">Want to see more?</p>
                <Button
                    variant="outline"
                    onClick={() => window.open("https://github.com/Farhodoff", "_blank")}
                >
                    <Github className="mr-2 h-4 w-4" /> View GitHub Profile
                </Button>
            </motion.div>
        </div>
    );
}
