"use client";

import { useAppMode } from "@/context/AppModeContext";
import { Terminal } from "@/components/terminal/Terminal";
import { MacOSLayout } from "@/components/gui/MacOSLayout";

export default function Home() {
  const { mode } = useAppMode();

  return (
    <div id="main" className="min-h-screen relative" role="main">
      {mode === "terminal" ? <Terminal /> : <MacOSLayout />}
    </div>
  );
}
