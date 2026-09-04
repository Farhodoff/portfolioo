export default function Footer() {
    return (
        <footer className="border-t border-border/50 py-6 mt-auto backdrop-blur-sm bg-background/50">
            <div className="container flex items-center justify-center text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Farhod Soyilov. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
