"use client";

import { Finder } from "@/components/gui/Finder";
import { AppDock } from "@/components/shared/AppDock";

export function MacOSLayout() {

  return (
    <div className="min-h-screen bg-[#ececec] flex flex-col">
      {/* Barra de menu estilo macOS */}
      <header
        className="h-6 flex items-center justify-center gap-6 bg-black/5 backdrop-blur-md border-b border-black/10 px-4 text-sm text-zinc-700"
        role="banner"
      >
        <span className="font-semibold">Finder</span>
        <span>Arquivo</span>
        <span>Editar</span>
        <span>Exibir</span>
        <span>Ir</span>
        <span>Janela</span>
        <span>Ajuda</span>
      </header>
      {/* Área do desktop / conteúdo */}
      <main className="flex-1 flex items-center justify-center p-6" role="main">
        <Finder />
      </main>
      <AppDock />
    </div>
  );
}
