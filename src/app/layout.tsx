import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { LocaleProvider } from "@/context/LocaleContext";
import { AppModeProvider } from "@/context/AppModeContext";
import { SkipLink } from "@/components/shared/SkipLink";
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
  title: "Otto's Portfolio - Backend Developer",
  description:
    "Portfólio em formato de terminal e interface macOS. Navegue por about, career, skills, projects e contact.",
  openGraph: {
    title: "Otto's Portfolio - Backend Developer",
    description:
      "Portfólio em formato de terminal e interface macOS. Navegue por about, career, skills, projects e contact.",
  },
};

const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('portfolio-theme');
    if (t === 'dark' || t === 'light') document.documentElement.classList.add(t);
    else document.documentElement.classList.add('light');
  } catch (e) { document.documentElement.classList.add('light'); }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LocaleProvider>
            <SkipLink />
            <AppModeProvider>{children}</AppModeProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
