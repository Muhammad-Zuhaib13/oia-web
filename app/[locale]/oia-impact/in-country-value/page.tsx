import ImageBanner from "@/app/components/banners/ImageBanner";
import AsideBorderTextWithImg from "@/app/components/common/AsideBorderTextWithImg";
import NewsHighlights from "@/app/components/common/NewHighLightSection";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWithImgandPattern from "@/app/components/common/TextWithImgandPattern";
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
    namespace: "In-Country",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}

const Home: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("In-Country");

  type BannerData = {
    title: string;
    description: string;
    image: string;
    locale?: string;
    tabImg?: string;
    mobileImg?: string;
  };

  const bannerData: BannerData = {
    title: "In-Country Value",
    description: "",
    image:"/assets/images/banner/in-country-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/in-country-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/in-country-mobile-banner.jpg",
    locale: locale,
  };
  const ARbannerData: BannerData = {
    title: "القيمة المحلية المضافة",
    description: "",
    image:"/assets/images/banner/in-country-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/in-country-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/in-country-mobile-banner.jpg",
    locale: locale,
  };
  const data = {
    src: "/assets/images/inCountry/aboutSection.svg",
    alt: t("about.image.alt"),
    title: t("about.title"),
    locale: locale,
    paragraphs: [
      {
        id: 1,
        text: t("about.paragraphs.first"),
        locale: locale,
      },
      {
        id: 1,
        text: t("about.paragraphs.second"),
        locale: locale,
      },
    ],
  };
  const profileData = {
    title: t("profile.title"),
    locale: locale,
    description: t("profile.description"),
    cards: [
      {
        id: 1,
        image: 1,
        name: t("profile.cards.1.name"),
        role: t("profile.cards.1.role"),
        locale: locale,
      },
      {
        id: 2,
        image: 2,
        name: t("profile.cards.2.name"),
        role: t("profile.cards.2.role"),
        locale: locale,
      },
      {
        id: 3,
        image: 3,
        name: t("profile.cards.3.name"),
        role: t("profile.cards.3.role"),
        locale: locale,
      },
      {
        id: 4,
        image: 4,
        name: t("profile.cards.4.name"),
        role: t("profile.cards.4.role"),
        locale: locale,
      },
    ],
  };
  const textWithImgandPattern ={
    bgSrc:"/assets/images/inCountryBanner.svg",
    title:"Qimam Platforms",
    paras:[
"Qimam Digital Platform facilitates communication between small and medium enterprises (SMEs) and companies affiliated with Oman Investment Authority. It monitors inquiries and suggestions related to In-Country Value, research and development programs, and innovation. It also helps researchers and innovators connect with companies to implement their initiatives."
    ],
    cta:{
      label:"Qimam Platform",
      url:"https://qimam.oia.gov.om/",
    }
  }
  const ARtextWithImgandPattern ={
    bgSrc:"/assets/images/inCountryBanner.svg",
    title:"منصة قمم",
    paras:[
`تسهل منصة "قمم" الرقمية التواصل بين المؤسسات الصغيرة والمتوسطة والشركات التابعة لجهاز الاستثمار العماني، وذلك من خلال رصد الاستفسارات والمقترحات المتعلقة بالقيمة المحلية المضافة، وبرامج البحث، والتطوير، والابتكار. كما تساعد الباحثين والمبتكرين على التواصل مع الشركات لتنفيذ مبادراتهم.`
    ],
    cta:{
      label:"منصة قمم",
      url:"",
    }
  }
  const qimamData = {
    bannerSrc: "/assets/images/inCountryBanner.svg",
    alt: t("qimam-component.image.alt"),
    title: t("qimam-component.title"),
    description: t("qimam-component.description"),
    btnTitle: t("qimam-component.btnTitle"),
    imgPatternEn:
      "/assets/images/inCountry/diamond-vector.svg",
    imgPatternAr:
      "/assets/images/inCountry/inCountryBannerPatternAr.png",
    locale: locale,
  };
  const aboutICVData = {
    title: "About ICV",
    paras: [
      "In a move to boost the national economy and diversify income sources, Oman Investment Authority established the Directorate General for In-Country Value (ICV) in January 2022.",
      "OIA aims to increase local contributions to the economy by fostering research, development, and innovation, enhancing the capabilities of Omani workers, and supporting small and medium-sized enterprises (SMEs).",
    ],
    list: [],
    img: "/assets/images/oia-impact/national-eco/about-icv.jpg",
  };
  const ARaboutICVData = {
    title: "ملخص القيمة المحلية المضافة",
    paras: [
"في خطوة نحو تعزيز الاقتصاد الوطني وتنويع مصادر الدخل؛ أنشأ جهاز الاستثمار العماني مديرية عامة للقيمة المحلية المضافة في يناير 2022م.",
"حيث يهدف الجهاز إلى زيادة الإسهامات المحلية في الاقتصاد من خلال تطوير البحوث والتطوير والابتكار، وتعزيز قدرات القوى العاملة العمانية، ودعم المؤسسات الصغيرة والمتوسطة."
],
    list: [],
    img: "/assets/images/oia-impact/national-eco/about-icv.jpg",
  };
  const newTowDataTextWithImg = {
    title: "Mandatory List",
    btn: {
      label: "Download",
      link:"/icv/Mandatory List - En 2.0 - To Public.pdf"
    },
    paras: [
" Services and products that companies affiliated with Oman Investment Authority are required to purchase and procure from local companies. The list is updated periodically.",
`The first version of the Mandatory List included a range of services and products that must be purchased from the local market, encompassing 103 products and services, of which 52 products are required to have a "Made in Oman" certification. In the second version, more than 100 additional products and services were added to the list.`
],
    list: [],
    img: "/assets/images/oia-impact/national-eco/mandatory-img.jpg",
  };
  const ARnewTowDataTextWithImg = {
    title: "القائمة الإلزاميـــة",
    btn: {
      label: "ملف",
      link:"/icv/Mandatory List-Ar 2.0-To Public.pdf"
    },
    paras: [
"ي الخدمات والمنتجات التي يجب على الشركات التابعة للجهاز شراؤها وتوريدها من شركات محلية، حيث يتم تحديث القائمة بصورة دورية.",
"تضمنت النســــخة الأولى مـن القائمـة الإلزامية مجموعـــــة مـن الخدمــــــات والمنتجـات التـي يجـب شراؤها مـن الســوق المحلـي، حيـث تضمنـت ١٠٣ منتجات وخدمة ، ٥٢ مـــــــن المنتجـات يجـب أن تكـون حاصلـة علـى شـهادة (صنـع فـي عمـان) ، وأضيف على النسخة الثانية من القائمـــة أكثر من ١٠٠ منتج وخدمة."
    ],
    list: [],
    img: "/assets/images/oia-impact/national-eco/mandatory-img.jpg",
  };
  const newDataHightlights = {
    title:
      "Key figures and achievements in 2023 have strengthened the role of SMEs:",
    subTitle: "",
    paras: [],
    mainImg: "/assets/images/oia-impact/national-eco/acheivement-2023.jpg",
    cards: [
      {
        id: 1,
        cardTitle: "Supplier Development:",
        cardParas: [
          "Over 20 SMEs have been approved, covering sectors such as food, industry, technology, and logistics.",
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "Business Scope Allocation:",
        cardParas: [
          "More than 25 new work scopes have been assigned to local companies.",
        ],
        list: [],
      },
      {
        id: 3,
        cardTitle: "Strategic Partnerships:",
        cardParas: [
          "Agreements and memorandums of understanding have been signed with government and academic entities to study value chains and identify new opportunities to support SMEs.",
        ],
        list: [],
      },
    ],
  };
  const ARnewDataHightlights = {
    title:"أرقام ومؤشرات وإنجازات في عام 2023م عززت من دور المؤسسات الصغيرة والمتوسطة:",
    subTitle: "",
    paras: [],
    mainImg: "/assets/images/oia-impact/national-eco/acheivement-2023.jpg",
    cards: [
      {
        id: 1,
        cardTitle: "تطوير الموردين:",
        cardParas: [

"اعتماد أكثر من 20 مؤسسة صغيرة ومتوسطة تغطي قطاعات متنوعة مثل الغذاء، والصناعة، والتكنولوجيا واللوجستيات."        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "تخصيص نطاق الأعمال:",
        cardParas: [
          "اعتماد أكثر من 25 نطاق عمل جديد للمؤسسات المحلية"
        ],
        list: [],
      },
      {
        id: 3,
        cardTitle: "الشراكات الإستراتيجية:",
        cardParas: [
          "توقيع اتفاقيات ومذكرات تفاهم مع جهات حكومية وأكاديمية لدراسة سلاسل القيمة وتحديد فرص جديدة لدعم المؤسسات الصغيرة والمتوسطة."
        ],
        list: [],
      },
    ],
  };
  const newDataHightlightsTow = {
    title: "Tangible Results:",
    subTitle: "",
    paras: [],
    mainImg: "/assets/images/oia-impact/national-eco/tangible-results.jpg",
    cards: [
      {
        id: 1,
        cardTitle: "Increased Spending on SMEs:",
        cardParas: [
          "Expenditure on SMEs grew from OMR 187 million in 2022 to OMR 620.2 million in 2023."
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle:
          "Increased SME Share of Total Supply Chain Spending:",
        cardParas: [
          "The share of SMEs in total supply chain expenditures rose from 10.9% to 16.8% in 2023, reflecting the success of the program in directing spending towards the local economy.",
        ],
        list: [],
      },
      {
        id: 3,
        cardTitle: "Mandatory List:",
        cardParas: [
"More than 100 new products and services were added to the second edition of the mandatory list for OIA subsidiaries."
        ],
        list: [],
      },
    ],
  };
  const ARnewDataHightlightsTow = {
    title: "نتائج ملموسة:",
    subTitle: "",
    paras: [],
    mainImg: "/assets/images/oia-impact/national-eco/tangible-results.jpg",
    cards: [
      {
        id: 1,
        cardTitle:
         "زيادة الإنفاق على المؤسسات الصغيرة والمتوسطة:",
        cardParas: [
" ارتفع الإنفاق على هذه المؤسسات من 187 مليون ريال عماني في 2022م إلى .6202 مليون ريال عماني في 2023"
        ],
        list: [],
      },
      {
        id: 2,
        cardTitle: "زيادة حصة المؤسسات الصغيرة والمتوسطة من إجمالي المصروفات على سلسلة التوريد:",
        cardParas: [
" ارتفعت هذه الحصة من .910  % إلى .816% في 2023، مما يعكس نجاح البرنامج في توجيه الإنفاق نحو الاقتصاد المحلي."
        ],
        list: [],
      },
      {
        id: 3,
        cardTitle: "القائمة الإلزامية:",
        cardParas: [
"إضافة أكثر من 100 منتج وخدمة جديدة للنسخة الثانية من القائمة الإلزامية للشركات التابعة للجهاز"
        ],
        list: [],
      },
    ],
  };
  const asideBordTextImg = {
    title: "Capacity Building and Innovation:",
    imgSrc: "/assets/images/oia-impact/national-eco/enhancing-capabilities.jpg",
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "Research and Development Guidelines:",
        paras: [
"Nine reports have been completed, identifying over 270 challenges, highlighting the focus on aligning research and development with local market needs."
        ],
      },
      {
        id: 2,
        title: "Training and Development Programs:",
        paras: [
"Training programs have been launched for SMEs awarded contracts, contributing to their efficiency and skill enhancement."
        ],
      },
    ],
  };
  const ARasideBordTextImg = {
    title: "تعزيز القدرات والابتكار:",
    imgSrc: "/assets/images/oia-impact/national-eco/enhancing-capabilities.jpg",
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "المبادئ التوجيهية للبحث والتطوير: ",
        paras: [
          " الانتهاء من 9 تقارير تتضمن أكثر من 270 تحديًا، مما يدل على الاهتمام بتوجيه البحث والتطوير نحو احتياجات السوق المحلية."
        ],
      },
      {
        id: 2,
        title: "برامج التدريب والتأهيل:",
        paras: [
"إطلاق برامج تدريبية للمؤسسات الصغيرة والمتوسطة الحاصلة على عقود، مما يسهم في رفع كفاءتها."
        ],
      },
    ],
  };
  return (
    <div className="in-country-value-section">
      <div>
        <ImageBanner data={locale === "en" ? bannerData:ARbannerData} />
      </div>
      <div>
        <TextWIthImg data={locale === "en" ? aboutICVData:ARaboutICVData}
          orderText={1}
          orderImg={2}
        />
      </div>
      <PolygonBg>

        <NewsHighlights data={locale === "en" ? newDataHightlights:ARnewDataHightlights}
          locale={locale}
          classNameContainer=""
          isUseChangeClrDark={true}
          />
          </PolygonBg>
      <div>
        <AsideBorderTextWithImg data={locale === "en" ? asideBordTextImg:ARasideBordTextImg}
          locale={locale}
          isUseChangeClrDark={true}
        />
      </div>
      <PolygonBg>
        <NewsHighlights data={locale === "en" ? newDataHightlightsTow:ARnewDataHightlightsTow}
         isUseChangeClrDark={true}
          locale={locale}
        />
          </PolygonBg>
          <div>
        <TextWIthImg data={locale === "en" ? newTowDataTextWithImg: ARnewTowDataTextWithImg}
          orderText={2}
          orderImg={1}
          swap={true}
        />
      </div>
      <div>
        <TextWithImgandPattern data={locale === "en"? textWithImgandPattern:ARtextWithImgandPattern} locale={locale} />
      </div>
      {/* <div>
        <InCountryBanner locale={locale} data={qimamData} />
      </div> */}
    </div>
  );
};
export default Home;
