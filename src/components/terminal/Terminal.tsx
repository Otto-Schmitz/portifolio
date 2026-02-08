"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useAppMode } from "@/context/AppModeContext";
import { executeCommand, getAutocomplete, applyCompletion } from "@/components/terminal/commands";
import type { ContentSectionId } from "@/components/content/types";
import { SectionRenderer } from "@/components/content/SectionRenderer";
import { TerminalOutput } from "@/components/terminal/TerminalOutput";
import { AppDock } from "@/components/shared/AppDock";
import { loadTheme, saveTheme, type TerminalTheme } from "@/components/terminal/theme";

type Line = {
  id: string;
  type: "command" | "output";
  content: string | React.ReactNode;
  /** Diretório no momento do comando (só em type "command") */
  dir?: ContentSectionId | "~";
};

let lineId = 0;
function nextId() {
  return `line-${++lineId}`;
}

export function Terminal() {
  const { setMode } = useAppMode();
  const [lines, setLines] = useState<Line[]>([]);
  const [currentDir, setCurrentDir] = useState<ContentSectionId | "~">("~");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const [theme, setThemeState] = useState<TerminalTheme>(() => loadTheme());
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabCycleRef = useRef({ lastInput: "", cycleIndex: 0 });

  const switchToGui = useCallback(() => setMode("gui"), [setMode]);

  const runCommand = useCallback(
    (raw: string) => {
      const ctx = {
        currentDir,
        setCurrentDir,
        switchToGui,
        history,
      };
      const result = executeCommand(raw, ctx);

      if (result === null) return;

      if (result.type === "switchToGui") {
        setLines((prev) => [
          ...prev,
          { id: nextId(), type: "command", content: raw, dir: currentDir },
          { id: nextId(), type: "output", content: "Opening GUI..." },
        ]);
        switchToGui();
        return;
      }

      if (result.type === "clear") {
        setLines([]);
        return;
      }

      if (result.type === "setTheme") {
        const next = { ...theme, ...result.value };
        setThemeState(next);
        saveTheme(next);
        setLines((prev) => [
          ...prev,
          { id: nextId(), type: "command", content: raw, dir: currentDir },
          { id: nextId(), type: "output", content: "Theme updated." },
        ]);
        if (raw) setHistory((prev) => [...prev, raw]);
        return;
      }

      const newLines: Line[] = [
        { id: nextId(), type: "command", content: raw, dir: currentDir },
      ];

      if (result.type === "text" && result.value !== "") {
        newLines.push({ id: nextId(), type: "output", content: result.value });
      }
      if (result.type === "component") {
        const v = result.value as { _section?: ContentSectionId };
        if (v._section) {
          newLines.push({
            id: nextId(),
            type: "output",
            content: <SectionRenderer sectionId={v._section} />,
          });
        }
      }

      setLines((prev) => [...prev, ...newLines]);
      if (raw) {
        setHistory((prev) => [...prev, raw]);
      }
    },
    [currentDir, switchToGui, history, theme]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim();
    setInput("");
    if (raw) {
      runCommand(raw);
      setHistoryIndex((prev) => prev + 1);
    } else {
      setHistoryIndex(history.length);
    }
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const result = getAutocomplete(input, currentDir);
        if (!result || result.completions.length === 0) return;
        const { lastInput, cycleIndex } = tabCycleRef.current;
        if (input !== lastInput) tabCycleRef.current.cycleIndex = 0;
        const nextCycle = input !== lastInput ? 0 : tabCycleRef.current.cycleIndex;
        const { newInput, addSpace } = applyCompletion(result, nextCycle);
        setInput(addSpace ? newInput + " " : newInput);
        tabCycleRef.current = { lastInput: addSpace ? newInput + " " : newInput, cycleIndex: nextCycle + 1 };
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length === 0) return;
        const nextIndex = historyIndex > 0 ? historyIndex - 1 : 0;
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (history.length === 0) return;
        if (historyIndex >= history.length - 1) {
          setHistoryIndex(history.length);
          setInput("");
          return;
        }
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
        return;
      }
    },
    [history, historyIndex, input, currentDir]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
      setHistoryIndex(history.length);
      tabCycleRef.current = { lastInput: "", cycleIndex: 0 };
    },
    [history.length]
  );

  useEffect(() => {
    const t = setTimeout(() => inputRef.current?.focus(), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [lines]);

  const displayPrompt = currentDir === "~" ? "~ $ " : `${currentDir} $ `;

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      className="h-screen max-h-screen overflow-hidden font-mono p-4 md:p-6 flex flex-col"
      style={{ backgroundColor: theme.background, color: theme.command }}
      role="application"
      aria-label="Terminal"
      onClick={focusInput}
    >
      <div
        ref={containerRef}
        className="terminal-scroll flex-1 min-h-0 mb-2"
      >
        <TerminalOutput
          lines={lines}
          currentDir={currentDir}
          theme={theme}
        />
        <form onSubmit={handleSubmit} className="flex flex-wrap items-baseline gap-1">
          <span className="shrink-0" style={{ color: theme.prompt }} aria-hidden>
            {displayPrompt}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 min-w-[200px] bg-transparent border-none outline-none font-mono text-sm focus:outline-none"
            style={{ color: theme.command, caretColor: theme.prompt }}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
            autoFocus
            aria-label="Comando do terminal"
          />
          <span
            className="terminal-cursor inline-block w-2 h-4"
            style={{ backgroundColor: theme.prompt }}
            aria-hidden
          />
        </form>
      </div>
      <AppDock />
    </div>
  );
}
