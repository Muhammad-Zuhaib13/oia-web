"use client";
"use strict";
exports.__esModule = true;
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var i18n_config_1 = require("@/i18n.config");
var ScreenContainer_1 = require("../common/ScreenContainer");
var NewsHighlights = function (_a) {
    var data = _a.data, locale = _a.locale;
    var socialLinks = [
        {
            id: 1,
            src: "/assets/icons/fb-icon-news.svg",
            link: "https://www.facebook.com/share/fv6voeRdyPFqfDMb/?mibextid=LQQJ4d",
            alt: "Facebook"
        },
        {
            id: 2,
            src: "/assets/icons/x-color-icon.svg",
            link: "https://x.com/oman_oia?s=11&t=-wLLO0SQLf-F6F1mbfy3ww",
            alt: "LinkedIn"
        },
        {
            id: 3,
            src: "/assets/icons/in-color-icon.svg",
            link: "https://www.linkedin.com/company/oman-investment-authority",
            alt: "LinkedIn"
        },
    ];
    var isDark = useDarkMode_1["default"]();
    var _b = data || {}, title = _b.title, date = _b.date, paras = _b.paras, image = _b.image, share = _b.share, btnText = _b.btnText;
    return (React.createElement("section", { className: "news-highlights-section pb-[40px] sm:pb-[50px] lg:pb-[100px]" },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("div", { className: "bread mb-[60px] mt-[21px] lg:mb-[100px]" },
                React.createElement("ul", { className: "flex flex-row items-center gap-[30px]" },
                    React.createElement("li", { className: "news-breadcrumb relative flex flex-row  items-end gap-[10px] cursor-default  font-DINAMedium  font-medium rtl:font-TajawalMedium" },
                        React.createElement("span", null, locale === "en"
                            ? " Media Center"
                            : "المركز الإعلامي"),
                        React.createElement("span", { className: "rtl:rotate-180" },
                            React.createElement("img", { src: "/assets/icons/chevron-right-dark.svg", style: { filter: isDark ? "invert(1)" : "" }, alt: "chevron" }))),
                    React.createElement("li", { className: "news-breadcrumb relative flex flex-row gap-[10px] items-end font-DINAMedium font-medium rtl:font-TajawalMedium" },
                        React.createElement(i18n_config_1.Link, { href: "/media-center/news" }, locale === "en"
                            ? "News Room"
                            : "أخبار الجهاز"),
                        React.createElement("span", { className: "rtl:rotate-180" },
                            React.createElement("img", { src: "/assets/icons/chevron-right-dark.svg", style: { filter: isDark ? "invert(1)" : "" }, alt: "dark-chevron" }))),
                    React.createElement("li", { className: "news-breadcrumb news-breadcrumb-active cursor-default font-DINABold  font-bold  underline rtl:font-TajawalBold" }, locale === "en"
                        ? " News Details"
                        : "الأخبار"))),
            React.createElement("div", { className: "flex flex-col gap-[20px] sm:gap-[32px] lg:gap-[70px]" },
                React.createElement("div", { className: "flex flex-col sm:gap-[32px] lg:gap-[50px]" },
                    React.createElement("div", { className: "flex flex-col gap-[15px]" },
                        React.createElement("h2", { className: "sectionTitle w-[90%] text-[#9F8555] rtl:font-TajawalBold" }, title),
                        React.createElement("h5", { className: "paragraph !font-medium text-[#202020] rtl:font-TajawalBold" }, date)),
                    image && (React.createElement("div", { className: "h-[400px] w-full overflow-hidden rounded-[6px]" },
                        React.createElement("img", { src: "" + image, className: "h-full w-full rounded-[6px] object-cover" }))),
                    paras && (React.createElement("div", { className: "flex  w-full shrink-0 flex-col gap-[15px]" }, paras.map(function (para, index) { return (React.createElement("div", { key: index },
                        React.createElement("p", { className: "paragraph text-justify text-[#202020] rtl:font-TajawalRegular" }, para))); })))),
                React.createElement("div", { className: "relative h-[56px] w-full  max-w-[756px]" },
                    React.createElement("div", { className: "h-full w-full" },
                        React.createElement("input", { type: "text", placeholder: locale === "en" ? "Your Email" : "", className: "news-details-input h-full w-full border-b-[1px] border-[#ABABAB] bg-transparent font-DINAMedium text-[18px] font-medium leading-[21.8px] placeholder:font-DINABold placeholder:text-[18px] placeholder:font-bold focus:outline-none sm:placeholder:text-[20px] lg:placeholder:text-[36px]" })),
                    React.createElement("div", { className: "absolute " + (locale === "en" ? "right-0" : "left-0") + "  top-[5px] sm:top-0" },
                        React.createElement("button", { className: "flex h-[48px] w-auto cursor-default flex-row items-center gap-[12px] font-bold" },
                            React.createElement("span", { className: "rtl:font-GESndBookBold font-DINABold text-[12px] font-bold leading-[10px] text-[#9F8555] sm:text-[16px] sm:leading-[18px] lg:text-[18px]  lg:leading-[22px]" }, btnText),
                            React.createElement("span", { className: "btn-circle-hover flex h-[24px] w-[24px] cursor-pointer items-center justify-center rounded-full bg-[#594226] sm:h-[30px] sm:w-[30px] lg:h-[48px] lg:w-[48px]" },
                                React.createElement("img", { src: "/assets/icons/chervon-left-white.svg", className: "relative z-10 h-[7px] w-[4px] sm:h-[9px] sm:w-[6px] lg:h-[14px] lg:w-[9px] rtl:rotate-180", alt: "submit" }))))),
                React.createElement("div", { className: "flex flex-col gap-[12px]" },
                    React.createElement("h4", { className: "rtl:font-GESndBookBold font-DINABold text-[18px] font-bold uppercase leading-[14px] text-[#848484] sm:text-[20px] sm:leading-[14px] lg:text-[18px] lg:leading-[14px]" }, locale === "en" ? "Share" : "share"),
                    React.createElement("div", { className: "" },
                        React.createElement("ul", { className: "flex flex-row gap-[8px] sm:gap-[12px] lg:gap-[16px]" }, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.map(function (data) { return (React.createElement("li", { key: data === null || data === void 0 ? void 0 : data.id, className: "flex h-[24px] w-[24px] flex-col items-center justify-center rounded-full bg-[#ECF4FF] sm:h-[40px] sm:w-[40px] lg:h-[50px] lg:w-[50px]" },
                            React.createElement(i18n_config_1.Link, { href: data === null || data === void 0 ? void 0 : data.link, target: "_blank", rel: "noopener noreferrer" },
                                React.createElement("img", { src: data === null || data === void 0 ? void 0 : data.src, alt: data === null || data === void 0 ? void 0 : data.alt, className: "h-[10px] w-[10px] sm:h-[16px] sm:w-[16px] lg:h-[20px] lg:w-[20px]" })))); }))))))));
};
exports["default"] = NewsHighlights;
