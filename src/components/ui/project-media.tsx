import { useState } from "react";
import { motion } from "framer-motion";
import type { ProjectImage } from "@/data/projects";
import { ProjectPlaceholder } from "@/components/ui/project-placeholder";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  projectTitle: string;
  images: ProjectImage[];
}

function ProjectImageSlot({
  image,
  projectTitle,
  slot,
  featured,
}: {
  image: ProjectImage;
  projectTitle: string;
  slot: 1 | 2;
  featured?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const reducedMotion = useMotionPreference();
  const showPlaceholder = !image.src || failed;

  return (
    <motion.div
      className={cn(
        "overflow-hidden rounded-xl ring-1 ring-border/40",
        "transition-shadow duration-300 group-hover:ring-accent/25",
        featured && "shadow-lg shadow-black/20",
      )}
      whileHover={reducedMotion || showPlaceholder ? {} : { scale: 1.02 }}
      transition={{ duration: 0.35 }}
    >
      {showPlaceholder ? (
        <ProjectPlaceholder
          title={projectTitle}
          slot={slot}
          hint={image.label}
        />
      ) : (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={cn(
            "w-full object-cover object-top",
            featured ? "aspect-video" : "aspect-[16/10]",
          )}
          onError={() => setFailed(true)}
        />
      )}
    </motion.div>
  );
}

export function ProjectMedia({ projectTitle, images }: ProjectMediaProps) {
  return (
    <div className="flex flex-col gap-3">
      <ProjectImageSlot
        image={images[0]}
        projectTitle={projectTitle}
        slot={1}
        featured
      />
      {images[1] && (
        <ProjectImageSlot
          image={images[1]}
          projectTitle={projectTitle}
          slot={2}
        />
      )}
    </div>
  );
}
