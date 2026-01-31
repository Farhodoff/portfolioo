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
        { name: "Blog", path: "/blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "border-b bg-background/80 backdrop-blur-md"
                    : "bg-transparent"
            )}
        >
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

                    <div className="flex items-center gap-2 border-l pl-4 ml-2 border-border/50">
                        <ThemeToggle />
                        <div className="relative group">
                            <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-accent transition-colors">
                                <MoreHorizontal className="h-4 w-4" />
                            </button>
                            <div className="absolute right-0 top-full mt-2 w-48 rounded-md border bg-popover p-2 shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                                <div className="grid grid-cols-4 gap-2">
                                    <a href="https://github.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"><Github className="h-4 w-4" /></a>
                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"><Linkedin className="h-4 w-4" /></a>
                                    <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"><Youtube className="h-4 w-4" /></a>
                                    <a href="mailto:soyilovfarhod157@gmail.com" className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent"><Mail className="h-4 w-4" /></a>
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
