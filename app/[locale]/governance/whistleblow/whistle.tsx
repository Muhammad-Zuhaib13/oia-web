"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import DownloadPdf from "@/app/components/investor-relations/DownloadPdf";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
import WhistleForm from "@/app/components/forms/WhistleForm";
const Whistle: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "Whistleblowing",
    description: "",
    image: "/assets/images/banner/whistle-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/whistle-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/whistle-mobile-banner.jpg",
    locale: locale,
  };
  const bannerDataAr = {
    title: "نظام التبليغ عن المخالفات",
    description: "",
    image: "/assets/images/banner/whistle-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/whistle-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/whistle-mobile-banner.jpg",
    locale: locale,
  };
  const aboutFund = {
    title: "About Whistleblowing",
    paras: [
      "Oman Investment Authority launched the Reporting Violations System in 2014 as a tool for good governance and enhancing transparency.",
      "The system aims to:",
    ],
    list: [
      "Combat any illegal or unethical behaviors or practices by the Authority's employees.",
      "Protect the Authority's reputation and financial standing.",
    ],
    img: "/assets/images/whis.jpg",
    endPara: [
      "The system ensures complete confidentiality for the whistleblower and allows them to describe the violations they observe, whether financial or administrative. An independent committee investigates the submitted reports and submits its findings to the relevant authorities for necessary actions.",
    "This system is an important tool to ensure the integrity and effectiveness of Oman Investment Authority and contributes to fostering a culture of accountability and responsibility among all OIA’s employees."
      ],
  };
  const aboutFundAr = {
    title: "التبليغ عن المخالفات",
    paras: [
      "أطلق جهاز الاستثمار العُماني نظام التبليغ عن المخالفات في عام 2014م؛ كإحدى أدوات الحوكمة الرشيدة وتعزيز الشفافية.",
      "ويهدف النظام إلى:",
    ],
    list: [
      "مكافحة أي سلوكيات أو ممارسات غير قانونية أو غير أخلاقية من قبل موظفي الجهاز.",
      "حماية سمعة الجهاز ومكانته المالية.",
    ],
    img: "/assets/images/whis.jpg",
    endPara: [
      "ويضمن النظام السرية التامة لمقدم البلاغ، ويسمح له بوصف المخالفات التي يلاحظها، سواءً كانت مالية أم إدارية، وتقوم لجنة مستقلة بالتحقيق في البلاغات المقدمة، وترفع تقريرها إلى الجهات المختصة لاتخاذ الإجراءات اللازمة.",
      "ويُعد النظام أداة مهمة لضمان نزاهة وفعالية جهاز الاستثمار العُماني، ويسهم في تعزيز ثقافة المساءلة والمسؤولية بين جميع موظفي الجهاز."
    ],
  };
  const downloadPdf = {
    desc: "This system is an important tool to ensure the integrity and effectiveness of the Oman Investment Authority and contributes to fostering a culture of accountability and responsibility among all employees of the Authority.",
    // cta: {
    //   label: "Download PDF",
    // },
  };
  const downloadPdfAr = {
    desc: "ويُعد النظام أداة مهمة لضمان نزاهة وفعالية جهاز الاستثمار العُماني، ويسهم في تعزيز ثقافة المساءلة والمسؤولية بين جميع موظفي الجهاز.",
    // cta: {
    //   label: "ملف PDF",
    // },
  };
  const formData = {
    title: "Whistleblow Report",
  };
  const ArformData = {
    title: "نظام التبليغ عن المخالفات",
  };
  return (
    <div>
      <ImageBanner data={locale==="en"?bannerData:bannerDataAr} />
      <TextWIthImg
        data={locale==="en"?aboutFund:aboutFundAr}
        orderText={1}
        orderImg={2}
        isListShow={true}
        locale={locale}
      />
      <DownloadPdf
        data={locale==="en"?downloadPdf:downloadPdfAr}
        locale={locale}
        style="!pt-[0px] !lg:py-[100px]"
      />
      <WhistleForm data={locale==="en"?formData:ArformData} locale={locale} />
    </div>
  );
};
export default Whistle;
