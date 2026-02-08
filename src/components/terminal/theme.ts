export type TerminalTheme = {
  prompt: string;
  command: string;
  output: string;
  background: string;
};

export const DEFAULT_THEME: TerminalTheme = {
  prompt: "#22c55e",
  command: "#e4e4e7",
  output: "#a1a1aa",
  background: "#000000",
};

const COLOR_ALIASES: Record<string, string> = {
  black: "#000000",
  white: "#ffffff",
  green: "#22c55e",
  red: "#ef4444",
  yellow: "#eab308",
  blue: "#3b82f6",
  cyan: "#06b6d4",
  magenta: "#d946ef",
  gray: "#6b7280",
  grey: "#6b7280",
};

export function parseColor(input: string): string | null {
  const s = input.trim().toLowerCase();
  if (/^#[0-9a-f]{3}$/.test(s)) return `#${s[1]}${s[1]}${s[2]}${s[2]}${s[3]}${s[3]}`;
  if (/^#[0-9a-f]{6}$/.test(s)) return s;
  return COLOR_ALIASES[s] ?? null;
}

const THEME_STORAGE_KEY = "terminal-theme";

export function loadTheme(): TerminalTheme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  try {
    const raw = localStorage.getItem(THEME_STORAGE_KEY);
    if (!raw) return DEFAULT_THEME;
    const parsed = JSON.parse(raw) as Partial<TerminalTheme>;
    return { ...DEFAULT_THEME, ...parsed };
  } catch {
    return DEFAULT_THEME;
  }
}

export function saveTheme(theme: TerminalTheme): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  } catch {}
}
