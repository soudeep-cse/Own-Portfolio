"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Tools & technologies"
        description="The stack I use to design, build, and ship AI systems end-to-end."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div key={group.category} variants={fadeInUp}>
            <GlassCard hoverable className="h-full p-5">
              <h3 className="mb-3 text-sm font-semibold text-gradient">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
