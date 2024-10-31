"use client";
import ImageBanner from "@/app/components/banners/ImageBanner";
import TextWIthImg from "@/app/components/common/TextWithImg";
import OpenDataForm from "@/app/components/forms/OpenDataForm";
import OpenDataAccordion from "@/app/components/open-data/OpenDataAccordion";
import OpenDataDonwload from "@/app/components/open-data/OpenDataDonwload";
import OpenDataIndexTable from "@/app/components/open-data/OpenDataIndexTable";
import React from "react";

const OpenDataContainer: React.FC<any> = ({ locale }) => {
  const bannerData = {
    title: "Open Data",
    description: "",
    image:
      "/assets/images/banner/open-data-dsktp-banner.jpg",
    tabImg:
      "/assets/images/banner/open-data-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/open-data-mobile-banner.jpg",
    locale: locale,
  };
  const ARbannerData = {
    title: "البيانات المفتوحة",
    description: "",
    image:
      "/assets/images/banner/open-data-dsktp-banner.jpg",
    tabImg:
      "/assets/images/banner/open-data-tablet-banner.jpg",
    mobileImg:
      "/assets/images/banner/open-data-mobile-banner.jpg",
    locale: locale,
  };

  const openDataEn = {
    title: "Open Data",
    paras: [
      "Oman Investment Authority (OIA) is working to ensure the availability of open data and the sustainability of this practice through OIA’s social media channels. This embodies the value the Sultanate of Oman places on data and its importance when implementing the national priorities of Oman Vision 2040, strategic plans such as the five-year plan (2021-2025), and executive programs such as the National Program for the Digital Economy (2021-2025). This also aligns with the direction of the Ministry of Transport, Communications, and Information Technology to allow various segments of web users to view and benefit from data. This stems from the belief in the importance of using available data when carrying out the tasks and functions of the government sector by building a bridge between the sectors and beneficiaries of any service or tangible product the sector may have.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "Download",
    },
  };
  const openDataAr = {
    title: "البيانات المفتوحة",
    paras: [
      "يعمل جهاز الاستثمار العُماني على إتاحة البيانات المفتوحة، وضمان استدامة عمليات النشر من خلال مواقع التواصل الاجتماعي للجهاز، حيث يأتي ذلك تجسيدًا لاهتمام سلطنة عمان بالبيانات وأهميتها عند العمل على تنفيذ الأولويات الوطنية المتعلقة برؤية عمان 2040، والخطط الإستراتيجية كالخطة الخمسية العاشرة (2021-2025)، والبرامج التنفيذية كالبرنامج الوطني للاقتصاد الرقمي (2021-2025). كما يتواءم ذلك مع توجهات وزارة النقل والاتصالات وتقنية المعلومات التي تولي إتاحة البيانات المفتوحة عناية كبيرة؛ إيمانًا بأهمية استخدام البيانات وتوفرها عند القيام بمهام واختصاصات أي جهة حكومية؛ حيث يبني ذلك جسرًا من المعلومات بين الجهات والمستفيدين عن أي خدمة أو منتج ملموس لدى الجهة، ويتيح لمستخدمي شبكة الإنترنت بتنوع شرائحهم الاطلاع على البيانات والاستفادة منها للأغراض البحثية والتجارية وغيرها من الأغراض.",
    ],
    list: [],
    img: "/assets/images/sword-with-br.jpg",
    endPara: [],
    btn: {
      label: "ملف",
    },
  };
  const openDataFormEn = {
    title: "Open Data Feedback",
  };
  const openDataFormAr = {
    title: "طلب استفسار حول البيانات المفتوحة",
  };
  const downloadPdf = {
    paras: [
      "The data is made available in accordance with MTCIT Open Data Policy issued in June.",
      "The contents of this page are licensed under the Open Data License.",
    ],
    list: [
      "Datasets are available to download in CSV XLS XML formats",
      "Oman Investment Authority © 2024-The content of this website is licensed under the Open Government License-Sultanate of Oman",
    ],
    cta: {
      label: "Download Dataset",
    },
  };
  const downloadPdfAr = {
    paras: [
      "يتم إتاحة البيانات وفق سياسة البيانات الحكومية المفتوحة الصادرة في يونيو 2020م",
      "محتويات هذه الصفحة مرخّصة بموجب رخصة استخدام البيانات المفتوحة",
    ],
    list: [
      "⦁  مجموعة البيانات المفتوحة متاحة للتنزيل ب CSV XLS XML",
      "⦁  جهاز الاستثمار العماني © 2024- محتويات هذا الموقع مرخصة بموجب الرخصة الحكومية المفتوحة - سلطنة عمان",
    ],
    cta: {
      label: "Download Dataset",
    },
  };
  const accordData = [
    {
      id: 1,
      title: "Financial Statement Dataset",
      paras: [
        "Details of the Financial Statement for citizens based on the below parameters:",
      ],
      metaData: {
        title: "Metadata:",
        labelPD: "Publishing Date:",
        publishDate: "30 June 2024",
        labelDO: "Data Owner:",
        dateOwner: "Finance Directorate",
      },
      downloadDataset: {
        title: "Download Dataset",
        donwloadPdf: [
          {
            id: 1,
            src: "/assets/icons/xls-icon.svg",
            link: "/open-data/financial open data.xlsx",
          },
          {
            id: 2,
            src: "/assets/icons/csv-icon.svg",
            link: "/open-data/financial open data.csv",
          },
          {
            id: 3,
            src: "/assets/icons/xml-icon.svg",
            link: "/open-data/financial open data.xml",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Oman Investor Handbook Dataset",
      paras: [
        "Details of the Oman Investor Handook for citizens based on the below parameters:",
      ],
      metaData: {
        title: "Metadata:",
        labelPD: "Publishing Date:",
        publishDate: "30 June 2024",
        labelDO: "Data Owner:",
        dateOwner:
          "Directorate of Economic and Investment Research",
      },
      downloadDataset: {
        title: "Download Dataset",
        donwloadPdf: [
          {
            id: 1,
            src: "/assets/icons/xls-icon.svg",
            link: "/open-data/Oman Investor Handbook.xlsx",
          },
          {
            id: 2,
            src: "/assets/icons/csv-icon.svg",
            link: "/open-data/Oman Investor Handbook.csv",
          },
          {
            id: 3,
            src: "/assets/icons/xml-icon.svg",
            link: "/open-data/Oman Investor Handbook.xml",
          },
        ],
      },
    },
    {
      id: 3,
      title: "In - Country Value Dataset",
      paras: [
        "Details of the In-Country Value for citizens based on the below parameters:",
      ],
      metaData: {
        title: "Metadata:",
        labelPD: "Publishing Date:",
        publishDate: "30 June 2024",
        labelDO: "Data Owner:",
        dateOwner: "Directorate of In-country Value",
      },
      downloadDataset: {
        title: "Download Dataset",
        donwloadPdf: [
          {
            id: 1,
            src: "/assets/icons/xls-icon.svg",
            link: "/open-data/ICV Open Data.xlsx",
          },
          {
            id: 2,
            src: "/assets/icons/csv-icon.svg",
            link: "/open-data/ICV Open Data.csv",
          },
          {
            id: 3,
            src: "/assets/icons/xml-icon.svg",
            link: "/open-data/ICV Open Data.xml",
          },
        ],
      },
    },
  ];
  const accordDataAr = [
    {
      id: 1,
      title: "مجموعة بيانات الأداء المالي",
      paras: [
        "تفاصيل تخصيص بيانات الأداء المالي للمواطنين بناءً على المعايير التالية:",
      ],
      metaData: {
        title: "البيانات الوصفية",
        labelPD: "تاريخ النشر:",
        publishDate: ": 30 يونيو 2024",
        labelDO: "مالك البيانات:",
        dateOwner: ": مديرية المالية",
      },
      downloadDataset: {
        title: "تنزيل مجموعه البيانات",
        donwloadPdf: [
          {
            id: 1,
            src: "/assets/icons/xls-icon.svg",
            link: "/open-data/financial open data.xlsx",
          },
          {
            id: 2,
            src: "/assets/icons/csv-icon.svg",
            link: "/open-data/financial open data.csv",
          },
          {
            id: 3,
            src: "/assets/icons/xml-icon.svg",
            link: "/open-data/financial open data.xml",
          },
        ],
      },
    },
    {
      id: 2,
      title: "مجموعة بيانات دليل المستثمر العماني",
      paras: [
        "تفاصيل تخصيص بيانات دليل المستثمر العماني للمواطنين بناءً على المعايير التالية:",
      ],
      metaData: {
        title: "البيانات الوصفية",
        labelPD: "تاريخ النشر:",
        publishDate: ": 30 يونيو 2024",
        labelDO: "مالك البيانات:",
        dateOwner: "مديرية البحوث الاقتصادية والاستثمارية",
      },
      downloadDataset: {
        title: "تنزيل مجموعه البيانات",
        donwloadPdf: [
          {
            id: 1,
            src: "/assets/icons/xls-icon.svg",
            link: "/open-data/Oman Investor Handbook.xlsx",
          },
          {
            id: 2,
            src: "/assets/icons/csv-icon.svg",
            link: "/open-data/Oman Investor Handbook.csv",
          },
          {
            id: 3,
            src: "/assets/icons/xml-icon.svg",
            link: "/open-data/Oman Investor Handbook.xml",
          },
        ],
      },
    },
    {
      id: 3,
      title: "مجموعة بيانات القيمة المحلية المضافة",
      paras: [
        "تفاصيل تخصيص بيانات القيمة المحلية المضافة للمواطنين بناءً على المعايير التالية:",
      ],
      metaData: {
        title: "البيانات الوصفية",
        labelPD: "تاريخ النشر:",
        publishDate: ": 30 يونيو 2024",
        labelDO: "مالك البيانات:",
        dateOwner: ": مديرية القيمة المحلية المضافة",
      },
      downloadDataset: {
        title: "تنزيل مجموعه البيانات",
        donwloadPdf: [
          {
            id: 1,
            src: "/assets/icons/xls-icon.svg",
            link: "/open-data/ICV Open Data.xlsx",
          },
          {
            id: 2,
            src: "/assets/icons/csv-icon.svg",
            link: "/open-data/ICV Open Data.csv",
          },
          {
            id: 3,
            src: "/assets/icons/xml-icon.svg",
            link: "/open-data/ICV Open Data.xml",
          },
        ],
      },
    },
  ];
  const openDataIndexTable = {
    title: "Open Data Index",
    tableHead: {
      srNo: "No.",
      dataSet: "Dataset Title",
      category: "Category",
      datasetDes: "Dataset Description",
      download: "Download",
    },
    tableData: [
      {
        id: 1,
        dataSet: "Financial Statement",
        category: "Finance",
        dataSetDes: [
          {
            id: 1,
            content: "Publishing Date: 30 June 2024",
          },
          {
            id: 2,
            content: "Data Owner: Finance Directorate",
          },
        ],
        downloadData: [
          {
            id: 1,
            src: "/assets/icons/download-db.svg",
            link: "/open-data/financial open data.xlsx",
            label: "Click Here",
          },
        ],
      },
      {
        id: 2,
        dataSet: "In Country Value ",
        category: "ICV",
        dataSetDes: [
          {
            id: 1,
            content: "Publishing Date: 30 June 2024",
          },
          {
            id: 2,
            content: "Data Owner: In Country Value",
          },
        ],
        downloadData: [
          {
            id: 1,
            src: "/assets/icons/download-db.svg",
            link: "/open-data/ICV Open Data.xlsx",
            label: "Click Here",
          },
        ],
      },
      {
        id: 3,
        dataSet: "Oman Investor Handbook",
        category: "Investment",
        dataSetDes: [
          {
            id: 1,
            content: "Publishing Date: 30 June 2024",
          },
          {
            id: 2,
            content:
              "Data Owner: Directorate of Economic and Investment Research",
          },
        ],
        downloadData: [
          {
            id: 1,
            src: "/assets/icons/download-db.svg",
            link: "/open-data/Oman Investor Handbook.xlsx",
            label: "Click Here",
          },
        ],
      },
    ],
  };
  const openDataIndexTableAr = {
    title: "فهرس البيانات المفتوحة  ",
    tableHead: {
      srNo: "م.",
      dataSet: "اسم مجموعة البيانات",
      category: "الفئة",
      datasetDes: "البيانات الوصفية",
      download: "رابط التحميل",
    },
    tableData: [
      {
        id: 1,
        dataSet: "الأداء المالي",
        category: "المالية",
        dataSetDes: [
          {
            id: 1,
            content: "  تاريخ النشر: 30 يونيو 2024",
          },
          {
            id: 2,
            content: "  مالك البيانات: مديرية المالية",
          },
        ],
        downloadData: [
          {
            id: 1,
            src: "/assets/icons/download-db.svg",
            link: "/open-data/financial open data.xlsx",
            label: "اضغط هنا",
          },
        ],
      },
      {
        id: 2,
        dataSet: "القيمة المحلية المضافة",
        category: "القيمة المحلية المضافة",
        dataSetDes: [
          {
            id: 1,
            content: "تاريخ النشر: 30 يونيو 2024",
          },
          {
            id: 2,
            content:
              "مالك البيانات: مديرية القيمة المحلية المضافة",
          },
        ],
        downloadData: [
          {
            id: 1,
            src: "/assets/icons/download-db.svg",
            link: "/open-data/ICV Open Data.xlsx",
            label: "اضغط هنا",
          },
        ],
      },
      {
        id: 1,
        dataSet: "دليل المستثمر ",
        category: "الاستثمار",
        dataSetDes: [
          {
            id: 1,
            content: "تاريخ النشر: 30 يونيو 2024",
          },
          {
            id: 2,
            content:
              "مالك البيانات: مديرية البحوث الاقتصادية والاستثمارية",
          },
        ],
        downloadData: [
          {
            id: 1,
            src: "/assets/icons/download-db.svg",
            link: "/open-data/Oman Investor Handbook.xlsx",
            label: "اضغط هنا",
          },
        ],
      },
    ],
  };
  return (
    <div className="">
      <ImageBanner
        data={locale === "en" ? bannerData : ARbannerData}
      />
      <TextWIthImg
        data={locale === "en" ? openDataEn : openDataAr}
        locale={locale}
      />
      <OpenDataIndexTable
        locale={locale}
        data={
          locale === "en"
            ? openDataIndexTable
            : openDataIndexTableAr
        }
      />
      <OpenDataForm
        data={
          locale === "en" ? openDataFormEn : openDataFormAr
        }
        locale={locale}
      />
      <OpenDataAccordion
        data={locale === "en" ? accordData : accordDataAr}
        locale={locale}
      />
      <OpenDataDonwload
        data={locale === "en" ? downloadPdf : downloadPdfAr}
        locale={locale}
      />
    </div>
  );
};

export default OpenDataContainer;
