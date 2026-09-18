import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, sectionIds } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useTheme } from "@/hooks/useTheme";
import { useMotionPreference } from "@/components/motion/MotionProvider";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(sectionIds);
  const scrolled = useScrollPosition();
  const { isDark, toggleTheme } = useTheme();
  const reducedMotion = useMotionPreference();

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/60 bg-background/85 shadow-sm shadow-accent/5 backdrop-blur-nav"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-content items-center justify-between px-6 md:px-8"
        aria-label="Main navigation"
      >
        <motion.a
          href="#hero"
          className="text-sm font-bold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          whileHover={reducedMotion ? {} : { scale: 1.05 }}
          whileTap={reducedMotion ? {} : { scale: 0.95 }}
        >
          <span className="text-gradient">AB</span>
        </motion.a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const id = item.href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    isActive
                      ? "text-accent"
                      : "text-foreground-muted hover:text-foreground",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
          >
            <motion.div
              ref={drawerRef}
              id="mobile-nav"
              className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-border bg-background-secondary p-6 shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">
                  Menu
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const id = item.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: reducedMotion ? 0 : index * 0.05,
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={handleNavClick}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "bg-accent/10 text-accent"
                            : "text-foreground-muted hover:bg-card hover:text-foreground",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
