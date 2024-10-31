import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import ScreenContainer from "@/app/components/screencontainer/ScreenContainer";
import GdpIndicatorCard from "@/app/components/common/GdpIndicatorCard";

import { useTranslations } from "next-intl";
import {getTranslations, unstable_setRequestLocale,} from "next-intl/server";
export async function generateMetadata({params: { locale },}: {  params: { locale: string };}) {
  const t = await getTranslations({
    locale,
    namespace: "National-Economy",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
interface NationalEconomyProps {
  params: {
    locale: string;
  };
}

const NationalEconomy: React.FC<NationalEconomyProps> = ({  params: { locale },}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations("National-Economy");

  type BannerData = {
    title: string;
    description: string;
    image: string;
    logoTitle?: boolean;
    locale?: string;
  };
  const bannerData: any = {
    title: "National Economy",
    description: "",
    image:"/assets/images/banner/national-eco-banner.jpg",
    tabImg:"/assets/images/banner/national-economy-tablet-banner.jpg",
    mobileImg:"/assets/images/banner/national-economy-mobile-banner.jpg",
    locale: locale,
  };
  const ARbannerData: any = {
    title: "الاقتصاد الوطني",
    description: "",
    image: "/assets/images/banner/national-eco-banner.jpg",
    tabImg: "/assets/images/banner/national-economy-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/national-economy-mobile-banner.jpg",
    locale: locale,
  };
  const gdpFigures: any = {
    title: "Contribution in GDP",
    imgSrc: "/assets/images/banner/gdp-img.jpg",
    alt: "National Economy",
    gdpFigure: "2.6",
    gdpAmount: "Billion",
    gdpCountryLabel: "OMR",
    gdpTag: "Contribution to GDP in 2022"
  };
  const ARgdpFigures: any = {
    title: "المساهمة في الناتج المحلي",
    imgSrc: "/assets/images/banner/national-eco-ar-gdp-banner.jpg",
    alt: "الاقتصاد الوطني",
    gdpFigure: "2.6",
    gdpAmount: "مليار ريال",
    gdpCountryLabel: "عماني",
    gdpTag: "المساهمة في الناتج المحلي"
  }

  const gdpCardData: any = [
    {
      id: 1,
      title: "Diversifying Income Sources:",
      desc: "The OIA works to reduce reliance on oil as the main source of revenue by investing the state's assets in various sectors such as technology, agriculture, tourism, industry, and financial services."
    },
    {
      id: 2,
      title: "Promoting Economic Growth:",
      desc: "The OIA contributes to supporting national economic projects by investing in infrastructure and key sectors that help create job opportunities and increase the Gross Domestic Product (GDP)."
    },
    {
      id: 3,
      title: "Developing Local Companies:",
      desc: "It helps develop and empower OIA’s companies through partnerships with local and international investors."
    },
    {
      id: 4,
      title: "Efficient Management of State Assets:",
      desc: "The OIA aims to achieve sustainable returns from the state's assets through well-studied investment strategies that minimize risks and maximize long-term returns."
    }
  ];
  const ARgdpCardData: any = [
    {
      id: 1,
      title: "تنويع مصادر الدخل:",
      desc: "يعمل الجهاز على تقليل الاعتماد على النفط كمصدر رئيسي للإيرادات من خلال استثمار أصول الدولة في قطاعات متنوعة مثل التكنولوجيا، الزراعة، والسياحة، والصناعة، والخدمات المالية."
    },
    {
      id: 2,
      title: "تعزيز النمو الاقتصادي:",
      desc: "يسهم الجهاز في دعم المشاريع الاقتصادية الوطنية من خلال الاستثمار في البنية التحتية والقطاعات الحيوية التي تساهم في توفير فرص العمل وزيادة الناتج المحلي الإجمالي."
    },
    {
      id: 3,
      title: "تطوير الشركات المحلية:",
      desc: "يساعد في تطوير وتمكين شركات الجهاز من خلال الشراكات مع مستثمرين محليين ودوليين."
    },
    {
      id: 4,
      title: "إدارة أصول الدولة بكفاءة:",
      desc: "يهدف الجهاز إلى تحقيق عوائد مستدامة من أصول الدولة من خلال استراتيجيات استثمارية مدروسة تقلل من المخاطر وتزيد من العوائد على المدى الطويل."
    }
  ];
  const newTwoDataTextWithImg = {
    title: "Foreign Investments Directs ",
    paras: [
      "Oman Investment Authority achieved notable success in attracting foreign investments in 2023. The total investments drawn from the Kingdom of Saudi Arabia and the State of Qatar amounted to approximately 180 million Omani Riyals. This achievement is part of the government’s ongoing efforts to strengthen strategic partnerships with friendly and brotherly nations.",
      "Oman Investment Authority play a role to make Oman an attractive place for investment through various strategies. "
    ],
    list: [
       "Marketing Investment Opportunities: Through promoting Oman as a prime investment place, highlighting advantages like strategic location and political stability. ",
       "International Partnerships: Building collaborations with global companies to attract large-scale investments, knowledge transfer, and technology.",
       "Supporting Modern Sectors: Like technology and renewable energy, to enhance the diversification and sustainability of Oman's economy. "
    ],
    img: "/assets/images/oia-impact/national-eco/foreign-invesment.jpg",
  };
  const ARnewTwoDataTextWithImg = {
    title: "جذب الاستثمار الأجنبي المباشر",
    paras: [
      "حقق الجهاز نجاحًا ملحوظًا في جذب استثمارات خارجية خلال عام 2023م حيث بلغ إجمالي الاستثمارات التي تم جذبها من المملكة العربية السعودية ودولة قطر حوالي 180 مليون ريال عماني، ويأتي هذا الإنجاز في إطار جهود الحكومة لتعزيز الشراكات الإستراتيجية مع الدول الصديقة والشقيقة",
      "يلعب جهاز الاستثمار العماني دوراً محورياً في تعزيز مكانة سلطنة عمان كوجهة استثمارية جاذبة من خلال عدة استراتيجيات:"
    ],
    list: [
      "تسويق الفرص الاستثمارية: عبر الترويج لعُمان كمركز استثماري متميز عبر أنشطته، مع التركيز على مزايا الموقع الجغرافي والاستقرار السياسي.",
      "الشراكات الدولية: بناء شراكات مع شركات عالمية لجذب استثمارات ضخمة ونقل المعرفة والتكنولوجيا وتبادل الخبرات.",
      "دعم القطاعات الحديثة: مثل التكنولوجيا والطاقة المتجددة، لتعزيز تنويع واستدامة الاقتصاد العماني."
    ],
    img: "/assets/images/oia-impact/national-eco/foreign-invesment.jpg",
  };
  return (
    <div className="natonal-economy-section">
      <div>
        <ImageBanner
          data={locale === "en" ? bannerData : ARbannerData}
        />
      </div>
      

      <ScreenContainer>
        <div className="my-[60px] lg:my-[100px]">
          <h2 className={`section-heading font-DINABold mb-[50px] rtl:font-TajawalBold`}>
            {locale === "en" ? gdpFigures.title : ARgdpFigures.title}
          </h2>
          <div className="flex justify-between flex-wrap sm:flex-nowrap lg:flex-nowrap">
            <div className="h-auto sm:h-[300px] w-full sm:w-[49%] lg:w-[74.5%] overflow-hidden rounded-[4px] mb-[30px] sm:mb-[0px] md:mb-[0px] lg:mb-[0px]">
              <img 
                src={locale === "en" ? gdpFigures.imgSrc : ARgdpFigures.imgSrc} 
                alt={locale === "en" ? gdpFigures.alt : ARgdpFigures.alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center w-full sm:w-[49%] lg:w-[23.5%] bg-[#FEFAF1] px-[30px] py-[30px] sm:py-[0px] md:py-[0px] lg:py-[0px]">
              <div className="mb-[30px] flex items-center">
                <h4 className="font-poppinsBold font-bold text-[70px] leading-[70px] md:text-[84px] md:leading-[84px] !text-[#9f8555] rtl:font-TajawalBold">{gdpFigures.gdpFigure}</h4>
                <p className="poppinsInContent text-[#9E8557] rtl:font-TajawalMedium rtl:mr-[5px]">
                  <span className="block">
                    {locale === "en" ? gdpFigures.gdpAmount : ARgdpFigures.gdpAmount}
                  </span>
                  <span>
                    {locale === "en" ? gdpFigures.gdpCountryLabel : ARgdpFigures.gdpCountryLabel}
                  </span>
                </p>
              </div>
              <p className="poppinsInContent text-[#9E8557] rtl:font-TajawalMedium">
                {locale === "en" ? gdpFigures.gdpTag : ARgdpFigures.gdpTag}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-y-[24px] mt-[24px]">
            {
              (locale === "en" ? gdpCardData : ARgdpCardData).map((item: any) => (
                <GdpIndicatorCard key={item.id} data={item}/>
              ))
            }
          </div>
        </div>
      </ScreenContainer>
      

      <PolygonBg isShowPy={false}>
        <TextWIthImg
        locale={locale}
          data={
            locale === "en"
              ? newTwoDataTextWithImg
              : ARnewTwoDataTextWithImg
          }
          orderText={2}
          orderImg={1}
          isListShow={true}
        />
      </PolygonBg>
      
    </div>
  );
};

export default NationalEconomy;
