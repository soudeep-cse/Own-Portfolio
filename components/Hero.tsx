"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { StatStrip } from "./StatStrip";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob-1 absolute -left-32 top-10 h-80 w-80 rounded-full bg-accent-from/30 blur-3xl sm:h-[26rem] sm:w-[26rem]" />
        <div className="animate-blob-2 absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent-to/25 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex w-full max-w-4xl flex-col items-start px-5 sm:px-8"
      >
        <motion.p
          variants={fadeInUp}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          className="mt-3 h-10 text-2xl font-bold text-gradient sm:text-3xl"
        >
          <TypeAnimation
            sequence={siteConfig.roles.flatMap((role) => [role, 2000])}
            wrapper="span"
            speed={50}
            deletionSpeed={65}
            repeat={Infinity}
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-via/25 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" />
            Contact Me
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-6 py-3 text-sm font-semibold backdrop-blur-md transition-transform hover:scale-[1.03] hover:border-accent-via/40 active:scale-[0.98]"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-14 w-full">
          <StatStrip />
        </motion.div>
      </motion.div>
    </section>
  );
}
