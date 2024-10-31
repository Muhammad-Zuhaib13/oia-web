"use client";
import ExpandableCardsWithImg from "@/app/components/common/ExpandableCardsWithImg";
import ImageBanner from "@/app/components/banners/ImageBanner";
import DetailedAccordion from "@/app/components/common/DetailedAccordion";
import NewHighLightSection from "@/app/components/common/NewHighLightSection";
import PolygonBg from "@/app/components/common/PolygonBg";
import ScreenContainer from "@/app/components/screencontainer/ScreenContainer";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import useDarkMode from "@/app/hooks/useDarkMode";
const aboutFund = {
  title: "About Future Generation Funds ",
  paras: [
    "Oman Investment Authority manages a fund of international investments aimed primarily at generating sustainable financial returns. It focuses on long-term investments to ensure the prosperity of future generations.",
  ],
  listHeading: "The fund includes:",
  list: [
    "Over 185 investment funds in private equity, real estate, venture capital, and infrastructure. ",
    "More than 60 direct investments in various sectors, in addition to equities, bonds, treasury bills, and deposits across global markets.",
  ],
  img: "/assets/images/future-generation-fund/about-fund.jpg",
};
const AraboutFund = {
  title: "نبذة عن المحفظة ",
  paras: [
    "تشمل استثمارات الجهاز خارج سلطنة عمان، وتهدف بصورة أساسية إلى تحقيق عوائد مالية مُستدامة عبر التركيز على استثمارات طويلة الأمد؛ للاستفادة منها في رفاهية أجيال المستقبل. ",
  ],
  listHeading: "وتضم:",
  list: [
    "أكثر من ١٨٥ صندوقا استثماريا في التملــك الخاص والعقاري والاســتثمار فــي رأس المال الجــريء والبنى الأساســية. ",
    "أكثر من ٦٠ استثمارا مباشرا في قطاعات متنوعة، بالإضافة إلى الأســهم والســندات وأذون الخزانــة والودائع في مختلف الأســواق العالمية۔ ",
  ],
  img: "/assets/images/future-generation-fund/about-fund.jpg",
};
const newTwoDataTextWithImg = {
  title: "Geographical Distribution",
  paras: [
    "OIA's investments span over 50 countries worldwide. By the end of 2023, the geographical distribution of these investments showed that the majority, 60.8%, is allocated within Oman (National Development Fund), while the remaining 30.2% is distributed internationally as follows:",
  ],
  list: [
    "North America: 19.8%",
    "Europe: 10.4%",
    "Asia and Pacific Rim countries: 3.9%",
    "Other countries: 1.5%",
    "Middle East and North Africa: 1.3%",
    "Emerging Europe and Central Asia: 1.3%",
    "Latin America: 0.8%",
    "Africa: 0.2%",
  ],
  img: "/assets/images/future-generation-fund/global-footprint.jpg",
};
const ArnewTwoDataTextWithImg = {
  title: "التوزيع الجغرافي",
  paras: [
    "تتوزع استثمارات الجهاز في أكثر من 50 دولة حول العالم، وأظهر التوزيع الجغرافي لاستثمارات الجهاز حتى نهاية 2023م أن الحصة الأكبر (60.8%) هي للاستثمارات داخل سلطنة عمان (محفظة التنمية الوطنية)، بينما تتوزع النسبة المتبقية (39.2%) خارج السلطنة.",
  ],
  listHeading: "عمان وفق التقسيم الآتي: ",
  list: [
    "أمريكا الشمالية: %19.8",
    "أوروبا: %10.4",
    "آسيا والدول المطلة على المحيط الهادي: %3.9",
    "بقية دول العالم: %1.5",
    "الشرق الأوسط وشمال أفريقيا %1.3",
    "أوروبا الناشئة وآسيا الوسطى: %1.3",
    "أمريكا اللاتينية: %0.8",
    "أفريقيا: %0.2",
  ],
  img: "/assets/images/future-generation-fund/global-footprint.jpg",
};
const newDataHightlights = {
  title: "Public Markets ",
  subTitle: "(Stocks, Bonds, and Multi-Asset)",
  paras: [
    " Public markets involve investments in liquid, tradable securities, including global and local equities, global bonds, multi-asset funds, and short-term assets. The public markets funds also invest with external asset managers across various asset classes.",
    "In 2023, public markets delivered returns exceeding expectations, achieving 9.8% compared to the target return of 5% for the Futures Generations Fund. This growth was driven by the exceptional performance of global equity markets, supported by promising developments in artificial intelligence and strong financial results from listed companies.",
  ],
  mainImg:
    "/assets/images/future-generation-fund/public-market.jpg",
  cards: [
    {
      id: 1,
      cardTitle: "Global Equities Fund:",
      cardParas: [
        " OIA's global equities fund is diversified across 50 countries, including North America, Europe, the Pacific Rim, and emerging markets, ensuring a broad distribution of investments and risk management",
      ],
      list: [],
    },
    {
      id: 2,
      cardTitle: "Global Bonds Fund: ",
      cardParas: [
        "This fund invests in high-quality sovereign and government-related bonds across nearly 35 bond markets in both developed and emerging economies, primarily aiming to provide low-risk, income-generating investments.",
      ],
      list: [],
    },
    {
      id: 3,
      cardTitle: "Short-term Assets:",
      cardParas: [
        "These are considered safe investments that maintain liquidity levels, including U.S. treasury bills, sovereign sukuk, corporate deposits, and deposits with local banks. ",
      ],
      list: [],
    },
  ],
};
const ArnewDataHightlights = {
  title: "الأسواق العامة ",
  subTitle: "(الأسهم والسندات والأصول المتعددة) ",
  paras: [
    "تستثمر الأسواق العامة في الأوراق المالية والأدوات القابلة للتداول التي يمـــــكن تحويلهـــا إلى سيولة، وتتضمن استثماراتها الأسهم العالمية، والأسهم المحلية، والسندات العالمية، والمحافظ متعددة الأصول، والأصول قصيرة الأجل، بالإضافة إلى الاستثمار مع مديري أصـول خارجيين عبر فئات أصول مختلفة.",
    "حققت الأسواق العامة في عام 2023م عوائد فاقت التوقعات، حيث بلغت 9.8% مقارنة بالعائد المستهدف لمحفظة الأجيال البالغ 5%، ويعود هذا النمو إلى الأداء الاستثنائي لأسواق الأسهم العالمية، مدعومًا بالآفاق الواعدة لقطاع الذكاء الاصطناعي والنتائج المالية الإيجابية للشركات المدرجة. ",
  ],
  mainImg:
    "/assets/images/future-generation-fund/public-market.jpg",
  cards: [
    {
      id: 1,
      cardTitle: "محفظة الأسهم العالمية:",
      cardParas: [
        "تستثمر محفظة الأسهم العالمية لجهاز الاستثمار العُماني في 50 دولة موزعة في كل من أمريكا الشمالية وأوروبا ودول آسيا المطلة على المحيط الهادي والأسواق الناشئة؛ بما يعمل على تنويع الاستثمارات وتوزيع مخاطر المحفظة.",
      ],
      list: [],
    },
    {
      id: 2,
      cardTitle: "محفظة السندات العالمية:",
      cardParas: [
        "تستثمر في أدوات سيادية عالية الجودة وذات الصلة بالحكومة فيما يقارب من 35 سوقا من أسواق السندات في جميع أنحاء العالم في البلدان المتقدمة والناشئة، والغرض الرئيسي منها هو توفير الاستثمارات ذات العوائد مع معدلات مخاطر منخفضة.",
      ],
      list: [],
    },
    {
      id: 3,
      cardTitle: "استثمارات الأصول قصيرة الأجل: ",
      cardParas: [
        " تعد من أدوات الاستثمارات الآمنة، والتي تحافظ على معدلات السيولة، كأذون الخزينة الأمريكية، والصكوك السيادية، وودائع الشركات، والودائع لدى البنوك المحلية. ",
      ],
      list: [],
    },
  ],
};
const expCardsData = [
  {
    id: 1,
    imgSrc:
      "/assets/images/future-generation-fund/ovi-logo.svg",
    details: [
      {
        title: "Vietnam Oman Investment (VOI)",
        paras: [
          "Established in 2008 through a partnership with the State Capital Investment Corporation of Vietnam, Vietnam Oman Investment began with an initial capital of $75 million, later increased by an additional $125 million. The company invests in Vietnamese businesses and projects to achieve sustainable financial returns.",
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
      "/assets/images/future-generation-fund/oman-india-logo.svg",
    details: [
      {
        title: "Oman India Joint Investment Fund (OIJIF)",
        paras: [
          "Founded in 2011 in partnership with the State Bank of India, Oman India Joint Investment Fund initially invested $100 million in various sectors across India. It has since allocated an additional $240 million, which is currently being invested in multiple industries.",
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
      "/assets/images/future-generation-fund/oam-uzbek-logo.svg",
    details: [
      {
        title: "Uzbek Oman Investment Joint Venture (UOI)",
        paras: [
          "This joint venture with the Uzbekistan Fund for Reconstruction and Development was launched to invest in Uzbekistan with an initial capital of $100 million, which was later increased to $200 million in 2017.",
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
      "/assets/images/future-generation-fund/oman-brunel-logo.svg",
    details: [
      {
        title: "Oman Brunei Investment Company",
        paras: [
          "Established in 2009 in partnership with the Brunei Investment Agency, Oman Brunei Investment Company began with an initial capital of $100 million, which was raised to $200 million in 2019. The company primarily invests in various sectors within Oman.",
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
      "/assets/images/future-generation-fund/oman-spain-logo.svg",
    details: [
      {
        title: "Spain Oman Private Equity Fund",
        paras: [
          "Oman-Spain Private Equity Fund was founded in 2014 with a capital of €200 million, as a result of a strong partnership between Oman Investment Authority and Spain’s COFIDES, with each partner contributing 50%. The fund focuses on investing in promising Spanish companies seeking to expand into the Gulf Cooperation Council countries, East Africa, India, Southeast Asia, and Latin America. The fund has shown promising results in 2023.",
        ],
      },
      {
        title: "The First Fund Achievements:",
        paras: null,
        list: [
          "Oman Investment Authority committed €85.9 million of the total €100 million.",
          "The fund has made 11 investments since its inception and completed its designated investment period.",
          "In 2023, two investments were exited, with one achieving 4.5 times the invested value and the other yielding 1.3 times. The fund has achieved a total internal rate of return of 19% as of December 31, 2023.",
          "The future focus will be on managing and exiting current investments."
        ],
      },
      {
        title: "Establishment of the Second Fund:",
        paras: null,
        list: [
          "Oman Investment Authority and COFIDES have agreed to establish a second fund with a total capital of €102 million. Both partners will contribute €50 million each, while the fund manager will contribute €2 million.",
          "All binding agreements have been signed, and the second fund has started investing in leading Spanish companies.",
        ],
      },

    ],
    cta: {
      labelRead: "Read More",
      labelShowLess: "Show Less",
    },
  },
  {
    id: 6,
    imgSrc:
      "/assets/images/future-generation-fund/oman-china-logo.svg",

    details: [
      {
        title: "CMBI Neo-Momentum Fund",
        paras: [
          "Established in 2020 in partnership with China Commercial Bank International, this fund has a capital exceeding $300 million. It focuses on investing in diverse sectors across China, including information and communication technology, renewable energy, healthcare, and logistics.",
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
    id: 7,
    imgSrc:
      "/assets/images/future-generation-fund/oman-pak-logo.svg",
    details: [
      {
        title: "Pak Oman Investment Company Limited",
        paras: [
          "Founded in 2001 through an agreement between the governments of Oman and Pakistan, Pak Oman Investment Company Limited was established with an initial capital of $100 million. The company aims to promote economic growth in both countries by focusing on industrial development and agriculture-based industries.",
        ],
      },
    ],
    cta: {
      labelRead: "Read More",
      labelShowLess: "Show Less",
    },
  },
  {
    id: 9,
    imgSrc:
      "/assets/images/future-generation-fund/al-husn-logo.svg",
    details: [
      {
        title: "Al Hosn Investment Company (HIC):",
        paras: ["A joint venture between Oman and Qatar, Al Hosn Investment Company was founded in 2007 with a total capital of OMR 100 million. The company aims to invest in key economic sectors within Oman and the Gulf Cooperation Council countries, including healthcare, education, food security, real estate, industry, manufacturing, technology, hospitality, and tourism."],   
      },
    ],
    cta: {
      labelRead: "Read More",
      labelShowLess: "Show Less",
    },
  }
];
const ARexpCardsData = [
  {
    id: 1,
    imgSrc:
      "/assets/images/future-generation-fund/ovi-logo.svg",
    details: [
      {
        title: "شركة عمان فيتنام للاستثمار:",
        paras: [
          "تأسست في عام 2008، بالشراكة مع المؤسسة العامة للاستثمار في فيتنام، برأس مال أولي قدره 75 مليون دولار أمريكي، ثم تمت زيادته لاحقًا بمبلغ قدره 125 مليون دولار أمريكي. وتستثمر الشركة في الشركات والمشاريع الفيتنامية، ، لتحقيق عوائد مالية مُستدامة.",
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
      "/assets/images/future-generation-fund/oman-india-logo.svg",
    details: [
      {
        title: "الصندوق العماني الهندي للاستثمار",
        paras: [
          "تأسس في عام 2011م بشراكة مع بنك الدولة الهندي، واستثمر في البداية 100 مليون دولار أمريكي في مختلف القطاعات داخل الهند ، ثم خصص مبلغ 240 مليون دولار أمريكي يقوم باستثمارها حاليًا في عدة قطاعات.",
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
      "/assets/images/future-generation-fund/oam-uzbek-logo.svg",
    details: [
      {
        title: "الشركة العمانية الأوزبكية للاستثمار ",
        paras: [
          "مشروع مشترك مع صندوق إعادة الإعمار والتنمية الأوزباكستاني؛ للاستثمار في أوزبكستان، برأس مال أولي قدره 100 مليون دولار أمريكي، زاد لاحقًا إلى 200 مليون دولار أمريكي في عام 2017م.",
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
      "/assets/images/future-generation-fund/oman-brunel-logo.svg",
    details: [
      {
        title: "شركة عُمان بروناي للاستثمار",
        paras: [
          " تأسست في عام 2009م بالشراكة مع هيئة بروناي للاستثمار، برأس مال أولي قدره 100 مليون دولار أمريكي، رُفِع في عام 2019م إلى 200 مليون دولار أمريكي. وتستثمر الشركة بشكل رئيسي في مختلف القطاعات داخل سلطنة عمان. ",
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
      "/assets/images/future-generation-fund/oman-spain-logo.svg",
    details: [
      {
        title: "الصندوق العماني الإسباني للتملك الخاص",
        paras: [
          "تأسس صندوق عُمان إسبانيا للتملك الخاص عام 2014 برأس مال قدره 200 مليون يورو، ثمرة شراكة متميزة بين جهاز الاستثمار العُماني وشركة   COFIDES الإسبانية المملوكة للحكومة، بنسبة 50% لكل منهما. يهدف الصندوق إلى الاستثمار في الشركات الإسبانية ذات الإمكانيات الواعدة التي تسعى إلى توسيع نطاق أعمالها في دول مجلس التعاون الخليجي وشرق إفريقيا والهند وجنوب شرق آسيا وأمريكا اللاتينية. وقد تمكن الصندوق من تحقيق نتائج مبشرة خلال 2023 الصندوق الأول:",
        ],
        
      },
      {
        title: "الصندوق الأول:",
        paras: [],
      list: [
        " قام الجهاز باستثمار ٨٥٫٩ مليون يورو من مبلغ ١٠٠ مليون يورو الذي تم الالتزام به",
        " استثمر الصندوق في ١١ استثمارا منذ تأسيسه وقد أكمل الصندوق الفترة المحددة له للاستثمار.",
        "التخارج من استثمارين في ٢٠٢٣م حقق أحدهما ٤٫٥ ضعفًا على قيمة الاستثمار بينما حقق الاستثمار الثاني ١٫٣ ضعفًا.",
        "حقق الصندوق إجمالي معدل عائد داخلي بلغ ١٩٪ حتى ٣١ ديسمبر ٢٠٢٣. ",
        "سيكون تركيز الصندوق في المستقبل على إدارة الاستثمارات الحالية والتخارج منها.",
      ],
      },
      {
        title: "إنشاء الصندوق الثاني:",
        paras: [],
        list: [
          "اتفق الجهاز وشركة COFIDES الأسبانية على إنشاء الصندوق الثاني بمبلغ إجمـــالي قدره ١٠٢ مليون يورو، حيث يسهم كـــــل من الشريكين بمبلغ قــــدره ٥٠ مليون يورو بينما يسهم مدير الصنــــدوق بمبلـــغ وقدره ٢ مليون يورو",
          "التوقيع على جميع الاتفاقيات الملزمة وباشر الصندوق عملـه في الاستثمار في شركـــــات إسبانية رائدة.",
        ],
      },
    ],
    cta: {
      labelRead: "اقرأ المزيد",
      labelShowLess: "اقرأ أقل",
    },
  },
  {
    id: 6,
    imgSrc:
      "/assets/images/future-generation-fund/oman-china-logo.svg",

    details: [
      {
        title: "البنك التجاري الصيني الدولي",
        paras: [
          "تأسس في عام 2020م بالشراكة مع البنك التجاري الصيني الدولي. ويزيد رأس مال الصندوق عن 300 مليون دولار أمريكي. ويستهدف الاستثمار في القطاعات الصينية المتنوعة، مثل تكنولوجيا المعلومات والاتصالات والطاقة المتجددة، والرعاية الصحية، والخدمات اللوجستية.",
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
    id: 7,
    imgSrc:
      "/assets/images/future-generation-fund/oman-pak-logo.svg",
    details: [
      {
        title: "شركة باك عمان للاستثمار ",
        paras: [
          "تأسست في عام 2001م باتفاق بين حكومتي السلطنة وباكستان، وبرأس مال أولي قدره 100مليون دولار أمريكي. وتهدف الشركة إلى تعزيز النمو الاقتصادي في البلدين من خلال التنمية الصناعية والصناعات القائمة على الزراعة.",
        ],
      },
    ],
    cta: {
      labelRead: "اقرأ المزيد",
      labelShowLess: "اقرأ أقل",
    },
  },
  {
    id: 8,
    imgSrc:
      "/assets/images/future-generation-fund/al-husn-logo.svg",
    details: [
      {
        title: "شركة الحصن للاستثمار ",
        paras: [
          "شركة عمانية قطرية تأسست في عام 2007م برأس مال إجمالي يبلغ 100 مليون ريال عماني. وتستهدف الشركة الاستثمار في القطاعات الاقتصادية الرئيسية داخل السلطنة ودول مجلس التعاون الخليجي، بما في ذلك الرعاية الصحية، والتعليم، والأمن الغذائي، والعقارات، والصناعة، والتصنيع، والتكنولوجيا، والضيافة، والسياحة.",
        ],
      },
    ],
    cta: {
      labelRead: "اقرأ المزيد",
      labelShowLess: "اقرأ أقل",
    },
  },
];
const governmentData = {
  title: "Strategic Partnerships Friendly Countries",
  subTitle: "",
  paras: [],
  mainImg:
    "/assets/images/future-generation-fund/government.jpg",
  cards:  [
    {
      id: 1,
      imgSrc:
        "/assets/images/future-generation-fund/ovi-logo.svg",
      details: [
        {
          title: "Vietnam Oman Investment (VOI)",
          paras: [
            "Established in 2008 through a partnership with the State Capital Investment Corporation of Vietnam, Vietnam Oman Investment began with an initial capital of $75 million, later increased by an additional $125 million. The company invests in Vietnamese businesses and projects to achieve sustainable financial returns.",
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
        "/assets/images/future-generation-fund/oman-india-logo.svg",
      details: [
        {
          title: "Oman India Joint Investment Fund (OIJIF)",
          paras: [
            "Founded in 2011 in partnership with the State Bank of India, Oman India Joint Investment Fund initially invested $100 million in various sectors across India. It has since allocated an additional $240 million, which is currently being invested in multiple industries.",
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
        "/assets/images/future-generation-fund/oam-uzbek-logo.svg",
      details: [
        {
          title: "Uzbek Oman Investment Joint Venture (UOI)",
          paras: [
            "This joint venture with the Uzbekistan Fund for Reconstruction and Development was launched to invest in Uzbekistan with an initial capital of $100 million, which was later increased to $200 million in 2017.",
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
        "/assets/images/future-generation-fund/oman-brunel-logo.svg",
      details: [
        {
          title: "Oman Brunei Investment Company",
          paras: [
            "Established in 2009 in partnership with the Brunei Investment Agency, Oman Brunei Investment Company began with an initial capital of $100 million, which was raised to $200 million in 2019. The company primarily invests in various sectors within Oman.",
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
        "/assets/images/future-generation-fund/oman-spain-logo.svg",
      details: [
        {
          title: "Spain Oman Private Equity Fund",
          paras: [
            "Oman-Spain Private Equity Fund was founded in 2014 with a capital of €200 million, as a result of a strong partnership between Oman Investment Authority and Spain’s COFIDES, with each partner contributing 50%. The fund focuses on investing in promising Spanish companies seeking to expand into the Gulf Cooperation Council countries, East Africa, India, Southeast Asia, and Latin America. The fund has shown promising results in 2023.",
          ],
        },
        {
          title: "The First Fund Achievements:",
          paras: null,
          list: [
            "Oman Investment Authority committed €85.9 million of the total €100 million.",
            "The fund has made 11 investments since its inception and completed its designated investment period.",
            "In 2023, two investments were exited, with one achieving 4.5 times the invested value and the other yielding 1.3 times. The fund has achieved a total internal rate of return of 19% as of December 31, 2023.",
            "The future focus will be on managing and exiting current investments."
          ],
        },
        {
          title: "Establishment of the Second Fund:",
          paras: null,
          list: [
            "Oman Investment Authority and COFIDES have agreed to establish a second fund with a total capital of €102 million. Both partners will contribute €50 million each, while the fund manager will contribute €2 million.",
            "All binding agreements have been signed, and the second fund has started investing in leading Spanish companies.",
          ],
        },
  
      ],
      cta: {
        labelRead: "Read More",
        labelShowLess: "Show Less",
      },
    },
    {
      id: 6,
      imgSrc:
        "/assets/images/future-generation-fund/oman-china-logo.svg",
  
      details: [
        {
          title: "CMBI Neo-Momentum Fund",
          paras: [
            "Established in 2020 in partnership with China Commercial Bank International, this fund has a capital exceeding $300 million. It focuses on investing in diverse sectors across China, including information and communication technology, renewable energy, healthcare, and logistics.",
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
      id: 7,
      imgSrc:
        "/assets/images/future-generation-fund/oman-pak-logo.svg",
      details: [
        {
          title: "Pak Oman Investment Company Limited",
          paras: [
            "Founded in 2001 through an agreement between the governments of Oman and Pakistan, Pak Oman Investment Company Limited was established with an initial capital of $100 million. The company aims to promote economic growth in both countries by focusing on industrial development and agriculture-based industries.",
          ],
        },
      ],
      cta: {
        labelRead: "Read More",
        labelShowLess: "Show Less",
      },
    },
    {
      id: 9,
      imgSrc:
        "/assets/images/future-generation-fund/al-husn-logo.svg",
      details: [
        {
          title: "Al Hosn Investment Company (HIC):",
          paras: ["A joint venture between Oman and Qatar, Al Hosn Investment Company was founded in 2007 with a total capital of OMR 100 million. The company aims to invest in key economic sectors within Oman and the Gulf Cooperation Council countries, including healthcare, education, food security, real estate, industry, manufacturing, technology, hospitality, and tourism."],   
        },
      ],
      cta: {
        labelRead: "Read More",
        labelShowLess: "Show Less",
      },
    }
  ],
};
const ArgovernmentData = {
  title: "الشراكات الإستراتيجية مع الدول الصديقة  ",
  subTitle: "",
  paras: [
    // "الشراكات الإستراتيجية مع الدول الصديقة",
  ],
  mainImg:
    "/assets/images/future-generation-fund/government.jpg",
  cards:[
    {
      id: 1,
      imgSrc:
        "/assets/images/future-generation-fund/ovi-logo.svg",
      details: [
        {
          title: "شركة عمان فيتنام للاستثمار:",
          paras: [
            "تأسست في عام 2008، بالشراكة مع المؤسسة العامة للاستثمار في فيتنام، برأس مال أولي قدره 75 مليون دولار أمريكي، ثم تمت زيادته لاحقًا بمبلغ قدره 125 مليون دولار أمريكي. وتستثمر الشركة في الشركات والمشاريع الفيتنامية، ، لتحقيق عوائد مالية مُستدامة.",
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
        "/assets/images/future-generation-fund/oman-india-logo.svg",
      details: [
        {
          title: "الصندوق العماني الهندي للاستثمار",
          paras: [
            "تأسس في عام 2011م بشراكة مع بنك الدولة الهندي، واستثمر في البداية 100 مليون دولار أمريكي في مختلف القطاعات داخل الهند ، ثم خصص مبلغ 240 مليون دولار أمريكي يقوم باستثمارها حاليًا في عدة قطاعات.",
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
        "/assets/images/future-generation-fund/oam-uzbek-logo.svg",
      details: [
        {
          title: "الشركة العمانية الأوزبكية للاستثمار ",
          paras: [
            "مشروع مشترك مع صندوق إعادة الإعمار والتنمية الأوزباكستاني؛ للاستثمار في أوزبكستان، برأس مال أولي قدره 100 مليون دولار أمريكي، زاد لاحقًا إلى 200 مليون دولار أمريكي في عام 2017م.",
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
        "/assets/images/future-generation-fund/oman-brunel-logo.svg",
      details: [
        {
          title: "شركة عُمان بروناي للاستثمار",
          paras: [
            " تأسست في عام 2009م بالشراكة مع هيئة بروناي للاستثمار، برأس مال أولي قدره 100 مليون دولار أمريكي، رُفِع في عام 2019م إلى 200 مليون دولار أمريكي. وتستثمر الشركة بشكل رئيسي في مختلف القطاعات داخل سلطنة عمان. ",
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
        "/assets/images/future-generation-fund/oman-spain-logo.svg",
      details: [
        {
          title: "الصندوق العماني الإسباني للتملك الخاص",
          paras: [
            "تأسس صندوق عُمان إسبانيا للتملك الخاص عام 2014 برأس مال قدره 200 مليون يورو، ثمرة شراكة متميزة بين جهاز الاستثمار العُماني وشركة   COFIDES الإسبانية المملوكة للحكومة، بنسبة 50% لكل منهما. يهدف الصندوق إلى الاستثمار في الشركات الإسبانية ذات الإمكانيات الواعدة التي تسعى إلى توسيع نطاق أعمالها في دول مجلس التعاون الخليجي وشرق إفريقيا والهند وجنوب شرق آسيا وأمريكا اللاتينية. وقد تمكن الصندوق من تحقيق نتائج مبشرة خلال 2023 الصندوق الأول:",
          ],
          
        },
        {
          title: "الصندوق الأول:",
          paras: [],
        list: [
          " قام الجهاز باستثمار ٨٥٫٩ مليون يورو من مبلغ ١٠٠ مليون يورو الذي تم الالتزام به",
          " استثمر الصندوق في ١١ استثمارا منذ تأسيسه وقد أكمل الصندوق الفترة المحددة له للاستثمار.",
          "التخارج من استثمارين في ٢٠٢٣م حقق أحدهما ٤٫٥ ضعفًا على قيمة الاستثمار بينما حقق الاستثمار الثاني ١٫٣ ضعفًا.",
          "حقق الصندوق إجمالي معدل عائد داخلي بلغ ١٩٪ حتى ٣١ ديسمبر ٢٠٢٣. ",
          "سيكون تركيز الصندوق في المستقبل على إدارة الاستثمارات الحالية والتخارج منها.",
        ],
        },
        {
          title: "إنشاء الصندوق الثاني:",
          paras: [],
          list: [
            "اتفق الجهاز وشركة COFIDES الأسبانية على إنشاء الصندوق الثاني بمبلغ إجمـــالي قدره ١٠٢ مليون يورو، حيث يسهم كـــــل من الشريكين بمبلغ قــــدره ٥٠ مليون يورو بينما يسهم مدير الصنــــدوق بمبلـــغ وقدره ٢ مليون يورو",
            "التوقيع على جميع الاتفاقيات الملزمة وباشر الصندوق عملـه في الاستثمار في شركـــــات إسبانية رائدة.",
          ],
        },
      ],
      cta: {
        labelRead: "اقرأ المزيد",
        labelShowLess: "اقرأ أقل",
      },
    },
    {
      id: 6,
      imgSrc:
        "/assets/images/future-generation-fund/oman-china-logo.svg",
  
      details: [
        {
          title: "البنك التجاري الصيني الدولي",
          paras: [
            "تأسس في عام 2020م بالشراكة مع البنك التجاري الصيني الدولي. ويزيد رأس مال الصندوق عن 300 مليون دولار أمريكي. ويستهدف الاستثمار في القطاعات الصينية المتنوعة، مثل تكنولوجيا المعلومات والاتصالات والطاقة المتجددة، والرعاية الصحية، والخدمات اللوجستية.",
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
      id: 7,
      imgSrc:
        "/assets/images/future-generation-fund/oman-pak-logo.svg",
      details: [
        {
          title: "شركة باك عمان للاستثمار ",
          paras: [
            "تأسست في عام 2001م باتفاق بين حكومتي السلطنة وباكستان، وبرأس مال أولي قدره 100مليون دولار أمريكي. وتهدف الشركة إلى تعزيز النمو الاقتصادي في البلدين من خلال التنمية الصناعية والصناعات القائمة على الزراعة.",
          ],
        },
      ],
      cta: {
        labelRead: "اقرأ المزيد",
        labelShowLess: "اقرأ أقل",
      },
    },
    {
      id: 8,
      imgSrc:
        "/assets/images/future-generation-fund/al-husn-logo.svg",
      details: [
        {
          title: "شركة الحصن للاستثمار ",
          paras: [
            "شركة عمانية قطرية تأسست في عام 2007م برأس مال إجمالي يبلغ 100 مليون ريال عماني. وتستهدف الشركة الاستثمار في القطاعات الاقتصادية الرئيسية داخل السلطنة ودول مجلس التعاون الخليجي، بما في ذلك الرعاية الصحية، والتعليم، والأمن الغذائي، والعقارات، والصناعة، والتصنيع، والتكنولوجيا، والضيافة، والسياحة.",
          ],
        },
      ],
      cta: {
        labelRead: "اقرأ المزيد",
        labelShowLess: "اقرأ أقل",
      },
    },
  ]
};
const accordData = [
  {
    id: 1,
    title: "Real Estate",

    paras: [
      "Investing in real estate across various categories is considered a strong sector, as it preserves capital while delivering long-term returns.",
      "The selection of real estate investments is made with consideration of each market's specific needs, diversifying investments across residential, commercial, and tourism properties. The real estate investment department of Oman Investment Authority diversifies its fund between core assets, value-added investments, real estate development projects, and real estate investment funds.",
    ],
    image: "/assets/images/future-generation-fund/real.jpg",
    list: [
      {
        title: "Core Assets",
        para: [
          "Direct investments in advanced markets through long-term lease contracts aimed at generating sustainable income, with no need for ongoing management by OIA",
        ],
        subList: [],
      },

      {
        title: "Value-Added Investments",
        para: [
          "OIA partners with real estate developers in both advanced and emerging markets.",
        ],
        subList: [],
      },
      {
        title: "Real Estate Development Investments",
        para: [
          "Direct investments by Oman Investment Authority in real estate development.",
        ],
        subList: [],
      },
      {
        title: "Real Estate Investment Funds",
        para: [
          "Indirect investments in large real estate funds managed by experts in the field.",
        ],
        subList: [],
      },
    ],
  },
  {
    id: 2,
    title: "Investment Funds",
    subTitle: "Industrial and Technology Sector:",
    paras: [
      "In 2023, OIA invested in 13 funds across various sectors: ",
    ],
    image:
      "/assets/images/future-generation-fund/invest.jpg",
    list: [
      {
        title: "Core Assets",
        para: [],
        subList: [
          {
            heading: "Platinum:",
            content:
              "Focuses on industries, chemicals, and distribution in the United States. ",
          },
          {
            heading: "Verdin:",
            content:
              "Concentrates on technology companies in Northern Europe. ",
          },
          {
            heading: "Alpin:",
            content:
              "Acquires software and services companies in the United States. ",
          },
          {
            heading: "American Industrial Partners:",
            content:
              "Targets industrial companies in the United States. ",
          },
          {
            heading: "Playground:",
            content:
              " Focuses on advanced technologies such as artificial intelligence and automation.",
          },
          {
            heading: "Five Way:",
            content:
              " Specializes in consumer innovation and information technology in China. ",
          },
          {
            heading: "MBK:",
            content:
              " Invests in sectors such as telecommunications, technology, and financial services in Asia.",
          },
          {
            heading: "KPS:",
            content:
              "Focuses on industry and manufacturing in North America.",
          },
        ],
      },
      {
        title: "Infrastructure Sector",
        para: [],
        subList: [
          {
            heading: "Antin Infrastructure Partners:",
            content:
              "Invests globally in infrastructure projects.",
          },
          {
            heading: "Global Infrastructure Partners (GIP)",
            content:
              "Invests in infrastructure across multiple continents.",
          },
          {
            heading: "BlackRock:",
            content:
              "Focuses on digital infrastructure and renewable energy in the Gulf Cooperation Council (GCC) countries. ",
          },
        ],
      },
      {
        title: "Healthcare Sector",
        para: [],
        subList: [
          {
            heading: "Windrose:",
            content:
              "Targets companies operating in healthcare services in the United States.",
          },
        ],
      },

      {
        title: "Other Sectors",
        para: [],
        subList: [
          {
            heading: "Valor:",
            content:
              "Invests in consumer products, engineered products, and business services in the United States. ",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Diverse Direct Investments",
    paras: [
      "In 2023, OIA added various direct investments, primarily focused on green technology and innovation. Key investments included:",
    ],
    image:
      "/assets/images/future-generation-fund/diverse.jpg",
    list: [
      {
        title:
          "Our Next Energy, GURADAR, Electric Hydrogen, and HyAsta:",
        para: [
          " American and Australian companies working in renewable energy, battery technology, and green hydrogen. The Sultanate of Oman has signed cooperation agreements with these companies to develop and localize these technologies. ",
        ],
        subList: [],
      },
      {
        title: "Energy Dome:",
        para: [
          "An Italian company offering innovative energy storage solutions. ",
        ],
        subList: [],
      },
      {
        title: "eMushrif:",
        para: [
          "An Omani startup that introduced innovative solutions for monitoring student safety on school buses. ",
        ],
        subList: [],
      },

      {
        title: "These investments primarily focus on: ",
        para: [],
        subList: [
          {
            heading: "Renewable Energy:",
            content:
              "Developing technologies for energy storage and green hydrogen production. ",
          },
          {
            heading: "Biotechnology:",
            content:
              "Innovating solutions for preserving vaccines and biological materials.",
          },
          {
            heading: "Local Innovation:",
            content:
              "Supporting Omani startups and fostering innovation. ",
          },
        ],
      },
    ],
  },
];
const AraccordData = [
  {
    id: 1,
    title: "العقارات ",

    paras: [
      "يعد الاستثمار في العقارات بمختلف فئاتها من القطاعات الجيدة، حيث تتمتع بميزة الحفاظ على رؤوس الأموال وتقديم العوائد على المدى الطويل. ",
      "تم اختيار الاستثمارات العقارية بالأخذ في الاعتبار حاجة كل سوق على حدة، وذلك بالتنويع بين الاستثمار في العقارات السكنية، أو التجارية، أو السياحية. كما يعمل قسم الاستثمارات العقارية في الجهاز على تنويع محفظته بين الأصول الأساسية والاستثمارات ذات القيمة المضافة واستثمارات التطوير العقاري وصناديق الاستثمار العقارية. ",
    ],
    image: "/assets/images/future-generation-fund/real.jpg",
    list: [
      {
        title: "الأصول الأساسية",
        para: [
          " استثمارات مباشرة في الأسواق المتقدمة عبر عقود إيجار طويلة الأجل وتهدف إلى تحقيق دخل مستدام، ولا تتطلب إدارة دائمة من قبل الجهاز.",
        ],
        subList: [],
      },

      {
        title: "الاستثمارات ذات القيمة المضافة:",
        para: [
          "يدخل من خلالها الجهاز في شراكات مع المطورين العقاريين سواء في الأسواق المتقدمة أو الناشئة.",
        ],
        subList: [],
      },
      {
        title: "استثمارات التطوير العقاري:",
        para: [
          " استثمارات مباشرة لجهاز الاستثمار العُماني.",
        ],
        subList: [],
      },
      {
        title: "صناديق الاستثمار العقاري:",
        para: [
          "استثمار غير مباشر في صناديق عقارية كبيرة يديرها خبراء في هذا المجال.",
        ],
        subList: [],
      },
    ],
  },
  {
    id: 2,
    title: "الصناديق الاســـتثمارية ",
    subTitle: "قطاع البنية الأساسية:",
    paras: [
      "في عام 2023م استثمر الجهاز في 13 صندوقًا في مختلف القطاعات  ",
    ],
    image:
      "/assets/images/future-generation-fund/invest.jpg",
    list: [
      {
        title: "قطاع الصناعة والتكنولوجيا",
        para: [],
        subList: [
          {
            heading: "بلاتينيوم:",
            content:
              "يستهدف الصناعات والمواد الكيميائية والتوزيع في الولايات المتحدة.",
          },
          {
            heading: "فيردين:",
            content:
              " يركز على شركات التكنولوجيا في شمال أوروبا.",
          },
          {
            heading: "ألبين:",
            content:
              "يستحوذ على شركات البرمجيات والخدمات في الولايات المتحدة.",
          },
          {
            heading: "الشركاء الصناعيون الأمريكيون:",
            content:
              " يستهدف الشركات الصناعية في الولايات المتحدة.",
          },
          {
            heading: "بلايجراوند:",
            content:
              " يركز على التكنولوجيا المتقدمة مثل الذكاء الاصطناعي والأتمتة.",
          },
          {
            heading: "فايف واي: ",
            content:
              "يركز على الابتكار الاستهلاكي وتكنولوجيا المعلومات في الصين.",
          },
          {
            heading: "أم بي كي:",
            content:
              " يستثمر في قطاعات متنوعة مثل الاتصالات والتكنولوجيا والخدمات المالية في آسيا.",
          },
          {
            heading: "كي بي أس:",
            content:
              " يركز على الصناعة والتصنيع في أمريكا الشمالية.",
          },
        ],
      },
      {
        title: "قطاع البنية الأساسية",
        para: [],
        subList: [
          {
            heading: "شركاء البنية التحتية أنتين:",
            content:
              "يستثمر عالمياً في مشاريع البنية الأساسية.",
          },
          {
            heading:
              "صندوق البنية الأساسية العالمية (GIP):",
            content:
              "يستثمر في البنية الأساسية في عدة قارات.",
          },
          {
            heading: "بلاك روك:",
            content:
              " يركز على البنية الأساسية الرقمية والطاقة المتجددة في دول مجلس التعاون الخليجي.",
          },
        ],
      },
      {
        title: "قطاعات أخرى",
        para: [],
        subList: [
          {
            heading: "فالور:",
            content:
              "يستثمر في منتجات الاستهلاك والمنتجات الهندسية وخدمات الأعمال في الولايات المتحدة.",
          },
        ],
      },

      {
        title: "قطاع الرعاية الصحية",
        para: [],
        subList: [
          {
            heading: "ويندروز:",
            content:
              "يستهدف الشركات العاملة في خدمات الرعاية الصحية في الولايات المتحدة.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "استثمارات مباشرة متنوعة",
    paras: [
      "أضاف الجهاز في عام 2023م استثمارات مباشرة متنوعة، ركزت بصورة أساسية على التكنولوجيا الخضراء والابتكار. ومن أبرزها: ",
    ],
    image:
      "/assets/images/future-generation-fund/diverse.jpg",
    list: [
      {
        title: "إي مشرف",
        para: [
          "شركة عمانية ناشئة قدمت حلولاً مبتكرة لمراقبة سلامة الطلبة في الحافلات المدرسية.",
        ],
        subList: [],
      },
      {
        title: "انرجي دوم",
        para: [
          "شركة إيطالية تقدم حلولا مبتكرة لتخزين الطاقة.",
        ],
        subList: [],
      },
      {
        title:
          "أورنيكست إينرجي وجوراتا وإلكتريك هيدروجين وهياستا",
        para: [
          "شركات أمريكية وأسترالية تعمل في مجال الطاقة المتجددة وتكنولوجيا البطاريات والهيدروجين الأخضر، وقد وقعت سلطنة عمان معها اتفاقيات تعاون لتطوير هذه التقنيات وتوطينها.",
        ],
        subList: [],
      },

      {
        title: "تركزت هذه الاستثمارات على",
        para: [],
        subList: [
          {
            heading: "الطاقة المتجددة:",
            content:
              "تطوير تقنيات لتخزين الطاقة وإنتاج الهيدروجين الأخضر",
          },
          {
            heading: "التكنولوجيا الحيوية:",
            content:
              "تطوير حلول مبتكرة لحفظ اللقاحات والمواد البيولوجية.",
          },
          {
            heading: "الابتكار المحلي: ",
            content:
              " دعم الشركات العمانية الناشئة وتشجيع الابتكار",
          },
        ],
      },
    ],
  },
];

const DataContainer: React.FC<any> = ({ locale }) => {
  const bannerData = {
    title: "Future Generation Fund",
    description: "",
    image:
      "/assets/images/our-investments/future-gen-fund/banner-img.jpg",
    locale: locale,
  };
  const ArbannerData = {
    title: "محفظة الأجيال",
    description: "",
    image:
      "/assets/images/our-investments/future-gen-fund/banner-img.jpg",
    locale: locale,
  };
  const isDark = useDarkMode() || false;
  return (
    <main>
      <ImageBanner
        data={locale === "en" ? bannerData : ArbannerData}
      />
      <TextWIthImg
        data={locale === "en" ? aboutFund : AraboutFund}
        orderText={1}
        orderImg={2}
        isListShow={true}
        locale={locale}
      />
   <div className={`bg-[url('${isDark ? "/assets/images/pattern-polyg-b-img.png" : "/assets/images/pattern-polyg-img.png"}')] polygon-bg py-[40px] sm:py-[50px] lg:py-[100px]`}>
        <TextWIthImg
          data={
            locale === "en"
              ? newTwoDataTextWithImg
              : ArnewTwoDataTextWithImg
          }
          orderText={2}
          orderImg={1}
          marginY="0px"
          isListShow={true}
          isShowMarginYResp={false}
          locale={locale}
          listBold={true}
          swap={true}
        />
      </div>
      <NewHighLightSection
        locale={locale}
        data={
          locale === "en"
            ? newDataHightlights
            : ArnewDataHightlights
        }
        classNameContainer="py-[60px] lg:py-[100px]"
      />

      <PolygonBg>
        <ScreenContainer>
          <div className="mb-[50px] flex flex-col gap-[20px] sm:gap-[32px] lg:gap-[24px]">
            <div className="">
              <h2
                className={`mainHeading  rtl:font-TajawalBold`}
              >
                {locale === "en"
                  ? "Private Markets"
                  : "الأسواق الخاصة "}
                <span className="subHeading  !text-brown rtl:font-TajawalBold">
                  {locale === "en"
                    ? " (Real Estate, Funds, and Direct Investments)"
                    : "(العقارات والصناديق والاستثمارات المباشرة) "}
                </span>
              </h2>
            </div>

            <p
              className={`paragraph rtl:font-TajawalRegular`}
            >
              {locale === "en"
                ? "Private market investments include non-tradable assets, consisting of real estate fund investments, private equity investments, and investment funds."
                : "تشـــمل اســـتثمارات الأســـواق الخاصة أصولًا غير قابلة للتداول، وتتكون من اســـتثمارات المحفظـــة العقارية، واســـتثمارات التملك الخاص، والصناديق الاســـتثمارية. "}
            </p>
          </div>
          <DetailedAccordion
            data={
              locale === "en" ? accordData : AraccordData
            }
            locale={locale}
          />
        </ScreenContainer>
      </PolygonBg>
      <ExpandableCardsWithImg
        locale={locale}
        data={
          locale === "en"
            ? governmentData
            : ArgovernmentData
        }
      />
    </main>
  );
};
export default DataContainer;
