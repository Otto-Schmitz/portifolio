"use client";

import { useState } from "react";
import { WindowChrome } from "@/components/gui/WindowChrome";
import { FolderView } from "@/components/gui/FolderView";
import { SectionRenderer } from "@/components/content/SectionRenderer";
import type { ContentSectionId } from "@/components/content/types";

export function Finder() {
  const [openSection, setOpenSection] = useState<ContentSectionId | null>(null);

  return (
    <div className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden bg-white border border-black/10">
      <WindowChrome title="Portfolio" />
      <div className="flex min-h-[400px]">
        <aside
          className="w-48 border-r border-zinc-200 bg-zinc-50/80 p-2"
          aria-label="Sidebar do Finder"
        >
          <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider px-2 py-1">
            Favoritos
          </p>
          <FolderView
            onOpenFolder={setOpenSection}
            openSection={openSection}
          />
        </aside>
        <section
          className="flex-1 p-4 bg-white min-h-[320px] overflow-auto"
          aria-label="Conteúdo"
        >
          {openSection ? (
            <FolderContent sectionId={openSection} />
          ) : (
            <p className="text-zinc-400 text-sm">
              Selecione uma pasta na barra lateral ou clique em um ícone.
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

function FolderContent({ sectionId }: { sectionId: ContentSectionId }) {
  return (
    <div className="text-zinc-700">
      <SectionRenderer sectionId={sectionId} variant="gui" />
    </div>
  );
}
