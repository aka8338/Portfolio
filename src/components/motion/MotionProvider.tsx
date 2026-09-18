import type { ReactNode } from "react";
import { createContext, useContext } from "react";
import { MotionConfig } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const MotionPreferenceContext = createContext(false);

export function useMotionPreference() {
  return useContext(MotionPreferenceContext);
}

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const reducedMotion = useReducedMotion();

  return (
    <MotionPreferenceContext.Provider value={reducedMotion}>
      <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
        {children}
      </MotionConfig>
    </MotionPreferenceContext.Provider>
  );
}
