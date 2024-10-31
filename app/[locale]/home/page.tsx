import NumbersBgVideo from "@/app/components/banners/NumbersBgVideo";
import NewHomeSlider from "@/app/components/sliders/NewHomeSlider";
import { useTranslations } from "next-intl";
import {
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import HomeBanner from "../../components/banners/HomeBanner";
import GlobalFootprintMap from "../../components/home/GlobalFootprintMap";
import NewsRoom from "../../components/home/NewsRoom";
import Platforms from "../../components/home/Platforms";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale,
    namespace: "Home",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}

const Home: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const banner = useTranslations("Home");
  const oiaEstBanner = useTranslations("Home");
  const quickLinks = useTranslations("Home");
  const quickLinksSlider = useTranslations("Home");
  const investmentTitle = useTranslations("Home");
  const investmentSlider = useTranslations("Home");
  const globalTitle = useTranslations("Home");
  const globalContinent = useTranslations("Home");
  const globalCounter = useTranslations("Home");
  const newsRoom = useTranslations("Home");
  const currentLang = locale;
  const homeBanner = [
    {
      id: 1,
      source: "/assets/videos/home-banner.mp4",
      type: "video",
      title: "Global Footprint",
      subTitle: "OUR EXPERIENCE AND STRATEGY",
      btnLabel: "",
    },
    {
      id: 2,
      source: "/assets/images/home/homebanner-ifsw.jpg",
      type: "image",
      title:
        "Embracing Disruption and searching for Resilient Futures",
      subTitle: "",
      btnLabel: "Read more",
      link: "/media-center/publications",
    },
    {
      id: 3,
      source:
        "/assets/images/home/homebanner-injaz-eejaz.jpg",
      type: "image",
      title: "Injaz & Eejaz",
      subTitle: "",
      btnLabel: "Read more",
      link: "/media-center/publications",
    },
    {
      id: 4,
      source:
        "/assets/images/home/homebanner-annual-report.jpg",
      type: "image",
      title: "Annual",
      subTitle: "Report 2023",
      btnLabel: "Read more",
      link: "/media-center/publications",
    },
  ];
  const ARhomeBanner = [
    {
      id: 1,
      source: "/assets/videos/home-banner.mp4",
      type: "video",
      title: "تواجدنا العالمي",
      subTitle: "بخبرات واستراتيجيات متينة",
      btnLabel: "",
    },
    {
      id: 2,
      source: "/assets/images/home/homebanner-ifsw.jpg",
      type: "image",
      title:
        "Embracing Disruption and searching for Resilient Futures",
      btnLabel: "اقرأ المزيد",
      link: "/media-center/publications",
    },
    {
      id: 3,
      source:
        "/assets/images/home/homebanner-injaz-eejaz.jpg",
      type: "image",
      title: "تصفح الآن العدد الجديد",
      subTitle: "من نشرة إنجاز وإيجاز",
      btnLabel: "اقرأ المزيد",
      link: "/media-center/publications",
    },
    {
      id: 4,
      source:
        "/assets/images/home/homebanner-annual-report.jpg",
      type: "image",
      title: "التقرير",
      subTitle: "السنوي ٢٠٢٣م",
      btnLabel: "اقرأ المزيد",
      link: "/media-center/publications",
    },
  ];

  const oiaEst = {
    sectionParaOne: oiaEstBanner(
      "OIA-Est-banner.section-para-one",
    ),
    videoSrcOne: oiaEstBanner("OIA-Est-banner.src-one"),
    imgSrcOne: oiaEstBanner("OIA-Est-banner.img-one"),
    numberParaOne: oiaEstBanner(
      "OIA-Est-banner.number-para-one",
    ),
    sectionParaTwo: oiaEstBanner(
      "OIA-Est-banner.section-para-two",
    ),
    videoSrcTwo: oiaEstBanner("OIA-Est-banner.src-two"),
    imgSrcTwo: oiaEstBanner("OIA-Est-banner.img-two"),
    numberParaTwo: oiaEstBanner(
      "OIA-Est-banner.number-para-two",
    ),
    currentLang: currentLang,
  };
  const numberBgVideo = {
    sectionParaOne: oiaEstBanner(
      "OIA-Est-banner.section-para-one",
    ),
    videoSrcOne: oiaEstBanner("OIA-Est-banner.src-one"),
    imgSrcOne: oiaEstBanner("OIA-Est-banner.img-one"),
    numberParaOne: oiaEstBanner(
      "OIA-Est-banner.number-para-one",
    ),
    sectionParaTwo: oiaEstBanner(
      "OIA-Est-banner.section-para-two",
    ),
    videoSrcTwo: oiaEstBanner("OIA-Est-banner.src-two"),
    imgSrcTwo: oiaEstBanner("OIA-Est-banner.img-two"),
    numberParaTwo: oiaEstBanner(
      "OIA-Est-banner.number-para-two",
    ),
    currentLang: currentLang,
  };
  const quickLinksSliderData = {
    slideOne: {
      id: quickLinksSlider(
        "Quick-Links-Slider.slide-one.id",
      ),
      image: quickLinksSlider(
        "Quick-Links-Slider.slide-one.image",
      ),
      icon: quickLinksSlider(
        "Quick-Links-Slider.slide-one.icon",
      ),
      desc: quickLinksSlider(
        "Quick-Links-Slider.slide-one.desc",
      ),
      title: quickLinksSlider(
        "Quick-Links-Slider.slide-one.title",
      ),
      btn: quickLinksSlider(
        "Quick-Links-Slider.slide-one.btn",
      ),
    },
    slideTwo: {
      id: quickLinksSlider(
        "Quick-Links-Slider.slide-two.id",
      ),
      image: quickLinksSlider(
        "Quick-Links-Slider.slide-two.image",
      ),
      icon: quickLinksSlider(
        "Quick-Links-Slider.slide-two.icon",
      ),
      desc: quickLinksSlider(
        "Quick-Links-Slider.slide-two.desc",
      ),
      title: quickLinksSlider(
        "Quick-Links-Slider.slide-two.title",
      ),
      btn: quickLinksSlider(
        "Quick-Links-Slider.slide-two.btn",
      ),
    },
    slideThree: {
      id: quickLinksSlider(
        "Quick-Links-Slider.slide-three.id",
      ),
      image: quickLinksSlider(
        "Quick-Links-Slider.slide-three.image",
      ),
      icon: quickLinksSlider(
        "Quick-Links-Slider.slide-three.icon",
      ),
      desc: quickLinksSlider(
        "Quick-Links-Slider.slide-three.desc",
      ),
      title: quickLinksSlider(
        "Quick-Links-Slider.slide-three.title",
      ),
      btn: quickLinksSlider(
        "Quick-Links-Slider.slide-three.btn",
      ),
    },
    slideFour: {
      id: quickLinksSlider(
        "Quick-Links-Slider.slide-four.id",
      ),
      image: quickLinksSlider(
        "Quick-Links-Slider.slide-four.image",
      ),
      icon: quickLinksSlider(
        "Quick-Links-Slider.slide-four.icon",
      ),
      desc: quickLinksSlider(
        "Quick-Links-Slider.slide-four.desc",
      ),
      title: quickLinksSlider(
        "Quick-Links-Slider.slide-four.title",
      ),
      btn: quickLinksSlider(
        "Quick-Links-Slider.slide-four.btn",
      ),
    },
    slideFive: {
      id: quickLinksSlider(
        "Quick-Links-Slider.slide-five.id",
      ),
      image: quickLinksSlider(
        "Quick-Links-Slider.slide-five.image",
      ),
      icon: quickLinksSlider(
        "Quick-Links-Slider.slide-five.icon",
      ),
      desc: quickLinksSlider(
        "Quick-Links-Slider.slide-five.desc",
      ),
      title: quickLinksSlider(
        "Quick-Links-Slider.slide-five.title",
      ),
      btn: quickLinksSlider(
        "Quick-Links-Slider.slide-five.btn",
      ),
    },
  };
  const quickLinksTitle = {
    title: quickLinks("Quick-Links-Title.title"),
    para: quickLinks("Quick-Links-Title.para"),
    btnText: quickLinks("Quick-Links-Title.btn-text"),
    currentLang: currentLang,
    slider: quickLinksSliderData,
  };
  const investmentTitleData = {
    title: investmentTitle("Investments-Title.title"),
    para: investmentTitle("Investments-Title.para"),
  };
  const investmentSliderData = {
    slideOne: {
      id: investmentSlider(
        "Investments-Slider.slider-one.id",
      ),
      src: investmentSlider(
        "Investments-Slider.slider-one.src",
      ),
      alt: investmentSlider(
        "Investments-Slider.slider-one.alt",
      ),
      title: investmentSlider(
        "Investments-Slider.slider-one.title",
      ),
    },
    slideTwo: {
      id: investmentSlider(
        "Investments-Slider.slider-two.id",
      ),
      src: investmentSlider(
        "Investments-Slider.slider-two.src",
      ),
      alt: investmentSlider(
        "Investments-Slider.slider-two.alt",
      ),
      title: investmentSlider(
        "Investments-Slider.slider-two.title",
      ),
    },
    slideThree: {
      id: investmentSlider(
        "Investments-Slider.slider-three.id",
      ),
      src: investmentSlider(
        "Investments-Slider.slider-three.src",
      ),
      alt: investmentSlider(
        "Investments-Slider.slider-three.alt",
      ),
      title: investmentSlider(
        "Investments-Slider.slider-three.title",
      ),
    },
    slideFour: {
      id: investmentSlider(
        "Investments-Slider.slider-four.id",
      ),
      src: investmentSlider(
        "Investments-Slider.slider-four.src",
      ),
      alt: investmentSlider(
        "Investments-Slider.slider-four.alt",
      ),
      title: investmentSlider(
        "Investments-Slider.slider-four.title",
      ),
    },
  };
  const investmentData = {
    title: investmentTitleData.title,
    para: investmentTitleData.para,
    currentLang: currentLang,
    slider: investmentSliderData,
  };
  const globalCounterData = {
    counterOne: {
      id: globalCounter("Counter-Data.counter-one.id"),
      count: globalCounter(
        "Counter-Data.counter-one.count",
      ),
      title: globalCounter(
        "Counter-Data.counter-one.title",
      ),
    },
    counterTwo: {
      id: globalCounter("Counter-Data.counter-two.id"),
      count: globalCounter(
        "Counter-Data.counter-two.count",
      ),
      title: globalCounter(
        "Counter-Data.counter-two.title",
      ),
    },
    counterThree: {
      id: globalCounter("Counter-Data.counter-three.id"),
      count: globalCounter(
        "Counter-Data.counter-three.count",
      ),
      title: globalCounter(
        "Counter-Data.counter-three.title",
      ),
    },
  };
  const globalData = {
    title: globalTitle("Global-Title.title"),
    para: globalTitle("Global-Title.para"),
    northAm: globalContinent("Contients.northAm"),
    southAm: globalContinent("Contients.southAm"),
    africa: globalContinent("Contients.africa"),
    europe: globalContinent("Contients.europe"),
    asia: globalContinent("Contients.asia"),
    australia: globalContinent("Contients.australia"),
    oman: globalContinent("Contients.oman"),
    currentLang: currentLang,
    counter: globalCounterData,
  };
  const newsRoomCards = {
    newsCardOne: {
      id: newsRoom("News-Room.news-cards.news-card-one.id"),
      content: newsRoom(
        "News-Room.news-cards.news-card-one.content",
      ),
      date: newsRoom(
        "News-Room.news-cards.news-card-one.date",
      ),
      img: newsRoom(
        "News-Room.news-cards.news-card-one.img",
      ),
      desc: newsRoom(
        "News-Room.news-cards.news-card-one.desc",
      ),
    },
    newsCardTwo: {
      id: newsRoom("News-Room.news-cards.news-card-two.id"),
      content: newsRoom(
        "News-Room.news-cards.news-card-two.content",
      ),
      date: newsRoom(
        "News-Room.news-cards.news-card-two.date",
      ),
      img: newsRoom(
        "News-Room.news-cards.news-card-two.img",
      ),
      desc: newsRoom(
        "News-Room.news-cards.news-card-two.desc",
      ),
    },
    newsCardThree: {
      id: newsRoom(
        "News-Room.news-cards.news-card-three.id",
      ),
      content: newsRoom(
        "News-Room.news-cards.news-card-three.content",
      ),
      date: newsRoom(
        "News-Room.news-cards.news-card-three.date",
      ),
      img: newsRoom(
        "News-Room.news-cards.news-card-three.img",
      ),
      desc: newsRoom(
        "News-Room.news-cards.news-card-three.desc",
      ),
    },
    newsCardFour: {
      id: newsRoom(
        "News-Room.news-cards.news-card-four.id",
      ),
      content: newsRoom(
        "News-Room.news-cards.news-card-four.content",
      ),
      date: newsRoom(
        "News-Room.news-cards.news-card-four.date",
      ),
      img: newsRoom(
        "News-Room.news-cards.news-card-four.img",
      ),
      desc: newsRoom(
        "News-Room.news-cards.news-card-four.desc",
      ),

      newsId: 4,
    },
  };

  const sliderAr = [
    {
      id:1,
      src:"/assets/images/home/investment/Asyad.jpg",
      title:"مجموعـــة أسيـــاد",
      desc: "تحقيـــــــــــق إيرادات بـ 465 مليــــون ر.ع بنسبة ارتفـــــــــاع %5 عن عــــــــام 2022م.",
      alt:"مجموعـــة أسيـــاد",
    },
    {
      id:2,
      src:"/assets/images/home/investment/Ithca.jpg",
      title:"مجمــــــوعة إذكـــاء",
      desc:"١٢ مليون ر.ع إجمـــــــــــــــــالي الإنفاق على المؤسسات الصغيرة والمتوسطة",
      alt:"مجمــــــوعة إذكـــاء",
    },
    {
      id:3,
      src:"/assets/images/home/investment/LNG.jpg",
      title:"الشركة العمانية للغاز الطبيعي المسال",
      desc:"١١.٥ مليون طن متري من الغاز الطبيعي المسال تم إنتاجه في ٢٠٢٣م",
      alt:"الشركة العمانية للغاز الطبيعي المسال",
    },
    {
      id:4,
      src:"/assets/images/home/investment/MDO.jpg",
      title:"تنمـــــية معـــــادن ُُعمـــــان",
      desc:"٤،٨ مليون طن اكتشافات جديدة من خام النحاس",
      alt:"تنمـــــية معـــــادن ُُعمـــــان",
    },
    {
      id:5,
      src:"/assets/images/home/investment/Nama.jpg",
      title:"مجمــــــوعة نمــــــــــاء",
      desc:"الانتهـــــــــــاء من المرحلة الأولى من مشروع ربط بنسبة %100",
      alt:"مجمــــــوعة نمــــــــــاء",
    },
    {
      id:6,
      src:"/assets/images/home/investment/Omran.jpg",
      title:"مجموعـــة عمــران",
      desc:"الوصـــــول إلى مرحلـــــة التصميم التفـــصيلي في مشـــــروع فــــــور سيـزونز (Four Seasons) في مســـــقط.",
      alt:"مجموعـــة عمــران",
    },
    {
      id:7,
      src:"/assets/images/home/investment/OQ.jpg",
      title:"مجموعـــة أوكيـــــو",
      desc:"افتتــاح حقــل بساط في منطقة الامتياز 60",
      alt:"مجموعـــة أوكيـــــو",
    }
  ]
  const sliderEn = [
    {
      id:1,
      src:"/assets/images/home/investment/Asyad.jpg",
      title:"",
      desc: "",
      alt:"مجموعـــة أسيـــاد",
    },
    {
      id:2,
      src:"/assets/images/home/investment/Ithca.jpg",
      title:"",
      desc:"",
      alt:"مجمــــــوعة إذكـــاء",
    },
    {
      id:3,
      src:"/assets/images/home/investment/LNG.jpg",
      title:"",
      desc:"",
      alt:"الشركة العمانية للغاز الطبيعي المسال",
    },
    {
      id:4,
      src:"/assets/images/home/investment/MDO.jpg",
      title:"",
      desc:"",
      alt:"تنمـــــية معـــــادن ُُعمـــــان",
    },
    {
      id:5,
      src:"/assets/images/home/investment/Nama.jpg",
      title:"",
      desc:"",
      alt:"مجمــــــوعة نمــــــــــاء",
    },
    {
      id:6,
      src:"/assets/images/home/investment/Omran.jpg",
      title:"",
      desc:"",
      alt:"مجموعـــة عمــران",
    },
    {
      id:7,
      src:"/assets/images/home/investment/OQ.jpg",
      title:"",
      desc:"",
      alt:"مجموعـــة أوكيـــــو",
    }
  ]
  const newsRoomData = {
    title: newsRoom("News-Room.title"),
    btnText: newsRoom("News-Room.btn-text"),
    newsRoomCards: newsRoomCards,
    currentLang: currentLang,
  };
  const SimpleSliderData = {
    title: investmentTitle(
      "Investments-Slider-Title-Para.title",
    ),
    para: investmentTitle(
      "Investments-Slider-Title-Para.para",
    ),
    locale: locale,
    investmentsLink: [
      {
        id: 1,
        title: investmentSlider(
          "Investments-Slider.slider-one.title",
        ),
        link: "/our-investments/future-generation-fund",
      },
      {
        id: 2,
        title: investmentSlider(
          "Investments-Slider.slider-two.title",
        ),
        link: "/our-investments/future-generation-fund",
      },
      {
        id: 3,
        title: investmentSlider(
          "Investments-Slider.slider-three.title",
        ),
        link: "/our-investments/future-generation-fund",
      },
      {
        id: 4,
        title: investmentSlider(
          "Investments-Slider.slider-four.title",
        ),
        link: "/our-investments/future-generation-fund",
      },
    ],
    // sliderData: [
    //   {
    //     id: investmentSlider(
    //       "Investments-Slider.slider-one.id",
    //     ),
    //     src: investmentSlider(
    //       "Investments-Slider.slider-one.src",
    //     ),
    //     alt: investmentSlider(
    //       "Investments-Slider.slider-one.alt",
    //     ),
    //     title: investmentSlider(
    //       "Investments-Slider.slider-one.title",
    //     ),
    //     link: "/our-investments/future-generation-fund",
    //     locale: locale,
    //   },
    //   {
    //     id: investmentSlider(
    //       "Investments-Slider.slider-two.id",
    //     ),
    //     src: investmentSlider(
    //       "Investments-Slider.slider-two.src",
    //     ),
    //     alt: investmentSlider(
    //       "Investments-Slider.slider-two.alt",
    //     ),
    //     title: investmentSlider(
    //       "Investments-Slider.slider-two.title",
    //     ),
    //     link: "/our-investments/future-generation-fund",
    //     locale: locale,
    //   },
    //   {
    //     id: investmentSlider(
    //       "Investments-Slider.slider-three.id",
    //     ),
    //     src: investmentSlider(
    //       "Investments-Slider.slider-three.src",
    //     ),
    //     alt: investmentSlider(
    //       "Investments-Slider.slider-three.alt",
    //     ),
    //     title: investmentSlider(
    //       "Investments-Slider.slider-three.title",
    //     ),
    //     link: "/our-investments/future-generation-fund",
    //     locale: locale,
    //   },
    //   {
    //     id: investmentSlider(
    //       "Investments-Slider.slider-four.id",
    //     ),
    //     src: investmentSlider(
    //       "Investments-Slider.slider-four.src",
    //     ),
    //     alt: investmentSlider(
    //       "Investments-Slider.slider-four.alt",
    //     ),
    //     title: investmentSlider(
    //       "Investments-Slider.slider-four.title",
    //     ),
    //     link: "/our-investments/future-generation-fund",
    //     locale: locale,
    //   },
    // ],
    sliderData:locale ==="en" ? sliderEn : sliderAr,
  };
  return (
    <section className="home-page">
      <div>
        <HomeBanner
          data={locale === "en" ? homeBanner : ARhomeBanner}
          locale={locale}
        />
      </div>
      <div>
        <NumbersBgVideo
          data={numberBgVideo}
          locale={locale}
        />
      </div>
      <div>
        <Platforms data={quickLinksTitle} locale={locale} />
      </div>
      <div>
        <NewHomeSlider data={SimpleSliderData} />
      </div>
      <div>
        <GlobalFootprintMap data={globalData} />
      </div>
      <div>
        <NewsRoom data={newsRoomData} />
      </div>
    </section>
  );
};
export default Home;
