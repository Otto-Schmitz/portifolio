import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppModeProvider } from "@/context/AppModeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Dev Backend",
  description:
    "Portfólio em formato de terminal e interface macOS. Navegue por about, career, skills, projects e contact.",
  openGraph: {
    title: "Portfolio | Dev Backend",
    description:
      "Portfólio em formato de terminal e interface macOS. Navegue por about, career, skills, projects e contact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-zinc-800 focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:overflow-visible focus:m-0"
        >
          Pular para o conteúdo principal
        </a>
        <AppModeProvider>{children}</AppModeProvider>
      </body>
    </html>
  );
}
