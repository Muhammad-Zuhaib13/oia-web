"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWIthImg from "@/app/components/common/TextWithImg";
const InternalGovernance: React.FC<any> = ({
  locale,
  data,
}) => {
  const bannerData = {
    title: "Committees",
    description: "",
    image:
      "/assets/images/governance/internal-governance-banner.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "حوكمة داخلية",
    description: "",
    image:
      "/assets/images/governance/internal-governance-banner.jpg",
    locale: locale,
  };
  const aboutFund = {
    title: "Audit Committee (AC)",
    paras: [
      "The Audit Committee is formed by and reports to the Board of Directors and assists it in the execution of its responsibilities by ensuring compliance with OIA’s guidelines and principles.",
      // "The committee performs the following duties:",
    ],
    // listHeading:'The committee performs the following duties:',

    list: [
      "Enhances the effectiveness of internal and external auditors by interacting with them and distancing them from the direct influence of the management.",
      "Provides substantive expertise to the Board of Directors on matters related to governance and internal control frameworks.",
      "Establishes a strong regulatory environment in OIA by supporting the Board in overseeing the financial reporting process, reviewing the internal control framework, and ensuring an appropriate framework for risk management and legal and financial compliance within OIA.",
    ],
    img: "/assets/images/governance/audit-commitee-img.jpg",
  };
  const aboutFundAr = {
    title: "لجنة التدقيق",
    paras: [
      "تنشأ لجنة التدقيق عن مجلس الإدارة وتتبع له، ويكون المجلس مسؤولًا عن مساعدة اللجنة في القيام بمسؤولياتها التنظيمية من خلال ضمان الامتثال لمبادئ الجهاز التوجيهية.",
    ],
    listHeading: "وتقوم اللجنة بالآتي:",

    list: [
      "العمل على تعزيز فاعلية المدققين الداخليين والخارجيين من خلال التعامل معهم وتوفير التغذية الراجعة عن التأثير المباشر للإدارة.",
      "توفير خارطة واسعة لرفد مجلس الإدارة فيما يخص المواضيع المتعلقة بالحوكمة وأطر عمل الرقابة الداخلية.",
      "العمل على تأسيس بيئة تنظيمية قوية في الجهاز من خلال دعم مجلس إدارته في الإشراف على عملية إعداد التقارير المالية، ومراجعة إطار عمل المخاطر والامتثال المالي والقانوني، وضمان وجود إطار العمل المناسب لإدارة المخاطر والامتثال المالي والقانوني بالجهاز.",
    ],
    img: "/assets/images/governance/audit-commitee-img.jpg",
  };
  const invesstmentCommiteeData = {
    title: "Investment Committee (IC)",
    paras: [
      "The Investment Committee is the main body responsible for making investment decisions. It is also tasked with the implementation of OIA’s strategies and allocation of assets approved by the Board of Directors.",
    ],
    list: [
      "Economic stimulation and support for those seeking project financing.",
      "Support for small and medium enterprises (SMEs)",
      "Establish partnerships and attract foreign investment.",
      "Complete the financial and investment coverage system established by the government.",
      "Empower the private sector, avoiding competition, and providing opportunities for partnership in project financing.",
    ],
    img: "/assets/images/ic.jpg",
    endPara: [
      "Generally, the Investment Committee bases its resolutions on the proposals tabled by OIA’s various business units. It also monitors the performance of the investment funds and makes its recommendations for reconsidering the distribution of strategic assets in line with global variables so that OIA’s Board of Directors can make a final decision in this regard.",
    ],
  };
  const ArinvesstmentCommiteeData = {
    title: "لجنة الاستثمار",
    paras: [
      "هي الكيان الرئيسي المسؤول عن اتخاذ قرارات الاستثمار، كما أنها معنية أيضًا بتطبيق استراتيجيات الجهاز وتوزيع الأصول المعتمدة من مجلس الإدارة.",
      "وتقوم اللجنة بالآتي:",
    ],
    list: [
      "تولي مسؤولية الإشراف العام على المحفظة الاستثمارية.",
      "تحديد التوزيع التكتيكي للأصول ضمن إطار الحدود والقيود المعتمدة.",
      "اتخاذ القرارات بشأن تطبيق خطط الاستثمار السنوية.",
      "مراجعة مقترحات الاستثمار في الأسواق العامة والأسواق الخاصة والعقارات التي أعدتها الوحدات ذات الصلة.",
    ],
    img: "/assets/images/ic.jpg",
    endPara: [
      "ويشكل عام، تبني لجنة الاستثمار قراراتها على المقترحات التي تقدمها مختلف وحدات الأعمال في الجهاز، وتراقب أداء صناديق الاستثمار بالتوازي مع التوصيات بشأن إعادة النظر في توزيع الأصول الاستراتيجية بالتوافق مع المتغيرات العالمية، حتى يتمكن مجلس إدارة الصندوق من اتخاذ القرارات النهائية.",
    ],
  };
  const humanResourceData = {
    title: "Human Resources Committee (HRC):",
    paras: [
      "The Human Resources Committee is responsible for the following duties:",
    ],
    list: [
      "Draws up HR’s overall strategy as well as policies and plans aimed at enhancing the skills and competencies of OIA’s human resources",
      "Approves the staff training plan",
      "Develops solutions to challenges relating to human resources",
      "Reviews staff remuneration, bonuses, incentives, and promotions",
      "Reviews and assesses the annual performance of OIA personnel.",
    ],
    img: "/assets/images/hrc.jpg",
    endPara: [
      "The annual plans prepared by Human Resources are reviewed and approved by the HR Committee, which also supervises the implementation of the approved strategy for OIA’s human resources.",
    ],
  };
  const humanResourceDataAr = {
    title: "لجنة الموارد البشرية",
    paras: [
      "تضطلع لجنة الموارد البشرية بالمسؤوليات الآتية:",
    ],
    list: [
      "رسم الإستراتيجية العامة للموارد البشرية، وسياساتها، وخططها لتعزيز مهارات، وكفاءات موارد الجهاز البشرية.",
      "اعتماد خطة تدريب الموظفين.",
      "الوصول إلى حلول للتحديات التي تواجه الموارد البشرية.",
      "مراجعة مكافآت وعلوات وحوافز وترقيات الموظفين وظروف العمل الوظيفي للجهاز.",
      "مراجعة وتقييم الأداء السنوي لموظفي الجهاز.",
    ],
    img: "/assets/images/hrc.jpg",
    endPara: [
      "يتم مراجعة خطط الموارد البشرية السنوية واعتمادها من قبل لجنة الموارد البشرية التي تشرف أيضاً على تنفيذ الاستراتيجية المعتمدة لموارد الجهاز البشرية.",
    ],
  };
  const tenderData = {
    title: "Tender Committee (TC)",
    paras: [
      "The Tender Committee performs the following duties:",
    ],
    list: [
      "Formulates tenders and bidding procedures for tenders worth less than the amount specified by the Tender Board.",
      "Assesses the technical and commercial merits of each bid and submits its recommendations to those in charge of accepting or rejecting the recommendations.",
    ],
    img: "/assets/images/tc.jpg",
    endPara: [
      "The Committee ensures compliance with the procedures set forth for offering, evaluating, and awarding tenders.",
    ],
  };
  const tenderDataAr = {
    title: "لجنة المناقصات",
    paras: ["تتولى لجنة المناقصات المسؤوليات الآتية:"],
    list: [
      "صياغة المناقصات وإجراءاتها وذلك للمناقصات التي تقل قيمتها عن المبلغ المخصص لمجلس المناقصات.",
      "تقييم العروض فنياً وتجارياً، ورفع التوصيات للمسؤولين المخولين بقبول هذه التوصيات أو رفضها.",
    ],
    img: "/assets/images/tc.jpg",
    endPara: [
      "تحرص اللجنة على ضمان الامتثال للإجراءات المتعلقة بطرح المناقصات، وتقييم العروض وإرساء المناقصات.",
    ],
  };
  const imcData = {
    title: "Information Management Committee (IMC):",
    paras: [
      "The Information Management Committee (IMC) performs the following duties:",
    ],
    list: [
      "Provides strategic and tactical guidance for managing OIA’s overall technology systems on both short and long-term basis, according to the approved IM strategy.",
      "Ensures that system development and maintenance projects are consistent with strategic business goals.",
    ],
    img: "/assets/images/imc.jpg",
  };
  const imcDataAr = {
    title: "لجنة تقنية المعلومات",
    paras: ["تقوم اللجنة بالآتي"],
    list: [
      "توفير الإرشاد والتوجيه الاستراتيجي والتكتيكي لإدارة نظم تكنولوجيا المعلومات الخاصة بالجهاز على المدين القصير والبعيد، وفقًا لإستراتيجية تقنية المعلومات المعتمدة.",
      "ضمان ملاءمة مشاريع صيانة وتطوير النظم لأهداف الأعمال الإستراتيجية.",
    ],
    img: "/assets/images/imc.jpg",
  };
  const bcmcData = {
    title:
      "Business Continuity Management Committee (BCMC)",
    paras: [
      "The Business Continuity Management Committee is entrusted with providing strategic direction to bring operational flexibility to Oman Investment Authority. It also plays a significant role in overseeing the implementation of the business continuity management program at OIA under any emergency circumstances. It performs the following roles and responsibilities:",
    ],
    list: [
      "Ensures integration of sustainability and flexibility into the organization's culture and daily operations.",
      "Supports communication processes at the corporate level to demonstrate the commitment of senior management and the Board of Directors to the Audit Committee.",
      "Promotes a work environment that is built on accountability, and ensures business continuity and flexibility across different departments and divisions.",
      "Reviews business continuity, and emergency and crisis planning measures on a regular basis to ensure continuity of business services.",
      "Provides guidance to ensure continued implementation of key tasks and retains the necessary competencies and capabilities to ensure recovery in emergencies.",
      "Ensures that business continuity management outcomes and planning measures for emergencies are tested and reviewed properly.",
    ],
    img: "/assets/images/bcmc.jpg",
  };
  const bcmcDataAr = {
    title: "لجنة استمرارية الأعمال",
    paras: [
      "تقدم لجنة إدارة استمرارية الأعمال التوجيه الإستراتيجي لإضفاء المرونة التشغيلية على جهاز الاستثمار العماني، وتلعب اللجنة دوراً مهماً من حيث الإشراف على تنفيذ برنامج إدارة استمرارية الأعمال في الجهاز عند حدوث أي ظروف طارئة. وتتخلص الأدوار والمسؤوليات الرئيسية للجنة في الآتي:",
    ],
    list: [
      "ضمان دمج ثقافة الاستمرارية والمرونة في العمليات اليومية للمؤسسة.",
      "دعم عمليات التواصل على المستوى المؤسسي لإظهار التزام الإدارة العليا ومجلس الإدارة مع لجنة التدقيق.",
      "تعزيز بيئة عمل قائمة على التحلي بالمسؤولية وضمان استمرارية الأعمال ومرونتها في مختلف الدوائر والأقسام.",
      "مراجعة استمرارية الأعمال، وتدابير التخطيط للطوارئ، والأزمات بشكل دوري لضمان الخدمات المتواصلة للأعمال.",
      "تقديم التوجيه لاستمرار تنفيذ المهام الضرورية والحفاظ على كفاءات وقدرات كافية للتعافي في حالة حدوث أي طارئ.",
      "ضمان أن يتم اختبار ومراجعة نتائج إدارة استمرارية الأعمال، وتدابير التخطيط للطوارئ المطلوبة، بالشكل المناسب.",
    ],
    img: "/assets/images/bcmc.jpg",
  };
  return (
    <main>
      <ImageBanner
        data={locale === "en" ? bannerData : bannerDataAr}
      />
      <TextWIthImg
        data={locale === "en" ? aboutFund : aboutFundAr}
        orderText={1}
        orderImg={2}
        isListShow={true}
        locale={locale}
      />
      <PolygonBg isShowPy={false}>
        <TextWIthImg
          data={
            locale === "en"
              ? invesstmentCommiteeData
              : ArinvesstmentCommiteeData
          }
          locale={locale}
          orderText={2}
          orderImg={1}
          classesContainer="!flex-col-reverse"
          isListShow={true}
        />
      </PolygonBg>
      <TextWIthImg
        data={
          locale === "en"
            ? humanResourceData
            : humanResourceDataAr
        }
        locale={locale}
        orderText={1}
        orderImg={2}
        classesContainer=""
        isListShow={true}
      />
      <PolygonBg isShowPy={false}>
        <TextWIthImg
          data={locale === "en" ? tenderData : tenderDataAr}
          locale={locale}
          orderText={2}
          orderImg={1}
          classesContainer="!flex-col-reverse"
          isListShow={true}
        />
      </PolygonBg>
      <TextWIthImg
        data={locale === "en" ? imcData : imcDataAr}
        locale={locale}
        orderText={1}
        orderImg={2}
        classesContainer=""
        isListShow={true}
      />
      <PolygonBg isShowPy={false}>
      <TextWIthImg
          data={locale === "en" ? bcmcData : bcmcDataAr}
          locale={locale}
          orderText={2}
          orderImg={1}
          classesContainer="!flex-col-reverse"
          isListShow={true}
        />
      </PolygonBg>
    </main>
  );
};
export default InternalGovernance;
