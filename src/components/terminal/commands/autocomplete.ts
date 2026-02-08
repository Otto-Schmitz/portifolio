"use client";

import { SECTIONS, isContentSectionId } from "@/components/content/types";
import type { ContentSectionId } from "@/components/content/types";

const CONTENT_FILE = "content";

const COMMANDS = [
  "ls",
  "cd",
  "cat",
  "open",
  "history",
  "clear",
  "theme",
  "gui",
  "help",
] as const;

const DIRS_AT_ROOT: string[] = ["~", "..", ...SECTIONS];

function filterByPrefix(candidates: string[], prefix: string): string[] {
  if (!prefix) return [...candidates];
  const p = prefix.toLowerCase();
  return candidates.filter((c) => c.toLowerCase().startsWith(p));
}

function commonPrefix(strings: string[]): string {
  if (strings.length === 0) return "";
  if (strings.length === 1) return strings[0];
  let i = 0;
  const first = strings[0].toLowerCase();
  while (i < first.length) {
    const c = first[i];
    if (strings.every((s) => s.toLowerCase()[i] === c)) i++;
    else break;
  }
  return strings[0].slice(0, i);
}

export type AutocompleteResult = {
  /** Completions para o token atual (sem o prefixo do comando) */
  completions: string[];
  /** Parte do input que não está sendo completada (ex: "ls " ou "cat a") */
  prefix: string;
  /** Token que estamos completando (ex: "a" em "cat a") */
  token: string;
};

/**
 * Retorna as sugestões de autocomplete para o input atual.
 */
export function getAutocomplete(
  input: string,
  currentDir: ContentSectionId | "~"
): AutocompleteResult | null {
  const trimmed = input.trimStart();
  const parts = trimmed.split(/\s+/);
  if (parts.length === 0) return null;

  const first = parts[0].toLowerCase();
  const token = parts.length === 1 ? first : parts[parts.length - 1] ?? "";
  const prefix = parts.length === 1 ? "" : parts.slice(0, -1).join(" ") + " ";

  // Completando nome do comando
  if (parts.length === 1) {
    const matches = filterByPrefix([...COMMANDS], first);
    if (matches.length === 1 && first === matches[0]) return null;
    return {
      completions: matches,
      prefix: "",
      token: first,
    };
  }

  const cmd = parts[0].toLowerCase();

  // Não completar quando o argumento está vazio (ex: "cd about " ou "ls ") — comando já completo
  if (parts.length > 1 && token === "") {
    return null;
  }

  // Completando argumento de cd: só diretórios
  if (cmd === "cd") {
    const dirs = currentDir === "~" ? DIRS_AT_ROOT : ["~", "..", ...SECTIONS];
    const matches = filterByPrefix(dirs, token);
    if (matches.length === 1 && token.toLowerCase() === matches[0].toLowerCase()) return null;
    return { completions: matches, prefix, token };
  }

  // Completando argumento de ls: diretórios (na raiz) ou nada (dentro de pasta)
  if (cmd === "ls") {
    if (currentDir === "~") {
      const matches = filterByPrefix([...SECTIONS], token);
      if (matches.length === 1 && token.toLowerCase() === matches[0].toLowerCase()) return null;
      return { completions: matches, prefix, token };
    }
    const matches = filterByPrefix([CONTENT_FILE], token);
    if (matches.length === 1 && token.toLowerCase() === matches[0].toLowerCase()) return null;
    return { completions: matches, prefix, token };
  }

  // Completando argumento de cat ou open: dirs e paths section/content
  if (cmd === "cat" || cmd === "open") {
    if (currentDir === "~") {
      const dirs = filterByPrefix([...SECTIONS], token);
      const paths = SECTIONS.filter((s) => s.startsWith(token.toLowerCase())).map(
        (s) => `${s}/${CONTENT_FILE}`
      );
      const withSlash = token.includes("/");
      let completions: string[];
      if (withSlash) {
        const [dirPart, filePart] = token.split("/");
        if (isContentSectionId(dirPart)) {
          completions = filePart === "" || CONTENT_FILE.startsWith(filePart)
            ? [`${dirPart}/${CONTENT_FILE}`]
            : [];
        } else {
          completions = SECTIONS.filter((d) => d.startsWith(dirPart)).map(
            (d) => `${d}/${CONTENT_FILE}`
          );
        }
      } else {
        completions = [...new Set([...dirs, ...paths])];
      }
      const exactMatch = completions.some((c) => c.toLowerCase() === token.toLowerCase());
      if (completions.length === 1 && exactMatch) return null;
      return { completions, prefix, token };
    }
    // Dentro de uma pasta: só "content"
    const matches = filterByPrefix([CONTENT_FILE], token);
    if (matches.length === 1 && token.toLowerCase() === matches[0].toLowerCase()) return null;
    return { completions: matches, prefix, token };
  }

  return null;
}

/**
 * Dado o resultado do autocomplete, retorna o texto completo do input completado.
 * - Se houver uma única conclusão, retorna prefix + completion + (space se fizer sentido).
 * - Se houver várias, retorna prefix + commonPrefix (para o usuário poder dar Tab de novo e ciclar).
 */
export function applyCompletion(
  result: AutocompleteResult,
  cycleIndex: number
): { newInput: string; addSpace: boolean } {
  const { completions, prefix, token } = result;
  if (completions.length === 0) return { newInput: prefix + token, addSpace: false };

  const index = cycleIndex % completions.length;
  const completion = completions[index];
  const addSpace = completions.length === 1 && !completion.includes("/");
  return {
    newInput: prefix + completion,
    addSpace,
  };
}

/**
 * Retorna o prefixo comum entre as conclusões (para completar até onde for único).
 */
export function getCommonPrefix(result: AutocompleteResult): string {
  if (result.completions.length === 0) return result.token;
  return commonPrefix(result.completions);
}
