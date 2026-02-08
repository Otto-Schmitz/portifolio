"use client";

export function WindowChrome({ title }: { title: string }) {
  return (
    <div
      className="h-10 flex items-center gap-2 px-3 bg-zinc-100 border-b border-zinc-200 rounded-t-xl"
      role="presentation"
    >
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden />
      </div>
      <span className="flex-1 text-center text-sm font-medium text-zinc-600 -ml-12">
        {title}
      </span>
    </div>
  );
}
