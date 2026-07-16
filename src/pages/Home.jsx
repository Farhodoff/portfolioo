import Button from "../components/ui/Button";
import GlassCard from "../components/ui/GlassCard";
import SkillTag from "../components/ui/SkillTag";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";
import { SKILLS, STATS, SOCIAL_LINKS, FEATURES } from "../data/constants";
import SEO from "../components/ui/SEO";
import { motion } from "framer-motion";

export default function Home() {
    const socialLinkClass = "p-2 rounded-full glass hover:scale-110 transition-transform";

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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="flex flex-col gap-16 py-10 md:py-20 overflow-x-hidden">
            <SEO />
            {/* Hero Section */}
            <motion.section 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container flex flex-col items-center text-center"
            >
                <motion.div variants={itemVariants} className="relative mb-8">
                    <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                        <img
                            src="/profile.jpg"
                            alt="Profile"
                            className="h-full w-full object-cover scale-125"
                            style={{ objectPosition: "50% 20%" }}
                        />
                    </div>
                    <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-background"></div>
                </motion.div>

                <motion.h1 
                    variants={itemVariants}
                    className="mb-2 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-hero-gradient-light dark:bg-hero-gradient-dark"
                >
                    Farhod Soyilov
                </motion.h1>
                
                <motion.p 
                    variants={itemVariants}
                    className="mb-6 text-xl font-medium text-foreground"
                >
                    Software Engineer & Tech Enthusiast
                </motion.p>
                
                <motion.p 
                    variants={itemVariants}
                    className="mb-10 max-w-2xl text-muted-foreground text-lg leading-relaxed"
                >
                    Passionate about building scalable web applications and solving complex problems.
                    I specialize in full-stack development using modern technologies.
                </motion.p>

                <motion.div 
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl"
                >
                    {SKILLS.map(skill => <SkillTag key={skill} name={skill} />)}
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="flex gap-4 mb-10"
                >
                    <Button href="/contact" size="lg">Contact Me</Button>
                    <Button href="/about" variant="secondary" size="lg">About Me</Button>
                </motion.div>

                <motion.div 
                    variants={itemVariants}
                    className="flex gap-4"
                >
                    {SOCIAL_LINKS.map((social) => {
                        if (!social.url || !social.icon) return null;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                aria-label={social.name}
                                target={social.url.startsWith("http") ? "_blank" : undefined}
                                rel={social.url.startsWith("http") ? "noreferrer" : undefined}
                                className={socialLinkClass}
                            >
                                <social.icon className="h-5 w-5 text-foreground" />
                            </a>
                        );
                    })}
                </motion.div>
            </motion.section>

            {/* Statistics Section */}
            {STATS.length > 0 && (
                <motion.section 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="container"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map((stat, i) => (
                            <GlassCard key={i} hoverEffect className="flex flex-col items-center justify-center text-center">
                                <div className="text-foreground">
                                    <stat.icon className="h-6 w-6 mb-2" />
                                </div>
                                <span className="text-3xl font-bold text-foreground mb-1">{stat.value}</span>
                                <span className="text-sm text-muted-foreground">{stat.label}</span>
                            </GlassCard>
                        ))}
                    </div>
                </motion.section>
            )}

            {/* What I'm Up To Section */}
            <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={sectionVariants}
                className="container pb-10"
            >
                <h2 className="text-3xl font-bold text-center mb-10">What I'm Up To</h2>
                <motion.div 
                    variants={gridContainerVariants}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {FEATURES.map((item, i) => (
                        <motion.div key={i} variants={itemVariants} className="h-full">
                            <GlassCard hoverEffect className="flex flex-col h-full">
                                <div className="mb-4">
                                    <item.icon className="h-5 w-5 mb-2 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-6 flex-grow">{item.description}</p>
                                <a href={item.linkHref} className="inline-flex items-center text-sm font-medium hover:underline">
                                    {item.linkText} <span className="ml-1">→</span>
                                </a>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}
