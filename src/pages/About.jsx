import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";
import SEO from "../components/ui/SEO";

import { SKILLS, STATS, SOCIAL_LINKS, FEATURES, EXPERIENCE } from "../data/constants";

export default function About() {
    return (
        <div className="container py-10 md:py-20 max-w-3xl">
            <SEO
                title="About Me - Farhod Soyilov"
                description="Learn more about Farhod Soyilov, his experience, skills, and journey as a Software Engineer."
            />
            {/* Header */}
            <div className="flex flex-col items-center mb-12 text-center">
                <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-background shadow-lg mb-6">
                    <img
                        src="/profile.jpg"
                        alt="Profile"
                        className="h-full w-full object-cover scale-125 -rotate-3"
                        style={{ objectPosition: "50% 30%" }}
                    />
                </div>
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-muted-foreground text-lg">
                    I'm a passionate Software Engineer based in Uzbekistan.
                </p>
            </div>

            <GlassCard className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">👋 Hello there!</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                    Welcome to my digital garden. I'm currently working on building scalable web applications.
                    This page is currently being updated with my latest experiences and skills.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Stay tuned for more updates!
                </p>
            </GlassCard>

            <GlassCard className="p-8">
                <h3 className="text-xl font-bold mb-6">Experience</h3>
                <div className="border-l-2 border-border pl-8 space-y-8 relative">
                    {EXPERIENCE.map((job, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-background border-2 border-primary ring-4 ring-background"></div>
                            <h4 className="text-lg font-bold text-foreground">{job.role}</h4>
                            <p className="text-primary font-medium text-sm mb-1">{job.company} • {job.period}</p>
                            <p className="text-muted-foreground text-base leading-relaxed">{job.description}</p>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
    );
}
