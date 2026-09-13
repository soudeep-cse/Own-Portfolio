"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap } from "lucide-react";
import { bio, siteConfig } from "@/data/site";
import { education } from "@/data/education";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading eyebrow="About" title="A little about me" />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start"
      >
        <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
          <div className="relative h-72 w-60 overflow-hidden rounded-3xl border border-glass-border glass-shadow sm:h-80 sm:w-64">
            <Image
              src={siteConfig.photoUrl}
              alt={siteConfig.name}
              fill
              sizes="(max-width: 640px) 240px, 256px"
              className="object-cover"
              priority
            />
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-accent opacity-20 blur-2xl" />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {bio}
          </p>

          <GlassCard className="flex items-start gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold">{education[0].institution}</p>
              <p className="text-sm text-muted-foreground">
                {education[0].degree} · {education[0].period}
              </p>
              <p className="mt-1 text-sm font-medium text-gradient">
                {education[0].detail}
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
