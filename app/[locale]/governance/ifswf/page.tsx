import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWithImgandBtn from "@/app/components/common/TextWithImgandBtn";
import IfswfCompGroup from "@/app/components/ifswf/IfswfCompGroup";
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

  const bannerData: any = {
    title: "",
    description: "",
    image: "/assets/images/banner/isfwf-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/isfwf-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/isfwf-mobile-banner.jpg",
    locale: locale,
  };
  const bannerDataAr: any = {
    title: "المنتدى الدولي لصناديق الثروة السيادي",
    description: "",
    image: "/assets/images/banner/isfwf-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/isfwf-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/isfwf-mobile-banner.jpg",
    locale: locale,
  };
  const compDataOne = {
    title:"",
    paras: [
      "Oman Investment Authority is a member in the International Forum of Sovereign Wealth Funds (IFSWF) since April 2015.",
      "Founded in 2009, IFSWF is a voluntary group of Sovereign Wealth Funds (SWFs) which meets to exchange views on issues of common interest and to facilitate adoption by members and a greater understanding of the Santiago Principles and SWF activities internationally. The Forum operates in an inclusive manner and facilitates communication among SWFs as well as with recipient country officials and representatives of multilateral organizations and the private sector."
    ],
    imgSrc: "/assets/images/governance/ifswf-logo.svg",
  };
  const compDataOneAr = {
    title:"",
    paras: [
      "يعد جهاز الاستثمار العُمانية عضوًا في منتدى الدولي لصناديق الثروة السيادية منذ أبريل 2015.",
      "تأسس المنتدى في عام 2009، وهو مجموعة طوعية من صناديق الثروة السيادية (SWFs) التي تجتمع لتبادل الآراء حول القضايا ذات الاهتمام المشترك، وتسهيل تبني الأعضاء لمبادئ سانتياغو وتعزيز فهم أوسع لأنشطة صناديق الثروة السيادية على المستوى الدولي. يعمل المنتدى بطريقة شاملة ويسهّل التواصل بين صناديق الثروة السيادية والمسؤولين في الدول المستقبلة، إضافة إلى ممثلي المنظمات متعددة الأطراف والقطاع الخاص."
    ],
    imgSrc: "/assets/images/governance/ifswf-logo.svg",
  };
  const compDataTwo = {
    title:"Oman to Host International Forum of Sovereign Wealth Funds in November 2024",
    paras: [
      "Represented by Oman Investment Authority, the Sultanate of Oman won the race to host the annual meeting of the International Forum of Sovereign Wealth Funds (IFSWF), scheduled to be held in November of 2024.",
      "The host of the forum affirms the significance of OIA’s membership at the IFSWF. The event offers an opportunity for attracting investments to Oman, since it brings together heads of the world's largest sovereign wealth funds having a fund exceeding $8 trillion, constituting 80 percent of the assets of sovereign wealth funds in the world."
    ],
    imgSrc: "/assets/images/governance/IFSWF-2024.svg",
  };
  const compDataTwoAr = {
    title:"سلطنة عُمان تستضيف الاجتماع السنوي للمنتدى الدولي لصناديق الثروة السيادية نوفمبر 2024",
    paras: [
      "تستضيف سلطنة عُمان ممثلة بجهاز الاستثمار العُماني الاجتماع السنوي للمنتدى الدولي لصناديق الثروة السيادية في شهر نوفمبر 2024م",
      "حيث أن الاجتماع في مسقط يُمثّل فرصة للترويج لسلطنة عُمان وجذب الاستثمارات الأجنبية إليها؛ حيث سيشارك فيه رؤساء أضخم صناديق الثروات السيادية على مستوى العالم التي يتجاوز حجم ثرواتها 8 تريليونات دولار، وهو ما يمثّل 80 بالمائة من أصول صناديق الثروة السيادية في العالم؛ الأمر الذي سيفتح آفاقًا لبناء شبكة علاقات معهم، وتعريفهم بالمقوِّمات الطبيعية والميزات الاستثمارية التي تتمتَّع بها سلطنة عُمان؛ ما يعزز حضورها العالمي، ويجلب لها رؤوس أموال أجنبية، ويفتح فرصًا لبناء علاقات استثمارية طويلة المدى ستسهم إيجابًا في جهود التنويع الاقتصادي وتنمية الاقتصاد الوطني."
    ],
    imgSrc: "/assets/images/governance/IFSWF-2024.svg",
  };
  const compDataThree = {
    title: "The Santiago Principles",
    paras: [
      "Written by the 26 founding members of the International Forum of Sovereign Wealth Funds in 2008, the 24 Generally Accepted Principles and Practices, usually referred to as the “Santiago Principles”, are the globally accepted standards for governance, investment and risk management practices for sovereign wealth funds. The principles are designed to promote good governance, accountability, transparency and prudent investment practices.",
      "All IFSWF's members undertake to implement the Santiago Principles on a voluntary basis. They are subordinate to local law.",
    ],
    imgSrc: "",
    cta: {
      label: "Read the Santiago Principles",
      url: "https://www.ifswf.org/santiago-principles",
    },
  };
  const compDataThreeAr = {
    title: "مبادئ سانتياغو",
    paras: [
      `كتبت من قبل 26 عضوًا مؤسسًا لمنتدى الثروات السيادية الدولي في عام 2008، وتشمل 24 مبدأً وممارسةً مقبولة عمومًا، تُعرف عادةً بـ "مبادئ سانتياغو". تُعتبر هذه المبادئ المعايير العالمية المتفق عليها لحوكمة وإدارة الاستثمار والمخاطر لصناديق الثروة السيادية. تم تصميم هذه المبادئ لتعزيز الحوكمة الجيدة والمساءلة والشفافية والممارسات الاستثمارية الحكيمة.`,
      "يتعهد جميع الأعضاء الكاملين في المنتدى الدولي لصناديق الثروة السيادية بتطبيق مبادئ سانتياغو على أساس طوعي. وهي تخضع للقوانين المحلية.",
    ],
    imgSrc: "",
    cta: {
      label: "اقرأ مبادئ سانتياغو",
      url: "https://www.ifswf.org/santiago-principles",
    },
  };
  const sections = {
    sectionOne: {
      title:"International Forum of Sovereign Wealth Funds",
      imgSrc:"/assets/images/governance/cover-ifswf-img.jpg",
    },
    sectionTwo: { ...compDataOne },
  };
  const sectionsAr = {
    sectionOne: {
      title:"لمنتدى الدولي لصناديق الثروة السيادية",
      imgSrc:"/assets/images/governance/cover-ifswf-img.jpg",
    },
    sectionTwo: { ...compDataOneAr },
  };
  return (
    <div className="about-oia-management-section">
      <div>
        <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
      </div>
      <div>
        <IfswfCompGroup locale={locale} data={locale==="en"?sections:sectionsAr} />
      </div>
      <div>
        <PolygonBg>
          <TextWithImgandBtn
            locale={locale}
            data={locale==="en"?compDataTwo:compDataTwoAr}
          />
        </PolygonBg>
      </div>
      <div>
        <PolygonBg bgImg="" className="!bg-none">
          <TextWithImgandBtn
            locale={locale}
            data={locale==="en"?compDataThree:compDataThreeAr}
          />
        </PolygonBg>
      </div>
    </div>
  );
};

export default AboutOIAManagement;
