"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, GraduationCap as Scholar, MapPin } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  scholar: Scholar,
  mail: Mail,
  phone: Phone,
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Open to full-time roles, research collaborations, and freelance AI engineering work."
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.3fr]"
      >
        <motion.div variants={fadeInUp} className="flex flex-col gap-4">
          <GlassCard className="flex flex-col gap-4 p-6">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-gradient"
            >
              <Mail className="h-4 w-4 shrink-0 text-accent-via" />
              {siteConfig.email}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
              className="flex items-center gap-3 text-sm font-medium transition-colors hover:text-gradient"
            >
              <Phone className="h-4 w-4 shrink-0 text-accent-via" />
              {siteConfig.phone}
            </a>
            <div className="flex items-center gap-3 text-sm font-medium">
              <MapPin className="h-4 w-4 shrink-0 text-accent-via" />
              {siteConfig.location}
            </div>
          </GlassCard>

          <GlassCard className="flex flex-col gap-3 p-6">
            <p className="text-sm font-semibold text-muted-foreground">Find me on</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-glass-border bg-glass transition-colors hover:border-accent-via/40 hover:text-gradient"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <GlassCard className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-glass-border bg-glass px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-via/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-glass-border bg-glass px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-via/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl border border-glass-border bg-glass px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent-via/50"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-via/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
