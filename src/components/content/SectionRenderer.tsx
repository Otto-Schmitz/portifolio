"use client";

import type { ContentSectionId } from "./types";
import { About } from "./About";
import { Career } from "./Career";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export type SectionVariant = "terminal" | "gui";

const COMPONENTS: Record<
  ContentSectionId,
  (props: { variant: SectionVariant }) => React.JSX.Element
> = {
  about: (p) => <About variant={p.variant} />,
  career: (p) => <Career variant={p.variant} />,
  skills: (p) => <Skills variant={p.variant} />,
  projects: (p) => <Projects variant={p.variant} />,
  contact: (p) => <Contact variant={p.variant} />,
};

type SectionRendererProps = {
  sectionId: ContentSectionId;
  variant?: SectionVariant;
};

export function SectionRenderer({ sectionId, variant = "terminal" }: SectionRendererProps) {
  const Component = COMPONENTS[sectionId];
  return Component ? <Component variant={variant} /> : <span>Unknown section: {sectionId}</span>;
}
