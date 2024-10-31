
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
    title: t("banner.title"),
    description: t("banner.description"),
    image: "/assets/images/media-center-ie-imgs/banner-img.svg",
    locale: locale
  }


  const InjazEjazGrid = {
    title: t("InjazEjazGrid.title"),
    para: t("InjazEjazGrid.para"),
    locale: locale,
    InjazEjazCards: [
      {
        id: 1,
        title: t("InjazEjazGrid.InjazEjazCards.0.title"),
        imgSrc: "/assets/images/media-center-ie-imgs/annual-img-2023.svg",
        locale: locale,
      },
      {
        id: 2,
        title: t("InjazEjazGrid.InjazEjazCards.1.title"),
        imgSrc: "/assets/images/media-center-ie-imgs/annual-img-2022.svg",
        locale: locale,
      },
      {
        id: 3,
        title: t("InjazEjazGrid.InjazEjazCards.2.title"),
        imgSrc: "/assets/images/media-center-ie-imgs/annual-img-2021.svg",
        locale: locale,
      },
      {
        id: 1,
        title: t("InjazEjazGrid.InjazEjazCards.3.title"),
        imgSrc: "/assets/images/media-center-ie-imgs/annual-img-2020.svg",
        locale: locale,

      },
      {
        id: 2,
        title: t("InjazEjazGrid.InjazEjazCards.4.title"),
        imgSrc: "/assets/images/media-center-ie-imgs/annual-img-2019.svg",
        locale: locale,
      },
      {
        id: 3,
        title: t("InjazEjazGrid.InjazEjazCards.5.title"),
        imgSrc: "/assets/images/media-center-ie-imgs/annual-img-2018.svg",
        locale: locale,
      },
    
    ]
  }


  return (
    <section className="injaz-and-eejaz-page">
      <div className="">
        <ImageBanner data={ImageBannerData} />
      </div>
      <div className="">
        <AnnualReportsOman data={InjazEjazGrid}/>
      </div>
    </section>
  );
};

export default InjazandEejaz;
