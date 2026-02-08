"use client";

import type { ReactNode } from "react";
import type { ContentSectionId } from "@/components/content/types";
import type { TerminalTheme } from "@/components/terminal/theme";

type Line = {
  id: string;
  type: "command" | "output";
  content: string | ReactNode;
  dir?: ContentSectionId | "~";
};

type TerminalOutputProps = {
  lines: Line[];
  currentDir: ContentSectionId | "~";
  theme: TerminalTheme;
};

function promptForDir(dir: ContentSectionId | "~"): string {
  return dir === "~" ? "~ $ " : `${dir} $ `;
}

export function TerminalOutput({ lines, currentDir, theme }: TerminalOutputProps) {
  return (
    <div className="terminal-output font-mono text-sm" aria-live="polite">
      {lines.map((line) => (
        <div key={line.id} className="mb-1">
          {line.type === "command" && (
            <div className="flex flex-wrap items-baseline gap-1">
              <span className="shrink-0" style={{ color: theme.prompt }}>
                {promptForDir(line.dir ?? currentDir)}
              </span>
              <span style={{ color: theme.command }}>{line.content as string}</span>
            </div>
          )}
          {line.type === "output" && (
            <div
              className="whitespace-pre-wrap break-words pl-0 mt-0"
              style={{ color: theme.output }}
              data-output
            >
              {typeof line.content === "string" ? (
                line.content
              ) : (
                <div
                  className="mt-2 rounded-lg p-4 border"
                  style={{
                    borderColor: theme.output,
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                >
                  {line.content}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
