import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectPlaceholderProps {
  title: string;
  slot?: 1 | 2;
  hint?: string;
  className?: string;
}

export function ProjectPlaceholder({
  title,
  slot,
  hint,
  className,
}: ProjectPlaceholderProps) {
  const slotLabel = slot ? `Screenshot ${slot}` : "Screenshot";
  const detail = hint ?? title;

  return (
    <div
      className={cn(
        "flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border/60 bg-background-secondary/80 px-4 text-center",
        slot === 2 && "aspect-[16/10]",
        className,
      )}
      aria-hidden="true"
    >
      <ImageIcon className="h-7 w-7 text-foreground-muted/70" />
      <p className="text-xs font-medium uppercase tracking-wide text-accent/80">
        {slotLabel}
      </p>
      <p className="max-w-[90%] text-sm text-foreground-muted">{detail}</p>
      {slot && (
        <p className="text-[0.65rem] text-foreground-muted/70">
          Add image to public/projects/
        </p>
      )}
    </div>
  );
}
