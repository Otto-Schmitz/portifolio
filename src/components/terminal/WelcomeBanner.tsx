"use client";

import { useLocale } from "@/context/LocaleContext";
import type { TerminalTheme } from "./theme";

type WelcomeBannerProps = {
  theme: TerminalTheme;
};

const ASCII_ART = [
  "   ___  _   _          ____       _           _ _       ",
  "  / _ \\| |_| |_ ___   / ___|  ___| |__  _ __ (_) |_ ____",
  " | | | | __| __/ _ \\  \\___ \\ / __| '_ \\| '_ \\| | __|_  /",
  " | |_| | |_| || (_) |  ___) | (__| | | | | | | | |_ / / ",
  "  \\___/ \\__|\\__\\___/  |____/ \\___|_| |_|_| |_|_|\\__/___|",
];

export function WelcomeBanner({ theme }: WelcomeBannerProps) {
  const { t } = useLocale();

  return (
    <div className="font-mono text-sm leading-relaxed mb-4 select-none">
      {/* ASCII Art */}
      <pre
        className="leading-tight text-[0.55rem] sm:text-xs md:text-sm overflow-x-auto"
        style={{ color: theme.prompt }}
        aria-hidden
      >
        {ASCII_ART.join("\n")}
      </pre>

      {/* Subtitle */}
      <p
        className="mt-1 text-xs sm:text-sm opacity-70"
        style={{ color: theme.output }}
      >
        {t("terminal_welcome_subtitle")}
      </p>

      {/* Divider */}
      <div
        className="my-3 border-t opacity-20"
        style={{ borderColor: theme.output }}
        aria-hidden
      />

      {/* Greeting */}
      <div style={{ color: theme.output }}>
        <p className="font-semibold">{t("terminal_welcome_greeting")}</p>
        <p className="mt-1 opacity-80">{t("terminal_welcome_description")}</p>
      </div>

      {/* Hints */}
      <div className="mt-3 space-y-1" style={{ color: theme.command }}>
        <p>
          <span style={{ color: theme.prompt }}>{"▸ "}</span>
          {t("terminal_welcome_hint_terminal")}
        </p>
        <p>
          <span style={{ color: theme.prompt }}>{"▸ "}</span>
          {t("terminal_welcome_hint_gui")}
        </p>
        <p>
          <span style={{ color: theme.prompt }}>{"▸ "}</span>
          {t("terminal_welcome_hint_lang")}
        </p>
      </div>

      {/* Divider */}
      <div
        className="mt-3 mb-1 border-t opacity-20"
        style={{ borderColor: theme.output }}
        aria-hidden
      />
    </div>
  );
}
