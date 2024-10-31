import ImageBanner from "@/app/components/banners/ImageBanner";
import TextWIthImg from "@/app/components/common/TextWithImg";
import IPOSTable from "@/app/components/ipos/IPOSTable";
import { useTranslations } from "next-intl";
import { IPOsTableData, ArIPOsTableData } from "@/app/data/data";
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
    namespace: "In-Country",
  });

  return {
    title: t("metaData.title"),
    description: t("metaData.description"),
  };
}
const IposPLan: React.FC<any> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  const bannerData = {
    title: "IPOs Plan",
    description: "",
    image: "/assets/images/banner/ipos-plan-banner.jpg",
    locale: locale,
  };
  const ARbannerData = {
    title: "خطة التخارج",
    description: "",
    image: "/assets/images/banner/ipos-plan-banner.jpg",
    locale: locale,
  };
  const iposPlanTextWithImg = {
    title: "IPOs Plan",
    paras: [
      "OIA’s divestment plan is aimed at empowering the private sector, giving it the support it needs to increase its contribution to the Omani economy while acquiring strategic or financial partners both locally and internationally and bringing in foreign capital. The plan also strives to deepen MSX through public offerings in primary and secondary markets, and redirecting exit revenues towards capital investments in sectors that contribute to economic diversification.",
      "OIA achieved divestment returns of OMR 1.2 billion in 2023 through MSX IPOs and direct sales. These IPOs reflect positively on MSX’s trading volume, 20% of which came from Abraj and OQ Gas Networks. These two companies also accounted for 16% of the exchange’s total trading value.",
    ],
    list: [],
    img: "/assets/images/oia-impact/ipos-plan/ipos-plan.jpg",
  };
  const ARiposPlanTextWithImg = {
    title: "خطة التخارج",
    paras: [
      "تستهدف خطــــة التخــــارج لجهـــاز الاستثمار العمـاني تمكـــــين القطـــاع الخاص وتقـــديم الدعم اللازم له من أجـــل زيادة إسهاماته في الاقتصاد الوطني، والحصـــول على شركــــاء إستراتيجـيين أو مـــاليين محليين ودوليين، ودعـــم استقطاب رؤوس الأموال الأجنبية، إلى جانب تعميق بورصـة مسقط من خلال الطروحات العامة للسوق الأولية والثانوية، وإعــادة توجــــيه إيرادات التخــارج نحو الاستثمارات الرأسمالية فــي القطاعات التي تسهــم في التنويع الاقتصادي.",
      "حقق الجهاز خلال 2023م عوائد من التخارج بلغت 1.2 مليار ر.ع من خلال الطرح في بورصـــــة مسقـــــــط والبيع المبـــاشر، وانعكست هذه الطـــروحات إيجاًًبا علـــى حجم التداول في بورصة مسقط؛ حيث شّّكل حجم تداول شركتي أبراج وأوكـــيو لشبكات الغاز %20 من الحـــجم الإجمالي للبورصة، بينما بلغـــت قيمة تداولات هــاتين الشركتين %16 من إجمالي قيمة التداولات في البورصة.",
    ],
    list: [],
    img: "/assets/images/oia-impact/ipos-plan/ipos-plan-ar.jpg",
  };

 
  
  return (
    <>
      <ImageBanner
        data={locale === "en" ? bannerData : ARbannerData}
      />
      <div className="">
        <TextWIthImg
          data={
            locale === "en"
              ? iposPlanTextWithImg
              : ARiposPlanTextWithImg
          }
          orderText={1}
          orderImg={2}
        />
      </div>
      <IPOSTable locale={locale} data={locale === "en" ? IPOsTableData : ArIPOsTableData} />
    </>
  );
};
export default IposPLan;
