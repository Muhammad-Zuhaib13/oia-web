import ImageBanner from "@/app/components/banners/ImageBanner";
import ExpandableCardsWithImg from "@/app/components/common/ExpandableCardsWithImg";
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
    namespace: "National-Economy",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const OmaniAngle: React.FC<any> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const bannerDataEn = {
    title: "Omani Angle",
    description: "",
    image: "/assets/images/oia-impact/omain-angle-banner.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title:"البُعد العماني",
    description: "",
    image: "/assets/images/oia-impact/omain-angle-banner.jpg",
    locale: locale,
  }
  const omaniAngleDataAr = {
    title: "البُعد العماني",
    subTitle: "",
    paras: [
     "يواصل جهاز الاستثمار العماني سعيه إلى دعم القطاعات المحلية المستهدفة في رؤية عمان 2040، عبر تفعيل البُعد العماني في استثماراته الخارجية؛ حيث يهدف الجهاز من خلاله إلى تمكين سلطنة عمان من الاستفادة من أحدث التقنيات، ونقلها إلى القطاعات المحلية، وجذب الاستثمارات الأجنبية إليها.",
    ],
    mainImg:
    "/assets/images/oia-impact/oa-main-section-img.jpg",
    cards: [
      {
        id: 1,
        imgSrc:
          "",
        details: [
          {
            title: "شركة كروزو للطاقة",
            paras: [
             "يجسد هذا الاستثمار جهود جهاز الاستثمار العماني لتوطين التقنيات الحديثة في القطاعات الاقتصادية الواعدة. ومن خلال هذه الشراكة، تستهدف شركة كروزو توسيع عملياتها في الشرق الأوسط، الذي يعد موطنًا لبعض أكبر منتجي النفط والغاز على مستوى العالم. ومن المقرر أن يعزز هذا التوسع ربحية الشركة في سوق واعدة جديدة. بالإضافة إلى ذلك، يهدف إلى تحقيق الأهداف البيئية، وهو جانب حيوي من هذه المبادرة، خاصة وأن عُمان من بين أكبر 10 دول في حرق الغاز في العالم، وفقًا لتقرير البنك الدولي الصادر في عام 2020.",
             "تستهدف تقنيات كروزو شركات وحقول النفط والغاز على وجه التحديد. حيث تستخدم الشركة انبعاثات حرق الغاز التي تساهم سلبًا في الانحباس الحراري العالمي من خلال تخفيف حرق ثاني أكسيد الكربون بنحو 63٪. ويشمل ذلك خفض الميثان بنسبة 98٪ لأن مولدات كروزو تتمتع بكفاءة احتراق تبلغ 99.9٪ مقابل متوسط ​​93٪ للحرق."
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "اقرأ المزيد",
          labelShowLess: "اقرأ أقل",
        },
      },
      {
        id: 2,
        imgSrc:
          "",
        details: [
          {
            title: "مطور الأدوية بيوجينوميكس",
            paras: [
             "يستثمر جهاز الاستثمار العماني في مجال الأدوية من خلال استثمارها في شركة بيوجينوميكس، وهي شركة مطورة للأدوية الحيوية المماثلة مع التركيز على العلاجات الخاصة بمرض السكري. تنتج الشركة وتطور مجموعة من أدوية الأنسولين بالتعاون مع شركة عمانية محلية.",
             "يعزز هذا الاستثمار جهود جهاز الاستثمار العماني في تمكين القطاع الخاص في السلطنة لجذب الاستثمار الأجنبي. ويستهدف هذا الاستثمار إنشاء مصنع في عمان لإنتاج الأنسولين، وسوف يستهدف الإنتاج في البداية الأسواق الإقليمية ثم يهدف إلى التوسع لتغطية الأسواق الأوروبية والأفريقية."
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "اقرأ المزيد",
          labelShowLess: "اقرأ أقل",
        },
      },
      {
        id: 3,
        imgSrc:
         "/assets/icons/electric-hydro.svg",
        details: [
          {
            title:"شركة الكتريك هيدروجين",
            paras: [
            ' جهاز الاستثمار العماني أضاف استثماراً في مجال الطاقة المتجددة بالتعاون مع شركة "الكتريك هيدروجين" التي تأسست في الولايات المتحدة عام 2020. طورت الشركة أنظمة كهربائية مبتكرة لإنتاج الهيدروجين عالي الكثافة باستخدام الطاقة المتجددة، وتوفر حلولاً لإنتاج الهيدروجين الأخضر النظيف بتكاليف منخفضة. يهدف هذا الاستثمار إلى تنويع استثمارات محفظة الأجيال وتعزيز مساعي سلطنة عمان للوصول إلى الحياد الصفري الكربوني بحلول عام 2050.',
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "اقرأ المزيد",
          labelShowLess: "اقرأ أقل",
        },
      },
      {
        id: 4,
        imgSrc:
        "/assets/icons/group-14.svg",
        details: [
          {
            title: 'شركة "جروب 14" ',
            paras: [
             'يستثمر جهاز الاستثمار العُماني في شركة "جروب 14" الأمريكية الرائدة في مواد البطاريات والمتخصصة في تصنيع أنودات السيليكون المبتكرة التي تُستخدم كبديل للجرافيت في بطاريات الليثيوم أيون.',
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "اقرأ المزيد",
          labelShowLess: "اقرأ أقل",
        },
      },
      {
        id: 5,
        imgSrc:
        "/assets/icons/sense.svg",
        details: [
          {
            title:'شركة "سينس لاب" ',
            paras: [
             'يستثمر جهاز الاستثمار العماني في شركة أمريكية "سينس لاب" الرائدة في مجال إدارة الطاقة الذكية، حيث قامت هذه الشركة التي طوّرت تقنية باستخدام الذكاء الاصطناعي تتيح للمستهلكين مراقبة استهلاك الطاقة في منازلهم بدقة عالية بإجراء تجارب ميدانية لتقنيتها المبتكرة في سلطنة عمان؛ وذلك من أجل جمع البيانات والخوارزميات التي ستسهم في تحسين أداء التقنية وتكييفها مع البيئة المحلية.',
             'وأتت هذه التجارب نتيجةً لاستثمار جهاز الاستثمار العماني في الشركة الأمريكية الذي بدأ في عام 2019م، حيث تعمل الشركة حاليًا على تعزيز شراكتها مع شركات الطاقة العُمانية بما يساعدها على تعزيز قدرات وكفاءة الشبكة الوطنية للكهرباء من خلال تحقيق استجابة أفضل للطلب على الطاقة، وتقديم حلول مبتكرة تلبي احتياجات السوق المحلي؛ الأمر الذي سيفتح الباب أمام إمكانية إنشاء مركز للبحوث والتطوير في السلطنة، والإسهام في تعزيز الاقتصاد الوطني وإيجاد فرص عمل جديدة.'
            ],
          }
        ],
        cta: {
          labelRead: "اقرأ المزيد",
          labelShowLess: "اقرأ أقل",
        },
      },
      {
        id: 6,
        imgSrc:
        "/assets/icons/one-next-en.svg",
        details: [
          {
            title: "الاستثمار في الأمريكية",
            paras: [
             'يستثمر جهاز الاستثمار العُماني الاستثمار في شركة "أور نِكست إينرجي" الأمريكية، المتخصّصة في تكنولوجيا البطاريات المبتكرة للسيارات الكهربائية وتخزين الطاقة، في خطوة تعكس التزام الجهاز بتنويع محفظته الاستثمارية الدولية وتحقيق الاستفادة المثلى لسلطنة عمان من حيث العائد على الاستثمار، والاستثمارات المستدامة بما يتماشى مع إستراتيجيات سلطنة عمان في الوصول إلى الحياد الصفري بحلول عام 2050. وفي إطار هذا الاستثمار، وقّع الجهاز والشركة الأمريكية اتفاقية تعاون إستراتيجي بهدف تحديد مجالات التعاون المحتملة في مجال تخزين الطاقة وتصنيع البطاريات في سلطنة عُمان.',
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "اقرأ المزيد",
          labelShowLess: "اقرأ أقل",
        },
      }
    ],
  };
  const omaniAngleDataEn = {
    title: "Omani Angle",
    subTitle: "",
    paras: ["Oman Investment Authority continues its efforts to support the local sectors targeted in Oman Vision 2040, by activating the Omani angel in its foreign investments; through which the OIA aims to enable the Sultanate of Oman to benefit from the latest technologies, transfer them to local sectors, and attract foreign investments to it."],
    mainImg:
      "/assets/images/oia-impact/oa-main-section-img.jpg",
    cards: [
      {
        id: 1,
        imgSrc:
          "",
        details: [
          {
            title: "Crusoe Energy",
            paras: [
              "This investment embodies OIA’s efforts to localize modern technologies in promising economic sectors. Through its partnership with OIA, Crusoe targets the expansion of its operations in the Middle East, which is home to some of the biggest oil and gas producers globally. This expansion is set to enhance the company’s profitability in a new promising market. In addition, it aims to realize environmental objectives, which is a vital aspect of this initiative, especially when Oman is one of the top 10 countries in gas flaring in the world, according to a World Bank report published in 2020.",
              "Crusoe's Digital Flare Mitigation technology specifically targets oil and gas companies and fields. The company utilizes gas flaring emissions that negatively contribute to global warming by mitigating the flare of CO2e by around 63%. This includes a 98% reduction of methane because Crusoe’s generators have a combustion efficiency of 99.9% vs an average of 93% for flares."
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "Read More",
          labelShowLess: "Show Less",
        },
      },
      {
        id: 2,
        imgSrc:
        "",
        details: [
          {
            title:
              "Medicine Developer BioGenomics",
            paras: [
              "Oman Investment Authority announced its investment in BioGenomics, a developer of biosimilar pharmaceuticals with a focus on diabetic therapeutics. The company produces and develops an array of insulin medications in collaboration with a local Omani company.",
              "This investment reinforces OIA’s efforts in enabling the private sector in Oman and collaborating with it to attract foreign investment. This investment targets setting up a manufacturing plant in Oman to produce insulin. The production will initially target regional markets and then aim to expand to cover European and African markets."
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "Read More",
          labelShowLess: "Show Less",
        },
      },
      {
        id: 3,
        imgSrc:
          "/assets/icons/electric-hydro.svg",
        details: [
          {
            title:
              "Electric Hydrogen (EH2)",
            paras: [
              "Oman Investment Authority (OIA) has added another investment to its renewable energy portfolio through a partnership with Electric Hydrogen (EH2), a company established in 2020 in the United States. Electric Hydrogen has developed advanced electrolyzers designed to generate power-dense green hydrogen using renewable energy. Their systems produce a high volume of clean hydrogen at transformational low costs. This investment helps diversify the portfolio of the Future Generations Fund and advances Oman’s commitment towards achieving net-zero emissions by 2050.",
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "Read More",
          labelShowLess: "Show Less",
        },
      },
      {
        id: 4,
        imgSrc:
          "/assets/icons/group-14.svg",
        details: [
          {
            title: "Group14 Technologies",
            paras: [
              "Oman Investment Authority successfully invested in Group14, a leading US company manufacturing trailblazing battery materials. This investment is part of OIA’s strategy of seeking opportunities in new fields while partnering with global investors and attracting investment to Oman.",
              "Group14 specializes in manufacturing innovative lithium-silicon battery materials to replace traditional lithium-ion batteries. The company attracted several leading investors in the battery materials field, including Porsche, SK Materials, and several others.",
              "This technology used by Group14 lowers costs and elevates performance. Group14 has built a strong customer pipeline with contracted revenue, including engagements with 90% of the world’s battery manufacturers. Through this investment, OIA intends to integrate Oman with the company’s supply chain."
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "Read More",
          labelShowLess: "Show Less",
        },
      },
      {
        id: 5,
        imgSrc:
          "/assets/icons/sense.svg",
        details: [
          {
            title: "Sense Lab",
            paras: [
             'Oman Investment Authority is investing in the American company "Sense Lab", a pioneer in the field of smart energy management. The company, which has developed a technology using artificial intelligence that allows consumers to monitor energy consumption in their homes with high accuracy, has conducted field trials of its innovative technology in the Sultanate of Oman; in order to collect data and algorithms that will contribute to improving the performance of the technology and adapting it to the local environment.',
             "These trials came as a result of the OIA's investment in the American company that began in 2019. The company is currently working to strengthen its partnership with Omani energy companies to help it enhance the capabilities and efficiency of the national electricity grid by achieving a better response to energy demand, and providing innovative solutions that meet the needs of the local market; which will open the door to the possibility of establishing a research and development center in the Sultanate, and contribute to strengthening the national economy and creating new job opportunities."
            ],
          }
        ],
        cta: {
          labelRead: "Read More",
          labelShowLess: "Show Less",
        },
      },
      {
        id: 6,
        imgSrc:
          "/assets/icons/one-next-en.svg",

        details: [
          {
            title: "Our Next Energy ",
            paras: [
              "Oman Investment Authority investing in the US-based company ‘Our Next Energy (ONE),’ which specializes in innovative battery technology for Electric Vehicles (EVs) and energy storage. This step comes in continuation of OIA’s efforts to diversify its international investment portfolio and achieve optimal benefit for Oman in terms of return on investment and sustainable investments that align with Oman’s commitment to Net Zero emissions by 2050. As part of the investment, OIA and ONE signed a Strategic Collaboration Agreement (SCA) to explore potential areas of collaboration in energy storage and battery manufacturing in Oman.",
            ],
            list: [],
          },
        ],
        cta: {
          labelRead: "Read More",
          labelShowLess: "Show Less",
        },
      }
    ],
  };
  return (
    <div>
      <ImageBanner data={locale === "en" ?  bannerDataEn : bannerDataAr} />
      <ExpandableCardsWithImg
        locale={locale}
        data={
          locale === "en"
            ? omaniAngleDataEn
            : omaniAngleDataAr
        }
      />
    </div>
  );
};
export default OmaniAngle;
