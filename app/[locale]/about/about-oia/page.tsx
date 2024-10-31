import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import HoverTextImgTabs from "@/app/components/hover-text-tabs/HoverTextImgTabs";
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

const AboutOIAManagement: React.FC<AboutProps> = ({
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
    tabImg?:string;
    mobileImg?: string;
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
    title: "About OIA",
    description: "",
    image: "/assets/images/banner/about-oia-banner.jpg",
    tabImg: "/assets/images/banner/about-oia-banner-tablet.jpg",
    mobileImg: "/assets/images/banner/about-oia-banner-mobile.jpg",
    locale: locale,
  };
  const ArbannerData: BannerData = {
    title: "جهاز الاستثمار العماني",
    description: "",
    image: "/assets/images/banner/about-oia-banner.jpg",
    tabImg: "/assets/images/banner/about-oia-banner-tablet.jpg",
    mobileImg: "/assets/images/banner/about-oia-banner-mobile.jpg",
    locale: locale,
  };
  const newOneDataTextWithImg = {
    title: "About OIA",
    paras: [
      "Oman Investment Authority (OIA) is the investment arm of the Sultanate of Oman. It is mandated with managing, investing, and growing the Sultanate’s assets locally and internationally. Its investment fund portfolio geographically diverse, with investments on every continent, and cover a wide range of sectors, including food and fisheries, energy, logistics, Information and Communication Technology (ICT), public services, financial and investment services, tourism, mining, manufacturing, and aviation. It plays a key role in driving sustainable economic development and achieving Oman’s vision of becoming a more attractive investment destination.",
      "Oman Investment Authority was established by Royal Decree No. 61/2020 issued on June 4, 2020, through the merger of two separate entities: the State General Reserve Fund and the Oman Investment Fund. Its system was issued by Royal Decree No. 57/2021 on August 18, 2021.",
    ],
    list: [],
    img: "/assets/images/aboutoia.jpg",
  };
  const ArnewOneDataTextWithImg = {
    title: "عن جهاز الاستثمار العماني",
    paras: [
      "يعــد جهــاز الاســتثمار العماني الــذراع الاســتثماري لحكومة ســلطنة عمــان ويتمتع بالشخصية الاعتبارية والاستقلال المالي والإداري، ويتبع مجلس الوزراء ، وهو مكلف بإدارة واســتثمار وتنمية أصول ســلطنة عمان محلًيا ودولًيا، وتتســم محافظه بالتنــوع الجغرافي، حيــث تتوزع اســتثماراته في قــارات العالم، وتغطــي قطاعات متنوعــة منهــا قطاعــات الغــذاء، والطاقــة، والخدمــات اللوجســتية، والاتصــالات وتقنيــة المعلومــات، والخدمــات العامــة، والمالية والاســتثمار، والأمــن الغذائي، والســياحة، والتعديــن، والصناعة، والطيران. ويــؤدي الجهــاز دورًا محوريًا في قيادة التنميــة الاقتصاديــة المســتدامة، والإســهام فــي تحقيــق رؤية ســلطنة عمان بأن تكــون وجهة جاذبة للاســتثمار.  ",
    "تأسس جهاز الاستثمار العماني بموجب المرسوم السلطاني رقم 61/2020 الصادر في 4 يونيو 2020م حيث تم دمج مؤسستين مختلفتين هما: الصندوق الاحتياطي العام للدولة، والصندوق العُماني للاستثمار، وأُصدِر نظامه بالمرسوم السلطاني رقم 57/2021 الصادر في 18 أغسطس 2021م."
    ],
    list: [],
    img: "/assets/images/aboutoia.jpg",
  };
  const newTwoDataTextWithImg = {
    title: "Our Objectives",
    // paras: [],
    list: [
      "Manage, grow, and invest the Sultanate of Oman’s funds and assets to generate maximum returns.",
      "Generate financial reserves.",
      "Contribute towards the state’s general budget and achieve financial sustainability.",
      "Play an instrumental role in executing the government’s policies and strategies toward advancing targeted economic sectors.",
      "Enhance the investment environment and attract investments to the Sultanate.",
    ],
    img: "/assets/images/objectives.jpg",
  };
  const ArnewTwoDataTextWithImg = {
    title: "أهدافنا",
    paras: [],
    list: [
      " إدارة وتنمية واستثمار أموال وأصول سلطنة عمان بما يحقق أكبر قدر من العوائد.",
      "تكوين احتياطيات ووفورات مالية.",
      "الإسهام في توفير الإيرادات الازمة لرفد الميزانية العامة وتحقيق الاستدامة المالية.",
      "الإسهام في تنفيذ سياسات وإستراتيجيات الحكومة المتعلقة بالنهوض بالقطاعات الاقتصادية المستهدفة.",
      "تعزيز بيئة الاستثمار، وجذب المستثمرين إلى سلطنة عمان."
    ],
    img: "/assets/images/objectives.jpg",
  };
  const howerTextImgTabs = {
    title: "Our Values",
    para: "",
    locale: locale,
    cards: [
      {
        id: 1,
        title: "Aspiration:",
        description:
          "A sense of responsibility to work with diligence and commitment to achieve the ultimate goal of OIA.",
        img: "/assets/images/values.jpg",
      },
      {
        id: 2,
        title: "Excellence:",
        description:
          "Demonstrate initiative, proficiency, and steadiness at work.",
          img: "/assets/images/values.jpg",
        },
      {
        id: 3,
        title: "Integrity:",
        description:
          "Be keen to earn trust, make the right decisions, and execute plans in an optimal manner.",
          img: "/assets/images/values.jpg",
        },
      {
        id: 4,
        title: "Passion:",
        description:
          "A sense of vitality and enthusiasm for excellence and the continuation of self-development.",
          img: "/assets/images/values.jpg",
        },
    ],
  };
  const ArhowerTextImgTabs = {
    title: "قيمنا",
    para: "",
    locale: locale,
    cards: [
      {
        id: 1,
        title: "التطلع:",
        description:
          "الإحساس بالمسؤولية، والعمل بكل جد والتزام لتحقيق أهداف الجهاز.",
          img: "/assets/images/values.jpg",
        },
      {
        id: 2,
        title: "التـميز:",
        description:
          "التحلي بروح الـمبادرة والإتـقان والاتـزان، والاحتفــاظ بعلاقـة وثيقـة مع الزملاء والمسؤولين في العمل.",
          img: "/assets/images/values.jpg",
        },
      {
        id: 3,
        title: "الـنزاهة:",
        description:
          "أداء المهام بالطـريقة الصحيحة، والتحلي بالنزاهة والمصداقية والأمانة مـع الجميع لكسب ثقتهم.",
          img: "/assets/images/values.jpg",
        },
      {
        id: 4,
        title: "الشـغف:",
        description:
          "الشعـور بالحيوية والحـماس في أداء المهام، والسعي المستمر إلى تطوير الذات.",
          img: "/assets/images/values.jpg",
        },
    ],
  };
  return (
    <div className="about-oia-management-section">
        <ImageBanner data={locale==="en"?bannerData:ArbannerData} />
        <TextWIthImg
          data={locale==="en"?newOneDataTextWithImg:ArnewOneDataTextWithImg}
          orderText={1}
          orderImg={2}
          locale={locale}
        />
        <PolygonBg>
          <TextWIthImg
            data={locale==="en"?newTwoDataTextWithImg:ArnewTwoDataTextWithImg}
            orderText={2}
            orderImg={1}
            marginY="0px"
            isListShow={true}
            isShowMarginYResp={false}
            locale={locale}  
            swap={true}        />
        </PolygonBg>
        <HoverTextImgTabs
          data={locale==="en"?howerTextImgTabs:ArhowerTextImgTabs}
          locale={locale}
        />
    </div>
  );
};

export default AboutOIAManagement;
