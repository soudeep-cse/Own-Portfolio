"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { publicationTabs, publications, type PublicationStatus } from "@/data/publications";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export function Research() {
  const [active, setActive] = useState<PublicationStatus>("published");
  const filtered = publications.filter((pub) => pub.status === active);

  return (
    <section id="research" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Research"
        title="Publications"
        description="Peer-reviewed work spanning GNNs, transformers, VLMs, and explainable AI."
      />

      <div className="relative mb-8 flex flex-wrap gap-1 rounded-full border border-glass-border bg-glass p-1 backdrop-blur-md sm:inline-flex">
        {publicationTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={cn(
              "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === tab.key
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {active === tab.key && (
              <motion.span
                layoutId="pub-tab-indicator"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-accent"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            {tab.label}
            <span className="ml-1.5 text-xs opacity-80">
              ({publications.filter((p) => p.status === tab.key).length})
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="flex flex-col gap-4"
        >
          {filtered.map((pub) => (
            <motion.div key={pub.title} variants={fadeInUp}>
              <GlassCard hoverable className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="max-w-2xl text-sm font-semibold leading-relaxed sm:text-base">
                    {pub.title}
                  </h3>
                  {pub.tag && (
                    <span className="shrink-0 rounded-full bg-gradient-accent px-3 py-1 text-xs font-bold text-white">
                      {pub.tag}
                    </span>
                  )}
                </div>
                {pub.venue && (
                  <p className="mt-2 text-sm font-medium text-gradient">{pub.venue}</p>
                )}
                {pub.contribution && (
                  <p className="mt-2 text-sm text-muted-foreground">{pub.contribution}</p>
                )}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-gradient"
                  >
                    View Paper
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
