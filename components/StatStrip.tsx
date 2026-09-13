"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/site";
import { staggerContainer, fadeInUp, viewportOnce } from "@/lib/animations";
import { CountUp } from "./CountUp";
import { GlassCard } from "./GlassCard";

export function StatStrip() {
  return (
    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-1 gap-3 sm:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div key={stat.label} variants={fadeInUp}>
          <GlassCard className="px-6 py-4 text-center sm:text-left">
            <div className="text-2xl font-bold text-gradient sm:text-3xl">
              {stat.isText ? (
                stat.textValue
              ) : (
                <>
                  <CountUp value={stat.value} />
                  {stat.suffix}
                </>
              )}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {stat.label}
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
