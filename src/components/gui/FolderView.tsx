"use client";

import type { ContentSectionId } from "@/components/content/types";

const FOLDER_LABELS: Record<ContentSectionId, string> = {
  about: "Sobre",
  career: "Carreira",
  skills: "Skills",
  projects: "Projetos",
  contact: "Contato",
};

const SECTIONS: ContentSectionId[] = [
  "about",
  "career",
  "skills",
  "projects",
  "contact",
];

type FolderViewProps = {
  onOpenFolder: (id: ContentSectionId) => void;
  openSection: ContentSectionId | null;
};

export function FolderView({ onOpenFolder, openSection }: FolderViewProps) {
  return (
    <ul className="space-y-0.5" role="list">
      {SECTIONS.map((id) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onOpenFolder(id)}
            className={`w-full flex items-center gap-2 px-2 py-2 rounded-md text-left text-sm transition-colors ${
              openSection === id
                ? "bg-blue-100 text-blue-800"
                : "text-zinc-700 hover:bg-zinc-200"
            }`}
            aria-current={openSection === id ? "true" : undefined}
          >
            <span className="text-lg" aria-hidden>
              📁
            </span>
            {FOLDER_LABELS[id]}
          </button>
        </li>
      ))}
    </ul>
  );
}
