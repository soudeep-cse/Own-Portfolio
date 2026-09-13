import { GraduationCap as Scholar, Mail, Phone } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./icons";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  scholar: Scholar,
  mail: Mail,
  phone: Phone,
};

export function Footer() {
  return (
    <footer className="border-t border-glass-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-glass-border bg-glass transition-colors hover:border-accent-via/40"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
