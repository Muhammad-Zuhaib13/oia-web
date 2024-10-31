
import ImageBanner from "@/app/components/banners/ImageBanner";
import { useTranslations } from "next-intl";
import {getTranslations, unstable_setRequestLocale } from "next-intl/server";
import AnnualReportsCards from "@/app/components/annual-reports/AnnualReportsCards";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Annual-Reports",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const AnnualReports: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Annual-Reports");

  const ImageBannerData = {
    title:"Publications",
    image: "/assets/images/media-center/report-banner.jpg",
    locale:locale
  };
  const AnnualReportsGrid = {
    title: t("ReportsGrid.title"),
    para: t("ReportsGrid.para"),
    locale:locale,
    reportCards: [
      {
        id: 1,
        title: t("ReportsGrid.ReportCards.0.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,

      },
      {
        id: 2,
        title: t("ReportsGrid.ReportCards.1.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,
      },
      {
        id: 3,
        title: t("ReportsGrid.ReportCards.2.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,
      },
    ]
  }
  const inajz= {
    title: "Injaz & Eejaz",
    para: t("ReportsGrid.para"),
    locale:locale,
    reportCards: [
      {
        id: 1,
        title: t("ReportsGrid.ReportCards.0.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,

      },
      {
        id: 2,
        title: t("ReportsGrid.ReportCards.1.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,
      },
      {
        id: 3,
        title: t("ReportsGrid.ReportCards.2.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,
      },
    ]
  }
  const ecoData= {
    title: "Economic Reports",
    para: t("ReportsGrid.para"),
    locale:locale,
    reportCards: [
      {
        id: 1,
        title: t("ReportsGrid.ReportCards.0.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,

      },
      {
        id: 2,
        title: t("ReportsGrid.ReportCards.1.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,
      },
      {
        id: 3,
        title: t("ReportsGrid.ReportCards.2.title"),
        imgSrc: "/assets/images/annual-reports-imgs/annual-rep-2022-img.svg",
        locale:locale,
      },
    ]
  }
  return (
    <section className="annual-report-page">
      <div className="">
        <ImageBanner data={ImageBannerData} />
      </div>
      <div className="mt-[100px]">

        <AnnualReportsCards data={AnnualReportsGrid} />
        <AnnualReportsCards data={inajz} />
        <AnnualReportsCards data={ecoData} />
      </div>

    </section>
  );
};

export default AnnualReports;
