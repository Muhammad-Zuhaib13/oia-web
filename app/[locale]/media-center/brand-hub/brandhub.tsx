"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import ButtonTextImage from "@/app/components/common/ButtonTextImage";
import PolygonBg from "@/app/components/common/PolygonBg";
const BrandHub: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "Brand Hub",
    description: "",
    image: "/assets/images/hub.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "العلامة التجارية",
    description: "",
    image: "/assets/images/hub.jpg",
    locale: locale,
  };
  const aboutFund = {
    title: "OIA Brand Guidelines",
    paras: [
      "You can access the brand guidelines for Oman Investment Authority by downloading the attached file, where you will find comprehensive information about visual identity elements, writing style, and communication approach, as well as resources that help ensure the brand is used consistently and effectively across all platforms.",
    ],
    list: [],
    img: "/assets/images/media-center/guide.jpg",
    btn: [
      {
        id: 1,
        label: "Download the Brand Guideline",
        link: "/brand-hub/Brand Guidelines 2.pdf",
      },
      {
        id: 2,
        label: "Download the OIA Logos",
        link: "/brand-hub/OIA LOGO ONE COLOR .pdf",
      },
    ],
  };
  const aboutFundAr = {
    title: "دليل العلامة التجارية لجهاز الاستثمار العماني",
    paras: [
      "يمكنك الاطلاع على دليل العلامة التجارية لجهاز الاستثمار العماني عبر تحميل الملف المرفق، حيث ستجد معلومات شاملة حول عناصر الهوية البصرية، والنمط الكتابي، وأسلوب التواصل، بالإضافة إلى الموارد التي تساعد في ضمان استخدام العلامة التجارية بشكل موحد وفعال في جميع المنصات.",
    ],
    list: [],
    img: "/assets/images/media-center/guide.jpg",
    btn: [
      {
        id: 1,
        label: "دليل العلامة التجارية",
        link: "/brand-hub/Brand Guidelines 2.pdf",
      },
      {
        id: 2,
        label: "شعار جهاز الاستثمار  العماني",
        link: "/brand-hub/OIA LOGO ONE COLOR .pdf",
      },
    ],
  };
  const futureFund = {
    title: "Future Fund Oman Brand Guidelines",
    paras: [
      "You can access the brand guidelines for the Future Fund Oman by downloading the attached file in the botton.",
    ],
    list: [],
    img: "/assets/images/media-center/futurefund.png",
    btn: [
      {
        id: 1,
        label: "Download the Brand Guideline",
        link: "/open-data/FFO Brand Guidelines V2 14-01-24.pdf",
      },
    ],
  };
  const futureFundAr = {
    title: "دليل العلامة التجارية لصندوق عمان المستقبل ",
    paras: [
      "يمكنك الاطلاع على دليل العلامة التجارية لصندوق عمان المستقبل عبر تحميل الملف المرفق. ",
    ],
    list: [],
    img: "/assets/images/media-center/futurefund.png",
    btn: [
      {
        id: 1,
        label: "دليل العلامة التجارية",
        link: "/open-data/FFO Brand Guidelines V2 14-01-24.pdf",
      },
    ],
  };
  return (
    <>
      <ImageBanner
        data={locale === "en" ? bannerData : bannerDataAr}
      />
      <ButtonTextImage
        data={locale === "en" ? aboutFund : aboutFundAr}
        orderText={1}
        orderImg={2}
        isListShow={true}
      />
      <PolygonBg> 
        <ButtonTextImage
          marginY="0px"
          isShowMarginYResp={false}
          data={locale === "en" ? futureFund : futureFundAr}
          orderText={1}
          orderImg={2}
          isListShow={true}
        />
      </PolygonBg>
    </>
  );
};
export default BrandHub;
