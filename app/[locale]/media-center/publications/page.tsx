
import ImageBanner from "@/app/components/banners/ImageBanner";
import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import AnnualReportsOman from "@/app/components/injaz-and-eejaz/AnnualReportsOman";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Injaz-Ejaz",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const InjazandEejaz: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Injaz-Ejaz");

  const ImageBannerData = {
    title: "Publications",
    description: "",
    image: "/assets/images/banner/publication-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/publication-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/publication-mobile-banner.jpg",
    locale: locale
  }
  const ARImageBannerData = {
    title: "المنشورات",
    description: "",
    image: "/assets/images/banner/publication-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/publication-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/publication-mobile-banner.jpg",
    locale: locale
  }


  const annualReports = {
    title: "Annual Reports",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        title: "Year 2021",
        imgSrc: "/assets/images/publications/anual-report-2021.jpg",
        link:"/pdf/annual-report/eng/AR E 2021.pdf",
        locale: locale,
      },
      {
        id: 2,
        title: "Year 2022",
        imgSrc: "/assets/images/publications/anual-report-2022.jpg",
        link:"/pdf/annual-report/eng/AR E 2021.pdf",
        locale: locale,
      },
      {
        id: 3,
        title: "Year 2023",
        imgSrc: "/assets/images/publications/anual-report-2023.jpg",
        link:"/pdf/annual-report/eng/AR E 2021.pdf",
        locale: locale,
      }
    ]
  }
  const ARannualReports = {
    title: " التقارير السنوية",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        title: "Year 2021",
        imgSrc: "/assets/images/publications/anual-report-2021.jpg",
        link:"/pdf/annual-report/ar/AR 2021.pdf",
        locale: locale,
      },
      {
        id: 2,
        title: "Year 2022",
        imgSrc: "/assets/images/publications/anual-report-2022.jpg",
        link:"/pdf/annual-report/ar/AR 2021.pdf",
        locale: locale,
      },
      {
        id: 3,
        title: "Year 2023",
        imgSrc: "/assets/images/publications/anual-report-2023.jpg",
        link:"/pdf/annual-report/ar/AR 2021.pdf",
        locale: locale,
      }
    ]
  }

  const injazEjazReports = {
    title: "Injaz & Eejaz",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        title: "May 2024",
        imgSrc: "/assets/images/publications/injaz-ejaz-may.jpg",
        link:"/pdf/enjaz-and-eejaz/eng/MayEnglish 2024.pdf",
        locale: locale,
      },
      {
        id: 2,
        title: "November 2023",
        imgSrc: "/assets/images/publications/injaz-ejaz-nov.jpg",
        link:"/pdf/enjaz-and-eejaz/eng/NovmberEnglish 2023.pdf",
        locale: locale,
      },
      {
        id: 3,
        title: "September 2024",
        imgSrc: "/assets/images/publications/injaz-ejaz-sep.jpg",
        link:"/pdf/enjaz-and-eejaz/eng/SepEnglish 2024.pdf",
        locale: locale,
      }
    ]
  }
  const ARinjazEjazReports = {
    title: "نشرة إنجاز وإيجاز",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        title: "May 2024",
        imgSrc: "/assets/images/publications/injaz-ejaz-may.jpg",
        link:"/pdf/enjaz-and-eejaz/ar/MayArabic 2024.pdf",
        locale: locale,
      },
      {
        id: 2,
        title: "November 2024",
        imgSrc: "/assets/images/publications/injaz-ejaz-nov.jpg",
        link:"/pdf/enjaz-and-eejaz/ar/NovmberArabic 2024.pdf",
        locale: locale,
      },
      {
        id: 3,
        title: "September 2024",
        imgSrc: "/assets/images/publications/injaz-ejaz-sep.jpg",
        link:"/pdf/enjaz-and-eejaz/ar/SepArabic 2024.pdf",
        locale: locale,
      }
    ]
  }
  const economicReports = {
    title: "Economic Reports",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        title: "Year 2021",
        imgSrc: "/assets/images/file-thumb.jpg",
        locale: locale,
      },
      {
        id: 2,
        title: "Year 2022",
        imgSrc: "/assets/images/file-thumb.jpg",
        locale: locale,
      },
      {
        id: 3,
        title: "Year 2023",
        imgSrc: "/assets/images/file-thumb.jpg",
        locale: locale,
      }
    ]
  }
  const AReconomicReports = {
    title: "التقارير الاقتصادية",
    para: "",
    locale: locale,
    card: [
      {
        id: 1,
        title: "Year 2021",
        imgSrc: "/assets/images/file-thumb.jpg",
        locale: locale,
      },
      {
        id: 2,
        title: "Year 2022",
        imgSrc: "/assets/images/file-thumb.jpg",
        locale: locale,
      },
      {
        id: 3,
        title: "Year 2023",
        imgSrc: "/assets/images/file-thumb.jpg",
        locale: locale,
      }
    ]
  }




  return (
    <div className="injaz-and-eejaz-page">
      <div className="">
        <ImageBanner data={locale === "en"?ImageBannerData:ARImageBannerData} />
      </div>
      <div className="pt-[60px] lg:pt-[100px]">
        <AnnualReportsOman data={locale === "en"?annualReports:ARannualReports}/>
        <AnnualReportsOman data={locale === "en"?injazEjazReports:ARinjazEjazReports}/>
        {/* <AnnualReportsOman data={locale === "en"?economicReports:AReconomicReports}/> */}
      </div>
    </div>
  );
};

export default InjazandEejaz;
