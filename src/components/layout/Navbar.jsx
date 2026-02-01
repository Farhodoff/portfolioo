import { Link, NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import ThemeToggle from "../ui/ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X, MoreHorizontal, Github, Linkedin, Youtube, Mail } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: "Blog", path: "/blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    // Styles
    const headerClass = cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
            ? "border-b bg-background/80 backdrop-blur-md"
            : "bg-transparent"
    );

    const navLinkClass = ({ isActive }) =>
        cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-primary" : "text-muted-foreground"
        );

    const socialDropdownClass = "absolute right-0 top-full mt-2 w-48 rounded-md border bg-popover p-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0";

    const socialIconClass = "flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent";
    const menuIconClass = "flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors";

    return (
        <header className={headerClass}>
            <div className="container flex h-16 items-center justify-between">
                <Link to="/" className="text-xl font-bold tracking-tight">
                    Farhod Soyilov
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6 items-center">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={navLinkClass}
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <div className="flex items-center gap-2 border-l pl-4 ml-2 border-border/50">
                        <ThemeToggle />
                        <div className="relative group">
                            <ThemeToggle className="hidden" /> {/* Temp fix for spacing or structural if needed, but likely keeping structure same */}

                            <button aria-label="More options" className={menuIconClass}>
                                <MoreHorizontal className="h-4 w-4" />
                            </button>
                            <div className={socialDropdownClass}>
                                <div className="grid grid-cols-4 gap-2">
                                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className={socialIconClass}><Github className="h-4 w-4" /></a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={socialIconClass}><Linkedin className="h-4 w-4" /></a>
                                    <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className={socialIconClass}><Youtube className="h-4 w-4" /></a>
                                    <a href="mailto:soyilovfarhod157@gmail.com" aria-label="Email" className={socialIconClass}><Mail className="h-4 w-4" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle mobile menu"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-accent"
                    >
                        {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b bg-background p-4 animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        isActive ? "text-primary" : "text-muted-foreground"
                                    )
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
