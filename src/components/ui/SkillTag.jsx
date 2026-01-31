import { cn } from "../../lib/utils";

export default function SkillTag({ name }) {
    return (
        <span className={cn(
            "text-xs px-3 py-1 rounded-full cursor-default transition-transform hover:scale-105",
            "glass border border-white/10 dark:bg-white/5 bg-black/5 text-foreground"
        )}>
            {name}
        </span>
    );
}
