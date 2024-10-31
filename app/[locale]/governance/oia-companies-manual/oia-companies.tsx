"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import Paras from "@/app/components/common/Paras";
import DownloadPdf from "@/app/components/investor-relations/DownloadPdf";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";

const OIACompanies: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "OIA Companies Manual",
    description: "",
    image:
      "/assets/images/governance/oia-comapnies-banner.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "ميثاق حوكمة شركات الجهاز",
    description: "",
    image:
      "/assets/images/governance/oia-comapnies-banner.jpg",
    locale: locale,
  };
  const aboutFund = {
    title: "About",
    paras: [
      "Considering the powers given to Oman Investment Authority by Royal Decree No. 57/2021, OIA has created a governance manual for its subsidiaries. This manual aims to organize the work of these companies and improve their performance, ensuring that their plans align with sustainable development goals. It seeks to balance the economic and strategic goals for which these institutions were established while promoting the best use of financial and human resources.",
      "The manual also emphasizes the importance of accountability and transparency by including policies and guidelines for managing the operations of OIA’s subsidiaries in their various business activities. It highlights the need for a long-term strategy for ownership of these subsidiaries and ensures that governance practices are based on transparency and efficiency."
    ],
    list: [],
    img: "/assets/images/governance/companies-manual-about.jpg",
   
  };
  const aboutFundAr = {
    title: "ميثاق حوكمة شركات الجهاز",
    paras: [
"في ضوء الاختصاصات الممنوحة لجهاز الاستثمار العماني وفقًا للمرسوم السلطاني رقم ٥٧ / ٢٠٢١م، أصدر الجهاز ميثاق حوكمة المؤسسات المرتبطة به، والذي يهدف إلى تنظيم أعمال هذه المؤسسات وتحسين أدائها، بما يضمن مواءمة خططها مع أهداف التنمية المستدامة، ويسعى الميثاق إلى تحقيق التوازن بين الأهداف الاقتصادية والإستراتيجية التي أُنشئت المؤسسات من أجلها، وتشجيع الاستخدام الأمثل للموارد المالية والبشرية. ",
"بالإضافة إلى ذلك، يعزز الميثاق مبدأ المحاسبة والمساءلة من خلال تضمين سياسات ومبادئ توجيهية لإدارة عمليات الشركات التابعة للجهاز في مختلف أنشطتها التجارية. كما ينص الميثاق على أهمية تبني إستراتيجية طويلة الأجل بملكية المؤسسات، وضمان تطبيق ممارسات الحوكمة القائمة على الشفافية والكفاءة.  "
    ],
    list: [],
    img: "/assets/images/governance/companies-manual-about.jpg",
  };
  
  const parasData = [
    "Additionally, the manual sets penalties for violations, protects the rights of shareholders who are not part of Oman Investment Authority, and requires annual reports to show compliance levels. Its goal is to create a culture of performance, accountability, and good governance by defining the roles and responsibilities of the board of directors and executive management. This ensures that members act in the best interests of the institution while avoiding conflicts of interest and following laws and ethical standards.",
    "This manual is part of Oman Investment Authority’s efforts to strengthen good governance in owned companies and achieve Oman Vision 2040 by restructuring these companies and improving their financial and operational performance."
  ]
  const arabicParasData = [
    "ويشمل الميثاق أيضًا تحديد العقوبات على المخالفات، وضمان حماية حقوق المساهمين من غير جهاز الاستثمار العماني، وتقديم تقارير سنوية توضح مدى الامتثال، ويهدف الميثاق إلى تعزيز ثقافة الأداء والمساءلة والحوكمة الفعالة، من خلال تحديد أدوار ومسؤوليات مجلس الإدارة والإدارة التنفيذية، وضمان تصرف الأعضاء بما يخدم المصلحة العليا للمؤسسة، مع تجنب تضارب المصالح والالتزام بالقوانين والمعايير الأخلاقية.",
    "ويُعد هذا الميثاق جزءًا من جهود جهاز الاستثمار العماني لتعزيز الحوكمة الرشيدة في الشركات المملوكة للدولة، وتحقيق رؤية عمان 2040 من خلال إعادة هيكلة الشركات وتحسين أدائها المالي والتشغيلي. "
  ]
 
  const downloadPdf = {
    desc: "This charter is part of the Oman Investment Authority's efforts to enhance good governance in state-owned enterprises and achieve Oman Vision 2040 through restructuring companies and improving their financial and operational performance.",
    // cta: {
    //   label: "Download PDF",
    // },
  };
  const downloadPdfAr = {
    desc: "ويُعد هذا الميثاق جزءًا من جهود جهاز الاستثمار العماني لتعزيز الحوكمة الرشيدة في الشركات المملوكة للدولة، وتحقيق رؤية عمان 2040 من خلال إعادة هيكلة الشركات وتحسين أدائها المالي والتشغيلي.",
    // cta: {
    //   label: "ملف PDF",
    // },
  };
  return (
    <div>
      <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
      <TextWIthImg
        data={locale==="en"?aboutFund:aboutFundAr}
        orderText={1}
        orderImg={2}
        isListShow={true}
        locale={true}
      />
      <div className="">
      <Paras data={locale === "en" ? parasData : arabicParasData} />
      </div>
      <DownloadPdf data={locale==="en"?downloadPdf:downloadPdfAr} locale={locale} />


    </div>
  );
};
export default OIACompanies;
