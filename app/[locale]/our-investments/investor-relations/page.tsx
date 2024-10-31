import ImageBanner from "@/app/components/banners/ImageBanner";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import DownloadPdf from "@/app/components/investor-relations/DownloadPdf";
import InvestorRelForm from "@/app/components/forms/InvestorRelations";
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
    namespace: "Investor-Relations",
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

const InvestorRelations: React.FC<FutureFundProps> = ({
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
    title: "Investor Relations",
    description: "",
    image:
      "/assets/images/our-investments/investor-relations/banner-img.jpg",
    locale: locale,
  };
  const bannerDataAr: BannerData = {
    title: "علاقات المستثمرين",
    description: "",
    image:
      "/assets/images/our-investments/investor-relations/banner-img.jpg",
    locale: locale,
  };
  const newOneDataTextWithImg = {
    title: "About The Investor Relations ",
    paras: [
      "Oman Investment Authority aims to build and strengthen strong, sustainable relationships with investors and strategic partners, driven by its belief in the importance of continuous and effective communication to foster collaboration and achieve mutual benefits.",
      "Due to political stability, an appealing environment, a strategic location, abundant natural resources, advanced infrastructure, and a business-friendlyenvironment, the Sultanate of Oman is now prepared for economic growth and becoming a global investment destination. This is confirmed by its credit rating, which has been upgraded to investment grade.",
      "Oman Investment Authority invites institutions and investors to explore investment opportunities in Oman. Those interested in learning more about these opportunities or partnering with OIA in various investment sectors can contact the Investor Relations team by filling out the required information below."
    ],
    list: [],
    img: "/assets/images/investre.jpg",
  };
  const ArnewOneDataTextWithImg = {
    title: "علاقات المستثمرين ",
    paras: [
      "يهدف جهاز الاستثمار العماني إلى بناء علاقات قوية ومُستدامة وتعزيزها مع المستثمرين والشركاء الإستراتيجيين؛ إيمانًا منه بأهمية التواصل المستمر والفعّال معهم؛ لتعزيز التعاون وتحقيق المصالح المشتركة.",
      "وبفضل الاستقرار السياسي والبيئة الجاذبة والموقع الإستراتيجي والموارد الطبيعية الوفيرة والبنية الأساسية المتقدمة وبيئة الأعمال السلسة؛ فقد أصبحت سلطنة عمان على أهبة الاستعداد للنمو الاقتصادي والتحول إلى وجهة استثمارية عالمية، يؤكد ذلك التصنيف الائتماني لها الذي ارتفع إلى الدرجة الاستثمارية.",
      "ويدعو الجهاز جميع المؤسسات والمستثمرين إلى استكشاف فرص الاستثمار في سلطنة عمان، ويُمكن لمن يرغب في معرفة المزيد عن هذه الفرص أو كيفية الشراكة مع الجهاز أو التعاون معه في مختلف القطاعات الاستثمارية التواصل مع فريق علاقات المستثمرين عبر تعبئة البيانات المطلوبة في الأسفل."
    ],
    list: [],
    img: "/assets/images/investre.jpg",
  };
  const newTwoDataTextWithImg = {
    title: "Future Fund Oman Objectives",
    paras: [],
    list: [
      "Economic stimulation and support for those seeking project financing.",
      "Support for small and medium enterprises (SMEs)",
      "Establish partnerships and attract foreign investment.",
      "Complete the financial and investment coverage system established by the government.",
      "Empower the private sector, avoiding competition, and providing opportunities for partnership in project financing.",
    ],
    img: "/assets/images/sword-with-br.jpg",
  };
  const downloadPdf = {
    desc: "This system is an important tool to ensure the integrity and effectiveness of the Oman Investment Authority and contributes to fostering a culture of accountability and responsibility among all employees of the Authority.",
    cta: {
      label: "Download PDF",
      link:"/investor-rel/Oman Investor Handbook.pdf"
    },
  };
  const formData = {
    title:"Request for Information or Meeting"
  }
  const formDataAr = {
    title:"تواصل معنا لطلب معلومات أو إجتماع"
  }
  return (
    <div className="future-fund-oman">
      <div>
        <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
      </div>
      <div>
        <TextWIthImg
          data={locale==="en"?newOneDataTextWithImg:ArnewOneDataTextWithImg}
          locale={locale}
        />
      </div>
      <div>
        <InvestorRelForm data={locale==="en"?formData:formDataAr} locale={locale} />
      </div>
      <div>
       <DownloadPdf data={downloadPdf} locale={locale} />
      </div>
    </div>
  );
};

export default InvestorRelations;
