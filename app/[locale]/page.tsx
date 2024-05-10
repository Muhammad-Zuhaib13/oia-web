import { useFormatter, useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import WeatherAlerts from "../components/WeatherAlerts/WeatherAlerts";

export default function Home({
  params: { locale },
}: Readonly<{ params: { locale: string } }>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Home");
  const format = useFormatter();

  return (
    <main>
      <p className="mx-auto mb-2 w-max rounded-sm bg-slate-800 px-2 py-1 text-xs text-sky-200">
        Welcome OIA
      </p>

      <h1>Home</h1>
      <WeatherAlerts />
    </main>
  );
}
