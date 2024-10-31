"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWIthImg from "@/app/components/common/TextWithImg";

const RiskCompliance: React.FC<any> = ({
  locale,
  data,
}) => {
  const bannerData = {
    title: "Governance, Risk & Compliance",
    description: "",
    image: "/assets/images/governance/governanace-risk.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "الحوكمة والمخاطر والالتزام",
    description: "",
    image: "/assets/images/governance/governanace-risk.jpg",
    locale: locale,
  };
  const sectionOne = {
    title: "About Governance, Risk & Compliance",
    paras: [
      "At Oman Investment Authority, we seek to build trust and reputation on the basis of transparency and integrity; therefore, we apply the best international practices in governance to ensure an effective, efficient and flexible system.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionOneAr = {
    title: "الحوكمة والمخاطر والالتزام ",
    paras: [
      "نسعى في جهاز الاستثمار العُماني إلى بناء الثقة والسمعة على أساس من الشفافية والنزاهة؛ لذا نُطبِّق أفضل الممارسات العالمية في الحوكمة لضمان وجود نظام فعّال يتسم بالكفاءة والمرونة. ",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionTwo = {
    title: "Governance",
    paras: [
      "Governance is the overall system of rules, governance practices, and standards that guide OIA’s entities and establish a robust and effective corporate governance framework, serving as the cornerstone for OIA's continued profitability, stability, and sustainability. This institutionalization of governance supports compliance and fosters stakeholder trust, transparency, and engagement.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionTwoAr = {
    title: "الحوكمة:",
    paras: [
      "هي النظام الشامل للقواعد والممارسات والمعايير التي توجه كيانات جهاز الاستثمار العماني وتؤسس إطارًا قويًا وفعالًا للحوكمة المؤسسية، ليكون الركيزة الأساسية لاستمرار الربحية والاستقرار والاستدامة لجهاز الاستثمار العماني. يدعم هذا التنظيم المؤسسي الامتثال ويعزز ثقة أصحاب المصلحة والشفافية والمشاركة.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionThree = {
    title: "Risk Management",
    paras: [
      "Risk Management is the process of identifying, assessing, and mitigating potential risks across OIA's investment fund, and operations at both corporate and departmental levels. OIA’s Enterprise Risk Management (ERM) program is designed to optimize risk versus reward, ensuring the security of shareholder value in pursuing corporate objectives and goals.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionThreeAr = {
    title: "إدارة المخاطر: ",
    paras: [
      "هي عملية تحديد المخاطر المحتملة وتقييمها وتخفيفها عبر محفظة استثمارات جهاز الاستثمار العماني وعملياته على المستويين المؤسسي والقسمي. تم تصميم برنامج إدارة المخاطر المؤسسية (ERM) الخاص بجهاز الاستثمار العماني لتحسين التوازن بين المخاطر والمكافآت، مما يضمن أمان قيمة المساهمين في السعي لتحقيق الأهداف والغايات المؤسسية.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionFour = {
    title: "Compliance",
    paras: [
      "Compliance is the set of processes and procedures to ensure adherence to applicable laws, regulations, and internal policies. Compliance also provides strategic advice to the Executive Management on exposure limits, breaches, best practices, and ethical business conduct, helping to uphold OIA’s commitment to integrity and transparency through regular awareness engagements.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const sectionFourAr = {
    title: "الالتزام: ",
    paras: [
      "هو مجموعة العمليات والإجراءات التي تضمن الالتزام بالقوانين واللوائح والسياسات الداخلية المعمول بها. كما يوفر الامتثال نصائح استراتيجية للإدارة التنفيذية حول حدود التعرض والمخالفات وأفضل الممارسات والسلوك التجاري الأخلاقي، مما يساعد على التمسك بالتزام جهاز الاستثمار العماني بالنزاهة والشفافية من خلال التوعية المنتظمة.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  return (
    <div>
      <div>
        <ImageBanner
          data={locale === "en" ? bannerData : bannerDataAr}
        />
      </div>
      <div>
        <TextWIthImg
          data={locale === "en" ? sectionOne : sectionOneAr}
          orderText={1}
          orderImg={2}
          isListShow={true}
          locale={true}
        />
      </div>
      <div>
        <PolygonBg>
          <TextWIthImg
            data={
              locale === "en" ? sectionTwo : sectionTwoAr
            }
            orderText={2}
            orderImg={1}
            isListShow={true}
            locale={true}
            marginY="0px"
            isShowMarginYResp={false}
            classesContainer="!flex-col-reverse"
          />
        </PolygonBg>
      </div>
      <div>
        <TextWIthImg
          data={
            locale === "en" ? sectionThree : sectionThreeAr
          }
          orderText={1}
          orderImg={2}
          isListShow={true}
          locale={true}
        />
      </div>
      <div>
        <PolygonBg>
          <TextWIthImg
            data={
              locale === "en" ? sectionFour : sectionFourAr
            }
            orderText={2}
            orderImg={1}
            isListShow={true}
            locale={true}
            marginY="0px"
            isShowMarginYResp={false}
            classesContainer="!flex-col-reverse"
          />
        </PolygonBg>
      </div>
    </div>
  );
};
export default RiskCompliance;
