import ImageBanner from "@/app/components/banners/ImageBanner";
import AsideBorderTextWithImg from "@/app/components/common/AsideBorderTextWithImg";
import NewsHighlights from "@/app/components/common/NewHighLightSection";
import NumbersGrid from "@/app/components/common/NumbersGrid";
import { useTranslations } from "next-intl";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "National-Economy",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
interface NationalEconomyProps {
  params: {
    locale: string;
  };
}

const NationalEconomy: React.FC<NationalEconomyProps> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("National-Economy");

  type BannerData = {
    title: string;
    description: string;
    image: string;
    logoTitle?: boolean;
    locale?: string;
  };
  const bannerData: any = {
    title: "Financial Sustainability",
    description: "",
    image: "/assets/images/banner/national-economy.jpg",
    tabImg:
      "/assets/images/banner/national-economy-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/national-economy-mobile-banner.jpg",
    locale: locale,
  };
  const ARbannerData: any = {
    title: "الإستدامة المالية",
    description: "",
    image: "/assets/images/banner/national-economy.jpg",
    tabImg:
      "/assets/images/banner/national-economy-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/national-economy-mobile-banner.jpg",
    locale: locale,
  };
  const numbersCard = [
    {
      id: 1,
      figure: "800",
      year: "2023",
    },
    {
      id: 2,
      figure: "813",
      year: "2022",
    },
    {
      id: 3,
      figure: "1,200",
      year: "2021",
    },
    {
      id: 4,
      figure: "500",
      year: "2020",
    },
    {
      id: 5,
      figure: "400",
      year: "2019",
    },
    {
      id: 6,
      figure: "500",
      year: "2018",
    },
    {
      id: 7,
      figure: "700",
      year: "2017",
    },
    {
      id: 8,
      figure: "1,500",
      year: "2016",
    },
  ];
  const newDataHightlights = {
    title: "Reducing the Debts of Subsidiary Companies",
    subTitle: "",
    secondTitle: "",
    paras: [],
    mainImg:
      "/assets/images/oia-impact/national-eco/currency-stability.jpg",
    cards: [
      {
        id: 1,
        cardTitle:
          "Reducing the Debts of Subsidiary Companies",
        cardParas: [
          "Since its establishment, Oman Investment Authority has been working to alleviate the debt burden of its subsidiary companies, focusing on reducing the public debt ratio.",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "Notable Achievements",
        cardParas: [],
        list: [
          "300 million Omani Rials of debt were pre-paid in 2023 ahead of their due dates.",
          "Debt has decreased by 24%, amounting to 2.4 billion Omani Rials by the end of 2023.",
        ],
      },
      {
        id: 3,
        cardTitle:
          "Decrease in the Debt of the Authority's Subsidiaries (in billion Omani Rials):",
        cardParas: [],
        list: [
          "2023: 7.681",
          "2022: 8.688",
          "2021: 10.957",
          "2020: 10.135",
        ],
      },
    ],
  };
  const ARnewDataHightlights = {
    title: "تخفيض مديونية شركات الجهاز",
    subTitle: "",
    secondTitle: "",
    paras: [],
    mainImg:
      "/assets/images/oia-impact/national-eco/currency-stability.jpg",
    cards: [
      {
        id: 1,
        cardTitle: "•خفض ديون الشركات التابعة للجهاز",
        cardParas: [
          "منذ تأسيسه، يعمل جهاز الاستثمار العماني على تخفيف عبء مديونية الشركات التابعة له، مع التركيز على تقليل نسبة الدين العام.",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "إنجازات بارزة:",
        cardParas: [],
        list: [
          "انخفاض المديونية بنسبة % 24  أي بقيمة 2.4 مليار ر.ع بنهاية 2023م",
          "سداد 300  مليون ر.ع من الديون خلال 2023م قبل موعد استحقاقها.",
        ],
      },
      {
        id: 3,
        cardTitle:
          "انخفاض مديونية الشركات التابعة للجهاز (بالمليار ريال عماني)",
        cardParas: [],
        list: [
          "2023: 7.681",
          "2022: 8.688",
          "2021: 10.957",
          "2020: 10.135",
        ],
      },
    ],
  };
  const asideBordTextImg = {
    title: "State Budget",
    imgSrc:
      "/assets/images/oia-impact/national-eco/national-flag.jpg",
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "Contributing to the State Budget",
        paras: [
          "Oman Investment Authority consistently supports the state’s general budget through investment returns and profits.",
        ],
      },
      {
        id: 2,
        title: "Contributions of the Authority",
        paras: [
          "In 2023, the budget was supplemented with 800 million Omani Rials, bringing the total to over 6 billion Omani Rials since 2016.",
        ],
      },
      {
        id: 3,
        title:
          "Details of Contributions to the State Budget Since 2016 (in million Omani Rials):",
      },
    ],
  };
  const ARasideBordTextImg = {
    title: "استقرار الميزانية",
    imgSrc:
      "/assets/images/oia-impact/national-eco/national-flag.jpg",
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "رفد الموازنة العامة للدولة",
        paras: [
          "يرفد جهاز الاستثمار العماني الموازنة العامة للدولة بصورة مستمرة من خلال عائدات الاستثمار والأرباح.",
        ],
      },
      {
        id: 2,
        title: "إسهامات الجهاز:",
        paras: [
          "خلال 2023م تم رفد الموازنة بـ 800 مليون ر.ع، ليصل الإجمالي إلى أكثر 6 مليارات ر.ع منذ 2016م",
        ],
      },
      {
        id: 3,
        title:"تفاصيل رفد الموازنة العامة للدولة منذ 2016م (بالمليون ريال عماني)", 
      },
    ],
  };
  return (
    <div className="natonal-economy-section">
      <div>
        <ImageBanner
          data={locale === "en" ? bannerData : ARbannerData}
        />
      </div>
      <div className="flex flex-col gap-[50px] pt-[100px]">
        <AsideBorderTextWithImg
          data={
            locale === "en"
              ? asideBordTextImg
              : ARasideBordTextImg
          }
          locale={locale}
          className="!py-0"
          swap={true}
          isUseChangeClrDark={true}
        />
        <NumbersGrid data={numbersCard} locale={locale} />
      </div>
      <div>
        <NewsHighlights
          locale={locale}
          data={
            locale === "en"
              ? newDataHightlights
              : ARnewDataHightlights
          }
          classNameContainer="py-[60px] lg:py-[100px]"
          isUseChangeClrDark={true}
        />
      </div>
    </div>
  );
};

export default NationalEconomy;
