"use client";
import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWithImgandBtn from "@/app/components/common/TextWithImgandBtn";
import ScreenContainer from "@/app/components/screencontainer/ScreenContainer";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";

const Careers: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "Careers",
    description: "",
    image: "/assets/images/banner/careers-dsktp-banner.jpg",
    tabImg:
      "/assets/images/banner/careers-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/careers-mobile-banner.jpg",
    locale: locale,
  };
  const ArbannerData = {
    title: "التوظيف",
    description: "",
    image: "/assets/images/banner/careers-dsktp-banner.jpg",
    tabImg:
      "/assets/images/banner/careers-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/careers-mobile-banner.jpg",
    locale: locale,
  };
  const newTwoDataTextWithImg = {
    title: "Why Join OIA",
    paras: [
      "Oman Investment Authority and its subsidiaries place significant importance on developing human capital, attracting talents, and investing in their training and skill enhancement through specialized courses and programs that cover all aspects required by businesses.",
      "As a sovereign investment arm, we execute long-term investments across diverse asset classes worldwide. This allows our employees greater opportunities for unparalleled career development in investment management, as well as a multicultural work environment.",
    ],
    list: [],
    img: "/assets/images/whyjoinoia.jpg",
  };
  const ArnewTwoDataTextWithImg = {
    title: "منصة جدارة",
    paras: [
      "يولي جهــــــــاز الاستثمـــــار العماني وشركـــاته التابعــــــة أهميــة كــــــبيرة بتنمــــية رأس المال البشري، واستقطـــاب الكـــفاءات، والاستثمــار في تــــدريبها، وصقــل مهـــاراتها، عــــبر دورات وبرامــج تخصصية تغطــــي جميع الجـوانب التي تتطلبهــــــا الأعمـــــــــال",
      "كذراع استثماري سيادي، نحن نعمل على تنفيذ استثمارات طويلة الأجل في فئات الأصول المتنوعة في جميع أنحاء العالم؛ حيث يتيح ذلك لموظفينا مجالاً أكبر وفرصًا لا مثيل لها لتطوير مسيرتهم المهنية في إدارة الاستثمارات، فضلا عن بيئة العمل متعددة الثقافات",
    ],
    list: [],
    img: "/assets/images/whyjoinoia.jpg",
  };
  const benefitData = {
    title:
      "Our employees enjoy numerous benefits, including:",
    paras: [],
    list: [
      "Support and encouragement to pursue education and obtain specialized and professional certifications.",
      "On-the-job training from qualified employees of various nationalities.",
      "Local and international development opportunities.",
      "On-the-job and external training.",
      "Training opportunities and secondments in partner institutions and subsidiary companies.",
      "Opportunities for employee transfer to our joint projects with friendly countries around the world.",
      "Competitive rewards, incentives, and benefits.",
    ],
    img: "/assets/images/employeenjoy.jpg",
  };
  const ArbenefitData = {
    title: "يحصل موظفونا على العديد من المزايا، منها:",
    paras: [],
    list: [
      "التطوير محليا وخارجيا.",
      "التدريب على رأس العمل وخارجه.",
      "الدعم والتشجيع على مواصلة التعليم والحصول على الشهادات التخصصية والمهنية.",
      "فرص التدريب والانتداب في المؤسسات الشريكة والشركات التابعة.",
      "التدريب أثناء العمل من قبل موظفين مؤهلين من جنسيات مختلفة.",
      "إمكانية انتقال الموظف إلى أحد مشاريعنا المشتركة مع دول صديقة حول العالم.",
      "مكافآت وحوافز ومزايا تنافسية.",
    ],
    img: "/assets/images/employeenjoy.jpg",
  };
  const nayionalizationData = {
    title: "Omanization",
    paras: [
      "Oman Investment Authority reached a 94% Omanaisation rate by the end of 2023. Over 60 subsidiary companies were linked to the unified employment platform `Jadarah” as a part of developmental programs and initiatives,",
      "Additionally, the general strategy for training and development programs of OIA’s Academy has been adopted. In OIA’s subsidiaries, the Omanaisation rate reached 76.9% by the end of 2023, with a total number of employees amounting to 39,497",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const ArnayionalizationData = {
    title: "التعمين",
    paras: [
      `بلغت نسبة التعمين في جهاز الاستثمار العماني 94% حتى نهاية 2023م، ومن أبرز البرامج والمبادرات التطويرية، تم ربط أكثر من 60 شركة تابعة بمنصة التوظيف الموحدة "جدارة". بالإضافة إلى اعتماد الإستراتيجية العامة لبرامج التدريب والتطوير التابعة لأكاديمية جهاز الاستثمار العماني.`,
      `وفي الشركات التابعة للجهاز، وصلت نسبة التعمين إلى 76.9% حتى نهاية عام 2023م، مع عدد إجمالي من الموظفين بلغ 39,497 موظفًا وموظفة.`,
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
  };
  const bulletsData = [
    "Economics",
    "Finance",
    "Accounting",
    "Management",
    "Risk Management",
    "Information Security",
    "Commercial Law",
    "IT Infrastructure and Storage Services",
    "Administration",
    "Human Resource Management",
    "Network Systems and Security",
    "Journalism and Media",
  ];
  const ArbulletsData = [
    "الاقتصاد",
    "الاقتصاد",
    "المحاسبة",
    "الإدارة",
    "إدارة المخاطر",
    "أمن المعلومات",
    "القانون التجاري",
    "البنية التحتية لتقنية المعلومات وخدمات التخزين",
    "إدارة الأعمال",
    "إدارة الموارد البشرية",
    "أنظمة الشبكات والحماية",
    "الصحافة والإعلام",
  ];
  const schemaData = {
    title: "OIA Scheme Programs",
    paraHeading:
      "Graduate Development Program (Nomu Program)",
    paras: [
      "The `Nomu Program,`` offered by the Oman Investment Authority, aims to support and train recent graduates in various fields such as economics, finance, accounting, business administration, law, media studies, and human resource management. The program focuses on enhancing their skills and opening up job opportunities post-training. To be eligible for the program, applicants must hold a bachelor's degree with a cumulative GPA of at least 2.7.",
    ],
    list: [],
    img: "/assets/images/schemaimg.jpg",
  };
  const ArschemaData = {
    title: "برامج جهاز الاستثمار العماني للخريجين",
    paraHeading: "برنامج تطوير الخريجين (برنامج نمو)",
    paras: [
      `يهدف "برنامج نمو" الذي يقدمه جهاز الاستثمار العماني إلى دعم وتدريب الخريجين الجدد في مختلف التخصصات مثل الاقتصاد، والمالية، والمحاسبة، وإدارة الأعمال، والقانون، والدراسات الإعلامية، وإدارة الموارد البشرية، وذلك لصقل مهاراتهم وفتح المجال الوظيفي لهم بعد التدريب يشترط للقبول في البرنامج الحصول على درجة البكالوريوس بمعدل تراكمي لا يقل عن 2.7`,
    ],
    list: [],
    img: "/assets/images/schemaimg.jpg",
  };
  const certiData = {
    title: "",
    paraHeading: "Certified Program (Moatamad Program)",
    paras: [
      "The Certified Program is an initiative launched by the Oman Investment Authority and its subsidiaries to employ and develop Omani graduates in the fields of economics, finance, and accounting. The program aims to develop national competencies, bridge the gap between labor market needs and professional disciplines, and cultivate Omani leadership in the finance and accounting sectors. Participants in the program receive the Certified International Accountant (ACCA) certification or the Chartered Financial Analyst (CFA) designation.",
    ],
    list: [],
    img: "/assets/images/certi-img.jpg",
    endPara: [],
    // btn: {
    //   label: "Download",
    // },
  };
  const certiDataAr = {
    title: "",
    paraHeading: "برنامج معتمد",
    paras: [
      "برنامج مُعتمد هو برنامج أطلقه جهاز الاستثمار العماني والشركات التابعة له لتوظيف وتطوير الخريجين العمانيين في تخصصات الاقتصاد والمالية والمحاسبة، ويهدف إلى تطوير الكفاءات الوطنية، والإسهام في سد الفجوة بين احتياجات سوق العمل والتخصصات المهنية، وإيجاد قيادات عمانية في قطاعي المالية والمحاسبة. ويحصل المشاركون في البرنامج على شهادة المحاسبين الدوليين المعتمدين (ACCA) أو شهادة المحلل المالي CF",
    ],
    list: [],
    img: "/assets/images/certi-img.jpg",
    endPara: [],
    // btn: {
    //   label: "ملف PDF",
    // },
  };
  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const bulletChunks = chunkArray(
    locale === "en" ? bulletsData : ArbulletsData,
    3,
  );
  const vendorData = {
    title: "Vendor Registration",
    paras: [
      "Oman Investment Authority and its subsidiaries place significant importance on developing human capital, attracting talents, and investing in their training and skill enhancement through specialized courses and programs that cover all aspects required by businesses.",
    ],
    cta: {
      label: "E-Procurements platform",
    },
  };
  const ArvendorData = {
    title: "التسجيل كمورد",
    paras: [
      "سعى جهاز الاستثمار العماني إلى تسجيل الموردين الموثوقين والمتمكنين في تقديم الخدمات بأعلى مستويات الجودة والكفاءة، ولتسهيل التواصل وضمان وصول المناقصات، ندعو الموردين المهتمين بالتسجيل عبر منصة الموردين الرقمية",
    ],
    cta: {
      label: "منصة تسجيل الموردين",
    },
  };
  const jadarahData = {
    title: "Jadarah Platform",
    paras: [
      `Look no further than "Jadarah," the digital resourcing platform affiliated with Oman Investment Authority. The platform includes a comprehensive list of job and training opportunities, as well as secondment opportunities and experience exchange programs. With Jadarah, you can easily find all the opportunities available within Oman Investment Authority and its companies, all in one platform.`,
    ],
    cta: {
      label: "jadarah.oia.gov.om",
      btntitle:
        "Check out all the opportunities available.",
      url: "https://jadarah.oia.gov.om/",
    },
  };
  const ArjadarahData = {
    title: "التوظيف",
    paras: [
      `سعيًا إلى استقطاب الكفاءات الوطنية ذات المهارة والمعرفة والخبرة؛ تم تدشين منصة التوظيف الرقمية "جدارة" التابعة لجهاز الاستثمار العماني لعرض جميع الشواغر الوظيفية والفرص التدريبية وفرص الندب والإعارة وتبادل الخبرات؛ لتكون بمثابة المحطة التي تجمع الفرص والشواغر في جهاز الاستثمار العماني وشركاته التابعة، بصورة ميسرة ومنظمة وتحت مظلة واحدة`,
    ],
    cta: {
      label: "منصة جدارة للتوظيف",
      btntitle:
        "Check out all the opportunities available.",
      url: "https://jadarah.oia.gov.om/",
    },
  };
  return (
    <div>
      <ImageBanner
        data={locale === "en" ? bannerData : ArbannerData}
      />
      <div>
        <PolygonBg bgImg="" className="!bg-none">
          <TextWithImgandBtn
            locale={locale}
            data={
              locale === "en" ? vendorData : ArvendorData
            }
          />
        </PolygonBg>
        <PolygonBg>
          <TextWithImgandBtn
            locale={locale}
            data={
              locale === "en" ? jadarahData : ArjadarahData
            }
          />
        </PolygonBg>
      </div>
      <TextWIthImg
        data={
          locale === "en"
            ? newTwoDataTextWithImg
            : ArnewTwoDataTextWithImg
        }
        orderText={1}
        orderImg={2}
        isListShow={true}
      />
      <TextWIthImg
        data={locale === "en" ? benefitData : ArbenefitData}
        orderText={2}
        orderImg={1}
        isListShow={true}
        locale={locale}
        swap={true}
      />
      <PolygonBg>
        <TextWIthImg
          marginY="0px"
          classesContainer="lg:pb-[80px] sm:pb-[60px] pb-[40px]"
          isShowMarginYResp={false}
          data={
            locale === "en"
              ? nayionalizationData
              : ArnayionalizationData
          }
          orderText={1}
          orderImg={2}
          isListShow={true}
        />
        <ScreenContainer>
          <div>
            <p
              className={`paragraph rtl:font-TajawalRegular`}
            >
              {locale === "en"
                ? "We are looking for candidates with outstanding academic and professional records to contribute to achieving the Authority's future goals, particularly in:"
                : "نحن نبحث عن مرشحين يمتلكون سجلات أكاديمية ومهنية متميزة، بما يسهم في تحقيق أهداف الجهاز المستقبلية، خصوصًا في:"}
            </p>
          </div>
          <div className="sm-[60px] mt-[40px] flex justify-between gap-[24px] pb-[40px] lg:pb-[80px]">
            <ul
              className={`grid grid-cols-2 gap-[16px] sm:gap-[20px] lg:grid-cols-4 lg:gap-[24px] `}
            >
              {bulletChunks?.map(
                (chunk: string[], columnIndex: number) => (
                  <div
                    className="flex w-full flex-col gap-[20px] px-[16px]"
                    key={columnIndex}
                  >
                    {chunk?.map(
                      (item: string, index: number) => (
                        <span
                          className={`paragraph relative flex flex-row gap-[4px] rtl:font-TajawalRegular ${
                            locale === "ar"
                              ? "before:left-auto before:right-[-16px]"
                              : "before:left-[-16px]"
                          } bullets-col before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] `}
                        >
                          {item}
                        </span>
                      ),
                    )}
                  </div>
                ),
              )}
            </ul>
          </div>
        </ScreenContainer>
      </PolygonBg>
      <TextWIthImg
        data={locale === "en" ? schemaData : ArschemaData}
        orderText={2}
        orderImg={1}
        isListShow={false}
        swap={true}
      />
      <div className="mb-[60px] lg:mb-[100px]">
        <TextWIthImg
          marginY="0px"
          isShowMarginYResp={false}
          data={locale === "en" ? certiData : certiDataAr}
          orderText={1}
          orderImg={2}
          isListShow={false}
        />
      </div>
    </div>
  );
};
export default Careers;
