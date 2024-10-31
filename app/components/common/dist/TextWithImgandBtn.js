"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ScreenContainer_1 = require("./ScreenContainer");
var TextWithImgandBtn = function (_a) {
    var data = _a.data, locale = _a.locale, className = _a.className;
    ;
    var handleRoute = function (url) {
        if (url) {
            window.open(url, "_blank", 'noopener,noreferrer');
        }
    };
    var _b = data || {}, title = _b.title, paras = _b.paras, imgSrc = _b.imgSrc, cta = _b.cta;
    return (react_1["default"].createElement("div", { className: "" + className }, (title || paras || imgSrc || cta) && (react_1["default"].createElement(ScreenContainer_1["default"], null,
        react_1["default"].createElement("div", { className: "text-container-img-btn" }, (title || paras) && (react_1["default"].createElement("div", { className: "flex flex-col justify-between gap-[20px] lg:gap-[30px]" },
            title && (react_1["default"].createElement("div", null,
                react_1["default"].createElement("h2", { className: "mainHeading rtl:font-TajawalBold" }, title))),
            react_1["default"].createElement("div", { className: "flex w-full flex-col lg:flex-row justify-between gap-[30px] lg:gap-[0px]" },
                paras && (react_1["default"].createElement("div", { className: "flex lg:w-[63%] max-w-full w-full shrink-0 flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]" }, paras.map(function (para, index) { return (react_1["default"].createElement("div", { key: index },
                    react_1["default"].createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, para))); }))),
                (imgSrc || cta) && (react_1["default"].createElement("div", { className: "aside-img-btn my-auto lg:w-[26.5%] flex h-full w-full flex-col lg:items-end items-start lg:justify-end justify-start" },
                    imgSrc && (react_1["default"].createElement("img", { src: "" + imgSrc, className: "h-auto w-auto" })),
                    cta && (react_1["default"].createElement("div", { className: "flex flex-col items-end justify-center gap-[20px]" },
                        (cta === null || cta === void 0 ? void 0 : cta.btntitle) && (react_1["default"].createElement("span", { className: "paragraph  rtl:font-TajawalRegular" }, cta === null || cta === void 0 ? void 0 : cta.btntitle)),
                        react_1["default"].createElement("button", { className: "flex h-auto w-full shrink-0 flex-row items-center justify-between gap-[24px] rounded-[4px] bg-[#7B6134] px-[12px] py-[16px]", onClick: function () { handleRoute(cta === null || cta === void 0 ? void 0 : cta.url); } },
                            react_1["default"].createElement("span", { className: "paragraph !text-white !text-[15px] rtl:font-TajawalMedium" }, cta === null || cta === void 0 ? void 0 : cta.label),
                            react_1["default"].createElement("span", null,
                                react_1["default"].createElement("img", { src: "/assets/icons/arrow-sq.svg", className: "h-[18px] w-[18px] object-fill rtl:rotate-180", alt: "arrow" })))))))))))))));
};
exports["default"] = TextWithImgandBtn;
