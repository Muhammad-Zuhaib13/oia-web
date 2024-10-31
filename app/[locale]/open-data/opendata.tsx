"use client";

import ImageBanner from "@/app/components/banners/ImageBanner";
import PolygonBg from "@/app/components/common/PolygonBg";
import TextWIthImg from "@/app/components/text-with-img/TextWIthImg";
const OpenData: React.FC<any> = ({ locale, data }) => {
  const bannerData = {
    title: "Open Data",
    description: "",
    image: "/assets/images/banner/open-data-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/open-data-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/open-data-mobile-banner.jpg",
    locale: locale,
  };
  const ARbannerData = {
    title: "البيانات المفتوحة",
    description: "",
    image: "/assets/images/banner/open-data-dsktp-banner.jpg",
    tabImg: "/assets/images/banner/open-data-tablet-banner.jpg",
    mobileImg: "/assets/images/banner/open-data-mobile-banner.jpg",
    locale: locale,
  };
  const openData1 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const ARopenData1 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const openData2 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const ARopenData2 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const openData3 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const ARopenData3 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const openData4 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const ARopenData4 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const openData5 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const ARopenData5 = {
    title: "Open Data",
    paras: [
      "Our collaborations with global and local partners, including media, vendors, are most effective when aligned with our established brand framework. On this page, you will find all the brand guidelines document, and resources necessary to ensure consistency across all communications.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const formData = {
    title: "Whistleblow Report",
  };
  return (
    <main>
      {/* <ImageBanner data={bannerData} /> */}
      <ImageBanner
        data={locale === "en" ? bannerData : ARbannerData}
      />
      <TextWIthImg
        data={locale === "en" ? openData1 : ARopenData1}
        orderText={1}
        orderImg={2}
        isListShow={true}
      />
      <PolygonBg>
        <TextWIthImg
          data={locale === "en" ? openData2 : ARopenData2}
          orderText={2}
          orderImg={1}
          isListShow={true}
          swap={true}

        />
      </PolygonBg>
      <TextWIthImg
        data={locale === "en" ? openData3 : ARopenData3}
        orderText={1}
        orderImg={2}
        isListShow={true}
      />
      <PolygonBg>
        <TextWIthImg
          data={locale === "en" ? openData4 : ARopenData4}
          orderText={2}
          orderImg={1}
          isListShow={true}
          swap={true}

        />
      </PolygonBg>
      <TextWIthImg
        data={locale === "en" ? openData5 : ARopenData5}
        orderText={1}
        orderImg={2}
        isListShow={true}
      />
    </main>
  );
};
export default OpenData;
