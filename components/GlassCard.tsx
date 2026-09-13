"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  strong?: boolean;
  hoverable?: boolean;
  className?: string;
}

export function GlassCard({
  strong = false,
  hoverable = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-glass-border glass-shadow backdrop-blur-md",
        strong ? "bg-glass-strong" : "bg-glass",
        hoverable &&
          "transition-[transform,box-shadow,border-color] duration-300 hover:border-accent-via/40",
        className
      )}
      whileHover={
        hoverable
          ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } }
          : undefined
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
