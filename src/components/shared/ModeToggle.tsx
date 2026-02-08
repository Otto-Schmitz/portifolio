"use client";

import { useAppMode } from "@/context/AppModeContext";

function KeyboardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
      <path d="M6 8h.001M10 8h.001M14 8h.001M18 8h.001M8 12h.001M12 12h.001M16 12h.001M7 16h10" />
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function ModeToggle() {
  const { mode, setMode } = useAppMode();

  return (
    <div
      className="inline-flex rounded-xl bg-zinc-200/90 dark:bg-zinc-700/80 p-1 shadow-inner border border-zinc-300/80 dark:border-zinc-600"
      role="group"
      aria-label="Alternar entre Terminal e interface gráfica"
    >
      <button
        type="button"
        onClick={() => setMode("terminal")}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:ring-offset-zinc-200 dark:focus:ring-offset-zinc-700 ${
          mode === "terminal"
            ? "bg-blue-500 text-white shadow"
            : "bg-zinc-400/70 dark:bg-zinc-600 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-500/70 dark:hover:bg-zinc-500"
        }`}
        aria-label="Terminal"
        aria-pressed={mode === "terminal"}
        title="Terminal"
      >
        <KeyboardIcon className={mode === "terminal" ? "text-white" : ""} />
      </button>
      <button
        type="button"
        onClick={() => setMode("gui")}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:ring-offset-zinc-200 dark:focus:ring-offset-zinc-700 ${
          mode === "gui"
            ? "bg-blue-500 text-white shadow"
            : "bg-zinc-400/70 dark:bg-zinc-600 text-amber-600 dark:text-amber-400 hover:bg-zinc-500/70 dark:hover:bg-zinc-500"
        }`}
        aria-label="Interface gráfica (Finder)"
        aria-pressed={mode === "gui"}
        title="Interface gráfica"
      >
        <FolderIcon className={mode === "gui" ? "text-white" : "text-amber-500 dark:text-amber-400"} />
      </button>
    </div>
  );
}
