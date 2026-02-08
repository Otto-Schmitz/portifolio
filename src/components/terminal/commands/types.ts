import type { ContentSectionId } from "@/components/content/types";
import type { ReactNode } from "react";
import type { TerminalTheme } from "../theme";

export type CommandResult =
  | { type: "text"; value: string }
  | { type: "component"; value: ReactNode }
  | { type: "switchToGui" }
  | { type: "clear" }
  | { type: "setTheme"; value: Partial<TerminalTheme> };

export type CommandContext = {
  currentDir: ContentSectionId | "~";
  setCurrentDir: (dir: ContentSectionId | "~") => void;
  switchToGui: () => void;
  history: string[];
};
