"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";
import type { Project } from "@/data/projects";
import { fadeInUp } from "@/lib/animations";
import { GlassCard } from "./GlassCard";
import { GithubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <GlassCard
        hoverable
        strong={project.featured}
        className={project.featured ? "flex h-full flex-col p-7" : "flex h-full flex-col p-6"}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className={project.featured ? "text-xl font-bold" : "text-lg font-bold"}>
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-sm font-medium text-gradient">{project.subtitle}</p>
            )}
          </div>
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex shrink-0 gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-glass-border bg-glass transition-colors hover:border-accent-via/40"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-glass-border bg-glass transition-colors hover:border-accent-via/40"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>

        <div className="mt-3 flex flex-col gap-2">
          {project.description.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-muted-foreground">
              {line}
            </p>
          ))}
        </div>

        {project.metric && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gradient">
            <TrendingUp className="h-4 w-4 shrink-0" />
            {project.metric}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-glass-border bg-glass px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
