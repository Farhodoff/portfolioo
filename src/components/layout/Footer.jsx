export default function Footer() {
    return (
        <footer className="border-t border-border/50 py-8 mt-auto backdrop-blur-sm bg-background/50">
            <div className="container flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:text-left">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Farhod Soyilov. All rights reserved.
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
