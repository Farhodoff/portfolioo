import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function ThemeToggle({ className }) {
    const [theme, setTheme] = useState("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(systemTheme);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const root = window.document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                className
            )}
            aria-label="Toggle theme"
        >
            {mounted && (theme === "dark" ? (
                <Sun className="h-4 w-4 transition-all" />
            ) : (
                <Moon className="h-4 w-4 transition-all" />
            ))}
            {!mounted && <Sun className="h-4 w-4 transition-all" />}
        </button>
    );
}
