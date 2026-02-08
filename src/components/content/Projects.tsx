"use client";

import { projectsData } from "@/data/projects";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    name: "text-zinc-300",
    desc: "text-zinc-400 text-sm",
    tech: "text-zinc-500 text-xs",
  },
  gui: {
    heading: "text-zinc-900 font-semibold text-lg",
    name: "text-zinc-800 font-medium",
    desc: "text-zinc-600 text-sm",
    tech: "text-zinc-500 text-xs",
  },
};

export function Projects({ variant }: { variant: SectionVariant }) {
  const s = styles[variant];
  return (
    <div className="space-y-4">
      <h3 className={s.heading}>Projetos</h3>
      <ul className="space-y-3 list-none">
        {projectsData.items.map((project, i) => (
          <li key={i} className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800/50">
            <p className={s.name}>{project.name}</p>
            <p className={s.desc}>{project.description}</p>
            <p className={s.tech}>{project.tech.join(" · ")}</p>
            {project.link && (
              <a
                href={project.link}
                className="text-green-500 hover:underline text-sm mt-1 inline-block"
              >
                Ver projeto
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
