import AboutWIthImg from "@/app/components/about-with-img/AboutWithImg";
import ImageBanner from "@/app/components/banners/ImageBanner";
import JointVenturesCards from "@/app/components/joint-ventures/JointVenturesCards";
import { useTranslations } from "next-intl";
import {getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Joint-Ventures",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const JointVentures: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Joint-Ventures");

  const ImageBannerData: any = {
    title: t("banner.title"),
    description:t("banner.description"),
    image: "/assets/images/joint-ventures-imgs/banner-img.svg",
    locale: locale,
  };

  const aboutWithdata = {
    src: "/assets/images/joint-ventures-imgs/about-joint-ventures-img.svg",
    alt: "OIA image",
    title: t("About-Joint-Ventures.title"),
    locale:locale,
    paragraphs: [
      {
        id: 1,
        text: t("About-Joint-Ventures.paragraphs.first"),
        locale:locale
      },
    ],
  };

  const jvCardData : any =  {
    title: t("Joint-Ventures-Cards.title"),
    para: t("Joint-Ventures-Cards.description"),
    locale: locale,
    cards: [
      {
        id: 1,
        title: t("Joint-Ventures-Cards.cards.0.title"),
        para: t("Joint-Ventures-Cards.cards.0.description"),
        img: "/assets/images/joint-ventures-imgs/voi-img.svg",
        icon: "/assets/images/joint-ventures-imgs/voi-icon-img.svg",
        locale: locale,
      },
      {
        id: 2,
        title: t("Joint-Ventures-Cards.cards.1.title"),
        para: t("Joint-Ventures-Cards.cards.1.description"),
        img: "/assets/images/joint-ventures-imgs/oijif-img.svg",
        icon: "/assets/images/joint-ventures-imgs/oijif-icon-img.svg",
        locale: locale,
      },
      {
        id: 3,
        title: t("Joint-Ventures-Cards.cards.2.title"),
        para: t("Joint-Ventures-Cards.cards.2.description"),
        img: "/assets/images/joint-ventures-imgs/uoi-img.svg",
        icon: "/assets/images/joint-ventures-imgs/uoi-icon-img.svg",
        locale: locale,
      },
      {
        id: 4,
        title: t("Joint-Ventures-Cards.cards.3.title"),
        para: t("Joint-Ventures-Cards.cards.3.description"),
        img: "/assets/images/joint-ventures-imgs/obic-img.svg",
        icon: "/assets/images/joint-ventures-imgs/obic-icon-img.svg",
        locale: locale,
      },
      {
        id: 5,
        title: t("Joint-Ventures-Cards.cards.4.title"),
        para: t("Joint-Ventures-Cards.cards.4.description"),
        img: "/assets/images/joint-ventures-imgs/sopef-img.svg",
        icon: "/assets/images/joint-ventures-imgs/sopef-icon-img.svg",
        locale: locale,
      },
      {
        id: 6,
        title: t("Joint-Ventures-Cards.cards.5.title"),
        para: t("Joint-Ventures-Cards.cards.5.description"),
        img: "/assets/images/joint-ventures-imgs/poicl-img.svg",
        icon: "/assets/images/joint-ventures-imgs/poicl-icon-img.svg",
        locale: locale,
      },
    ]
  }
  
  return (
    <div className="joint-ventures-page">
      <div className="">
        <ImageBanner data={ImageBannerData} />
      </div>
      <div >
        <AboutWIthImg data={aboutWithdata} orderText={1} orderImg={2}/>
      </div>
      <div className="">
        <JointVenturesCards data={jvCardData}/>
      </div>
    </div>
  );
};

export default JointVentures;
