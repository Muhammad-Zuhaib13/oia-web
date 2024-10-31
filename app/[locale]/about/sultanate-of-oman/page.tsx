import KeyIndicator from "@/app/components/about/KeyIndicator";
import OmanVision from "@/app/components/about/OmanVision";
import ImageBanner from "@/app/components/banners/ImageBanner";
import AccordionWithImg from "@/app/components/common/AccordionWithImg";
import AsideBorderTextWithImg from "@/app/components/common/AsideBorderTextWithImg";
import NewHighLightSection from "@/app/components/common/NewHighLightSection";
import PolygonBg from "@/app/components/common/PolygonBg";
import SimpleImgSlider from "@/app/components/sliders/SimpleImgSlider";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
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
    namespace: "About",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}

interface AboutProps {
  params: {
    locale: string;
  };
}

const About: React.FC<AboutProps> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("About");

  type BannerData = {
    title: string;
    description: string;
    image: string;
    logoTitle?: boolean;
    locale?: string;
  };
  interface DataItem {
    title: string;
    para: string;
    card: {
      id: number;
      image: string;
      name: string;
      role: string;
      locale?: string;
    }[];
    locale?: string;
  }

  const bannerData: BannerData = {
    title: "Sultanate of Oman",
    description: "",
    image:
      "/assets/images/about/sultanate-of-oman/banner-img.jpg",
    locale: locale,
  };
  const ArbannerData: BannerData = {
    title: "سلطنة عمان",
    description: "",
    image:
      "/assets/images/about/sultanate-of-oman/banner-img.jpg",
    locale: locale,
  };
  const newOneDataTextWithImg = {
    title: "Sultanate of Oman",
    paras: [
      "Sultanate of Oman, which consists of 11 governorates, is located on the southeastern coast of the Arabian Peninsula. Its population is 5,217,754 million, and its land area is 309,500 square kilometers, as estimated by the National Center for Statistics and Information at the end of August 2024. Due to its strategic geographic location, Oman's climate varies between hot and humid in coastal areas, hot and dry in the inland desert, moderate and cold in the mountains, and moderate due to monsoon winds in the far south of the country from June to September.",
    ],
    list: [
      // "The Sultanate of Oman is located on the southeastern coast of the Arabian Peninsula.",
      // "It enjoys a strategic location on the trade route between Europe and Asia.",
    ],
    img: "/assets/images/about/sultanate-of-oman/sultanate-of-oman.jpg",
  };
  const ArnewOneDataTextWithImg = {
    title: "عن سلطنة عمان",
    paras: [
      "تقع سلطنة عمان التي تضم 11 محافظة على الساحل الجنوبي الشرقي لشبه الجزيرة العربية. ويبلغ عدد سكانها 5,217,754 مليون نسمة على أرض مساحتها 309.500 كيلومترمربع كما تم تقديره في نهاية شهر اغسطس 2024 من قبل المركز الوطني للإحصاء والمعلومات. ونظراً لموقعها الجغرافي الإستراتيجي،يتنوع الطقس في سلطنة عمان ما بين حار رطب في المناطق الساحلية، وحارجاف في الصحراء الداخلية، ومعتدل وبارد في الجبال، ومعتدل بفعل الرياح الموسمية في الصيف في أقصى الجنوب من البلاد ابتداء من يونيو إلى سبتمبر.",
    ],
    list: [
      // "تقع سلطنة عمان على الساحل الجنوبي الشرقي لشبه الجزيرة العربية.",
      // "تتمتع بموقع إستراتيجي على خط التجارة بين أوروبا وآسيا.",
    ],
    img: "/assets/images/about/sultanate-of-oman/sultanate-of-oman.jpg",
  };
  const newTwoDataTextWithImg = {
    title: "People & Culture",
    paras: [
      "The Omani people enjoy a rich and diverse culture rooted in ancient history and a long-standing heritage. This culture is characterized by generosity and hospitality, which are integral parts of the Omani identity. Omanis are known for warmly welcoming guests and offering generous hospitality. Traditions and customs play an important role in their lives, with a strong commitment to Islamic values reflected in daily behavior and social and religious events. Throughout history, Omanis have maintained strong ties to their land. Through cutting mountains and building irrigation systems (aflaj), they have demonstrated an ability to adapt to harsh environments while preserving life. This deep relationship between people and land has formed the foundation of Omani civilization and continues to evolve, keeping pace with the modern world while preserving its original identity.",
    ],
    list: [],
    img: "/assets/images/about/sultanate-of-oman/culture.jpg",
  };
  const ArnewTwoDataTextWithImg = {
    title: "الناس والثقافة",
    paras: [
      "يتمتع الإنسان العُماني بثقافة غنية ومتنوعة تمتد جذورها إلى تاريخ عريق وإرث حضاري طويل، وتتسم هذه الثقافة بالكرم والضيافة التي تعد جزءًا أساسيًا من الهوية العمانية، حيث يُعرف العمانيون بترحيبهم بالضيوف وتقديمهم الضيافة بكل سخاء. كما تؤدي العادات والتقاليد دورًا مهمًا في حياتهم مع حرصهم على الالتزام بالقيم الإسلامية التي تنعكس في السلوك اليومي للأفراد وفي المناسبات الاجتماعية والدينية. وعلى مر العصور، ارتبط الإنسان العماني بأرضه بروابط وثيقة، فمن خلال شق الجبال وبناء الأفلاج، أثبت قدرته على التكيف مع البيئة القاسية، وحافظ على استمرارية الحياة. هذه العلاقة المتأصلة بين الإنسان والأرض شكلت أساس الحضارة العمانية، واستمرت في التطور ومواكبة العالم الحديث مع الحفاظ على الهوية الأصلية.",
    ],
    list: [],
    img: "/assets/images/about/sultanate-of-oman/culture.jpg",
  };
  const highlightsSecOne = {
    titleMain:
      "Future Development Goals for Oman's Economy",
    mainImg:
      "/assets/images/about/sultanate-of-oman/future-dev-om.jpg",
    firstTitle: "Vision 2040",
    firstDesc:
      "Aims to diversify the economy, create new job opportunities, and achieve sustainable development.",
    secondTitle: "Focus on Innovation and Technology",
    secondList: [
      "Developing a digital economy.",
      "Enhancing research and development.",
      "Supporting entrepreneurship.",
    ],
    thirdTitle: "Environmental Conservation",
    thirdList: [
      "Green growth.",
      "Sustainable use of natural resources.",
    ],
  };

  const keyIndicatorOne = {
    title: "Key Indicator",
    cards: [
      {
        title: "GDP",
        value: "44.08",
        desc: "Billion Omani Rials",
        year: "(2023)",
      },
      {
        title: "GDP",
        value: "8,936.1",
        desc: "Per capita: 8,936.1 Omani Rials",
        year: "(2023)",
      },
      {
        title: "Annual growth",
        value: "4.5%",
        desc: "Average annual growth rate",
        year: "(2010-2020)",
      },
    ],
    imageUrl:
      "/assets/images/about/sultanate-of-oman/key-indicator.jpg",
  };
  const ArkeyIndicatorOne = {
    title: "مؤشرات اقتصادية رئيسية",
    cards: [
      {
        title: "الناتج المحلي الإجمالي",
        value: "44.08",
        desc: "مليار ريال عُماني ",
        year: "(2023)",
      },
      {
        title: "نصيب الفرد من الناتج المحلي الإجمالي",
        value: "8,936.1",
        desc: "ريال عُماني ",
        year: "(2023)",
      },
      {
        title: "متوسط معدل النمو السنوي",
        value: "4.5%",
        desc: "",
        year: "(2010-2020)",
      },
    ],
    imageUrl:
      "/assets/images/about/sultanate-of-oman/key-indicator.jpg",
  };
  const howerTextImgTabs = {
    title: "Pillars of Economic Growth in Oman",
    para: "",
    locale: locale,
    cards: [
      {
        id: 1,
        title: "Oil and Gas:",
        description:
          "The backbone of Oman's economy, contributing significantly to GDP and government revenues.",
        img: "/assets/images/about/new-img.jpg",
      },
      {
        id: 2,
        title: "Diversification of Income Sources:",
        description:
          "Focus on developing promising sectors like tourism, agriculture, industry, and mining.",
        img: "/assets/images/about/new-img-1.jpg",
      },
      {
        id: 3,
        title: "Industrial Zones and Ports:",
        description: "",
        list: [
          {
            id: 1,
            title: "Duqm:",
            desc: "The fourth main port (commercial operations since 2013).",
          },
          {
            id: 2,
            title: "Sohar and Salalah:",
            desc: "Free zones and industrial hubs.",
          },
        ],
        img: "/assets/images/about/new-img.jpg",
      },
    ],
  };
  const omanVision = {
    desc: "These incentives are part of Oman's Vision 2040, which seeks to create an investment-friendly environment and enhance the role of the private sector in investment. It is worth mentioning that many investment sectors, such as mining, energy, food, fisheries, logistics, and tourism, are implementing the state's plans for economic diversification.",
    img: "/assets/icons/oman-2024-clr.svg",
    imgDark:"/assets/icons/oman-2024-clr-w.svg",
    alt: "Oman 2024",
  };
  const AromanVision = {
    desc: "تأتي هذه الحوافز كجزء من رؤية عُمان 2040 التي تسعى إلى إيجاد مناخ يشجّع الاستثمار ويعزز دور القطاع الخاص في الاستثمار. الجدير بالذكر أن العديد من القطاعات الاستثمارية، مثل التعدين والطاقة والغذاء والمصائد السمكية واللوجستيات والسياحة، تطبّق خطط الدولة للتنوع الاقتصادي.",
    img: "/assets/icons/oman-2024-clr.svg",
    imgDark:"/assets/icons/oman-2024-clr-w.svg",
    alt: "Oman 2024",
  };
  const sliderData = {
    sliderData: [
      {
        id: 1,
        src: "/assets/images/about/sultanate-of-oman/slide-5.svg",
        link:"https://investoman.om/",
        alt: "Invest Oman",
      },
      {
        id: 2,
        src: "/assets/images/about/sultanate-of-oman/slide-1.svg",
        link:"https://opaz.gov.om/en",
        alt: "Public Authority for Special Economic Zones",
      },
      {
        id: 3,
        src: "/assets/images/about/sultanate-of-oman/slide-2.svg",
        link:"https://www.ncsi.gov.om/Pages/NCSI.aspx",
        alt: "National Center for Statistical Information",
      },
      {
        id: 4,
        src: "/assets/images/about/sultanate-of-oman/slide-4.svg",
        link:"https://tejarah.gov.om/",
        alt: "Ministry of Commerce, Industry and Investment Promotion",
      },
      {
        id: 5,
        src: "/assets/images/about/sultanate-of-oman/slide-3.svg",
        link:"https://www.oman2040.om/?lang=en",
        alt: "Oman Vision 2040",
      },
    ],
  };
  const accordionWIthImgData = {
    title: "The Business Environment",
    src: "/assets/images/busi.jpg",
  };
  const AraccordionWIthImgData = {
    title: "بيئة الأعمال",
    src: "/assets/images/busi.jpg",
  };
  const asideBordTextImg = {
    title: "Enhancing Capabilities and Innovation:",
    imgSrc: "/assets/images/planeco.jpg",
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "Oil and Gas:",
        paras: [
          "The backbone of Oman's economy, contributing significantly to GDP and government revenues.",
        ],
      },
      {
        id: 2,
        title: "Diversification of Income Sources:",
        paras: [
          "Focus on developing promising sectors like tourism, agriculture, industry, and mining.",
        ],
      },
      {
        id: 3,
        title: "Industrial Zones and Ports:",
        description: "",
        list: [
          {
            id: 1,
            title: "Duqm:",
            desc: "The fourth main port (commercial operations since 2013).",
          },
          {
            id: 2,
            title: "Sohar and Salalah:",
            desc: "Free zones and industrial hubs.",
          },
        ],
      },
    ],
  };
  const ArasideBordTextImg = {
    title: "ركائز النمو الاقتصادي في سلطنة عمان:",
    imgSrc: "/assets/images/planeco-flip.jpg",
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "النفط والغاز:",
        paras: [
          "العمود الفقري للاقتصاد العُماني، حيث يُسهم بنسبة كبيرة في الناتج المحلي الإجمالي والإيرادات الحكومية.",
        ],
      },
      {
        id: 2,
        title: "تنويع مصادر الدخل:",
        paras: [
          "التركيز على تنمية قطاعات واعدة مثل السياحة والزراعة والصناعة والتعدين.",
        ],
      },
      {
        id: 3,
        title: "المناطق الصناعية والموانئ:",
        description: "",
        list: [
          {
            id: 1,
            title: "الدقم:",
            desc: "الميناء الرئيسي الرابع (تشغيل تجاري 2013).",
          },
          {
            id: 2,
            title: "صحار وصلالة: ",
            desc: "مناطق حرة ومراكز صناعية.",
          },
        ],
      },
    ],
  };

  const ArnewDataHightlights = {
    title: "أهداف التنمية المستقبلية لاقتصاد سلطنة عمان",
    mainImg: "/assets/images/future-dev.jpg",
    subTitle: "",
    paras: [
      "Public markets invest in securities and tradable instruments that can be converted into liquidity, including global equities, local stocks, global bonds, multi-asset funds, and short-term assets, in addition to investing with external asset managers across various asset classes. In 2023, public markets achieved returns that exceeded expectations, reaching 9.8% compared to the targeted return of 5% for the generations fund, attributed to the exceptional performance of global equity markets, supported by promising prospects for the artificial intelligence sector and positive financial results for listed companies.",
    ],

    cards: [
      {
        id: 1,
        cardTitle: "رؤية 2040",
        cardParas: [
          "تهدف إلى تنويع الاقتصاد، وإيجاد فرص عمل جديدة، وتحقيق التنمية المستدامة.",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "التركيز على الابتكار والتكنولوجيا",
        cardParas: [],
        list: [
          "تطوير اقتصاد رقمي.",
          "تعزيز البحث والتطوير.",
          "دعم ريادة الأعمال.",
        ],
      },
      {
        id: 3,
        cardTitle: "المحافظة على البيئة",
        cardParas: [
        ],
        list: [
          "تنمية خضراء.",
          "استخدام مستدام للموارد الطبيعية.",
        ],
      },
    ],
  };

  const ArhighlightsSecTwo = {
    title: "لماذا تستثمر في عمان؟",
    mainImg:
      "/assets/images/about/sultanate-of-oman/cul-ar.jpg",

    subTitle: "",
    paras: [],

    cards: [
      {
        id: 1,
        cardTitle: "استثمر في عمان",
        cardParas: [
          "سلطنة عُمان: شريكك في فرص الاستثمار الواعدة مميزات",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "الاستثمار في سلطنة عُمان",
        cardParas: [],
        list: [
          "الموقع الجغرافي الفريد",
          " الاقتصاد المستقر",
          " بنية أساسية قوية",
          " سياسات حكومية تشجّع الاستثمار",
          " اتباع العديد من الإجراءات الحديثة التي تُحفّز بيئة الأعمال",
        ],
      },
      {
        id: 3,
        cardTitle: "وتشمل حوافز الاستثمار في عُمان ما يلي",

        list: [
          "تخفيض ضرائب الدخل عن المنشآت الصغيرة والمتوسطة. ",
          "منح تصاريح الإقامة طويلة الأجل للمستثمرين الأجانب. ",
          "تبسيط الإجراءات المتعلقة بالأنشطة التجارية. ",
          ,
        ],
      },
    ],
  };
  const highlightsSecTwo = {
    title: "Why Invest in Oman?",
    mainImg:
      "/assets/images/about/sultanate-of-oman/invest-oman.jpg",

    subTitle: "",
    paras: [],

    cards: [
      {
        id: 1,
        cardTitle: "Invest in Oman",
        cardParas: [
          "Sultanate of Oman: Your Partner in Promising Investment Opportunities",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "Why of Invest in Oman",
        cardParas: [],
        list: [
          "Unique geographic location.",
          "Stable economy.",
          "Strong infrastructure.",
          "Government policies that encourage investment.",
          "Adoption of various modern procedures that stimulate the business environment",
        ],
      },
      {
        id: 3,
        cardTitle: "Investment incentives in Oman include",

        list: [
          "Reduced income taxes for small and medium enterprises.",
          "Granting long-term residency permits for foreign investors.",
          "Simplifying procedures related to business activities.",
        ],
      },
    ],
  };

  const newDataHightlights = {
    title: "Future Development Goals for Oman's Economy ",
    mainImg: "/assets/images/future-dev.jpg",
    subTitle: "",
    paras: [
      "Public markets invest in securities and tradable instruments that can be converted into liquidity, including global equities, local stocks, global bonds, multi-asset funds, and short-term assets, in addition to investing with external asset managers across various asset classes. In 2023, public markets achieved returns that exceeded expectations, reaching 9.8% compared to the targeted return of 5% for the generations fund, attributed to the exceptional performance of global equity markets, supported by promising prospects for the artificial intelligence sector and positive financial results for listed companies.",
    ],

    cards: [
      {
        id: 1,
        cardTitle: "Vision 2040",
        cardParas: [
          "Aims to diversify the economy, create new job opportunities, and achieve sustainable development.",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "Focus on Innovation and Technology",
        cardParas: [],
        list: [
          "Developing a digital economy.",
          "Enhancing research and development.",
          "Supporting entrepreneurship.",
        ],
      },
      {
        id: 3,
        cardTitle: "Environmental Conservation",
        cardParas: [],
        list: [
          "Green growth.",
          "Sustainable use of natural resources.",
        ],
      },
    ],
  };
  return (
    <div className="about-section">
      <ImageBanner
        data={locale === "en" ? bannerData : ArbannerData}
      />

      <TextWIthImg
        data={
          locale === "en"
            ? newOneDataTextWithImg
            : ArnewOneDataTextWithImg
        }
        orderText={1}
        orderImg={2}
        isListShow={true}
        locale={locale}
        swap={false}
      />
      <PolygonBg>
        <KeyIndicator
          data={
            locale === "en"
              ? keyIndicatorOne
              : ArkeyIndicatorOne
          }
          locale={locale}
        />
      </PolygonBg>
      <AsideBorderTextWithImg
        data={
          locale === "en"
            ? asideBordTextImg
            : ArasideBordTextImg
        }
        locale={locale}
      />
      <PolygonBg>
        <NewHighLightSection
          locale={locale}
          data={
            locale === "en"
              ? newDataHightlights
              : ArnewDataHightlights
          }
          classNameContainer=""
          swap={true}
        />
      </PolygonBg>

      <AccordionWithImg
        data={
          locale === "en"
            ? accordionWIthImgData
            : AraccordionWIthImgData
        }
        locale={locale}
      />
      <PolygonBg>
        <TextWIthImg
          data={
            locale === "en"
              ? newTwoDataTextWithImg
              : ArnewTwoDataTextWithImg
          }
          orderText={2}
          orderImg={1}
          isShowMarginYResp={false}
          marginY="0px"
          swap={true}
        />
      </PolygonBg>

      <NewHighLightSection
        locale={locale}
        data={
          locale === "en"
            ? highlightsSecTwo
            : ArhighlightsSecTwo
        }
        classNameContainer="py-[60px] lg:py-[100px]"
        swap={true}
      />
      <OmanVision
        locale={locale}
        data={locale === "en" ? omanVision : AromanVision}
      />
      <SimpleImgSlider
        locale={locale}
        data={sliderData?.sliderData}
      />
    </div>
  );
};

export default About;
