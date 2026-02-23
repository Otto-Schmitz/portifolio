"use client";

import { useLocale } from "@/context/LocaleContext";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    label: "text-zinc-500 text-xs",
    list: "text-zinc-300 text-sm",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    label: "text-zinc-500 dark:text-zinc-400 text-sm",
    list: "text-zinc-700 dark:text-zinc-300",
  },
};

const SEP = " · ";

export function Skills({ variant }: { variant: SectionVariant }) {
  const { t } = useLocale();
  const s = styles[variant];
  return (
    <div className="space-y-4">
      <h3 className={s.heading}>{t("gui_folder_skills")}</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className={s.label}>{t("skills_label_backend")}</p>
          <p className={s.list}>{t("skills_backend").split(SEP).join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>{t("skills_label_frontend")}</p>
          <p className={s.list}>{t("skills_frontend").split(SEP).join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>{t("skills_label_databases")}</p>
          <p className={s.list}>{t("skills_databases").split(SEP).join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>{t("skills_label_devops")}</p>
          <p className={s.list}>{t("skills_devops").split(SEP).join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>{t("skills_label_testing_quality")}</p>
          <p className={s.list}>{t("skills_testing_quality").split(SEP).join(", ")}</p>
        </div>
        <div>
          <p className={s.label}>{t("skills_label_ai")}</p>
          <p className={s.list}>{t("skills_ai").split(SEP).join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
