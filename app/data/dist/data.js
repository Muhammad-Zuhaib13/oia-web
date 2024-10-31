"use strict";
exports.__esModule = true;
exports.setFontFamily = exports.forms = exports.navMenuItems = exports.ArIPOsTableData = exports.IPOsTableData = exports.handleRoute = exports.downloadFile = void 0;
exports.downloadFile = function (fileUrl) {
    if (!fileUrl) {
        console.error("File URL is undefined or null");
        return;
    }
    var linkElement = document.createElement("a");
    linkElement.href = fileUrl;
    var fileName = fileUrl.split("/").pop() || "file.pdf";
    linkElement.setAttribute("download", fileName);
    linkElement.click();
};
exports.handleRoute = function (link) {
    if (link) {
        window.open(link, "_blank", 'noopener,noreferrer');
    }
};
exports.IPOsTableData = {
    tableHead: {
        typeInvestCol: "Type of Investment",
        industryCol: "Industry",
        assetsCol: "Assets Divested From"
    },
    iposTable: [
        {
            typeOfInvest: "IPO",
            relatedIndustries: [
                {
                    industry: "Energy",
                    assets: [
                        {
                            label: "Abraj",
                            link: "",
                            src: "/assets/icons/abraj-iocn.svg"
                        },
                        {
                            label: "OQ Gas Network",
                            link: "",
                            src: "/assets/icons/oq-gas-network-icon.svg"
                        },
                        {
                            label: "OQ Exploration & Production",
                            link: "",
                            src: "/assets/icons/oq-exp-prod-icon.svg"
                        },
                    ]
                },
            ]
        },
        {
            typeOfInvest: "Direct Sale",
            relatedIndustries: [
                {
                    industry: "Energy",
                    assets: [
                        {
                            label: "Vale Oman",
                            link: "",
                            src: "/assets/icons/vale-oman-icon.svg"
                        },
                        {
                            label: "Gulf Power Marine",
                            link: "",
                            src: "/assets/icons/gulf-pow-mar-icon.svg"
                        },
                        {
                            label: "Concession Blocks 48+60",
                            link: "",
                            src: ""
                        },
                    ]
                },
                {
                    industry: "Real Estate",
                    assets: [
                        {
                            label: "Pearl REIF",
                            link: "",
                            src: "/assets/icons/pearl-reif-icon.svg"
                        },
                    ]
                },
                {
                    industry: "Tourism",
                    assets: [
                        {
                            label: "Omran Hotels Portfolio",
                            link: "",
                            src: "/assets/icons/omran-hotel-port-icon.svg"
                        },
                        {
                            label: "Hilton Salalah",
                            link: "",
                            src: "/assets/icons/hilton-salalah-icon.svg"
                        },
                    ]
                },
                {
                    industry: "Manufacturing",
                    assets: [
                        {
                            label: "Oman Cement Company",
                            link: "",
                            src: "/assets/icons/oman-cem-comp-icon.svg"
                        },
                    ]
                },
                {
                    industry: "Technology and Communication",
                    assets: [
                        {
                            label: "Oman Broadband",
                            link: "",
                            src: "/assets/icons/oman-braod-b-icon.svg"
                        },
                    ]
                },
            ]
        },
    ]
};
exports.ArIPOsTableData = {
    tableHead: {
        typeInvestCol: "نوع التخارج",
        industryCol: "القطاع",
        assetsCol: "الأصول المتخارج منها"
    },
    iposTable: [
        {
            typeOfInvest: "طرح عام",
            relatedIndustries: [
                {
                    industry: "الطاقة",
                    assets: [
                        {
                            label: "أبراج",
                            link: "",
                            src: "/assets/icons/abraj-iocn.svg"
                        },
                        {
                            label: "أوكيو لشبكات الغاز",
                            link: "",
                            src: "/assets/icons/oq-gas-network-icon.svg"
                        },
                        {
                            label: "أوكيو للاستكشاف والغاز",
                            link: "",
                            src: "/assets/icons/oq-exp-prod-icon.svg"
                        },
                    ]
                },
            ]
        },
        {
            typeOfInvest: "البيع المباشر",
            relatedIndustries: [
                {
                    industry: "الطاقة",
                    assets: [
                        {
                            label: "شركة فالي عمان",
                            link: "",
                            src: "/assets/icons/vale-oman-icon.svg"
                        },
                        {
                            label: "شركة طاقة الخليج البحرية",
                            link: "",
                            src: "/assets/icons/gulf-pow-mar-icon.svg"
                        },
                        {
                            label: "مناطق الامتياز 60+48",
                            link: "",
                            src: ""
                        },
                    ]
                },
                {
                    industry: "العقارات",
                    assets: [
                        {
                            label: "صندوق اللؤلؤة العقاري",
                            link: "",
                            src: "/assets/icons/pearl-reif-icon.svg"
                        },
                    ]
                },
                {
                    industry: "السياحة",
                    assets: [
                        {
                            label: "محفظة فنادق عمران",
                            link: "",
                            src: "/assets/icons/omran-hotel-port-icon.svg"
                        },
                        {
                            label: "فندق هيلتون صلالة",
                            link: "",
                            src: "/assets/icons/hilton-salalah-icon.svg"
                        },
                    ]
                },
                {
                    industry: "الصناعة",
                    assets: [
                        {
                            label: "شركة إسمنت عمان",
                            link: "",
                            src: "/assets/icons/oman-cem-comp-icon.svg"
                        },
                    ]
                },
                {
                    industry: "التكنولوجيا والاتصالات",
                    assets: [
                        {
                            label: "الشركة العمانية للنطاق العريض",
                            link: "",
                            src: "/assets/icons/oman-braod-b-icon.svg"
                        },
                    ]
                },
            ]
        },
    ]
};
exports.navMenuItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About OIA",
        path: "/about"
    },
    {
        title: "Governance",
        path: "/governance"
    },
    {
        title: "OIA Impact",
        path: "/oia-impact",
        submenu: true,
        submenuItems: [
            {
                title: "In-Country Value",
                path: "/oia-impact/in-country-value"
            },
            {
                title: "Economic Diversification",
                path: "/oia-impact/economic-diversification"
            },
        ]
    },
    {
        title: "Our Investments",
        path: "/our-investments"
    },
    {
        title: "Potential",
        path: "/potential"
    },
    {
        title: "Media Center",
        path: "/media-center"
    },
    {
        title: "Oman",
        path: "/oman"
    },
    {
        title: "Careers",
        path: "/careers"
    },
    {
        title: "Contact Us",
        path: "/contact-us"
    },
];
exports.forms = {
    english: {
        title: "Whistleblow Report",
        name: "Name",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        organization: "Organization",
        company: "Company",
        details: "More Details",
        message: "Message",
        submit: "Submit"
    },
    arabic: {
        title: "Whistleblow Report",
        name: "الاسم",
        firstName: "الاسم",
        lastName: "القبيلة / العائلة",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        organization: "المؤسسة",
        company: "اسم الشركة",
        details: "تفاصيل أخرى",
        message: "الرسالة",
        submit: "إرسال"
    }
};
function setFontFamily(locale, weight) {
    if (locale === "en") {
        switch (weight) {
            case "regular":
                return "font-DINARegular";
            case "medium":
                return "font-DINAMedium";
            case "bold":
                return "font-DINABold";
        }
    }
    else if (locale === "ar") {
        switch (weight) {
            case "regular":
                return "font-GESndBookRegular";
            case "medium":
                return "font-GESndBookMedium";
            case "bold":
                return "font-GESndBookBold";
        }
    }
    return "";
}
exports.setFontFamily = setFontFamily;
