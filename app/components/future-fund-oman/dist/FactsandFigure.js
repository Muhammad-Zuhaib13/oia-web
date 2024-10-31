"use client";
"use strict";
exports.__esModule = true;
var NumberCard_1 = require("../common/NumberCard");
var ScreenContainer_1 = require("../common/ScreenContainer");
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var FactsandFigure = function (_a) {
    var data = _a.data, locale = _a.locale, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.swap, swap = _c === void 0 ? false : _c;
    var _d = data || {}, firstNumberCard = _d.firstNumberCard, title = _d.title, imgOne = _d.imgOne, imgTwo = _d.imgTwo, imgThree = _d.imgThree, secondNumberCard = _d.secondNumberCard, thirdNumberCard = _d.thirdNumberCard, cta = _d.cta;
    var handleRoute = function (url) {
        if (url) {
            window.open(url, "_blank", 'noopener,noreferrer');
        }
    };
    var isDark = useDarkMode_1["default"]() || false;
    return (React.createElement("div", { className: className + " py-[60px] lg:py-[100px]" },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("div", { className: "flex flex-col gap-[20px] lg:gap-[30px]" },
                React.createElement("h2", { className: "mainHeading  rtl:font-TajawalBold" }, title),
                React.createElement("div", { className: "flex flex-col gap-[20px] md:gap-[30px]" },
                    React.createElement("div", { className: "h-[180px] md:h-[380px] lg:h-[253px] w-full rounded-[4px] overflow-hidden" },
                        React.createElement("img", { src: "" + imgOne, className: "h-full w-full object-cover" })),
                    React.createElement("div", { className: "h-auto w-full" },
                        React.createElement(NumberCard_1["default"], { data: firstNumberCard, locale: locale, className: "items-center justify-center  " + (isDark ? "!bg-[#FFFFFF]" : "!bg-[#FEFAEF]") })),
                    React.createElement("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-[15px] md:gap-[30px] lg:gap-[24px]" },
                        React.createElement("div", { className: "h-[180px] lg:h-[300px] w-full overflow-hidden" },
                            React.createElement(NumberCard_1["default"], { data: secondNumberCard, locale: locale, className: "justify-center  " + (isDark ? "!bg-[#FFFFFF]" : "!bg-[#FEFAEF]") + " px-[30px]" })),
                        React.createElement("div", { className: "h-[180px] lg:h-[300px] w-full overflow-hidden rounded-[4px]" },
                            React.createElement("img", { src: imgTwo, className: "h-full w-full object-cover", alt: "picture" })),
                        React.createElement("div", { className: (swap ? "order-last lg:order-none" : "") + " h-[180px] lg:h-[300px] w-full overflow-hidden" },
                            React.createElement(NumberCard_1["default"], { data: thirdNumberCard, locale: locale, className: "justify-center  " + (isDark ? "!bg-[#FFFFFF]" : "!bg-[#FEFAEF]") + " lg:px-[30px]" })),
                        React.createElement("div", { className: (swap ? "order-none lg:order-last" : "") + " h-[180px] lg:h-[300px] w-full overflow-hidden rounded-[4px]" },
                            React.createElement("img", { src: imgThree, className: "h-full w-full object-cover", alt: "picture three" }))),
                    React.createElement("div", { className: "flex h-[200px] w-full items-center justify-center ctaBg rounded-[4px]" },
                        React.createElement("button", { className: "flex flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[10px] sm:px-[20px] py-[14px]", onClick: function () { return handleRoute(cta === null || cta === void 0 ? void 0 : cta.url); } },
                            React.createElement("span", { className: "cta text-[18px] !text-[#FFFFFF] rtl:font-TajawalBold" }, cta === null || cta === void 0 ? void 0 : cta.label),
                            React.createElement("span", null,
                                React.createElement("img", { src: "/assets/icons/arrow-sq.svg", className: "h-[18px] w-[18px] object-fill rtl:rotate-180", alt: "arrow" })))))))));
};
exports["default"] = FactsandFigure;
