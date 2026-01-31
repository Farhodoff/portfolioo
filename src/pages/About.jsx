import GlassCard from "../components/ui/GlassCard";
import Button from "../components/ui/Button";

export default function About() {
    return (
        <div className="container py-10 md:py-20 max-w-3xl">
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
                <h3 className="text-xl font-bold mb-4">Experience</h3>
                <div className="border-l-2 border-border pl-4 space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></div>
                        <h4 className="font-semibold text-foreground">Software Engineer</h4>
                        <p className="text-sm text-muted-foreground mb-2">2023 - Present</p>
                        <p className="text-sm text-muted-foreground">Building awesome things.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-border ring-4 ring-background"></div>
                        <h4 className="font-semibold text-foreground">Junior Developer</h4>
                        <p className="text-sm text-muted-foreground mb-2">2021 - 2023</p>
                        <p className="text-sm text-muted-foreground">Learning and growing.</p>
                    </div>
                </div>
            </GlassCard>
        </div>
    );
}
