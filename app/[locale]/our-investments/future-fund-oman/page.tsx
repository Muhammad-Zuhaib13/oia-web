import ImageBanner from "@/app/components/banners/ImageBanner";
// import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import TextWIthImg from "@/app/components/common/TextWithImg";
import FactsandFigure from "@/app/components/future-fund-oman/FactsandFigure";
import PolygonBg from "@/app/components/common/PolygonBg";
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
    namespace: "Future-Fund-Oman",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
interface FutureFundProps {
  params: {
    locale: string;
  };
}

const FutureFundOman: React.FC<FutureFundProps> = ({
  params: { locale },
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Future-Fund-Oman");
  type BannerData = {
    title: string;
    description: string;
    image: string;
    logoTitle?: boolean;
    locale?: string;
  };

  const bannerData: BannerData = {
    title: "Future Fund Oman",
    description: "",
    image: "/assets/images/future-fund-oman/banner-img.jpg",
    locale: locale,
  };
  const bannerDataAr: BannerData = {
    title:"صندوق عمان المستقبل",
    description: "",
    image: "/assets/images/future-fund-oman/banner-img.jpg",
    locale: locale,
  };

  const fundAllocation = {
    title: t("Fund-Allocation.title"),
    para: t("Fund-Allocation.para"),
    locale: locale,
  };
  const amountSection = {
    para: t("Amount.para"),
    currency: t("Amount.currency"),
    amount: t("Amount.amount"),
  };
  const fundAllocationCards = {
    locale: locale,
    cardOne: {
      id: t("Fund-Allocation-cards.card-one.id"),
      src: t("Fund-Allocation-cards.card-one.src"),
    },
    cardTwo: {
      id: t("Fund-Allocation-cards.card-two.id"),
      title: t("Fund-Allocation-cards.card-two.title"),
      percent: t("Fund-Allocation-cards.card-two.percent"),
    },
    cardThree: {
      id: t("Fund-Allocation-cards.card-three.id"),
      title: t("Fund-Allocation-cards.card-three.title"),
      percent: t(
        "Fund-Allocation-cards.card-three.percent",
      ),
    },
    cardFour: {
      id: t("Fund-Allocation-cards.card-four.id"),
      src: t("Fund-Allocation-cards.card-four.src"),
    },
    cardFive: {
      id: t("Fund-Allocation-cards.card-five.id"),
      title: t("Fund-Allocation-cards.card-five.title"),
      percent: t("Fund-Allocation-cards.card-five.percent"),
    },
    cardSix: {
      id: t("Fund-Allocation-cards.card-six.id"),
      src: t("Fund-Allocation-cards.card-six.src"),
    },
  };

  const SimpleSliderData = {
    title: t("Future-Fund-Om-Slider-Title-Para.title"),
    para: t("Future-Fund-Om-Slider-Title-Para.para"),
    locale: locale,
    sliderData: [
      {
        id: t("Future-Fund-Om-Slider.slider-one.id"),
        src: t("Future-Fund-Om-Slider.slider-one.src"),
        alt: t("Future-Fund-Om-Slider.slider-one.alt"),
        title: t("Future-Fund-Om-Slider.slider-one.title"),
        locale: locale,
      },
      {
        id: t("Future-Fund-Om-Slider.slider-two.id"),
        src: t("Future-Fund-Om-Slider.slider-two.src"),
        alt: t("Future-Fund-Om-Slider.slider-two.alt"),
        title: t("Future-Fund-Om-Slider.slider-two.title"),
        locale: locale,
      },
      {
        id: t("Future-Fund-Om-Slider.slider-three.id"),
        src: t("Future-Fund-Om-Slider.slider-three.src"),
        alt: t("Future-Fund-Om-Slider.slider-three.alt"),
        title: t(
          "Future-Fund-Om-Slider.slider-three.title",
        ),
        locale: locale,
      },
    ],
  };
  const newOneDataTextWithImg = {
    title: "About Future Fund Oman",
    paras: [
      "In continuation of Oman Investment OIA’s efforts to boost Oman's economic activity, it has announced the launch of the Oman Future Fund following the royal decree of His Majesty Sultan Haitham bin Tarik in May 2023. The fund will serve as OIA’s third fund, alongside the National Development Fund and the Future Generations Fund.",
      "The fund targets all economic sectors, excluding oil, gas, and real estate, with a focus on services, manufacturing, mining, clean energy, tourism, telecommunications and information technology, logistics, and food."
    ],
    list: [],
    img: "/assets/images/futurefund.jpg",
  };
  const ArnewOneDataTextWithImg = {
    title:"عن صندوق عمان المستقبل",
    paras: [
      "استمرارًا لمساعي جهاز الاستثمار العماني نحو تعزيز النشاط الاقتصادي لسلطنة عمان؛ فقــد أعلن عـــن إطلاق صنـدوق عمـان المستقبل بعـــد الحصـول على مباركة سامية من جلالة السلــطان هيثــم بن طـارق المعـظم -حفظه الله- فــي مايو ٢٠٢٣م؛ ليكون بمثابة محفظة ثالثـــة للجهـــاز إضافة لمحفـــظتي التنمية الوطنية والأجيال. ",
      "يستهدف الصندوق جميع القطاعات الاقتصادية باستثناء النفط والغاز والعقارات، مع التركيز على: الخدمات، والصناعات التحويلية، والتعدين، والطاقة النظيفة، والسياحة، والاتصالات وتقنية المعلومات، واللوجستيات، والغذاء."
    ],
    list: [],
    img: "/assets/images/futurefund.jpg",
  };
  const newTwoDataTextWithImg = {
    title: "Objectives:",
    paras: [],
    list: [
      "Stimulate economic activity and provide support for those seeking project funding",
      "Support small and medium-sized enterprises (SMEs).",
      "Establish partnerships and attract foreign investment.",
      "Complement the government's financial and investment coverage framework.",
      "Empower the private sector, avoid competing with it, and offer opportunities for project funding partnerships.",
    ],
    img: "/assets/images/fundobj.jpg",
  };
  const ArnewTwoDataTextWithImg = {
    title: "أهداف صندوق عمان المستقبل:",
    paras: [],
    list: [
     "التحفيز الاقتصادي ومساعدة من يبحثون عن تمويل لمشاريعهم",
     "دعم المؤسسات الصغيرة والمتوسطة",
     "الدخول في شراكات وجذب الاستثمار الأجنبي.",
     "إكمال منظومة التغطية التمويلية والاستثمارية التي تقوم بها الحكومة.",
     "تمكين القطاع الخاص، وعدم منافسته، وإعطائه الفرصة للشراكة في تمويل المشاريع."
    ],
    img: "/assets/images/fundobj.jpg",
  };
  const factsandFigures = {
    title: "Facts & Figures",
    firstNumberCard: {
      title: "",
      value: "2,000,000,000",
      desc: "The capital amounts to 2 billion Omani riyals, ",
      year: "",
    },
    secondNumberCard: {
      title: "",
      value: "90%",
      desc: "with direct local projects",
      year: "",
    },
    thirdNumberCard: {
      title: "",
      value: "10%",
      desc: "to small and medium enterprises (SMEs) and startups",
      year: "",
    },
    imgOne:
      "/assets/images/fact1.jpg",
    imgTwo:
      "/assets/images/fact2.jpg",
    imgThree:
      "/assets/images/fact3.jpg",
    cta: {
      label: "Visit Future Fund Oman Website",
      url: "https://futurefund.om/futurefund/",
    },
  }
  const factsandFiguresAr = {
    title: "حقائق وأرقام",
    firstNumberCard: {
      title: "",
      value: "2,000,000,000",
      desc: "يبلــغ رأســماله ٢ مليار ريــال عمانــي تتــوزع إلــى ",
      year: "",
    },
    secondNumberCard: {
      title: "",
      value: "90%",
      desc: "للمشــروعات المحلية المباشــرة، و",
      year: "",
    },
    thirdNumberCard: {
      title: "",
      value: "10%",
      desc: " للمؤسســات الصغيــرة والمتوســطة والشــركات الناشــئة۔",
      year: "",
    },
    imgOne:
    "/assets/images/fact1.jpg",
  imgTwo:
    "/assets/images/fact2.jpg",
  imgThree:
    "/assets/images/fact3.jpg",
    cta: {
      label: "صندوق عمان المستقبل",
      url: "https://futurefund.om/futurefund/",
    },
  }
  return (
    <div className="future-fund-oman">
        <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
        <TextWIthImg
          data={locale==="en"?newOneDataTextWithImg:ArnewOneDataTextWithImg}
          locale={locale}
        />
      <PolygonBg>
        <TextWIthImg
          data={locale==="en"?newTwoDataTextWithImg:ArnewTwoDataTextWithImg}
          locale={locale}
          orderText={2}
          orderImg={1}
          classesContainer="!flex-col-reverse"
          isListShow={true}
          isShowMarginYResp={false}
          marginY="0"
        />
      </PolygonBg>
      <div>
        <FactsandFigure data={locale==="en"?factsandFigures:factsandFiguresAr} locale={locale} swap={true}/>
      </div>
    </div>
  );
};

export default FutureFundOman;
