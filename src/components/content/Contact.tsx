"use client";

import { contactData } from "@/data/contact";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    link: "text-zinc-300 text-sm hover:text-green-400",
  },
  gui: {
    heading: "text-zinc-900 font-semibold text-lg",
    link: "text-blue-600 hover:underline text-sm",
  },
};

export function Contact({ variant }: { variant: SectionVariant }) {
  const s = styles[variant];
  return (
    <div className="space-y-3">
      <h3 className={s.heading}>Contato</h3>
      <ul className="space-y-1 list-none">
        <li>
          <a href={`mailto:${contactData.email}`} className={s.link}>
            {contactData.email}
          </a>
        </li>
        <li>
          <a href={contactData.github} target="_blank" rel="noopener noreferrer" className={s.link}>
            GitHub
          </a>
        </li>
        <li>
          <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className={s.link}>
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
