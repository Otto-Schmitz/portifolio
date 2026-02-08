"use client";

import { useLocale } from "@/context/LocaleContext";
import { contactData } from "@/data/contact";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    body: "text-zinc-400 text-sm",
    link: "text-green-500 hover:underline",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    body: "text-zinc-600 dark:text-zinc-400 text-sm",
    link: "text-blue-600 dark:text-blue-400 hover:underline font-medium",
  },
};

export function Projects({ variant }: { variant: SectionVariant }) {
  const { t } = useLocale();
  const s = styles[variant];

  return (
    <div className="space-y-4">
      <h3 className={s.heading}>{t("gui_folder_projects")}</h3>
      <p className={s.body}>{t("projects_wip_message")}</p>
      <p className={s.body}>
        {t("projects_visit_github_prefix")}
        <a
          href={contactData.github}
          target="_blank"
          rel="noopener noreferrer"
          className={s.link}
        >
          {t("contact_github_label")}
        </a>
        {t("projects_visit_github_suffix")}
      </p>
    </div>
  );
}
