import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-card text-foreground-muted border border-border",
        variant === "outline" && "border border-border text-foreground-muted",
        variant === "accent" && "bg-accent/10 text-accent border border-accent/25 hover:bg-accent/20 hover:border-accent/40 transition-colors",
        className,
      )}
      {...props}
    />
  );
}
