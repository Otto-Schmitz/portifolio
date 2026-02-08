"use client";

import { aboutData } from "@/data/about";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    body: "text-zinc-300 text-sm",
    accent: "text-zinc-400",
  },
  gui: {
    heading: "text-zinc-900 font-semibold text-lg",
    body: "text-zinc-600",
    accent: "text-zinc-500",
  },
};

export function About({ variant }: { variant: SectionVariant }) {
  const s = styles[variant];
  return (
    <div className="space-y-2">
      <h3 className={s.heading}>{aboutData.name}</h3>
      <p className={s.accent}>{aboutData.headline}</p>
      <p className={s.body}>{aboutData.bio}</p>
    </div>
  );
}
