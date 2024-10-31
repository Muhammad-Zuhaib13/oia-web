import { BoardMembers } from "@/app/components/about";
import ImageBanner from "@/app/components/banners/ImageBanner";
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
    title: "Leadership",
    description: "",
    image: "/assets/images/leadership-banner.jpg",
    locale: locale,
  };
  const ArbannerData: BannerData = {
    title: "إدارة الجهاز",
    description: "",
    image: "/assets/images/leadership-banner.jpg",
    locale: locale,
  };
  const boardData: DataItem = {
    title: t("boardOfMember.title"),
    locale: locale,
    para: "",
    card: [
      {
        id: 1,
        image:
          "/assets/images/about/oia-management/bod-1.jpg",
        name: "H.E. Sultan Bin Salim Al Habsi",
        role: "Minister of Finance and Chairman of the Board",
        locale: locale,
      },
      {
        id: 2,
        image:
          "/assets/images/about/oia-management/bod-2.jpg",
        name: "H.E. Engineer Salim bin Nasser Al Aufi",
        role: "Ministry of Energy and Minerals Vice Chairman",
        locale: locale,
      },
      {
        id: 3,
        image:
          "/assets/images/about/oia-management/bod-4.jpg",
        name: "H.E. Dr. Saud bin Hamoud Al Habsi",
        role: "Minister of Agricultural, Fisheries, and Water",
        locale: locale,
      },
      {
        id: 4,
        image:
          "/assets/images/about/oia-management/bod-3.jpg",
        name: "H.E. Abdullah bin Salim Al Harthi",
        role: "Undersecretary of the Ministry of Finance",
        locale: locale,
      },
      {
        id: 5,
        image:
          "/assets/images/about/oia-management/member-one.jpg",
        name: "Kwa Chong Seng",
        role: "International Member",
        locale: locale,
      },
    ],
  };
  const ArboardData: DataItem = {
    title: t("boardOfMember.title"),
    locale: locale,
    para: "",
    card: [
      {
        id: 1,
        image:
          "/assets/images/about/oia-management/bod-1.jpg",
        // name: "H.E. Sultan Bin Salim Al Habsi",
        name:"معالي سلطان بن سالم الحبسي",
        role: "وزير المالية، ورئيس مجلس الإدارة",
        locale: locale,
      },
      {
        id: 2,
        image:
          "/assets/images/about/oia-management/bod-2.jpg",
        // name: "E.H. Engineer Salim bin Nasser Al Aufi",
        name:"معالي المهندس سالم بن ناصر العوفي",
        role: "وزير الطاقة والمعادن، ونائب رئيس مجلس الإدارة",
        locale: locale,
      },
      {
        id: 3,
        image:
          "/assets/images/about/oia-management/bod-4.jpg",
        // name: "E.H. Dr. Saud bin Hamoud Al Habsi",
        name:'معالي الدكتور سعود بن حمود الحبسي',
        role: "وزير الثروة الزراعية والسمكية وموارد المياه",
        locale: locale,
      },
      {
        id: 4,
        image:
          "/assets/images/about/oia-management/bod-3.jpg",
        // name: "H.E. Abdullah bin Salim Al Harthi",
        name:'سعادة عبدالله بن سالم الحارثي',
        role: "وكيل وزارة المالية",
        locale: locale,
      },
      {
        id: 5,
        image:
          "/assets/images/about/oia-management/member-one.jpg",
        // name: "H.E. Abdulsalam bin Mohammed Al Murshidi",
        name:'كوا تشونغ سينغ',
        role: "عضو دولي",
        locale: locale,
      },
    ],
  };
  const managementData: DataItem = {
    title: "OIA Management",
    locale: locale,
    para: "",
    card: [
      {
        id: 1,
        image:
          "/assets/images/about/oia-management/member-3.jpg",
          name: "Mulham Basheer Al Jarf",
          role: "Deputy President for Investments",
        locale: locale,
      },
      {
        id: 2,
        image:
          "/assets/images/about/oia-management/member-1.jpg",
          name: "H.E. Abdulsalam bin Mohammed Al Murshidi",
        role: "President of Oman Investment Authority",
        locale: locale,
      },
     
      {
        id: 3,
        image:
          "/assets/images/about/oia-management/member-2.jpg",
          name: "Nasser bin Suliman Al Harthi",
          role: "Deputy President for Operations",
        locale: locale,
      },
     
    ],
  };
  const ArmanagementData: DataItem = {
    title: "إدارة الجهاز",
    locale: locale,
    para: "",
    card: [
     
     
      {
        id: 1,
        image:
          "/assets/images/about/oia-management/member-3.jpg",
          name: "ملهم بن بشير الجرف",
          role: "نائب الرئيس للعمليات",
        locale: locale,
      },
      {
        id: 2,
        image:
          "/assets/images/about/oia-management/member-1.jpg",
          name: "معالي الرئيس عبدالسلام بن محمد المرشدي",
          role: "رئيس جهاز الاستثمار العماني",
        locale: locale,
      },
      {
        id: 3,
        image:
          "/assets/images/about/oia-management/member-2.jpg",
          name: " ناصر بن سليمان الحارثي",
          role: "الرئيس للاستثمار",
        locale: locale,
      },
    ],
  };
  const newOneDataTextWithImg = {
    title: "Audit Committee (AC)",
    paras: [
      "The Audit Committee is formed by and reports to the Board of Directors and assists it in the execution of its responsibilities by ensuring compliance with OIA's guidelines and principles.",
      // "The committee performs the following duties:",
    ],
    // listHeading:'The committee performs the following duties:',
    list: [
      "Enhances the effectiveness of internal and external auditors by interacting with them and distancing them from the direct influence of the management.",
      "Provides substantive expertise to the Board of Directors on matters related to governance and internal control frameworks.",
      "Establishes a strong regulatory environment in OIA by supporting the Board in overseeing the financial reporting process, reviewing the internal control framework, and ensuring an appropriate framework for risk management and legal and financial compliance within OIA.",
    ],
    img: "/assets/images/about/oia-management/audit-com.jpg",
  };
  const ArnewOneDataTextWithImg = {
    title: "لجنة التدقيق",
    paras: [
      "تنشأ لجنة التدقيق عن مجلس الإدارة وتتبع له، ويكون المجلس مسؤولًا عن مساعدة اللجنة في القيام بمسؤولياتها التنظيمية من خلال ضمان الامتثال لمبادئ الجهاز التوجيهية.",
      
    ],
    listHeading:"وتقوم اللجنة بالآتي:",
    list: [
      "العمل على تعزيز فاعلية المدققين الداخليين والخارجيين من خلال التعامل معهم وتوفير التغذية الراجعة عن التأثير المباشر للإدارة.",
      "توفير خارطة واسعة لرفد مجلس الإدارة فيما يخص المواضيع المتعلقة بالحوكمة وأطر عمل الرقابة الداخلية.",
      "العمل على تأسيس بيئة تنظيمية قوية في الجهاز من خلال دعم مجلس إدارته في الإشراف على عملية إعداد التقارير المالية، ومراجعة إطار عمل المخاطر والامتثال المالي والقانوني، وضمان وجود إطار العمل المناسب لإدارة المخاطر والامتثال المالي والقانوني بالجهاز."
    ],
    img: "/assets/images/about/oia-management/audit-com.jpg",
  };
  return (
    <section className="about-section">
        <ImageBanner data={locale==="en"?bannerData:ArbannerData} />
      
        <BoardMembers
          data={locale==="en"?boardData:ArboardData}
          mainBgClass={""}
          cardsClass="justify-center flex-wrap"
        />
     
        <BoardMembers
          data={locale==="en"?managementData:ArmanagementData}
          cardsClass="justify-center"
          isUseBgPattern={true}
        />
      
        <TextWIthImg
          data={locale==="en"?newOneDataTextWithImg:ArnewOneDataTextWithImg}
          orderText={1}
          orderImg={2}
          isListShow={true}
          locale={locale}
        />
    </section>
  );
};

export default About;
