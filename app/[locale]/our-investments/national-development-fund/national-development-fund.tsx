"use client";
import ImageBanner from "@/app/components/banners/ImageBanner";
import EconomicSectors from "@/app/components/our-investment/EconomicSectors";
import FactsFigure from "@/app/components/our-investment/FactsFigure";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import useDarkMode from "@/app/hooks/useDarkMode";
const aboutFund = {
  title: "About The Fund",
  paras: [
    "Manages all local assets and companies, aiming to help grow and develop the Omani economy while supporting the State’s General Budget through dividends and divestment returns. ",
  ],
  list: [],
  img: "/assets/images/our-investments/about-fund.jpg",
};
const aboutFundAr = {
  title: "نبذة عن المحفظة",
  paras: [
    "تُعنى بإدارة جميع الأصول والشركات المحلية، وتهدف إلى الإسهام في نمو الاقتصاد العُماني وتطويره، إلى جانب مساندة الموازنة العامة للدولة عبر توزيعات الأرباح، وعائدات التخارج.",
  ],
  list: [],
  img: "/assets/images/our-investments/about-fund.jpg",
};
type BannerData = {
  title: string;
  description: string;
  image: string;
  logoTitle?: boolean;
  locale?: string;
};
const NationalDevFund: React.FC<any> = ({
  locale,
  data,
}) => {
  const bannerData: BannerData = {
    title: "National Development Fund",
    description: "",
    image:
      "/assets/images/our-investments/national-dev-fund-banner.jpg",
    locale: locale,
  };
  const bannerDataAr: BannerData = {
    title: "محفظة التنمية الوطنية",
    description: "",
    image:
      "/assets/images/our-investments/national-dev-fund-banner.jpg",
    locale: locale,
  };
  const AraccordData = [
    {
      id: 1,
      title: "الطاقة",

      paras: [
        "سلطنة عُمان: وجهة مثالية للاستثمار في قطاع الطاقة",
        "يُعد قطاع الطاقة في سلطنة عُمان من أهم المجالات الواعدة التي تُقدم فرصًا اقتصادية مستدامة هائلة. ويركز جهاز الاستثمار العُماني على مجالات محددة في هذا القطاع تسهم في تحقيق أهداف التنمية المستدامة، خصوصًا مشروعات الطاقة المتجددة. ",
        "وتغطي استثمارات الجهاز في قطاع الطاقة سلسلة القيمة بأكملها، بدءًا من الاستكشاف والإنتاج، وصولًا إلى التسويق والتوزيع.",
      ],
      image:
        "/assets/images/future-generation-fund/real-estate-accordion.jpg",
      list: [
        {
          title:
            "مجالات الاستثمار المستقبلية في قطاع الطاقة",
          para: [],
          subList: [
            {
              content:
                "زيادة الاستثمارات في عمليات تكرير النفط وتسويقه ونقله.",
            },
            {
              content:
                "التركيز على الطاقة البديلة والمتجددة.",
            },
            {
              content: "إدارة التجزئة والغاز.",
            },
            {
              content:
                "توليد الطاقة الكهربائية والبنية الأساسية ذات الصلة.",
            },
            {
              content: "نقل الطاقة.",
            },
            {
              content: "تكرير النفط.",
            },
            {
              content: "الصناعات البتروكيماوية.",
            },
          ],
        },
        {
          title:
            "الشركات التابعة للجهاز العاملة في قطاع الطاقة بسلطنة عمان:",

          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/oq-logo.svg",
              alt: "OQ",
              link: "https://oq.com/",
            },
            {
              id: 2,
              source:
                "/assets/images/our-investments/oman-lng.svg",
              alt: "Oman LNG",
              link: "https://omanlng.co.om/",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "التعدين",

      paras: [
        "سلطنة عُمان: ثروة معدنية بانتظار الاستثمار",
        "يُعد قطاع التعدين في سلطنة عُمان ركيزة أساسية لتحقيق التنوع الاقتصادي، حيث تزخر البلاد بموارد طبيعية فريدة ومتنوعة.وتشير التقديرات إلى أن غالبية احتياطيات المعادن في سلطنة عُمان لم تُستغل بعد، مما يفتح آفاقًا واسعة للاستثمار في هذا المجال.",
      ],
      image:
        "/assets/images/our-investments/mining-img.jpg",
      list: [
        {
          title:
            "يُركز جهاز الاستثمار العُماني على استثمارات محلية في قطاع التعدين من خلال:",
          para: [],
          subList: [
            {
              content: "التنقيب عن المعادن واستخراجها.",
            },
            {
              content:
                "إنتاج ونقل النحاس والفضة والذهب، والكروم والحجر الجيري وغيرها.",
            },
            {
              content:
                "دعم مشاريع إعادة تأهيل مواقع التعدين وتحويلها إلى مساحات خضراء لضمان استدامة القطاع.",
            },
            {
              content:
                "البحث عن موارد جديدة في مناطق غير مكتشفة.",
            },
            {
              content: "بناء مصانع ومحطات للتكرير.",
            },
            {
              content:
                "تطوير المنتجات المعدنية من خلال عمليات التكرير والتوزيع والتسويق.",
            },
          ],
        },
        {
          title:
            "الشركات التابعة للجهاز العاملة في قطاع التعدين بسلطنة عُمان",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/omd-logo.svg",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "اللوجستيات",
      // paraImg:
      //   "/assets/images/our-investments/asyad-logo.svg",

      paras: [
        "اللوجستيات في سلطنة عُمان: بوابة نحو التنوع الاقتصادي والاستقرار المالي",
        "تتمتع سلطنة عُمان بموقع إستراتيجي على طرق التجارة العالمية، مما يجعلها مركزًا مهما للخدمات اللوجستية، وتؤدي هذه الخدمات دورًا حيويًا في دعم خطط التنوع الاقتصادي وتحقيق الاستقرار المالي للبلاد.",
        "وتشمل استثمارات جهاز الاستثمار العُماني في هذا القطاع: الموانئ، والمناطق الحرة، وخدمات الأحواض الجافة، وشبكات الطرق، والخدمات البحرية. كما تُعدّ اللوجستيات ركيزة أساسية لقطاعات أخرى مثل السياحة، والأغذية، والتعدين، والهيدروكربونات، والبتروكيماويات.",
        "وتُشير التوقعات إلى وجود فرص نمو هائلة في قطاع اللوجستيات، تشمل مجالات التصميم، والبناء والتمويل والتشغيل. وتشمل خطط تطوير القطاع: توسيع نطاق الخدمات اللوجستية، وتقديم حلول متكاملة، وبناء السفن، وتسويق الموانئ الصغيرة، وتنمية البنية الأساسية، وتحسين الربط الجوي والبري والبحري.",
        `وتُعدّ مجموعة "أسياد" Asyyad  التابعة للجهاز ضمن الشركات الرائدة في سلطنة عمان العاملة في هذا المجال`,
      ],
      image:
        "/assets/images/our-investments/logistic-img.jpg",
      list: [
        {
          title:
            "وتشمل استثمارات جهاز الاستثمار العُماني في هذا القطاع:",
          para: [],
          subList: [
            {
              content:
                "الموانئ، والمناطق الحرة، وخدمات الأحواض الجافة، وشبكات الطرق، والخدمات البحرية.",
            },
            {
              content:
                " كما تُعدّ اللوجستيات ركيزة أساسية لقطاعات أخرى مثل السياحة، والأغذية، والتعدين، والهيدروكربونات، والبتروكيماويات.",
            },
          ],
        },
        {
          title:
            "وتُعدّ مجموعة أسياد التابعة للجهاز ضمن الشركات الرائدة في سلطنة عمان العاملة في هذا المجال.",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/asyad-logo.svg",
              link: "https://asyad.om/",
              alt: "Asyad",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "الغذاء والثروة السمكية",

      paras: [
        "الغذاء والثروة السمكية في سلطنة عُمان: ركيزة أساسية للأمن الغذائي والتنمية المستدامة",
        "يُولي جهاز الاستثمار العُماني اهتمامًا كبيرًا بتطوير قطاع الغذاء والثروة السمكية، إيمانًا منه بأهميته في تحقيق الأمن الغذائي للبلاد ودعم خطط التنمية الاقتصادية.",
      ],
      image:
        "/assets/images/future-generation-fund/fish.jpg",
      list: [
        {
          title: "وتشمل جهود الجهاز في هذا القطاع:",
          para: [],
          subList: [
            {
              content:
                "دعم مشاريع تصنيع وتسويق الأسماك والمنتجات السمكية والمزارع السمكية.",
            },
            {
              content:
                "الاستثمار في شركات متخصصة في تربية الماشية وإنتاج وتوزيع وتسويق المنتجات الغذائية.",
            },
            {
              content:
                "تعزيز الاكتفاء الذاتي من خلال تطوير المنتجات وبناء المصانع والتوسع التشغيلي وزيادة الصادرات.",
            },
          ],
        },
        {
          title: "شركات الجهاز العاملة في هذا القطاع:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/future-generation-fund/nitaj.svg",
              link: "https://nitaj.om/",
              alt: "nitaj",
            },
            {
              id: 2,
              source:
                "/assets/images/future-generation-fund/fdo.svg",
              link: "https://fdo.om/",
              alt: "Fisheries Development Oman",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "السياحة",

      paras: [
        "السياحة في سلطنة عمان: وجهة واعدة للاستثمار والنمو",
        "يُعدّ قطاع السياحة من أهم القطاعات المستهدفة لجهاز الاستثمار العُماني، حيث تتركز استثماراته في مشاريع الضيافة وإدارة الوجهات السياحية.",
      ],

      image:
        "/assets/images/our-investments/tourism-img.jpg",
      list: [
        {
          title: "وتشمل استثمارات الجهاز في هذا القطاع",
          para: [],
          subList: [
            {
              content: "فنادق من فئة 3 إلى 5 نجوم.",
            },
            {
              content: "مشاريع تطوير عمراني.",
            },
            {
              content:
                "تطوير وإدارة مشاريع البنية التحتية السياحية الاستراتيجية.",
            },
            {
              content: "تجديد الفنادق وافتتاح فنادق جديدة.",
            },
            {
              type: "para",
              content:
                "وتُعدّ مجموعة عمران Omran التابعة للجهاز من أهم الشركات العاملة في قطاع السياحة بسلطنة عمان.",
            },
            {
              type: "img",
              content:
                "/assets/images/future-generation-fund/og.svg",
            },
          ],
        },
        {
          title: "شركات الجهاز العاملة في هذا القطاع:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/icons/omran-logo.svg",
              link: "https://www.omran.om/",
              alt: "Omran",
            }
          ],
        }
      ],
    },
    {
      id: 6,
      title: "الطيران",

      paras: [
        "الطيران في سلطنة عُمان: محرك للتنمية الاقتصادية",
        "يُعدّ قطاع الطيران من أهم القطاعات المستهدفة لجهاز الاستثمار العُماني، نظرًا لما يقدمه من فرص لتنويع الاقتصاد وإيجاد فرص عمل وجذب الاستثمارات الأجنبية.",
      ],
      image:
        "/assets/images/future-generation-fund/aviation.jpg",
      list: [
        {
          title:
            "وتتركز استثمارات الجهاز في هذا القطاع على",
          para: [],
          subList: [
            {
              content: "تطوير المطارات.",
            },
            {
              content: "الإدارة والتشغيل.",
            },
            {
              content: "المناولة على الأرض.",
            },
            {
              content: "دعم شركات الطيران العُمانية.",
            },
          ],
        },
        {
          title: "وتُتيح هذه الاستثمارات فرصًا واعدة، مثل",
          para: [],
          subList: [
            {
              content: "تطوير مدن المطارات والمناطق الحرة.",
            },
            {
              content:
                "الاستفادة من إمكانات عُمان السياحية واللوجستية.",
            },
          ],
        },
        {
          title: "الشركات الرئيسية التي تعمل في القطاع",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/future-generation-fund/omanair.svg",
              link: "https://www.omanair.com/",
              alt: "Oman Air",
            },
            {
              id: 2,
              source:
                "/assets/images/future-generation-fund/omanairport.svg",
              link: "https://www.omanairports.co.om/",
              alt: "Oman Airport",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "المالية",
      paraImg: "",

      paras: [
        "الخدمات المالية: استثمار واعد في مستقبل سلطنة عُمان",
        "يُولي جهاز الاستثمار العُماني اهتمامًا كبيرًا بقطاع الخدمات المالية، إيمانًا منه بأهميته في تنويع مصادر الدخل وخلق فرص عمل وتعزيز النمو الاقتصادي",
      ],
      image:
        "/assets/images/our-investments/finance-img.jpg",
      list: [
        {
          title:
            "وتتركز استثمارات الجهاز في هذا القطاع على:",
          para: [],
          subList: [
            {
              content:
                "توفير التمويل للمؤسسات التعاونية ومتوسطة الحجم.",
            },
            {
              content: "تمويل الأنشطة الاقتصادية الواعدة.",
            },
            {
              content:
                "دعم الإستراتيجية المالية لسلطنة عمان.",
            },
            {
              content: "دعم المنشآت الصغيرة والمتوسطة.",
            },
            {
              content:
                "تمويل مشاريع التنمية التي تنفذها المنشآت الصغيرة والمتوسطة.",
            },
          ],
        },
        {
          title: "الشركات الرئيسية التي تعمل في القطاع:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/mse-logo.svg",
              link: "https://www.msx.om/",
              alt: "Muscat Stock Exchange",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "تقنية المعلومات والاتصالات",
      paraImg: "",

      paras: [
        "تقنية المعلومات والاتصالات: عصب التنمية المستدامة في سلطنة عُمان",
        "يُعدّ قطاع تقنية المعلومات والاتصالات محركًا أساسيًا للتنمية المستدامة في عُمان، ويسهم بصورة فعّالة في تحقيق رؤية عمان 2040.",
      ],
      image:
        "/assets/images/future-generation-fund/ict.jpg",
      list: [
        {
          title:
            "وتتركز استثمارات جهاز الاستثمار العُماني في هذا القطاع في:",
          para: [],
          subList: [
            {
              content:
                "دعم الاستثمار في تقنيات الثورة الصناعية الرابعة.",
            },
            {
              content: "تطوير البنية الأساسية الرقمية.",
            },
            {
              content:
                "تمويل الشركات الناشئة في مجال التقنية.",
            },
            {
              content:
                "تعزيز الاستثمار في التحول الرقمي والأمن الإلكتروني.",
            },
            {
              content:
                "دعم الخدمات السحابية والأنظمة الرقمية.",
            },
            {
              content: "تمويل مشاريع التقنيات الناشئة.",
            },
          ],
        },
        {
          title: "شركات الجهاز العاملة في القطاع:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/future-generation-fund/ithca.svg",
              link: "https://ithca.om/",
              alt: "Ithca",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      title: "الخدمات ( المرافق العامة )",
      paraImg: "",

      paras: [
        "الخدمات (المرافق العامة): ركيزة أساسية لتنمية سلطنة عُمان يُعدّ قطاع الخدمات، خصوصًا المرافق العامة، من أهم ركائز التنمية في سلطنة عُمان.",
      ],
      image:
        "/assets/images/our-investments/public-sevice-img.jpg",
      list: [
        {
          title:
            "وتتركز استثمارات جهاز الاستثمار العُماني في هذا القطاع على:",
          para: [],
          subList: [
            {
              content:
                "توفير إمدادات آمنة وموثوقة من المياه والكهرباء.",
            },
            {
              content:
                "تلبية الطلب المتزايد على المرافق العامة.",
            },
            {
              content: "الاستثمار في المبادرات الجديدة.",
            },
            {
              content: "تشجيع مشاركة القطاع الخاص.",
            },

            {
              content: "تنفيذ مشاريع الطاقة المتجددة.",
            },
            {
              content:
                "الاستفادة من المخلفات في توليد الطاقة.",
            },
            {
              content: "تحديث وبناء محطات فرعية جديدة.",
            },
          ],
        },
        {
          title: "شركات الجهاز العاملة في القطاع: ",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/nama-logo.svg",
              link: "https://www.namaservices.om/",
              alt: "nama",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      title: "الصناعة",
      paraImg: "",

      paras: [
        "الصناعة العمانية: إنتاج محلي فاخر ",
        "تهدف إستراتيجيتنا للاستثمار الصناعي إلى بناء علاقات قوية ودائمة مع أهم المصنعين بما يتفق مع هدف سلطنة عمان لتحقيق الاستدامة الاقتصادية، ولذلك تتوزّع استثماراتنا ما بين القنوات التشغيلية المتعددة في القطاع",
      ],
      image:
        "/assets/images/future-generation-fund/industry.jpg",
      list: [
        {
          title:
            "تركز إستراتيجية الاستثمار الصناعي لجهاز الاستثمار العُماني على:",
          para: [],
          subList: [
            {
              content: "بناء علاقات قوية مع المصنعين.",
            },
            {
              content: "دعم الاستدامة الاقتصادية.",
            },
            {
              content: "توفير المصانع والمجمعات الصناعية.",
            },

            {
              content: "دعم الإنتاج والتصنيع.",
            },
            {
              content:
                "الاستثمار في مشاريع الصناعات الدوائية.",
            },
            {
              content: "بناء وتحديث المصانع.",
            },
            {
              content:
                "تعزيز الصناعة من خلال مبادرات محلية.",
            },
            {
              content: "تحقيق الاكتفاء الذاتي لسلطنة عمان.",
            },
          ],
        }
      ],
    },
    {
      id: 11,
      title: "إضافة شركات أخرى",
      imgSlider: true,
      sliderData: [
        {
          id: 1,
          src: "/assets/images/future-generation-fund/mse.svg",
          alt: "slide one",
          link: "https://www.msx.om/",
        },
        {
          id: 2,
          src: "/assets/images/future-generation-fund/rakiza.svg",
          alt: "rakiza",
          link: "https://www.rakizafund.om/",
        },
        {
          id: 3,
          src: "/assets/images/future-generation-fund/omantel.svg",
          alt: "Oman Tel",
          link: "https://www.omantel.om/",
        },
        {
          id: 4,
          src: "/assets/images/future-generation-fund/karwa.svg",
          alt: "Karwa",
          link: "https://www.karwamotors.com/",
        },
        {
          id: 5,
          src: "/assets/images/future-generation-fund/takatuf.svg",
          alt: "Takaful",
          link: "https://www.takatuf.om/",
        },
      ],
    },
  ];
  const accordData = [
    {
      id: 1,
      title: "Energy",

      paras: [
        "The Sultanate of Oman: An Ideal Investment Destination in the Energy Sector",
        "The energy sector in Oman is one of the most promising fields, offering many opportunities for sustainable economic growth. Oman Investment Authority focuses on specific areas within this sector that help achieve sustainable development goals, especially renewable energy projects.",
        "OIA’s investments cover the entire energy value chain, from exploration and production to marketing and distribution.",
      ],
      image:
        "/assets/images/future-generation-fund/real-estate-accordion.jpg",
      list: [
        {
          title:
            "Future Investment Areas in the Energy Sector:",
          para: [],
          subList: [
            {
              content:
                "Increasing investments in oil refining, marketing, and transportation.",
            },
            {
              content:
                "Focusing on alternative and renewable energy.",
            },
            {
              content: "Managing gas and retail services.",
            },
            {
              content:
                "Power generation and related infrastructure.",
            },
            {
              content: "Energy transmission.",
            },
            {
              content: "Oil refining.",
            },
            {
              content: "Petrochemical industries.",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/oq-logo.svg",
              alt: "OQ",
              link: "https://oq.com/",
            },
            {
              id: 2,
              source:
                "/assets/images/our-investments/oman-lng.svg",
              alt: "Oman LNG",
              link: "https://omanlng.co.om/",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Mining",

      paras: [
        "The Sultanate boasts substantial commercial resources, estimated at approximately 54.5 million tons, with the country accounting for 44.4% of the global gypsum supply. Additionally, the mining and refining sector in Oman stands to benefit significantly from the surge in demand for energy transition minerals. Among the five current projects under development, two are crucial for energy transition technologies. Geothermal energy, for example, drives demand for titanium, which is essential for handling the high heat and pressure in geothermal power generation. Despite these advancements, the sector remains largely untapped and undeveloped, presenting numerous business opportunities.",
      ],
      image:
        "/assets/images/our-investments/mining-img.jpg",
      list: [
        {
          title: "Investment Potential",
          para: [],
          subList: [
            {
              content:
                "Exploration and processing of metallic and non-metallic minerals",
            },
            {
              content:
                "Develop mining education and training centers ",
            },
            {
              content:
                "Establishing manufacturing industries utilizing local minerals, such as construction materials, chemicals, and electronics",
            },
            {
              content:
                "Establishing mineral trade and brokerage firms that act as intermediaries in mineral commodities trade, both domestically and internationally",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/omd-logo.svg",
              link: "",
              alt: "Minerals Development Oman",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Logistics",
      // paraImg:
      //   "/assets/images/our-investments/asyad-logo.svg",

      paras: [
        "With five state-of-the-art airports, several world-class deep ports and a well developed road network connecting major cities and neighboring countries, Oman has made substantial investments in infrastructure to position itself as a key logistics hub in the Middle East, leveraging its strategic geographic location at the crossroads of East and West, within two weeks sail of all major global ports, serving as a major gateway for regional and international trade. The land connectivity will be further enhanced by the current pipeline investment of a rail network linking major industrial areas across the Sultanate of Oman, as well as a joint investment between Oman and the UAE linking economic and industrial zones in both countries.",
      ],
      image:
        "/assets/images/our-investments/logistic-img.jpg",
      list: [
        {
          title: "Investment Potential ",
          para: [],
          subList: [
            {
              content:
                "Integrated logistics services, leveraging Oman’s ports and airports",
            },
            {
              content:
                "Value-added warehousing in free zones that offer services such as packaging, labeling, and assembly",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/asyad-logo.svg",
              link: "https://asyad.om/",
              alt: "Asyad",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Fisheries",

      paras: [
        "Oman's fisheries sector represents a thriving area of investment, supported by government initiatives and strategic development plans.",
        "With a long coastline, diverse biomass of 32 different fishery stocks, and multiple sites for commercial aquaculture projects, the sector is integral to Oman’s economic growth strategy. The country has 142% self-sufficiency in seafood consumption, highlighting its robust marine resources.",
      ],
      image:
        "/assets/images/future-generation-fund/fish.jpg",
      list: [
        {
          title: "Investment Potential ",
          para: [],
          subList: [
            {
              content:
                "Commercial fish and seafood farming operations",
            },
            {
              content:
                "Coastal and offshore maricultural projects to diversify seafood production",
            },
            {
              content:
                "Facilities for processing and packaging value-added seafood products",
            },
            {
              content: "Cold Storage Facilities",
            },
            {
              content:
                "Fish trading company to serve regional and global markets",
            },
            {
              content:
                "Eco-friendly fishing practices and equipment",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/future-generation-fund/nitaj.svg",
              link: "https://nitaj.om/",
              alt: "nitaj",
            },
            {
              id: 2,
              source:
                "/assets/images/future-generation-fund/fdo.svg",
              link: "https://fdo.om/",
              alt: "Fisheries Development Oman",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Tourism",

      paras: [
        "Oman has massive potential to deliver a unique tourism experience, unmatched by its neighbors, offering a unique and attractive destination for international tourists and investors alike. Through its stable and diversified approach, and the leverage of its inherent strengths and strategic initiatives, Oman’s tourism industry has shown steady and solid growth. The international tourist arrivals increased by 14% between 2019 and July 2023, exceeding the 2030 target set by Oman’s Vision 2040. The planned mixed-use development project in Jabal Akhdar, with an investment size of $2.4 billion, is expected to further boost regional arrivals.",
      ],

      image:
        "/assets/images/our-investments/tourism-img.jpg",
      list: [
        {
          title: "Investment Potential ",
          para: [],
          subList: [
            {
              content:
                "Oman's unique landscapes, including mountains, beaches, and deserts, make it an attractive destination for adventure tourism",
            },
            {
              content:
                "Entertainment, including a comprehensive, large-scale amusement & theme park that caters to all age groups",
            },
            {
              content:
                "Health and wellness tourism combined with the potential for fitness bootcamps",
            },
            {
              content:
                "Oman's young population and high gaming engagement present an opportunity to develop esports arenas, training facilities, and game studios",
            },
            {
              content:
                "Heritage and culture tourism presents a lucrative business opportunity due to the country's rich historical sites and unique cultural traditions",
            },
            {
              content:
                " High quality hotels and accommodation services outside Muscat",
            },
            {
              content:
                "MICE, hosting global events and other tourism related services across the value chain",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/icons/omran-logo.svg",
              link: "https://www.omran.om/",
              alt: "Omran",
            }
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Aviation",

      paras: [
        "Aviation in the Sultanate of Oman: A Driver of Economic Development",
        "The aviation sector is one of the key areas targeted by Oman Investment Authority, given its potential to diversify the economy, create jobs, and attract foreign investments",
      ],
      image:
        "/assets/images/future-generation-fund/aviation.jpg",
      list: [
        {
          title:
            "OIA’s investments in this sector focus on:",
          para: [],
          subList: [
            {
              content: "Airport development",
            },
            {
              content: "Management and operations.",
            },
            {
              content: "Ground handling services.",
            },
            {
              content: "Supporting Omani airlines.",
            },
          ],
        },
        {
          title:
            "These investments offer promising opportunities, such as",
          para: [],
          subList: [
            {
              content:
                "Development of airport cities and free zones.",
            },
            {
              content:
                "Leveraging Oman's tourism and logistics potential.",
            },
          ],
        },
        {
          title:
            "Key companies operating in the sector include",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/future-generation-fund/omanair.svg",

              link: "https://www.omanair.com/",
              alt: "Oman Air",
            },
            {
              id: 2,
              source:
                "/assets/images/future-generation-fund/omanairport.svg",
              link: "https://www.omanairports.co.om/",
              alt: "Oman Airport",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Finance",
      paraImg: "",

      paras: [
        "Financial Services: A Promising Investment in Oman's Future",
        "Oman Investment Authority places great importance on the financial services sector, recognizing its role in diversifying income sources, creating jobs, and boosting economic growth.",
      ],
      image:
        "/assets/images/our-investments/finance-img.jpg",
      list: [
        {
          title:
            "OIA’s investments in this sector focus on:",
          para: [],
          subList: [
            {
              content:
                "Providing financing for cooperative and medium-sized enterprises.",
            },
            {
              content:
                "Funding promising economic activities.",
            },
            {
              content:
                "Supporting Oman's financial strategy.",
            },
            {
              content:
                "Assisting small and medium enterprises (SMEs).",
            },
            {
              content:
                "Financing development projects carried out by SMEs.",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/mse-logo.svg",
              link: "https://www.msx.om/",
              alt: "Muscat Stock Exchange",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "ICT",
      paraImg: "",

      paras: [
        "Oman's strategic location and existing telecommunications infrastructure presents a strong foundation for future growth in the ICT sector. As the world shifts towards a data monetization economy, leveraging data for economic benefit becomes increasingly vital. Oman is well-positioned to capitalize on this trend due to its significant role as a major landing point for 21 submarine cables, with 75% of buildings covered by fiber-optic networks and 98% of the population covered by mobile networks. The rollout of 5G technology, with 2600 stations activated in 2022, enhances the potential for further technological innovations, particularly in the Internet of Things (IoT). With the groundwork set for robust digital connectivity, Oman's digital potential allows the country to serve as a digital hub and a digital corridor to the rest of the GCC with no disruptions. ",
      ],
      image:
        "/assets/images/future-generation-fund/ict.jpg",
      list: [
        {
          title: "Investment Potential",
          para: [],
          subList: [
            {
              content:
                "Oman's role as a hub for submarine cables boosts its appeal for Data Centers and Cloud Services.",
            },
            {
              content:
                "Satellite communications and earth observation present high-value investment opportunities",
            },
            {
              content:
                "Oman's robust cloud infrastructure makes it an ideal location for Artificial Intelligence and High-Tech Infrastructure",
            },
            {
              content:
                "Oman's e-commerce market has vast growth potential, with only 8% of the population shopping via mobile",
            },
            {
              content:
                "Fintech in Oman is set to grow, aiming to double electronic payment",
            },
          ],
        },
        {
          title: "Key Companies in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/future-generation-fund/ithca.svg",
              link: "https://ithca.om/",
              alt: "Ithca",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      title: "Services (Utilities)",
      paraImg: "",

      paras: [
        "Services (Utilities): A Key Pillar for Oman's Development",
        "The services sector, especially utilities, is one of the main pillars of development in Oman.",
      ],
      image:
        "/assets/images/our-investments/public-sevice-img.jpg",
      list: [
        {
          title:
            "OIA’s investments in this sector focus on:",
          para: [],
          subList: [
            {
              content:
                "Providing safe and reliable supplies of water and electricity.",
            },
            {
              content:
                "Meeting the growing demand for public utilities.",
            },
            {
              content: "Investing in new initiatives.",
            },
            {
              content:
                "Encouraging private sector participation.",
            },
            {
              content:
                "Implementing renewable energy projects.",
            },
            {
              content:
                "Utilizing waste for energy production.",
            },
            {
              content:
                "Upgrading and building new substations.",
            },
          ],
        },
        {
          title: "Key Company in the Sector:",
          para: [],
          subList: [],
          logos: [
            {
              id: 1,
              source:
                "/assets/images/our-investments/nama-logo.svg",
              link: "https://www.namaservices.om/",
              alt: "nama",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      title: "Manufacturing",
      paraImg: "",

      paras: [
        "Despite significant growth over the past five decades, Oman’s manufacturing sector still has gaps that offer lucrative opportunities for investors. As the sector moves forward and embraces Industry 4.0, it aims to develop opportunities using Oman’s rich mix of natural resources, particularly in petrochemicals, construction, cement, marble, gypsum, building products, minerals, and food and beverages. Additionally, there is increasing interest from the Omani public and the region in locally made products, creating more opportunities to be tapped.",
      ],
      image:
        "/assets/images/future-generation-fund/industry.jpg",
      list: [
        {
          title: "Investment Potential",
          para: [],
          subList: [
            {
              content:
                "Health-related manufacturing projects",
            },
            {
              content:
                "Renewable manufacturing and green hydrogen value chain, with pilot projects having already started",
            },
            {
              content:
                "Tapping into the supply-chain of electric vehicles and semiconductors",
            },
            {
              content: "Pipes and infrastructure equipment",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      title: "Private Equities",
      imgSlider: true,
      sliderData: [
        {
          id: 1,
          src: "/assets/images/future-generation-fund/mse.svg",
          alt: "Muscat Stock Exchange",
          link: "https://www.msx.om/",
        },
        {
          id: 2,
          src: "/assets/images/future-generation-fund/rakiza.svg",
          alt: "rakiza",
          link: "https://www.rakizafund.om/",
        },
        {
          id: 3,
          src: "/assets/images/future-generation-fund/omantel.svg",
          alt: "Oman Tel",
          link: "https://www.omantel.om/",
        },
        {
          id: 4,
          src: "/assets/images/future-generation-fund/karwa.svg",
          alt: "Karwa",
          link: "https://www.karwamotors.com/",
        },
        {
          id: 5,
          src: "/assets/images/future-generation-fund/takatuf.svg",
          alt: "Takaful",
          link: "https://www.takatuf.om/",
        },
      ],
    },
  ];
  const factsDataEn = {
    title: "Facts & Figures",
    figures: [
      {
        value: "10+",
        desc: "More than 10 key sectors.",
      },
      {
        value: "160+",
        desc: "Over 160 holding and subsidiary companies.",
      },
      {
        value: "",
        desc: "A diverse fund of bonds, treasury bills, sukuk, and deposits.",
      },
    ],
    images: [
      {
        image:
          "/assets/images/our-investments/fact-img-1.jpg",
        alt: "fact-img-1",
      },
      {
        image:
          "/assets/images/our-investments/fact-img-2.jpg",
        alt: "fact-img-2",
      },
      {
        image:
          "/assets/images/our-investments/fact-img-3.jpg",
        alt: "fact-img-3",
      },
    ],
  };
  const factsDataAr = {
    title: "حقائق وأرقام عنها",
    figures: [
      {
        value: "+10",
        desc: "قطاعــات رئيســة",
      },
      {
        value: "+160",
        desc: "شــركة قابضــة وتابعــة",
      },
      {
        value: "",
        desc: "مجموعــة متنوعــة مــن الســندات والأذون والصكــوك والودائع",
      },
    ],
    images: [
      {
        image:
          "/assets/images/our-investments/fact-img-1.jpg",
        alt: "fact-img-1",
      },
      {
        image:
          "/assets/images/our-investments/fact-img-2.jpg",
        alt: "fact-img-2",
      },
      {
        image:
          "/assets/images/our-investments/fact-img-3.jpg",
        alt: "fact-img-3",
      },
    ],
  };
  const factsData =
    locale === "en" ? factsDataEn : factsDataAr;
  const isDark = useDarkMode() || false;
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
      />
      <div
        className={`bg-[url('${isDark ? "/assets/images/pattern-polyg-b-img.png" : "/assets/images/pattern-polyg-img.png"}')] bg-cover py-[40px] sm:py-[50px] lg:py-[100px]`}
      >
        <FactsFigure locale={locale} data={factsData} />
      </div>
      <EconomicSectors
        data={locale === "en" ? accordData : AraccordData}
        locale={locale}
      />
    </main>
  );
};
export default NationalDevFund;
