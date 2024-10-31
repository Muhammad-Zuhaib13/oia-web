import AboutWIthImg from "@/app/components/about-with-img/AboutWithImg";
import ImageBanner from "@/app/components/banners/ImageBanner";
import Economy from "@/app/components/sultanate-of-man/Economy";
import OmaninWorldEconomy from "@/app/components/sultanate-of-man/OmaninWorldEconomy";
import { useTranslations } from "next-intl";
import {getTranslations, unstable_setRequestLocale } from "next-intl/server";


export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({
    locale,
    namespace: "Oman",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const SultanateofOman: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const Oman = useTranslations("Oman");

  const ImageBannerData = {
    title: Oman("imageBanner.title"),
    description:Oman("imageBanner.description"),
    image:Oman("imageBanner.image"),
    locale: locale,
  };
  const SultanateofOma = {
    src: Oman("sultanateofOman.image"),
    alt: Oman("sultanateofOman.alt"),
    title: Oman("sultanateofOman.title"),
    locale: locale,
    paragraphs: [
      {
        id: 1,
        text: Oman("sultanateofOman.paragraphs.paraOne"),
        locale: locale,
      },
    ],
  };
  const peopleOfOman =  {
    src: Oman("peopleOfOman.image"),
    alt: Oman("peopleOfOman.alt"),
    title: Oman("peopleOfOman.title"),
    locale: locale,
    paragraphs: [
      {
        id: 1,
        text: Oman("peopleOfOman.paragraphs.paraOne"),
        locale:locale
      },
    ],
  };
  const maritimeTradeRoute =  {
    src: Oman("maritimeTradeRoute.image"),
    alt: Oman("maritimeTradeRoute.alt"),
    title: Oman("maritimeTradeRoute.title"),
    locale: locale,
    paragraphs: [
      {
        id: 1,
        text: Oman("maritimeTradeRoute.paragraphs.paraOne"),
        locale: locale,
      },
    ],
  };
  const omanInWorldEco = {
    title: Oman("omanInWorldEco.title"),
    para: Oman("omanInWorldEco.para"),
    locale: locale,
  };
  const numberCard = [
    {
      id: 1,
      number: Oman("numberCards.cardOne.number"),
      subtitle: Oman("numberCards.cardOne.subtitle"),
      locale: locale,
    },
    {
      id: 2,
      number:Oman("numberCards.cardTwo.number") ,
      subtitle: Oman("numberCards.cardTwo.subtitle"),
      locale: locale,
    },
    {
      id: 3,
      number:Oman("numberCards.cardThree.number"),
      subtitle: Oman("numberCards.cardThree.subtitle"),
      locale: locale,
    },
  ];
  const ecoTitlePara = {
    title: Oman("Economy.economyTiltePara.title"),
    para: Oman("Economy.economyTiltePara.para"),
    locale: locale,
  };
  const ecoCardsData = [
    {
      id: 1,
      src: Oman("Economy.cardsData.cardOne.src"),
      isText: false,
      isImage: true,
      locale:locale,
    },
    {
      id: 2,
      title: Oman("Economy.cardsData.cardTwo.title"),
      number:Oman("Economy.cardsData.cardTwo.number"),
      subText:Oman("Economy.cardsData.cardTwo.subText"),
      isText: true,
      isImage: false,
      locale:locale,
    },
    {
      id: 3,
      src:Oman("Economy.cardsData.cardThree.src"),
      isText: false,
      isImage: true,
      locale:locale,
    },
    {
      id: 4,
      title: Oman("Economy.cardsData.cardFour.title"),
      number: Oman("Economy.cardsData.cardFour.number"),
      subText:Oman("Economy.cardsData.cardFour.subText"),
      isText: true,
      isImage: false,
      locale:locale,
    },
    {
      id: 5,
      title: Oman("Economy.cardsData.cardFive.title"),
      number: Oman("Economy.cardsData.cardFive.number"),
      subText:Oman("Economy.cardsData.cardFive.subText"),
      isText: true,
      isImage: false,
      locale:locale,
    },
    {
      id: 6,
      src: Oman("Economy.cardsData.cardSix.src"),
      isText: false,
      isImage: true,
      locale:locale,
    },
    {
      id: 7,
      title: Oman("Economy.cardsData.cardSeven.title"),
      number: Oman("Economy.cardsData.cardSeven.number"),
      subText:Oman("Economy.cardsData.cardSeven.subText"),
      isText: true,
      isImage: false,
      locale:locale,
    },
    {
      id: 8,
      src: Oman("Economy.cardsData.cardEight.src"),
      isText: false,
      isImage: true,
      locale:locale,
    },
  ];
  return (
    <section className="ndf-page">
      <div className="">
        <ImageBanner
          data={ImageBannerData}
          width={"1051px"}
        />
      </div>
      <div>
        <AboutWIthImg
          data={SultanateofOma}
          orderText={1}
          orderImg={2}
        />
      </div>
      <div className="">
        <Economy ecoTitlePara={ecoTitlePara} ecoCardsData={ecoCardsData} locale={locale}  />
      </div>
      <div>
        <OmaninWorldEconomy omanInWorldEco={omanInWorldEco} numberCard={numberCard} locale={locale} />
      </div>
      <div className="bg-[url('/assets/images/sultanate-oman-imgs/maritime-trade-route-bg-img.png')] bg-cover lg:py-[100px] sm:py-[50px] py-[40px]">
        <AboutWIthImg
          data={maritimeTradeRoute}
          orderText={2}
          orderImg={1}
          marginY="0px"
          isShowMarginYResp={false}
        />
      </div>
      <div className="">
        <AboutWIthImg
          data={peopleOfOman}
          orderText={1}
          orderImg={2}

        />
      </div>
    </section>
  );
};

export default SultanateofOman;
