import ImageBanner from "@/app/components/banners/ImageBanner";
import MediaRelationForm from "@/app/components/forms/MediaRelationForm";
import NewsSearchandCards from "@/app/components/media-center/NewsSearchandCards";
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
    namespace: "News",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
interface NewsPageProps {
  params: {
    locale: string;
  };
}
const NewsPage: React.FC<NewsPageProps> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("News");
  type BannerData = {
    title: string;
    description: string;
    image: string;
    tabImg: string;
    mobileImg: string;
    locale?: string;
  };
  const bannerData: BannerData = {
    title: "Newsroom",
    description: "",
    image: "/assets/images/banner/news-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/news-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/news-mobile-banner.jpg",
    locale: locale,
  };
  const ARbannerData: BannerData = {
    title: "أخبار الجهاز",
    description: "",
    image: "/assets/images/banner/news-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/news-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/news-mobile-banner.jpg",
    locale: locale,
  };
  const newsList = {
    title: "Press Release",
    newsCards: [
      {
        id: 1,
        title:
          "OIA pursues its second national investment in semiconductors",
        date: "2024-01-17",
        image: "/assets/images/media-center/news1.svg",
        paras: [
          "Oman Investment Authority (OIA) continues its efforts to enhance its investments in advanced modern technologies and transfer them to the Sultanate. In realization of these efforts, OIA signed a Memorandum of Cooperation (MoC) with its Japanese counterpart. This MoC entails exploring investment opportunities in the semiconductors industry and technologies. This signing comes on the sidelines of the visit of the Japanese State Minister for Economy, Trade and Industry, HE Iwata Kazuchika.",
          "Mulham Al-Jarf, OIA’s Deputy President for Investments, commented on the signing saying that OIA looks at Japan as the ideal partner in this field, as Japan is well-reputed in the tech industry. OIA always strives for strategic partnerships internationally in order to transfer modern technologies to local Omani sectors. This in turn reflects on the national economy and enhances its competitiveness, as well as creates job opportunities and establishes businesses in these industries.",
          "With this MoC signing with the Japanese side, OIA aims to establish its next national investment in the semiconductors industry. OIA’s first national investment was through its subsidiary ITHCA in ‘GSME Oman,’ established by the US company ‘GSME,’ which specializes in semiconductors. Six months' worth of testing proved a success, resulting in two Omani semiconductor chips, Oman 1 and Oman 2.",
          "This MoC also aligns with the national focus on manufacturing semiconductors by attracting international players to the local industrial scene in Oman. This also includes developing and enabling national talents in this field, which covers many industries, including electronics, telecommunications, renewable energy, medicine, SMART tech, car manufacturing, data storage, and electronic and wireless products.",
        ],
        locale: locale,
      },
      {
        id: 2,
        title:
          "Oman investment authority launches future fund oman",
        date: "2024-01-17",
        paras: [
          "Abdulsalam Al Murshidi – The Fund is a major catalyst for the stimulation of the national economy and a credible partner to local and international investors.",
          "In line with the Royal Directive to translate the objectives and mandates of Oman Investment Authority (OIA) and further drive its efforts to develop the national economy and attract foreign investments, OIA has officially launched Future Fund Oman to start serving a wide range of investment categories.",
          "His Excellency Abdulsalam Al Murshidi, President of OIA, underscored that Future Fund Oman is established in line with government policies and strategies aimed at enhancing targeted economic sectors. It comes as a key enabler of economic diversification and a credible partner to local and international investors who are considering investing and expanding their businesses into Oman and becoming part of the Omani business community. This step helps in further empowering and integrating with the private sector, supporting SMEs, and bolstering venture capital in the Sultanate of Oman. He further noted that Future Fund Oman is OIA’s third portfolio, along with the two existing portfolios – the National Development Fund and the Future Generations Fund. With its extensive investment expertise, OIA will manage the Fund and demonstrate the capabilities of local talents who have already proven to be successful wealth managers and investors with a track record of accomplishing good investment returns.",
          "On the other hand, Mulham Al Jarf, Deputy President for Investment at OIA, underlined that the Fund will be governed by OIA’s governance practices as per best international practices to ensure efficiency and flexibility in achieving the desired financial and economic objectives of establishing the Fund. The Fund will complement the existing government financing and investment ecosystem that currently involves a number of institutions such as the Oman Development Bank, SMEs Development Fund, Rakiza Fund, Oman Technology Fund, etc. Future Fund Oman offers flexibility in choosing the type of investment participation, whether through direct financing at market rates or equity investments with the private sector in a balanced manner that is not limited to one sector alone.",
          "Future Fund Oman has a capital of OMR 2 billion that will be utilized over a five-year period, with OMR 400 million every year. The Fund will allocate 90% of its capital to directly invest in new or existing investment projects that prove to be commercially and economically viable. The remaining 10% is divided into 7% allocated to SMEs and 3% allocated to startups. The Fund offers its funding and investment solutions to various investor categories. They include private sector organizations, business owners, SMEs, foreign investors, and startups. With the exception of oil and gas and real estate in direct local investments, the fund will focus on eight targeted sectors, including tourism, manufacturing, green energy, information and communication technologies, ports and logistics, mining, fisheries, and agriculture.",
          "In compliance with the principles of governance and transparency, the Fund will adhere to OIA’s quality standards that have already put OIA in the second place globally in the Governance and Sustainability Development Index between 2022 and 2023. The Fund will have two committees in its governance structure; they include an Investment Committee, which comprises five members representing OIA, the Ministry of Finance, and independent entities. This committee will be responsible for approving new and follow on investments as well as divestments. The second committee will be the Advisory Committee, which is tasked with the supervision and follow-up on SME and startup investments.",
          "To achieve the Fund’s national objectives, the Ministry of Finance will act as a strategic partner to OIA in managing the direct local projects, while the SMEs Development Authority will serve as a member in the Advisory Committee to provide insights and advice to the Investment Committee. Additionally, the Oman National Investment Development Co. (Tanmia), ITHCA Group, Omantel, and Cyfr Capital will manage investments allocated for SMEs and startups.",
        ],
        image: "/assets/images/media-center/news2.svg",
        locale: locale,
      },
      {
        id: 3,
        title:
          "OIA launches its social investment policy and a new icv platform",
        paras: [
          "Oman Investment Authority (OIA) announced the launch of its Social Investment Policy for OIA Companies as well as the launch of ‘Qimam’ platform for inquiries related to In-country Value (ICV). It also announced the second version of the mandatory list for OIA Companies. In addition, OIA Companies signed OMR 6 million worth of cooperation agreements and programs. This all builds on the success achieved by OIA in the ICV sector in line with Oman Vision 2040 targets which aim to create a substantial shift towards a knowledge-based economy, establish a stimulating environment for entrepreneurs and innovation-based companies, and foster and attract advanced technologies.",
          "Sheikh Nasser Al-Harthy, Deputy President for Operations at Oman Investment Authority, states that OIA has taken a great interest in in-country value ever since the establishment of its ICV Directorate two years ago. In 2023, OIA focused its attention on establishing ICV governance, launching programs to support ICV, enhancing the role of SMEs, and monitoring the adherence of OIA companies to these programs. In 2024, OIA will continue its efforts, starting with the launch of its Social Investment Policy, the introduction of ‘Qimam’ platform, and the second version of the mandatory list. These efforts culminate to produce enhanced local content, empowered SMEs, and an enabled private sector. We aim through this to grow the national economy and develop a sustainable competitive market for goods and services; this is not just achieved through awarding contracts but also through enhancing and developing the role of local companies and SMEs.",
          "Over OMR 200 million spent on SMEs2023 numbers highlight the success of OIA and its companies in their efforts to increase local content throughout the year. Total spent on SMEs amounted to OMR 202 million, compared to OMR 187 million in 2022, showcasing a 4.5% increase. Similarly, contracts and purchasing orders received by SME cardholders rose to OMR 106.7 million, compared to OMR 67 million in 2022. OIA companies also spent OMR 42.1 million on local products and services listed on the mandatory list. The second version of the list just launched by OIA adds more than 100 products and services that must be bought locally to the original list, which initially included 103 products and services. Other ICV initiatives also witnessed good results. The vendor development program was able to accredit 24 SMEs in different sectors, including manufacturing and modern technologies. Meanwhile, the ringfencing program was able to ringfence 31 local companies in a variety of sectors. As for the research development and innovation guidelines, the outputs of the business planning technologies were implemented and 9 reports were prepared to include more than 270 challenges faced by companies which have the potential to be transformed into opportunities and economic enablers for SMEs",
        ],
        date: "2024-01-17",
        image: "/assets/images/media-center/news3.svg",
        locale: locale,
      },
      {
        id: 4,
        title:
          "OIA pursues its second national investment in semiconductors",
          paras: [
            "Oman Investment Authority (OIA) continues its efforts to enhance its investments in advanced modern technologies and transfer them to the Sultanate. In realization of these efforts, OIA signed a Memorandum of Cooperation (MoC) with its Japanese counterpart. This MoC entails exploring investment opportunities in the semiconductors industry and technologies. This signing comes on the sidelines of the visit of the Japanese State Minister for Economy, Trade and Industry, HE Iwata Kazuchika.",
            "Mulham Al-Jarf, OIA’s Deputy President for Investments, commented on the signing saying that OIA looks at Japan as the ideal partner in this field, as Japan is well-reputed in the tech industry. OIA always strives for strategic partnerships internationally in order to transfer modern technologies to local Omani sectors. This in turn reflects on the national economy and enhances its competitiveness, as well as creates job opportunities and establishes businesses in these industries.",
            "With this MoC signing with the Japanese side, OIA aims to establish its next national investment in the semiconductors industry. OIA’s first national investment was through its subsidiary ITHCA in ‘GSME Oman,’ established by the US company ‘GSME,’ which specializes in semiconductors. Six months' worth of testing proved a success, resulting in two Omani semiconductor chips, Oman 1 and Oman 2.",
            "This MoC also aligns with the national focus on manufacturing semiconductors by attracting international players to the local industrial scene in Oman. This also includes developing and enabling national talents in this field, which covers many industries, including electronics, telecommunications, renewable energy, medicine, SMART tech, car manufacturing, data storage, and electronic and wireless products.",
          ],
        date: "2024-01-17",
        image: "/assets/images/media-center/news4.svg",
        locale: locale,
      },
      {
        id: 5,
        title:
          "OIA and iia sign an MOC to utilize innovation and research in driving",
        date: "2024-01-17",
        paras:["Muscat: 11 September 2023: As part of its efforts to enhance local content, promote local products, and support Omani SMEs, Oman Investment Authority (OIA) signed a Memorandum of Cooperation (MoC) with the Industrial Innovation Academy (IIA). The MoC aims to establish industrial activities in diverse economic sectors. It also seeks to examine and analyze value chains, explore investment opportunities targeting SMEs, and train national talents in order to qualify them for market needs through specialized business accelerators.","The program is one of many OIA initiatives and similar programs launched in cooperation with its companies and stakeholders, all aiming to enhance local content and create business opportunities for SMEs. The new MoC will focus on IIA’s programs, projects, and databases, which serve the entrepreneurial sector in Oman.","The agreement was signed by Al Mutasim Al Sariri, Director of In-country Value at OIA, and Dr. Ayman Al Fudaili, CEO of IIA.In light of the signing, Al Sariri reiterated that OIA will work on multiple streams, starting with sharing the Business Technology Mapping Outcomes with IIA, which mainly includes opportunities and challenges that face OIA Companies. IIA will then work on resolutions that will be presented to SMEs. This MoC reflects the synergies between OIA and its companies in terms of ICV.” On the other hand, Dr. Al Fudaili noted that “IIA has worked on strategic and service projects aiming at creating business opportunities for SMEs, including the ‘Tawreed’ program that focused on examining the value-added chains for a number of economic sectors in Oman. In addition, IIA built a database for all products manufactured in Madayn’s industrial cities. Hopefully, such programs will contribute to enhancing SMEs’ growth."],
        image: "/assets/images/media-center/news5.svg",
        locale: locale,
      },
      {
        id: 6,
        title:
          "OIA pursues its second national investment in semiconductors",
        date: "2024-01-17",
        paras: [
          "Oman Investment Authority (OIA) continues its efforts to enhance its investments in advanced modern technologies and transfer them to the Sultanate. In realization of these efforts, OIA signed a Memorandum of Cooperation (MoC) with its Japanese counterpart. This MoC entails exploring investment opportunities in the semiconductors industry and technologies. This signing comes on the sidelines of the visit of the Japanese State Minister for Economy, Trade and Industry, HE Iwata Kazuchika.",
          "Mulham Al-Jarf, OIA’s Deputy President for Investments, commented on the signing saying that OIA looks at Japan as the ideal partner in this field, as Japan is well-reputed in the tech industry. OIA always strives for strategic partnerships internationally in order to transfer modern technologies to local Omani sectors. This in turn reflects on the national economy and enhances its competitiveness, as well as creates job opportunities and establishes businesses in these industries.",
          "With this MoC signing with the Japanese side, OIA aims to establish its next national investment in the semiconductors industry. OIA’s first national investment was through its subsidiary ITHCA in ‘GSME Oman,’ established by the US company ‘GSME,’ which specializes in semiconductors. Six months' worth of testing proved a success, resulting in two Omani semiconductor chips, Oman 1 and Oman 2.",
          "This MoC also aligns with the national focus on manufacturing semiconductors by attracting international players to the local industrial scene in Oman. This also includes developing and enabling national talents in this field, which covers many industries, including electronics, telecommunications, renewable energy, medicine, SMART tech, car manufacturing, data storage, and electronic and wireless products.",
        ],
        image: "/assets/images/media-center/news6.svg",
        locale: locale,
      },
      {
        id: 7,
        title: "OIA Achieves Growth from its Investments in International Investments Rotary and Entrevias",
        date: "2024-09-07",
        paras:["Oman Investment Authority (OIA) has reported successes in its investments in the Singaporean company Rotary and the Brazilian company Entrevias during 2023. These investments are part of OIA’s Future Generations Fund (FGF), through which OIA aims to expand its global market investments and strengthen strategic partnerships that yield substantial profits and returns. Additionally, these investments serve to transfer advanced expertise and technologies to local sectors in the Sultanate of Oman and contribute to attracting foreign investors and capital.","In its tenth quarterly issue of its newsletter ‘Enjaz and Eejaz,’ released today, OIA highlighted the significant revenue growth achieved by the Singaporean company Rotary. The company's revenues increased by 19% in 2023 compared to 2022, driven by its execution of large-scale projects in multiple countries and its focus on promising investment opportunities in renewable energy and petrochemicals."],
        image: "/assets/images/media-center/news7.svg",
        locale: locale,
      },
    ],
  };
  const ARnewsList = {
    title: "الأخبار والبيانات الصحفية",
    newsCards: [
      {
        id: 1,
        title:
          "جهاز الاستثمار العماني يسعى إلى تأسيس ثاني استثماراته الوطنية في تقنيات أشباه الموصلات مع اليابان",
        date: "2024-01-17",
        image: "/assets/images/media-center/news1.svg",
        paras: [
          "استمرارًا للجهود التي يبذلها من أجل تعزيز الاستثمارات في التقنيات الحديثة وتوطين الصناعات المتقدمة؛ وقّع جهاز الاستثمار العماني مذكرة تعاون مع الجانب الياباني بهدف استكشاف الفرص في قطاع أشباه الموصلات، وتشجيع الاستثمار في هذه التقنية، وذلك على هامش الزيارة التي يقوم بها معالي ايواتا كازوتشيكا وزير الدولة الياباني للاقتصاد والتجارة والصناعة لسلطنة عمان.",
          "وقال ملهم بن بشير الجرف نائب رئيس جهاز الاستثمار العماني للاستثمار بأن الجهاز ينظر لليابان كشريك مثالي في هذا القطاع؛ نظرًا لما تتمتع به اليابان من مكانة مرموقة في قطاع التكنولوجيا؛ الأمر الذي يجسّد سعي الجهاز إلى تأسيس شراكات إستراتيجية مع مختلف دول العالم لتوطين التقنيات الحديثة في القطاعات المحلية المستهدفة؛ بما يعود بالنفع على الاقتصاد الوطني وتعزيز تنافسيته، بالإضافة إلى إيجاد فرص عمل وأعمال قائمة على هذه الصناعات.",
          'وبتوقيع مذكرة التعاون مع الجانب الياباني فإن الجهاز يسعى إلى تأسيس ثاني استثماراته الوطنية في قطاع أشباه الموصلات؛ بعد أن استثمر الجهاز عبر مجموعة "إذكاء" التابعة له في شركة GSME عُمان التي أسستها الشركة العالمية لأشباه الموصلات والإلكترونيات الدقيقة الأمريكية، ونجحت في اختبارات استمرت ستة أشهر لأول شريحتين عُمانيتين من أشباه الموصلات هما "عُمان 1" و"عُمان 2".',
          "وتتواءم المذكرة التي وقعها الجهاز مع توجهات سلطنة عمان نحو صناعة أشباه الموصلات عبر جذب الشركات الدولية المتخصصة في هذه الصناعة إلى القطاعات المحلية، إضافة إلى إعداد الكفاءات الوطنية وتأهيلها في هذه التقنية الحيوية التي تُستخدم في العديد من المجالات مثل الإلكترونيات، والاتصالات، والطاقة المتجددة، والطب، والتكنولوجيا الذكية، وصناعة السيارات، وتخزين البيانات، والمنتجات اللاسلكية والإلكترونية.",
        ],
        locale: locale,
      },
      {
        id: 2,
        title:
          "محفظة التنمية الوطنية لجهاز الاستثمار العماني تُسهم في تعزيز جهود التنويع الاقتصادي",
        date: "2024-01-17",
        image: "/assets/images/media-center/news2.svg",
        paras: [
          "تنفيذًا للتوجيهات السامية بإنشاء صندوق عُمان المستقبل، وتجسيدًا لأهداف جهاز الاستثمار العماني واختصاصاته وسعيه المتواصل إلى تنمية الاقتصاد الوطني، فضلا عن جلب الاستثمارات الخارجية؛ دشن الجهاز رسميًا صندوق عُمان المستقبل ليبدأ في تقديم خدماته للفئات المستفيدة منه.",
          "وقال معالي عبدالسلام بن محمد المرشدي رئيس جهاز الاستثمار العُماني بأن إنشاء صندوق عُمان المستقبل يهدف إلى النهوض بالقطاعات الاقتصادية المستهدفة، حيث يُعد الصندوق ممكنًا رئيسيًا لتحفيز نمو الاقتصاد الوطني، وشريكًا موثوقًا به للمستثمرين المحليين والدوليين الراغبين في توسيع نطاق مشاريعهم في الاقتصاد العُماني أو الدخول إلى السوق العماني. كما يُسهم في التكامل مع القطاع الخاص، ودعم المؤسسات الصغيرة والمتوسطة، إلى جانب تحفيز منظومة الاستثمار الجريء في سلطنة عُمان، موضحًا معاليه بأن الصندوق سيكون بمثابة محفظة ثالثة للجهاز إلى جانب المحفظتين الاستثماريتين الحاليتين (التنمية الوطنية) و(الأجيال)، مشيرًا إلى أن الجهاز سيقوم بخبرته الاستثمارية بإدارة الصندوق؛ تأكيدًا على الكفاءات العُمانية التي يمتلكها، التي أثبتت قدرتها على تحقيق النجاحات في إدارة الأموال واستثمارها وتنميتها وتحقيق العوائد الجيدة منها.",
          "سيخضع الصندوق للحوكمة المعمول بها في الجهاز التي تشتمل على أفضل الممارسات العالمية، وتضمن الكفاءة والمرونة في سبيل تحقيق الأهداف المالية والاقتصادية المرجوة من إنشاء الصندوق، ليكون مكملًا لمنظومة التغطية التمويلية والاستثمارية التي تقدمها الحكومة حاليًا عبر عدد من المؤسسات مثل بنك التنمية العُماني، ومحفظة المؤسسات الصغيرة والمتوسطة، وصندوق ركيزة، والصندوق العُماني للتكنولوجيا؛ مع وجود مرونة في تحديد نوع الإسهامات في الاستثمارات المُختارَة؛ سواء بطريقة التمويل المباشر بكلفة السوق، أو بالشراكة في رأس المال مع القطاع الخاص، بحيث يتوزع التمويل على هذه القطاعات بطريقة متوازنة وعدم التركيز على قطاع معين.",
        ],
        locale: locale,
      },
      {
        id: 3,
        title:
          "جهاز الاستثمار العماني يحقق نموًا من استثماره في شركتي (روتاري) السنغافورية و(إنترفياس)",
        date: "2024-01-17",
        paras: [
          "استمرارًا للنجاحات التي يُحققها في قطاع القيمة المحلية المضافة بما يتواءم مع مستهدفات رؤية عمان 2040 الرامية إلى إحداث تحوّل نوعي نحو الاقتصاد المبني على المعرفة، وإيجاد بيئة محفّزة لرواد الأعمال والشركات الناشئة القائمة على الابتكار وتبني التقنيات المتقدمة وتوطينها؛ أعلن جهاز الاستثمار العماني عن إطلاق سياسة الاستثمار الاجتماعي للشركات التابعة له، وتدشين منصة (قمم) للاستفسارات المتعلقة بالقيمة المحلية المضافة، والنسخة الثانية من القائمة الإلزامية للشركات التابعة للجهاز، بالإضافة إلى توقيع اتفاقيات وبرامج تعاون مع عدد من الجهات والمؤسسات بأكثر من 6 ملايين ريال عماني.",
          "وقال الشيخ ناصر بن سليمان الحارثي نائب رئيس جهاز الاستثمار العُماني للعمليات بأن الجهاز أولى قطاع القيمة المحلية المضافة اهتمامًا كبيرًا منذ إنشاء مديرية عامة له قبل عامين؛ حيث ركز في العام الماضي 2023م على استكمال حوكمة المحتوى المحلي، وإطلاق برامج تدعم القيمة المحلية المضافة، وتعزيز دور المؤسسات الصغيرة والمتوسطة، ومتابعة الشركات التابعة للجهاز في تنفيذ هذه البرامج، ليواصل هذه الجهود خلال العام الجاري 2024م بإطلاق سياسة الاستثمار الاجتماعي، وتدشين منصة (قمم) وكذلك النسخة الثانية من القائمة الإلزامية؛ وذلك بهدف إثراء المحتوى المحلي وتنمية المؤسسات الصغيرة والمتوسطة وتحفيزها، وكذلك تمكين القطاع الخاص؛ بما يسهم في تنمية الاقتصاد المحلي وتطوير سوق تنافسي مُستدام للسلع والخدمات، ليس بإسناد العقود فقط، وإنما بتعزيز دور الشركات المحلية والمؤسسات الصغيرة والمتوسطة وتطويرها وتقديم الإضافة لها.",
          "وتشير الأرقام المتحققة في عام 2023م إلى نجاح الجهود التي بذلها الجهاز وشركاته في سبيل تعزيز المحتوى المحلي خلال العام؛ حيث بلغ إجمالـي الإنفاق على المؤسسـات الصغيرة والمتوسطة 202 مليون ريال عماني مقارنة بـ 187 مليون ريال عماني في عام 2022م، بنسبة زيادة 4.5%، بينما ارتفع إجمالي مبالغ العقود وأوامر الإسناد لحاملي بطاقة ريادة الأعمال إلى 106.7 مليون ريال عماني مقارنة بـ 67 مليون ريال عماني في 2022م، وتم إنفاق حوالي 42.1 مليون ريال عماني من قبل الشركات التابعة للجهاز على المنتجات الوطنية والخدمات المحلية في القائمة الإلزامية التي تتضمن نسختها الثانية إضافة أكثر من 100 منتج وخدمة يجـب شـراؤها مـن السـوق المحلـي، بعد أن ضمّت النسـخة الأولـى منها 103 منتجات وخدمات، وتمكّن برنامج تطوير الموردين من اعتماد 24 مؤسسـة صغيـرة ومتوسـطة في قطاعـات مختلفة كالصناعة، والتقنيات الحديثة، بينما اعتمد برنامج تخصيص الأعمال 31 مؤسسـة محلية في قطاعـات مختلفة. أما في برنامج المبادئ التوجيهية للبحث والتطوير والابتكار فتم تنفيـــذ مخرجات تقنيات تخطيط الأعمال والانتهاء من 9 تقارير تتضمن أكثر من 270 تحديًا تواجهها الشركات أثناء عملياتها.",
        ],
        image: "/assets/images/media-center/news3.svg",
        locale: locale,
      },
      {
        id: 4,
        title:
          "جهاز الاستثمار العُماني وصندوق الاستثمارات العامّة يُوقّعان مُذكّرة تفاهم لتوسيع فرص",
        date: "2024-01-17",
        paras: [
          "استمرارًا للجهود التي يبذلها من أجل تعزيز الاستثمارات في التقنيات الحديثة وتوطين الصناعات المتقدمة؛ وقّع جهاز الاستثمار العماني مذكرة تعاون مع الجانب الياباني بهدف استكشاف الفرص في قطاع أشباه الموصلات، وتشجيع الاستثمار في هذه التقنية، وذلك على هامش الزيارة التي يقوم بها معالي ايواتا كازوتشيكا وزير الدولة الياباني للاقتصاد والتجارة والصناعة لسلطنة عمان.",
          "وقال ملهم بن بشير الجرف نائب رئيس جهاز الاستثمار العماني للاستثمار بأن الجهاز ينظر لليابان كشريك مثالي في هذا القطاع؛ نظرًا لما تتمتع به اليابان من مكانة مرموقة في قطاع التكنولوجيا؛ الأمر الذي يجسّد سعي الجهاز إلى تأسيس شراكات إستراتيجية مع مختلف دول العالم لتوطين التقنيات الحديثة في القطاعات المحلية المستهدفة؛ بما يعود بالنفع على الاقتصاد الوطني وتعزيز تنافسيته، بالإضافة إلى إيجاد فرص عمل وأعمال قائمة على هذه الصناعات.",
          'وبتوقيع مذكرة التعاون مع الجانب الياباني فإن الجهاز يسعى إلى تأسيس ثاني استثماراته الوطنية في قطاع أشباه الموصلات؛ بعد أن استثمر الجهاز عبر مجموعة "إذكاء" التابعة له في شركة GSME عُمان التي أسستها الشركة العالمية لأشباه الموصلات والإلكترونيات الدقيقة الأمريكية، ونجحت في اختبارات استمرت ستة أشهر لأول شريحتين عُمانيتين من أشباه الموصلات هما "عُمان 1" و"عُمان 2".',
          "وتتواءم المذكرة التي وقعها الجهاز مع توجهات سلطنة عمان نحو صناعة أشباه الموصلات عبر جذب الشركات الدولية المتخصصة في هذه الصناعة إلى القطاعات المحلية، إضافة إلى إعداد الكفاءات الوطنية وتأهيلها في هذه التقنية الحيوية التي تُستخدم في العديد من المجالات مثل الإلكترونيات، والاتصالات، والطاقة المتجددة، والطب، والتكنولوجيا الذكية، وصناعة السيارات، وتخزين البيانات، والمنتجات اللاسلكية والإلكترونية.",
        ],
        image: "/assets/images/media-center/news4.svg",
        locale: locale,
      },
      {
        id: 5,
        title:
          "ضمن مسيرته نحو التحوّل إلى الاستثمارات المُستدامة؛ جهاز الاستثمار العُماني يستثمر في ",
        date: "2024-01-17",
        paras:["مسقط : 11 سبتمبر 2023: استمرارًا لمساعي جهاز الاستثمار العماني الدؤوبة نحو تعظيم المحتوى المحلي في سلطنة عُمان بما يُسهم في تعزيز الشركات المحلية والمنتجات الوطنية؛ وقّع الجهاز برنامج تعاون مع أكاديمية الابتكار الصناعي يهدف إلى توطين بعض الصناعات في مختلف القطاعات الاقتصادية؛ وذلك من خلال دراسة سلاسل القيمة وتحليلها، واستخراج الفرص الاستثمارية الموجهة للمؤسسات الصغيرة والمتوسطة، بالإضافة إلى تأهيل القدرات الوطنية وتدريبها لتتواءم مع متطلبات السوق من خلال مسرعات أعمال متخصصة.","ويأتي هذا البرنامج ضمن مبادرات أطلقها الجهاز وأخرى يعمل عليها بالتعاون مع شركاته التابعة والجهات ذات العلاقة من أجل تعزيز المحتوى المحلي، وتوفير فرص أعمال للمؤسسات الصغيرة والمتوسطة، حيث سيرتكز برنامج التعاون الجديد مع أكاديمية الابتكار الصناعي إلى البرامج والمشاريع وقواعد البيانات المتوفرة لدى الأكاديمية، والتي تخدم قطاع ريادة الأعمال في سلطنة عمان.",],
        image: "/assets/images/media-center/news5.svg",
        locale: locale,
      },
      {
        id: 6,
        title:
          "توقيع برنامج تعاون بين جهاز الاستثمار العماني وأكاديمية الابتكار الصناعي",
        date: "2024-01-17",
        paras: [
          "استمرارًا للجهود التي يبذلها من أجل تعزيز الاستثمارات في التقنيات الحديثة وتوطين الصناعات المتقدمة؛ وقّع جهاز الاستثمار العماني مذكرة تعاون مع الجانب الياباني بهدف استكشاف الفرص في قطاع أشباه الموصلات، وتشجيع الاستثمار في هذه التقنية، وذلك على هامش الزيارة التي يقوم بها معالي ايواتا كازوتشيكا وزير الدولة الياباني للاقتصاد والتجارة والصناعة لسلطنة عمان.",
          "وقال ملهم بن بشير الجرف نائب رئيس جهاز الاستثمار العماني للاستثمار بأن الجهاز ينظر لليابان كشريك مثالي في هذا القطاع؛ نظرًا لما تتمتع به اليابان من مكانة مرموقة في قطاع التكنولوجيا؛ الأمر الذي يجسّد سعي الجهاز إلى تأسيس شراكات إستراتيجية مع مختلف دول العالم لتوطين التقنيات الحديثة في القطاعات المحلية المستهدفة؛ بما يعود بالنفع على الاقتصاد الوطني وتعزيز تنافسيته، بالإضافة إلى إيجاد فرص عمل وأعمال قائمة على هذه الصناعات.",
          'وبتوقيع مذكرة التعاون مع الجانب الياباني فإن الجهاز يسعى إلى تأسيس ثاني استثماراته الوطنية في قطاع أشباه الموصلات؛ بعد أن استثمر الجهاز عبر مجموعة "إذكاء" التابعة له في شركة GSME عُمان التي أسستها الشركة العالمية لأشباه الموصلات والإلكترونيات الدقيقة الأمريكية، ونجحت في اختبارات استمرت ستة أشهر لأول شريحتين عُمانيتين من أشباه الموصلات هما "عُمان 1" و"عُمان 2".',
          "وتتواءم المذكرة التي وقعها الجهاز مع توجهات سلطنة عمان نحو صناعة أشباه الموصلات عبر جذب الشركات الدولية المتخصصة في هذه الصناعة إلى القطاعات المحلية، إضافة إلى إعداد الكفاءات الوطنية وتأهيلها في هذه التقنية الحيوية التي تُستخدم في العديد من المجالات مثل الإلكترونيات، والاتصالات، والطاقة المتجددة، والطب، والتكنولوجيا الذكية، وصناعة السيارات، وتخزين البيانات، والمنتجات اللاسلكية والإلكترونية.",
        ],
        image: "/assets/images/media-center/news6.svg",
        locale: locale,
      },

      {
        id: 7,
        title: "جهاز الاستثمار العماني يحقق نموًا من استثماره في شركتي (روتاري) السنغافورية و(إنترفياس) البرازيلية",
        date:"2024-09-07",
        paras:["كشف جهاز الاستثمار العماني عن تحقيق استثماره في شركتي (روتاري) السنغافورية و(إنترفياس) البرازيلية نجاحات خلال العام الماضي 2023م؛ حيث يأتي الاستثماران ضمن (محفظة الأجيال) التي يستهدف الجهاز من خلالها توسيع استثماراته في الأسواق العالمية، وتعزيز شراكاته الإستراتيجية التي تدعم تحقيق الأرباح والعوائد الجيدة، إلى جانب الاستفادة منها في نقل الخبرات والتقنيات المتطورة إلى القطاعات المحلية في سلطنة عمان، والإسهام في جلب المستثمرين ورؤوس الأموال الأجنبية.","أما شركة (إنترفياس) التي تعمل في قطاع البنية الأساسية عبر الاستثمار في طرق خاضعة للرسوم في مدينة ساو باولو البرازيلية، فقد ذكر الجهاز بأنها شهدت نموًا ملحوظًا في حركة المرور بالطرق التي تستثمر بها، وارتفعت إيراداتها بنسبة 17% في عام 2023م مقارنة بعام 2022م؛ الأمر الذي أسهم في نجاح الجهاز بالتخارج الجزئي منها؛ محققًا عوائد مجزية سيتم تدويرها في استثمارات أخرى، وفق الممارسة العالمية المتبعة في هذا الشأن."],
        image: "/assets/images/media-center/news7.svg",
        locale: locale,
      },
      // {
      //   id: 8,
      //   title: t("news.7.title"),
      //   date: t("news.7.date"),
      //   image: "/assets/images/media-center/news8.svg",
      //   locale: locale,
      // },
      // {
      //   id: 9,
      //   title: t("news.8.title"),
      //   date: t("news.8.date"),
      //   image: "/assets/images/media-center/news9.svg",
      //   locale: locale,
      // },
      // {
      //   id: 10,
      //   title: t("news.9.title"),
      //   date: t("news.9.date"),
      //   image: "/assets/images/media-center/news8.svg",
      //   locale: locale,
      // },
      // {
      //   id: 11,
      //   title: t("news.10.title"),
      //   date: t("news.10.date"),
      //   image: "/assets/images/media-center/news1.svg",
      //   locale: locale,
      // },
      // {
      //   id: 12,
      //   title: t("news.11.title"),
      //   date: t("news.11.date"),
      //   image: "/assets/images/media-center/news2.svg",
      //   locale: locale,
      // },
    ],
  };

  const mediaRelation = {
    title: "Media Relation",
  };
  const ArmediaRelation = {
    title: "هل أنت صحفي / إعلامي؟",
  };
  return (
    <div className="news-section">
      <div>
        <ImageBanner
          data={locale === "en" ? bannerData : ARbannerData}
        />
      </div>
      <div>
        <NewsSearchandCards
          data={locale === "en" ? newsList : ARnewsList}
          locale={locale}
        />
      </div>
      <div>
        <MediaRelationForm
          locale={locale}
          data={
            locale === "en"
              ? mediaRelation
              : ArmediaRelation
          }
        />
      </div>
    </div>
  );
};
export default NewsPage;
