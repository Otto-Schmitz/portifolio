"use client";

import { isContentSectionId, SECTIONS, type ContentSectionId } from "@/components/content/types";
import type { CommandResult, CommandContext } from "./types";
import { DEFAULT_THEME, parseColor } from "../theme";

/** Nome do "arquivo" que existe dentro de cada pasta e contém o conteúdo da seção */
const CONTENT_FILE = "content";

/** De "about/content" retorna ["about", "content"]; senão null */
function parsePath(path: string): [ContentSectionId, string] | null {
  const parts = path.split("/").map((p) => p.trim().toLowerCase()).filter(Boolean);
  if (parts.length !== 2) return null;
  const [dir, file] = parts;
  if (isContentSectionId(dir) && file === CONTENT_FILE) return [dir, file];
  return null;
}

function noSuchFile(name: string): CommandResult {
  return {
    type: "text",
    value: `cat: ${name}: No such file or directory`,
  };
}

function isDirectory(name: string): CommandResult {
  return {
    type: "text",
    value: `cat: ${name}: Is a directory`,
  };
}

function invalidCommand(cmd: string): CommandResult {
  return {
    type: "text",
    value: `command not found: ${cmd}`,
  };
}

export function executeCommand(
  input: string,
  ctx: CommandContext
): CommandResult | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const parts = trimmed.split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);

  // gui or /gui
  if (name === "gui" || name === "/gui") {
    return { type: "switchToGui" };
  }

  if (name === "clear" || name === "cls") {
    return { type: "clear" };
  }

  if (name === "help" || name === "?") {
    return {
      type: "text",
      value: [
        "Available commands:",
        "  ls              list files and directories",
        "  cd <dir>        change directory (e.g. cd about)",
        "  cat <file>      show file content (inside a folder: cat content)",
        "  open <path>     open: folder = enter it; file = show content",
        "  history         show command history",
        "  clear           clear screen",
        "  theme           change terminal colors (prompt, command, output, background)",
        "  gui             open graphical interface (macOS style)",
        "  help            show this help",
      ].join("\n"),
    };
  }

  if (name === "theme") {
    if (args.length === 0) {
      return {
        type: "text",
        value: [
          "Usage: theme [reset] | theme <key> <color>",
          "  prompt     path/prompt color (e.g. #22c55e or green)",
          "  command    typed command color",
          "  output     result text color",
          "  background terminal background",
          "  reset      restore default colors",
          "Example: theme prompt #22c55e",
        ].join("\n"),
      };
    }
    if (args[0].toLowerCase() === "reset") {
      return { type: "setTheme", value: DEFAULT_THEME };
    }
    if (args.length < 2) {
      return { type: "text", value: "theme: missing color (e.g. theme prompt #22c55e)" };
    }
    const key = args[0].toLowerCase() as keyof typeof DEFAULT_THEME;
    if (!(key in DEFAULT_THEME)) {
      return {
        type: "text",
        value: `theme: unknown key '${args[0]}'. Use: prompt, command, output, background`,
      };
    }
    const color = parseColor(args[1]);
    if (!color) {
      return { type: "text", value: `theme: invalid color '${args[1]}'. Use hex (#RRGGBB) or name (green, red, ...)` };
    }
    return { type: "setTheme", value: { [key]: color } };
  }

  if (name === "history") {
    const list = (ctx.history ?? [])
      .map((cmd, i) => `${String(i + 1).padStart(5)}  ${cmd}`)
      .join("\n");
    return {
      type: "text",
      value: list || "(no commands yet)",
    };
  }

  if (name === "ls") {
    if (ctx.currentDir === "~") {
      const target = args[0]?.toLowerCase();
      if (!target) {
        const list = SECTIONS.join("  ");
        return { type: "text", value: list };
      }
      if (isContentSectionId(target)) {
        return { type: "text", value: CONTENT_FILE };
      }
      return {
        type: "text",
        value: `ls: cannot access '${args[0]}': No such file or directory`,
      };
    }
    if (args[0]) {
      return {
        type: "text",
        value: `ls: cannot access '${args[0]}': No such file or directory`,
      };
    }
    return { type: "text", value: CONTENT_FILE };
  }

  if (name === "cd") {
    if (args.length === 0) {
      ctx.setCurrentDir("~");
      return { type: "text", value: "" };
    }
    const dir = args[0].toLowerCase();
    if (dir === "~" || dir === "..") {
      ctx.setCurrentDir("~");
      return { type: "text", value: "" };
    }
    if (isContentSectionId(dir)) {
      ctx.setCurrentDir(dir);
      return { type: "text", value: "" };
    }
    return {
      type: "text",
      value: `cd: no such directory: ${args[0]}`,
    };
  }

  if (name === "cat") {
    if (args.length === 0) {
      return { type: "text", value: "cat: missing operand" };
    }
    const pathArg = args[0].toLowerCase();

    if (ctx.currentDir === "~") {
      const parsed = parsePath(pathArg);
      if (parsed) {
        const [section] = parsed;
        return {
          type: "component",
          value: { _section: section },
        } as unknown as CommandResult;
      }
      if (isContentSectionId(pathArg)) {
        return isDirectory(pathArg);
      }
      return noSuchFile(args[0]);
    }

    if (pathArg === CONTENT_FILE) {
      return {
        type: "component",
        value: { _section: ctx.currentDir },
      } as unknown as CommandResult;
    }
    return noSuchFile(args[0]);
  }

  if (name === "open") {
    if (args.length === 0) {
      return { type: "text", value: "open: missing operand" };
    }
    const pathArg = args[0].toLowerCase();

    if (ctx.currentDir === "~") {
      const parsed = parsePath(pathArg);
      if (parsed) {
        const [section] = parsed;
        return {
          type: "component",
          value: { _section: section },
        } as unknown as CommandResult;
      }
      if (isContentSectionId(pathArg)) {
        ctx.setCurrentDir(pathArg);
        return { type: "text", value: "" };
      }
      return noSuchFile(args[0]);
    }

    if (pathArg === CONTENT_FILE) {
      return {
        type: "component",
        value: { _section: ctx.currentDir },
      } as unknown as CommandResult;
    }
    return noSuchFile(args[0]);
  }

  // Atalho /about, /career etc. = cd para essa pasta
  if (name.startsWith("/") && name.length > 1) {
    const section = name.slice(1).toLowerCase();
    if (isContentSectionId(section)) {
      ctx.setCurrentDir(section);
      return { type: "text", value: "" };
    }
  }

  return invalidCommand(name);
}
