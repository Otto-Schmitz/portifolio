"use client";

import { skillsData } from "@/data/skills";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    label: "text-zinc-500 text-xs",
    list: "text-zinc-300 text-sm",
  },
  gui: {
    heading: "text-zinc-900 font-semibold text-lg",
    label: "text-zinc-500 text-sm",
    list: "text-zinc-700",
  },
};

export function Skills({ variant }: { variant: SectionVariant }) {
  const s = styles[variant];
  return (
    <div className="space-y-4">
      <h3 className={s.heading}>Skills</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <p className={s.label}>Backend</p>
          <p className={s.list}>{skillsData.backend.join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>Databases</p>
          <p className={s.list}>{skillsData.databases.join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>Tools</p>
          <p className={s.list}>{skillsData.tools.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
