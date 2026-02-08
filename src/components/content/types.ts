export const SECTIONS = [
  "about",
  "career",
  "skills",
  "projects",
  "contact",
] as const;

export type ContentSectionId = (typeof SECTIONS)[number];

export function isContentSectionId(s: string): s is ContentSectionId {
  return SECTIONS.includes(s as ContentSectionId);
}
