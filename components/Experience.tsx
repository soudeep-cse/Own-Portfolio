"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Production AI systems and applied research, side by side."
      />

      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative pl-8 sm:pl-10"
      >
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-from via-accent-via to-accent-to opacity-40 sm:left-[15px]" />

        <div className="flex flex-col gap-8">
          {experience.map((entry) => (
            <motion.div key={entry.company} variants={fadeInUp} className="relative">
              <div className="absolute -left-8 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-accent ring-4 ring-background sm:-left-10 sm:h-8 sm:w-8">
                <Briefcase className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5" />
              </div>

              <GlassCard hoverable className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold">{entry.role}</h3>
                    <p className="text-sm font-medium text-gradient">
                      {entry.company}
                    </p>
                  </div>
                  {entry.current && (
                    <span className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-semibold text-muted-foreground">
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span>{entry.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {entry.location}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-via" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
