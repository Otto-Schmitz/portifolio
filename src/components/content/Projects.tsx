"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import { contactData } from "@/data/contact";
import { projectsData } from "@/data/projects";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    body: "text-zinc-400 text-sm",
    link: "text-green-500 hover:underline",
    card: "border border-zinc-600 rounded p-3 space-y-2",
    tech: "text-zinc-500 text-xs",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    body: "text-zinc-600 dark:text-zinc-400 text-sm",
    link: "text-blue-600 dark:text-blue-400 hover:underline font-medium",
    card: "border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 space-y-2",
    tech: "text-zinc-500 dark:text-zinc-500 text-xs",
  },
};

export function Projects({ variant }: { variant: SectionVariant }) {
  const { t } = useLocale();
  const s = styles[variant];

  return (
    <div className="space-y-4">
      <h3 className={s.heading}>{t("gui_folder_projects")}</h3>
      <p className={s.body}>{t("projects_wip_message")}</p>

      <ul className="space-y-4 list-none p-0 m-0">
        {projectsData.items.map((item) => (
          <li key={item.id} className={s.card}>
            {item.image && (
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded overflow-hidden mb-2"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={640}
                  height={360}
                  className="w-full h-auto object-cover"
                />
              </a>
            )}
            <div>
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold ${s.link}`}
              >
                {t(`project_${item.id}_name` as keyof typeof t)}
              </a>
            </div>
            <p className={s.body}>{t(`project_${item.id}_description` as keyof typeof t)}</p>
            <p className={s.tech}>{t(`project_${item.id}_tech` as keyof typeof t)}</p>
            <p className={s.body}>
              <a href={item.repoUrl} target="_blank" rel="noopener noreferrer" className={s.link}>
                GitHub
              </a>
              {" · "}
              <a href={item.demoUrl} target="_blank" rel="noopener noreferrer" className={s.link}>
                {t(`project_${item.id}_demo_label` as keyof typeof t)}
              </a>
            </p>
          </li>
        ))}
      </ul>

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
