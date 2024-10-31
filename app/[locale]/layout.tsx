// app/layout.tsx

import "@/app/common.css";
import "@/app/globals.css";
import "@/app/sliders.css";

import { locales } from "@/i18n.config";
import {
  NextIntlClientProvider,
  useTranslations,
} from "next-intl";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import localFont from "next/font/local";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import useTextDirection from "../hooks/useTextDirection";
import Head from "next/head";


const poppinsRegular = localFont({
  src: [
    {
      path: "../fonts/PoppinsRegular.ttf",
    },
  ],
  variable: "--font-poppins-regular",
})
const poppinsMedium = localFont({
  src: [
    {
      path: "../fonts/PoppinsMedium.ttf",
    },
  ],
  variable: "--font-poppins-medium",
})
const poppinsSemiBold = localFont({
  src: [
    {
      path: "../fonts/PoppinsSemiBold.ttf",
    },
  ],
  variable: "--font-poppins-semibold",
})
const poppinsBold = localFont({
  src: [
    {
      path: "../fonts/PoppinsBold.ttf",
    },
  ],
  variable: "--font-poppins-bold",
})
const DINAlternateBold = localFont({
  src: [
    {
      path: "../fonts/DINAlternateBold.otf",
    },
  ],
  variable: "--font-din-alternate-bold",
});

const DINAlternateMedium = localFont({
  src: [
    {
      path: "../fonts/DINAlternateMedium.otf",
    },
  ],
  variable: "--font-din-alternate-medium",
});
const DINAlternateRegular = localFont({
  src: [
    {
      path: "../fonts/DINAlternateRegular.otf",
      weight: "400",
    },
  ],
  variable: "--font-din-alternate-regular",
});
const TajawalBlack = localFont({
  src: [
    {
      path: "../fonts/TajawalBlack.ttf",
    },
  ],
  variable: "--font-tajawal-black",
});

const TajawalBold = localFont({
  src: [
    {
      path: "../fonts/TajawalBold.ttf",
    },
  ],
  variable: "--font-tajawal-bold",
});
const TajawalExtraBold = localFont({
  src: [
    {
      path: "../fonts/TajawalExtraBold.ttf",
    },
  ],
  variable: "--font-tajawal-extra-bold",
});
const TajawalExtraLight = localFont({
  src: [
    {
      path: "../fonts/TajawalExtraLight.ttf",
    },
  ],
  variable: "--font-tajawal-extra-light",
});
const TajawalLight = localFont({
  src: [
    {
      path: "../fonts/TajawalLight.ttf",
    },
  ],
  variable: "--font-tajawal-light",
});
const TajawalMedium = localFont({
  src: [
    {
      path: "../fonts/TajawalMedium.ttf",
    },
  ],
  variable: "--font-tajawal-medium",
});
const TajawalRegular = localFont({
  src: [
    {
      path: "../fonts/TajawalRegular.ttf",
    },
  ],
  variable: "--font-tajawal-regular",
});
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }) {
//   const t = await getTranslations({
//     locale,
//     namespace: "Home",
//   });

//   return {
//     title: t("metaData.title"),
//     description: t("metaData.description"),
//     icons: {
//       icon: ["/favicon.ico?v=4"],
//       shortcut: ["/apple-touch-icon.png"],
//       apple: ["/apple-touch-icon.png?v=4"],
//     },
//   };
// }
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Home",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
    icons: {
      icon: ["/favicon.ico?v=4"],
      shortcut: ["/apple-touch-icon.png"],
      apple: ["/apple-touch-icon.png?v=4"],
    },
    keywords: "keyword1, keyword2, keyword3", // Add keywords if necessary
    authors: [{ name: "OIA" }], // Author name
    openGraph: {
      title: t("metaData.title"),
      description: t("metaData.description"),
      url: "https://oia.codevative.cloud/", // Replace with your actual URL
      siteName: "OIA",
      images: [
        {
          url: "URL of the image", // Replace with the actual image URL
          width: 800,
          height: 600,
          alt: "Image description",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaData.title"),
      description: t("metaData.description"),
      images: ["URL of the image"], // Replace with the actual image URL
    },
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
  const header = useTranslations("Header");
  const navbar = useTranslations("Navbar");
  const navLinksData = {
    home: header("home"),
    aboutOia: header("about-oia"),
    oiaImpact: header("oia-impact"),
    ourInvestments: header("our-investments"),
    mediaCenter: header("media-center"),
    oman: header("oman"),
    contactUs: header("contact-us"),
    careers: header("careers"),
    inCountry: header("in-country"),
    nationalEconomy: header("national-economy"),
    jointVentures: header("joint-ventures"),
    nationalDevFund: header("national-dev-fund"),
    futureGenFund: header("future-gen-fund"),
    futureFundOman: header("future-fund-oman"),
    news: header("news"),
    newsDetails: header("news-details"),
    annualReports: header("annual-reports"),
    injazAndEejaz: header("injaz-and-eejaz"),
    internshipOpp: header("internship-opp"),
    searchText: header("search-placeholder"),
    locale: locale,
  };
const navLinks = {
  home: navbar("home"),
  aboutOIA: navbar("about-oia"),
  leadership: navbar("leadership"),
  sultanateOfOman: navbar("sultanate-of-oman"),
  ourInvestments: navbar("our-investments"),
  futureGenFund: navbar("future-gen-fund"),
  nationalDevFund: navbar("national-dev-fund"),
  futureFundOman: navbar("future-fund-oman"),
  investorRelations: navbar("investor-relations"),
  oiaImpact: navbar("oia-impact"),
  inCountryValue: navbar("in-country-value"),
  nationalEconomy: navbar("national-economy"),
  governance: navbar("governance"),
  oiaCompaniesManual: navbar("oia-companies-manual"),
  internalGovernance: navbar("internal-governance"),
  governanceRiskCompliance: navbar("governance-risk-compliance"),
  audits: navbar("audits"),
  whistleblowing: navbar("whistleblowing"),
  ifswf: navbar("ifswf"),
  mediaCenter: navbar("media-center"),
  news: navbar("news"),
  newsDetails: navbar("news-details"),
  publications: navbar("publications"),
  gallery: navbar("gallery"),
  brandHub: navbar("brand-hub"),
  openData: navbar("open-data"),
  careers: navbar("careers"),
  financialSustainability:navbar("financial-sustainability"),
  iposPlan:navbar("ipos-plan"),
  omaniAngle:navbar("omani-angle")
};

const NavbarData = [
  {
    id: 1,
    title: navLinks.home,
    href: "/",
    subMenu: [],
  },
  {
    id: 2,
    title: navLinks.aboutOIA,
    href: "",
    subMenu: [
      {
        id: 1,
        title: navLinks.aboutOIA,
        href: "/about/about-oia",
      },
      {
        id: 2,
        title: navLinks.leadership,
        href: "/about/oia-leadership",
      },
      {
        id: 3,
        title: navLinks.sultanateOfOman,
        href: "/about/sultanate-of-oman",
      },
    ],
  },
  {
    id: 3,
    title: navLinks.ourInvestments,
    href: "",
    subMenu: [
      {
        id: 1,
        title: navLinks.futureGenFund,
        href: "/our-investments/future-generation-fund",
      },
      {
        id: 2,
        title: navLinks.nationalDevFund,
        href: "/our-investments/national-development-fund",
      },
      {
        id: 3,
        title: navLinks.futureFundOman,
        href: "/our-investments/future-fund-oman",
      },
      {
        id: 4,
        title: navLinks.investorRelations,
        href: "/our-investments/investor-relations",
      },
    ],
  },
  {
    id: 4,
    title: navLinks.oiaImpact,
    href: "",
    subMenu: [
      {
        id: 1,
        title: navLinks.nationalEconomy,
        href: "/oia-impact/national-economy",
      },
      {
        id: 2,
        title: navLinks.financialSustainability,
        href: "/oia-impact/financial-sustainability",
      },
      {
        id: 3,
        title: navLinks.iposPlan,
        href: "/oia-impact/ipos-plan",
      },
      {
        id: 4,
        title: navLinks.inCountryValue,
        href: "/oia-impact/in-country-value",
      },
      {
        id: 5,
        title: navLinks.omaniAngle,
        href: "/oia-impact/omani-angle",
      }
    ],
  },
  {
    id: 5,
    title: navLinks.governance,
    href: "",
    subMenu: [
      {
        id: 1,
        title: navLinks.oiaCompaniesManual,
        href: "/governance/oia-companies-manual",
      },
      {
        id: 2,
        title: navLinks.internalGovernance,
        href: "/governance/internal-governance",
      },
      {
        id: 3,
        title: navLinks.governanceRiskCompliance,
        href: "/governance/governance-risk-and-compliance",
      },
      {
        id: 4,
        title: navLinks.audits,
        href: "/governance/audits",
      },
      {
        id: 5,
        title: navLinks.whistleblowing,
        href: "/governance/whistleblow",
      },
      {
        id: 6,
        title: navLinks.ifswf,
        href: "/governance/ifswf",
      },
    ],
  },
  {
    id: 6,
    title: navLinks.mediaCenter,
    href: "",
    subMenu: [
      {
        id: 1,
        title: navLinks.news,
        href: "/media-center/news",
      },
      {
        id: 3,
        title: navLinks.publications,
        href: "/media-center/publications",
      },
      {
        id: 4,
        title: navLinks.gallery,
        href: "/media-center/gallery",
      },
      {
        id: 5,
        title: navLinks.brandHub,
        href: "/media-center/brand-hub",
      },
    ],
  },
  {
    id: 7,
    title: navLinks.openData,
    href: "/open-data",
    subMenu: [],
  },
  {
    id: 8,
    title: navLinks.careers,
    href: "/careers",
    subMenu: [],
  },
];

  return (
    <html lang={locale} dir={dir}>
      <body
        className={`${DINAlternateBold.variable} ${DINAlternateMedium.variable} ${DINAlternateRegular.variable} ${TajawalBlack.variable} ${TajawalBold.variable} ${TajawalExtraBold.variable} ${TajawalExtraLight.variable} ${TajawalLight.variable} ${TajawalMedium.variable} ${TajawalRegular.variable} ${poppinsRegular.variable} ${poppinsMedium.variable} ${poppinsSemiBold.variable} ${poppinsBold.variable}
  font-sans light bg-contrast`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header data={navLinksData} locale={locale} navData={NavbarData} />
          {children}
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
