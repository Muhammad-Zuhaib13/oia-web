import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function About({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("About");

  return (
    <main>
      <h1 className="text-xs font-thin">{t("title")}</h1>

    </main>
  );
}
