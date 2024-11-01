"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var next_intl_1 = require("next-intl");
var link_1 = require("next/link");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var Accordion_1 = require("./Accordion");
var ContactButton_1 = require("../common/ContactButton");
var Footer = function (_a) {
    var locale = _a.locale;
    var footer = next_intl_1.useTranslations("Footer");
    var footerData = {
        title: footer("title"),
        titleOne: footer("title-one"),
        titleTwo: footer("title-two"),
        titlePara: footer("title-para"),
        btnText: footer("btn-text"),
        followH: footer("follow-h"),
        oia: footer("oia"),
        buildNo: footer("build-no"),
        wayNo: footer("way-no"),
        teleOne: footer("tele-one"),
        address: footer("address"),
        oiaW: footer("oia-w"),
        emailOia: footer("email-oia"),
        teleTwo: footer("tele-two"),
        auditCc: footer("audit-cc"),
        emailAc: footer("email-ac"),
        eacOne: footer("eac-one"),
        eacTwo: footer("eac-two"),
        investRel: footer("invest-rel"),
        investEmail: footer("invest-email"),
        locate: footer("locate"),
        copyRight: footer("copy-right"),
        contactInfo: footer("contact-info")
    };
    var title = footerData.title, titleOne = footerData.titleOne, titleTwo = footerData.titleTwo, titlePara = footerData.titlePara, btnText = footerData.btnText, followH = footerData.followH, oia = footerData.oia, buildNo = footerData.buildNo, wayNo = footerData.wayNo, teleOne = footerData.teleOne, address = footerData.address, oiaW = footerData.oiaW, emailOia = footerData.emailOia, teleTwo = footerData.teleTwo, auditCc = footerData.auditCc, emailAc = footerData.emailAc, eacOne = footerData.eacOne, eacTwo = footerData.eacTwo, investRel = footerData.investRel, investEmail = footerData.investEmail, locate = footerData.locate, copyRight = footerData.copyRight, contactInfo = footerData.contactInfo;
    var dirChange = locale === "en" ? "row" : "flex-row-reverse";
    return (React.createElement("div", { className: " footer-pattern lg:pt-[80px] pt-[20px]" },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("section", { className: "footer relative z-10 flex flex-col" },
                React.createElement("div", { className: "flex flex-col w-full min-[1070px]:hidden" },
                    React.createElement(Accordion_1["default"], { title: contactInfo },
                        React.createElement("div", { className: "flex flex-1 shrink-0 flex-col" },
                            React.createElement("div", { className: "flex sm:flex-row flex-col sm:gap-[99px] gap-[20px] sm:px-[10px] p-0" },
                                React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                    React.createElement("h3", { className: "footerLabel rtl:font-TajawalBold text-[#ffffff]" }, oia),
                                    React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                        React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight flex flex-row gap-[20px]" },
                                            React.createElement("span", null, buildNo),
                                            React.createElement("span", null, wayNo)),
                                        React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" }, address),
                                        React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" },
                                            teleOne,
                                            React.createElement("span", { className: "rtl:hidden ltr:inline" }, "+968 2474 5100"),
                                            React.createElement("span", { className: "rtl:inline ltr:hidden " }, "5100 2474 968+")))),
                                React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                    React.createElement("h3", { className: "footerLabel rtl:font-TajawalBold text-[#ffffff]" }, oiaW),
                                    React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                        React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" }, emailOia),
                                        React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight " }, teleTwo)))),
                            React.createElement("div", { className: "flex sm:flex-row flex-col sm:gap-[99px] gap-[20px] mt-[20px] sm:px-[10px] p-0" },
                                React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                    React.createElement("h3", { className: "footerLabel rtl:font-TajawalBold text-[#ffffff] " }, investRel),
                                    React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                        React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" }, investEmail))),
                                React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                    React.createElement("h3", { className: "footerLabel text-[#ffffff] rtl:font-TajawalLight" }, auditCc),
                                    React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                        React.createElement("span", { className: "footerContent rtl:font-TajawalLight text-[#ffffff]" },
                                            emailAc,
                                            React.createElement("br", null),
                                            React.createElement("span", { className: "footerContent rtl:font-TajawalLight text-[#ffffff]" },
                                                eacOne,
                                                " ",
                                                eacTwo))))),
                            React.createElement("div", { className: "mt-[20px]" },
                                React.createElement(ContactButton_1["default"], { locale: locale })))),
                    React.createElement(Accordion_1["default"], { title: locate },
                        React.createElement("div", { className: "flex flex-col sm:gap-[32px] gap-[20px]" },
                            React.createElement("div", { className: "flex flex-start" },
                                React.createElement(link_1["default"], { href: "https://maps.app.goo.gl/nyXYDzQq1jNX9ZiW6", target: "_blank", className: "h-[170px] sm:max-w-[624px] w-full md:h-[290px] lg:block", rel: "noopener noreferrer" },
                                    React.createElement("img", { src: "/assets/images/google-map-oia.svg", className: "w-full h-full object-cover rounded-[6px]", alt: "oia address" }))),
                            React.createElement("ul", { className: "row rlt:flex-row-reverse justify-center flex flex-row gap-[16px] sm:gap-[6.6px] lg:gap-[12.7px]" },
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "https://www.facebook.com/share/fv6voeRdyPFqfDMb/?mibextid=LQQJ4d", target: "_blank", rel: "noopener noreferrer" },
                                        React.createElement("img", { src: "/assets/icons/fb-color-icon.svg", className: "h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]", alt: "fb" }))),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "https://www.instagram.com/spacebyoia/\r\n", target: "_blank", rel: "noopener noreferrer" },
                                        React.createElement("img", { src: "/assets/icons/insta-icon.svg", className: "h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]", alt: "instagram" }))),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "https://x.com/oman_oia?s=11&t=-wLLO0SQLf-F6F1mbfy3ww ", target: "_blank", rel: "noopener noreferrer" },
                                        React.createElement("img", { src: "/assets/icons/twitter-x-icon.svg", className: "h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]", alt: "twitter" }))),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "https://www.linkedin.com/company/oman-investment-authority", target: "_blank", rel: "noopener noreferrer" },
                                        React.createElement("img", { src: "/assets/icons/linkedin-icon.svg", className: "h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]", alt: "linkedin" }))),
                                React.createElement("li", null,
                                    React.createElement(link_1["default"], { href: "https://youtube.com/@omaninvestmentauthority4260?si=MrqHqfmtlH5Gzrjx", target: "_blank", rel: "noopener noreferrer" },
                                        React.createElement("img", { src: "/assets/icons/youtube-color-icon.svg", className: "h-[30px] w-[30px]  sm:h-[40px] sm:w-[40px]", alt: "youtube" }))))))),
                React.createElement("div", { className: "footer-sec-two min-[1070px]:flex flex-col justify-between gap-[115px] flex-wrap lg:flex-row hidden " },
                    React.createElement("div", { className: "flex flex-1 shrink-0 flex-col" },
                        React.createElement("div", { className: "flex flex-row gap-[115px]" },
                            React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                React.createElement("h3", { className: "footerLabel rtl:font-TajawalBold text-[#ffffff]" }, oia),
                                React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                    React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight flex flex-row gap-[20px]" },
                                        React.createElement("span", null, buildNo),
                                        React.createElement("span", null, wayNo)),
                                    React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" }, address),
                                    React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" },
                                        teleOne,
                                        React.createElement("span", { className: "rtl:hidden ltr:inline" }, "+968 2474 5100"),
                                        React.createElement("span", { className: "rtl:inline ltr:hidden " }, "5100 2474 968+")))),
                            React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                React.createElement("h3", { className: "footerLabel rtl:font-TajawalBold text-[#ffffff]" }, oiaW),
                                React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                    React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" }, emailOia),
                                    React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight " },
                                        teleOne,
                                        React.createElement("span", { className: "rtl:hidden ltr:inline" }, "+968 2474 5100"),
                                        React.createElement("span", { className: "rtl:inline ltr:hidden " }, "5100 2474 968+"))))),
                        React.createElement("div", { className: "flex flex-row gap-[115px] mt-[30px]" },
                            React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                React.createElement("h3", { className: "footerLabel rtl:font-TajawalBold text-[#ffffff] " }, investRel),
                                React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                    React.createElement("span", { className: "footerContent text-[#ffffff] rtl:font-TajawalLight" }, investEmail))),
                            React.createElement("div", { className: "flex w-full max-w-[307px] flex-col gap-[5px] md:gap-[8px] lg:gap-[10px]" },
                                React.createElement("h3", { className: "footerLabel text-[#ffffff] rtl:font-TajawalLight" }, auditCc),
                                React.createElement("p", { className: "flex flex-col gap-[5px] md:gap-[8px]" },
                                    React.createElement("span", { className: "footerContent rtl:font-TajawalLight text-[#ffffff]" },
                                        emailAc,
                                        React.createElement("br", null),
                                        React.createElement("span", { className: "footerContent rtl:font-TajawalLight text-[#ffffff]" },
                                            eacOne,
                                            " ",
                                            eacTwo))))),
                        React.createElement("div", { className: "mt-[10px]" },
                            React.createElement(ContactButton_1["default"], { locale: locale }))),
                    React.createElement("div", { className: "mb-[20px] mt-[40px] flex flex-col gap-[30px] md:mb-[49.52px] md:mt-[45.56px] lg:m-0" },
                        React.createElement("div", { className: "flex flex-start" },
                            React.createElement(link_1["default"], { href: "https://maps.app.goo.gl/nyXYDzQq1jNX9ZiW6", target: "_blank", className: "map-img-footer", rel: "noopener noreferrer" },
                                React.createElement("img", { src: "/assets/images/google-map-oia.svg", className: "h-[166px] w-full max-w-full md:h-[295.48px] lg:block lg:h-[243px] lg:max-w-[404px] object-cover rounded-[6px]", alt: "oia address" }))),
                        React.createElement("ul", { className: "row rtl:flex-row-reverse mx-auto flex flex-row gap-[16px] sm:gap-[6.6px] lg:gap-[12.7px]" },
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { target: "_blank", href: "https://www.facebook.com/share/fv6voeRdyPFqfDMb/?mibextid=LQQJ4d", rel: "noopener noreferrer" },
                                    React.createElement("img", { src: "/assets/icons/fb-icon.svg", className: "h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]", alt: "fb" }))),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "https://www.instagram.com/spacebyoia/", target: "_blank", rel: "noopener noreferrer" },
                                    React.createElement("img", { src: "/assets/icons/insta-icon.svg", className: "h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]", alt: "instagram" }))),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "https://x.com/oman_oia?s=11&t=-wLLO0SQLf-F6F1mbfy3ww", target: "_blank", rel: "noopener noreferrer" },
                                    React.createElement("img", { src: "/assets/icons/twitter-x-icon.svg", className: "h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]", alt: "twitter" }))),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "https://www.linkedin.com/company/oman-investment-authority", target: "_blank", rel: "noopener noreferrer" },
                                    React.createElement("img", { src: "/assets/icons/linkedin-icon.svg", className: "h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]", alt: "linkedin" }))),
                            React.createElement("li", null,
                                React.createElement(link_1["default"], { href: "https://www.youtube.com/@omaninvestmentauthority4260", target: "_blank", rel: "noopener noreferrer" },
                                    React.createElement("img", { src: "/assets/icons/youtube-color-icon.svg", className: "h-[40px] w-[40px] md:h-[45.78px] md:w-[45.78px] lg:h-[40px] lg:w-[40px]", alt: "whatsapp" })))))),
                React.createElement(antd_1.Divider, { type: "horizontal", style: {
                        borderColor: "#E0D5C1",
                        width: "100%",
                        margin: "30px 0"
                    }, className: "hidden min-[1070px]:block" }),
                React.createElement("div", { className: "footer-sec-three pb-[40px] max-[1070px]:pt-[20px]" },
                    React.createElement("div", { className: "flex flex-col items-center justify-between gap-[20px] md:gap-[32px] lg:flex-row lg:gap-0" },
                        React.createElement("div", null,
                            React.createElement("img", { src: "/assets/icons/oia-footer-logo.svg", className: "h-[30px] w-full max-w-[252px] md:h-[50px] md:max-w-[412px]", alt: "oia logo" })),
                        React.createElement("div", null,
                            React.createElement("p", { className: "copyRight  rtl:font-TajawalLight text-[#ffffff]" }, locale === "en" ? "Copyright © 2024 Oman Investment Authority . All rights reserved" : "حقوق الطبع والنشر © 2024 جهاز الاستثمار العماني. جميع الحقوق محفوظة"))))))));
};
exports["default"] = Footer;
