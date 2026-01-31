import { cn } from "../../lib/utils";

export default function GlassCard({ children, className, hoverEffect = false, ...props }) {
    return (
        <div
            className={cn(
                "glass rounded-xl p-6 transition-all duration-300",
                hoverEffect && "hover:-translate-y-1 hover:shadow-lg",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
