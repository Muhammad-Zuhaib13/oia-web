import { useTranslations } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import NationalDevFund from "./national-development-fund";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "National-Development-Fund",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const NationalDevelopmentFund: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations("National-Development-Fund");

  const ImageBannerData = {
    title: t("banner.title"),
    description: t("banner.description"),
    image: "/assets/images/ndf-imgs/banner-img.svg",
    locale: locale,
  };

  const aboutWithdata = {
    src: "/assets/images/ndf-imgs/about-ndf-img.svg",
    alt: "OIA image",
    title: t("About-National-Dev-Fund.title"),
    locale: locale,
    paragraphs: [
      {
        id: 1,
        text: t("About-National-Dev-Fund.paragraphs.first"),
        locale: locale,
      },
      {
        id: 2,
        text: t(
          "About-National-Dev-Fund.paragraphs.second",
        ),
        locale: locale,
      },
    ],
  };

  const nationalDevFactFigures = {
    title: t("National-Development-Facts-Figures.title"),
    para: t(
      "National-Development-Facts-Figures.description",
    ),
    locale: locale,
    cards: [
      {
        id: 1,
        figure: t(
          "National-Development-Facts-Figures.cards.0.figure",
        ),
        title: t(
          "National-Development-Facts-Figures.cards.0.title",
        ),
        description: t(
          "National-Development-Facts-Figures.cards.0.description",
        ),
        locale: locale,
      },
      {
        id: 2,
        figure: t(
          "National-Development-Facts-Figures.cards.1.figure",
        ),
        title: t(
          "National-Development-Facts-Figures.cards.1.title",
        ),
        description: t(
          "National-Development-Facts-Figures.cards.1.description",
        ),
        locale: locale,
      },
      {
        id: 3,
        figure: t(
          "National-Development-Facts-Figures.cards.2.figure",
        ),
        title: t(
          "National-Development-Facts-Figures.cards.2.title",
        ),
        description: t(
          "National-Development-Facts-Figures.cards.2.description",
        ),
        locale: locale,
      },
    ],
  };

  const SimpleSliderData = {
    title: t("Companies-Slider-Title-Para.title"),
    para: t("Companies-Slider-Title-Para.para"),
    locale: locale,
    sliderData: [
      {
        id: t("Companies-Slider.slider-one.id"),
        src: t("Companies-Slider.slider-one.src"),
        alt: t("Companies-Slider.slider-one.alt"),
        title: t("Companies-Slider.slider-one.title"),
        locale: locale,
      },
      {
        id: t("Companies-Slider.slider-two.id"),
        src: t("Companies-Slider.slider-two.src"),
        alt: t("Companies-Slider.slider-two.alt"),
        title: t("Companies-Slider.slider-two.title"),
        locale: locale,
      },
      {
        id: t("Companies-Slider.slider-three.id"),
        src: t("Companies-Slider.slider-three.src"),
        alt: t("Companies-Slider.slider-three.alt"),
        title: t("Companies-Slider.slider-three.title"),
        locale: locale,
      },
      {
        id: t("Companies-Slider.slider-four.id"),
        src: t("Companies-Slider.slider-four.src"),
        alt: t("Companies-Slider.slider-four.alt"),
        title: t("Companies-Slider.slider-four.title"),
        locale: locale,
      },
    ],
  };

  const fundAllocationGrid = {
    title: t("Fund-Allocation-Grid.title"),
    para: t("Fund-Allocation-Grid.description"),
    locale: locale,
    cards: [
      {
        id: 1,
        src: "/assets/images/ndf-imgs/fund-allocation-img-1.svg",
        isText: false,
        isImage: true,
        locale: locale,
      },
      {
        id: 2,
        title: t("Fund-Allocation-Grid.cards.1.title"),
        number: t("Fund-Allocation-Grid.cards.1.number"),
        isText: true,
        isImage: false,
        locale: locale,
      },
      {
        id: 3,
        src: "/assets/images/ndf-imgs/fund-allocation-img-2.svg",
        isText: false,
        isImage: true,
        locale: locale,
      },
      {
        id: 4,
        title: t("Fund-Allocation-Grid.cards.3.title"),
        number: t("Fund-Allocation-Grid.cards.3.number"),
        isText: true,
        isImage: false,
        locale: locale,
      },
      {
        id: 5,
        title: t("Fund-Allocation-Grid.cards.4.title"),
        number: t("Fund-Allocation-Grid.cards.4.number"),
        isText: true,
        isImage: false,
        locale: locale,
      },
      {
        id: 6,
        src: "/assets/images/ndf-imgs/fund-allocation-img-3.svg",
        isText: false,
        isImage: true,
        locale: locale,
      },
      {
        id: 7,
        title: t("Fund-Allocation-Grid.cards.6.title"),
        number: t("Fund-Allocation-Grid.cards.6.number"),
        isText: true,
        isImage: false,
        locale: locale,
      },
      {
        id: 8,
        src: "/assets/images/ndf-imgs/fund-allocation-img-4.svg",
        isText: false,
        isImage: true,
        locale: locale,
      },
    ],
  };

  const privateEquitiesGrid = {
    title: t("Private-Equities-Grid.title"),
    para: t("Private-Equities-Grid.description"),
    locale: locale,
    cards: [
      {
        id: 1,
        image: "/assets/images/ndf-imgs/pri-eqt-img-1.svg",
        title: t("Private-Equities-Grid.cards.0.title"),
        description: t(
          "Private-Equities-Grid.cards.0.description",
        ),
        locale: locale,
      },
      {
        id: 2,
        image: "/assets/images/ndf-imgs/pri-eqt-img-2.svg",
        title: t("Private-Equities-Grid.cards.1.title"),
        description: t(
          "Private-Equities-Grid.cards.1.description",
        ),
        locale: locale,
      },
      {
        id: 3,
        image: "/assets/images/ndf-imgs/pri-eqt-img-3.svg",
        title: t("Private-Equities-Grid.cards.2.title"),
        description: t(
          "Private-Equities-Grid.cards.2.description",
        ),
        locale: locale,
      },
      {
        id: 4,
        image: "/assets/images/ndf-imgs/pri-eqt-img-4.svg",
        title: t("Private-Equities-Grid.cards.3.title"),
        description: t(
          "Private-Equities-Grid.cards.3.description",
        ),
        locale: locale,
      },
    ],
  };

  return (
    <React.Fragment>
      <NationalDevFund locale={locale}/>
    </React.Fragment>
  );
};

export default NationalDevelopmentFund;
