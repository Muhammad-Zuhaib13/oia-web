"use client";
"use strict";
exports.__esModule = true;
var SimpleImgSlider_1 = require("@/app/components/sliders/SimpleImgSlider");
var react_1 = require("react");
var DetailEconomicContent = function (_a) {
    var _b;
    var data = _a.data, isOpen = _a.isOpen, onClick = _a.onClick, locale = _a.locale, className = _a.className, _c = _a.titleClass, titleClass = _c === void 0 ? "" : _c;
    var _d = data || {}, title = _d.title, paras = _d.paras, list = _d.list;
    var _e = react_1.useState(false), showMore = _e[0], setShowMore = _e[1];
    var handleRoute = function (link) {
        if (link) {
            window.open(link, "_blank", 'noopener,noreferrer');
        }
    };
    return (React.createElement("div", { className: className + " " },
        React.createElement("button", { onClick: onClick, className: "flex w-full items-center justify-between py-[24px]" },
            React.createElement("span", { className: "subHeading rtl:font-TajawalBold text-left " + titleClass }, title),
            React.createElement("svg", { className: "ml-8 shrink-0 accordIconAdd rtl:ml-0 rtl:mr-8", width: "16", height: "16", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("rect", { y: "7", width: "16", height: "2", rx: "1", className: "origin-center transform transition duration-200 ease-out " + (isOpen && "!rotate-180") }),
                React.createElement("rect", { y: "7", width: "16", height: "2", rx: "1", className: "origin-center rotate-90 transform transition duration-200 ease-out " + (isOpen && "!rotate-180") }))),
        React.createElement("div", { className: "grid overflow-hidden  transition-all duration-300 ease-in-out " + (isOpen
                ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 ") },
            React.createElement("div", { className: "overflow-hidden" },
                React.createElement("div", { className: "flex flex-col gap-[20px] lg:gap-[30px]" },
                    React.createElement("div", { className: ((data === null || data === void 0 ? void 0 : data.sliderData) ? 'hidden' : '') + " flex  flex-col gap-[20px] lg:gap-0  lg:flex-row justify-between" },
                        React.createElement("div", { className: "w-full lg:w-[45.4%]" },
                            paras && (paras === null || paras === void 0 ? void 0 : paras.map(function (para, index) {
                                return (React.createElement("div", { key: index, className: "" + (index !== (paras === null || paras === void 0 ? void 0 : paras.length) - 1 ? "mb-[16px] md:mb-[20px] lg:mb-[24px]" : "") },
                                    React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, para)));
                            })),
                            (data === null || data === void 0 ? void 0 : data.paraImg) && (React.createElement("div", { key: data === null || data === void 0 ? void 0 : data.paraImg, className: "h-[45px] w-[160px] overflow-hidden " },
                                React.createElement("img", { src: data === null || data === void 0 ? void 0 : data.paraImg, alt: "logo", className: "h-full w-full object-cover object-center" })))),
                        React.createElement("div", { className: "max-h-[275px] min-h-[275px] w-full lg:w-[40.87%] overflow-hidden rounded-[6px]" }, (data === null || data === void 0 ? void 0 : data.image) && (React.createElement("img", { src: data === null || data === void 0 ? void 0 : data.image, className: "h-full w-full object-cover object-center" })))),
                    (data === null || data === void 0 ? void 0 : data.imgSlider) && (React.createElement(SimpleImgSlider_1["default"], { style: '!mb-0', locale: locale, data: data === null || data === void 0 ? void 0 : data.sliderData })),
                    React.createElement("div", { className: "mb-[20px] lg:mb-[30px] flex flex-col gap-[20px] lg:flex-row lg:flex-wrap lg:gap-0 items-start justify-between " }, (_b = data === null || data === void 0 ? void 0 : data.list) === null || _b === void 0 ? void 0 : _b.map(function (value, index) {
                        var _a, _b, _c, _d, _e, _f;
                        return (React.createElement("div", { className: (index % 2 === 0 ? "w-full lg:w-[45.4%]" : "w-full lg:w-[40.87%]") + " " },
                            React.createElement("div", { className: "flex-col justify-center  border-l-[1px] border-solid border-col pl-[20px] transition-colors duration-500 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-[20px]" },
                                React.createElement("div", { className: "flex h-auto cursor-default flex-col justify-between " },
                                    React.createElement("h2", { className: "subHeading mb-[20px] !text-brown rtl:font-TajawalBold" }, value === null || value === void 0 ? void 0 : value.title),
                                    (value === null || value === void 0 ? void 0 : value.para) && ((_a = value === null || value === void 0 ? void 0 : value.para) === null || _a === void 0 ? void 0 : _a.map(function (item, index) {
                                        return (React.createElement("div", { key: index },
                                            React.createElement("span", { className: "relative flex flex-row gap-[4px]  " + (locale === "ar"
                                                    ? "before:left-auto before:right-[-16px]"
                                                    : "before:left-[-16px]") + " paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-[''] rtl:font-TajawalRegular " }, item)));
                                    })),
                                    (value === null || value === void 0 ? void 0 : value.subList) && (React.createElement("div", null,
                                        React.createElement("ul", { className: "" }, (_d = (_b = value === null || value === void 0 ? void 0 : value.subList) === null || _b === void 0 ? void 0 : _b.slice(0, showMore
                                            ? (_c = value === null || value === void 0 ? void 0 : value.subList) === null || _c === void 0 ? void 0 : _c.length : 2)) === null || _d === void 0 ? void 0 : _d.map(function (value, index) {
                                            return (React.createElement("li", { className: (index !== (paras === null || paras === void 0 ? void 0 : paras.subList) - 1 ? "mb-[16px] md:mb-[20px] lg:mb-[24px]" : "") + " flex justify-start " + ((value === null || value === void 0 ? void 0 : value.type) !== "para" ? "pl-[20px]  rtl:pr-[20px]" : "") }, (value === null || value === void 0 ? void 0 : value.type) ===
                                                "img" ? (React.createElement("div", { key: value === null || value === void 0 ? void 0 : value.content, className: "h-[45px]  overflow-hidden " },
                                                React.createElement("img", { src: value === null || value === void 0 ? void 0 : value.content, alt: "logo", className: "h-full w-full object-contain object-center" }))) : (React.createElement("span", { className: "relative flex flex-row\n                                              " + (locale ===
                                                    "ar"
                                                    ? (value === null || value === void 0 ? void 0 : value.type) !==
                                                        "para"
                                                        ? "before:left-auto before:right-[-16px]"
                                                        : ""
                                                    : (value === null || value === void 0 ? void 0 : value.type) !==
                                                        "para"
                                                        ? "before:left-[-16px]"
                                                        : "") + " paragraph " + ((value === null || value === void 0 ? void 0 : value.type) !==
                                                    "para"
                                                    ? "before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full bullets-col before:content-['']"
                                                    : "") + " rtl:font-TajawalRegular" },
                                                React.createElement("span", { className: "paragraph !font-medium !text-dbrown rtl:font-TajawalBold" }, value === null || value === void 0 ? void 0 :
                                                    value.heading,
                                                    " "),
                                                React.createElement("span", { className: "paragraph rtl:font-TajawalRegular" }), value === null || value === void 0 ? void 0 :
                                                value.content))));
                                        })),
                                        ((_e = value === null || value === void 0 ? void 0 : value.subList) === null || _e === void 0 ? void 0 : _e.length) >=
                                            3 && (React.createElement("button", { className: "paragraph !font-medium !text-brown rtl:font-TajawalRegular", onClick: function () {
                                                return setShowMore(!showMore);
                                            } }, !showMore
                                            ? "" + (locale === "en" ? "Read More" : "اقرأ المزيد")
                                            : "" + (locale === "en" ? "Read Less" : "اقرأ أقل"))))),
                                    (value === null || value === void 0 ? void 0 : value.logos) && (React.createElement("div", { className: " flex flex-wrap gap-[20px] lg:gap-[30px] " }, (_f = value === null || value === void 0 ? void 0 : value.logos) === null || _f === void 0 ? void 0 : _f.map(function (item, index) {
                                        return (React.createElement("div", { key: index, className: "h-[45px]  overflow-hidden cursor-pointer", onClick: function () { return handleRoute(item === null || item === void 0 ? void 0 : item.link); } },
                                            React.createElement("img", { src: item === null || item === void 0 ? void 0 : item.source, alt: "logo", className: "h-full object-contain object-center" })));
                                    })))))));
                    })))))));
};
exports["default"] = DetailEconomicContent;
