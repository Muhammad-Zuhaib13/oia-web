import "@/app/globals.css";
import { locales } from "@/i18n.config";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import localFont from "next/font/local";
import Header from "../components/header/Header";
import useTextDirection from "../hooks/useTextDirection";

// Define font loaders in the module scope
const DINAlternateBold = localFont({
  src: [
    {
      path: "../../public/fonts/DINAlternateBold.otf",
      weight: "700",
    },
  ],
  variable: "--font-din-alternate-bold",
});

const DINAlternateMedium = localFont({
  src: [
    {
      path: "../../public/fonts/DINAlternateMedium.otf",
      weight: "500",
    },
  ],
  variable: "--font-din-alternate-medium",
});

const DINAlternateRegular = localFont({
  src: [
    {
      path: "../../public/fonts/DINAlternateRegular.otf",
      weight: "400",
    },
  ],
  variable: "--font-din-alternate-regular",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Layout.metaData",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const dir = useTextDirection();

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${DINAlternateBold.className} ${DINAlternateMedium.className} ${DINAlternateRegular.className} font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
