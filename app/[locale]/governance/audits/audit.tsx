"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import AsideBorderTextWithImg from "@/app/components/common/AsideBorderTextWithImg";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWIthImg from "@/app/components/common/TextWithImg";
const Audit: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "Audits",
    description: "",
    image: "/assets/images/banner/audit-dskt-banner.jpg",
    tabImg: "/assets/images/banner/audit-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/audit-mobile-banner.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "عمليات التدقيق",
    description: "",
    image: "/assets/images/banner/audit-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/audit-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/audit-mobile-banner.jpg",
    locale: locale,
  };
  const asideBordTextImg = {
    title: "About Audits",
    imgSrc: "/assets/images/audit-img.jpg",
    paras: [
      "Oman Investment Authority is committed to the highest standards of transparency and oversight by subjecting itself to three levels of auditing:",
    ],
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title: "Internal Audit:",
        paras: [
          " Reviewed by a specialized committee that ensures the accuracy and reliability of financial statements and transaction data.",
        ],
      },
      {
        id: 2,
        title: "External Audit:",
        paras: [
          "An independent auditor is appointed by the relevant authorities to examine the financial statements and ensure compliance with international standards.",
        ],
      },
      {
        id: 3,
        title: "Government Oversight:",
        paras: [
          " is subject to the oversight of the State Financial and Administrative Audit Authority, which evaluates the performance of investments and other transactions of OIA, providing feedback to ensure the optimal use of public funds.",
        ],
      },
    ],
    bottomParas: [
      "These multiple levels of oversight enhance trust in OIA and contribute to achieving its investment goals responsibly and transparently.",
    ],
  };
  const asideBordTextImgAr = {
    title: "عن",
    imgSrc: "/assets/images/audit-img.jpg",
    paras: [
"يلتزم جهاز الاستثمار العُماني بأعلى معايير الشفافية والرقابة من خلال خضوعه لثلاثة مستويات من التدقيق الحسابي:"
    ],
    PageTransitionEvent: [""],
    cards: [
      {
        id: 1,
        title:"التدقيق الداخلي:",
        paras: [
" تتم مراجعته من قبل لجنة مختصة تضمن صحة ودقة القوائم المالية وبيانات التعاملات."
        ],
      },
      {
        id: 2,
        title: "التدقيق الخارجي::",
        paras: [
"يتم تعيين مدقق حسابات مستقل من قبل الجهات المختصة لفحص القوائم المالية والتأكد من امتثالها للمعايير الدولية."
        ],
      },
      {
        id: 3,
        title:"الرقابة الحكومية:",
        paras: [
          "يخضع الجهاز لرقابة جهاز الرقابة المالية والإدارية للدولة، الذي يُقيّم أداء الاستثمارات وغيرها من تعاملات الجهاز ويقدم ملاحظاته لضمان الاستخدام الأمثل للأموال العامة."
        ],
      },
    ],
    bottomParas: [
"وتعزز هذه المستويات المتعددة من الرقابة الثقة في الجهاز، وتُسهم في تحقيق أهدافه الاستثمارية بصورة مسؤولة وشفافة."
    ],
  };
  const aboutFund = {
    title: "Audit Committee (AC)",
    paras: [
      "The Audit Committee is formed by and reports to the Board of Directors and assists it in the execution of its responsibilities by ensuring compliance with OIA’s guidelines and principles.",
      // "The committee performs the following duties:",
    ],
    listHeading:'The committee performs the following duties:',

    list: [
      "Enhances the effectiveness of internal and external auditors by interacting with them and distancing them from the direct influence of the management.",
      "Provides substantive expertise to the Board of Directors on matters related to governance and internal control frameworks.",
      "Establishes a strong regulatory environment in OIA by supporting the Board in overseeing the financial reporting process, reviewing the internal control framework, and ensuring an appropriate framework for risk management and legal and financial compliance within OIA."
    ],
    img: "/assets/images/governance/audit-commitee-img.jpg",
  };

  const aboutFundAr = {
    title: "لجنة التدقيق",
    paras: [
      "تنشأ لجنة التدقيق عن مجلس الإدارة وتتبع له، ويكون المجلس مسؤولًا عن مساعدة اللجنة في القيام بمسؤولياتها التنظيمية من خلال ضمان الامتثال لمبادئ الجهاز التوجيهية."
      // "وتقوم اللجنة بالآتي:",
    ],
    listHeading:"وتقوم اللجنة بالآتي:",

    list: [
      "العمل على تعزيز فاعلية المدققين الداخليين والخارجيين من خلال التعامل معهم وتوفير التغذية الراجعة عن التأثير المباشر للإدارة.",
      "توفير خارطة واسعة لرفد مجلس الإدارة فيما يخص المواضيع المتعلقة بالحوكمة وأطر عمل الرقابة الداخلية.",
      "العمل على تأسيس بيئة تنظيمية قوية في الجهاز من خلال دعم مجلس إدارته في الإشراف على عملية إعداد التقارير المالية، ومراجعة إطار عمل المخاطر والامتثال المالي والقانوني، وضمان وجود إطار العمل المناسب لإدارة المخاطر والامتثال المالي والقانوني بالجهاز."
    ],
    img: "/assets/images/governance/audit-commitee-img.jpg",
  };
  return (
    <div>
      <ImageBanner
        data={locale === "en" ? bannerData : bannerDataAr}
      />
      <div className="py-[100px]">
        <AsideBorderTextWithImg
          data={
            locale === "en"
              ? asideBordTextImg
              : asideBordTextImgAr
          }
          locale={locale}
          className="!py-0"
          isUseChangeClrDark={true}
        />
      </div>
      <PolygonBg isShowPy={false}>
      <TextWIthImg
          data={locale === "en" ? aboutFund : aboutFundAr}
          orderText={2}
          orderImg={1}
          isListShow={true}
          locale={locale}
        />
      </PolygonBg>
    </div>
  );
};
export default Audit;
