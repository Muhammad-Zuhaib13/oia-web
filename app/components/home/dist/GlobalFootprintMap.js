"use client";
"use strict";
exports.__esModule = true;
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var antd_1 = require("antd");
var react_1 = require("react");
var SimpleHeadingandText_1 = require("../simple-heading-text/SimpleHeadingandText");
var GlobalFootprintMap = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var data = _a.data;
    var title = data.title, para = data.para, currentLang = data.currentLang, counter = data.counter, northAm = data.northAm, southAm = data.southAm, africa = data.africa, europe = data.europe, asia = data.asia, australia = data.australia, oman = data.oman;
    var globalData = {
        title: title,
        titleAlign: currentLang === "en" ? "left" : "right",
        para: para,
        locale: currentLang
    };
    var continentData = {
        northAm: northAm,
        southAm: southAm,
        africa: africa,
        europe: europe,
        asia: asia,
        australia: australia,
        oman: oman
    };
    var counterData = [
        {
            id: (_b = counter === null || counter === void 0 ? void 0 : counter.counterOne) === null || _b === void 0 ? void 0 : _b.id,
            count: (_c = counter === null || counter === void 0 ? void 0 : counter.counterOne) === null || _c === void 0 ? void 0 : _c.count,
            title: (_d = counter === null || counter === void 0 ? void 0 : counter.counterOne) === null || _d === void 0 ? void 0 : _d.title
        },
        {
            id: (_e = counter === null || counter === void 0 ? void 0 : counter.counterTwo) === null || _e === void 0 ? void 0 : _e.id,
            count: (_f = counter === null || counter === void 0 ? void 0 : counter.counterTwo) === null || _f === void 0 ? void 0 : _f.count,
            title: (_g = counter === null || counter === void 0 ? void 0 : counter.counterTwo) === null || _g === void 0 ? void 0 : _g.title
        },
        {
            id: (_h = counter === null || counter === void 0 ? void 0 : counter.counterThree) === null || _h === void 0 ? void 0 : _h.id,
            count: (_j = counter === null || counter === void 0 ? void 0 : counter.counterThree) === null || _j === void 0 ? void 0 : _j.count,
            title: (_k = counter === null || counter === void 0 ? void 0 : counter.counterThree) === null || _k === void 0 ? void 0 : _k.title
        },
    ];
    var isDark = useDarkMode_1["default"]() || false;
    return (react_1["default"].createElement("div", { className: "map-bg py-[40px] sm:pb-[50px] sm:pt-[58px] xl:pb-[66px] xl:pt-[70px]" },
        react_1["default"].createElement(SimpleHeadingandText_1["default"], { data: globalData }),
        react_1["default"].createElement("div", { className: "global-map-container relative  z-10 mt-[62px] w-full px-[20px] lg:mt-[88px] lg:px-[34.5px]" },
            react_1["default"].createElement("img", { src: isDark
                    ? "/assets/images/global-map-b.svg"
                    : "/assets/images/global-map.svg", alt: "global map", className: "global-map-img h-full w-full object-contain" }),
            react_1["default"].createElement("div", { className: "absolute left-[17%] top-[42%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("span", { className: "dot" }),
                    react_1["default"].createElement("div", { className: "absolute  left-0 top-[15px] flex flex-row items-end xl:left-[4px] xl:top-[30px] rtl:flex-row-reverse" },
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                                color: isDark ? "#FFFFFF" : "#594226",
                                backgroundColor: isDark
                                    ? "#FFFFFF"
                                    : "#594226",
                                marginTop: "12px"
                            }, className: "north-america global-map-d-line h-[60px] md:h-[70px] lg:h-[117px]" }),
                        react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px] lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.northAm)))),
            react_1["default"].createElement("div", { className: "absolute left-[34%] top-[49%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("div", { className: "absolute bottom-[20px] left-0 flex flex-row items-start lg:bottom-[30px] xl:left-[4px]  rtl:flex-row-reverse" },
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                                color: isDark ? "#FFFFFF" : "#594226",
                                backgroundColor: isDark
                                    ? "#FFFFFF"
                                    : "#594226"
                            }, className: "south-america global-map-d-line h-[62px] md:h-[82px] lg:h-[117px]" }),
                        react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.southAm)),
                    react_1["default"].createElement("span", { className: "dot" }))),
            react_1["default"].createElement("div", { className: "absolute left-[51%] top-[44%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("span", { className: "dot" }),
                    react_1["default"].createElement("div", { className: "absolute right-0 top-[15px] flex flex-row items-end xl:right-[4px] xl:top-[30px] rtl:flex-row-reverse " },
                        react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.africa),
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                                color: isDark ? "#FFFFFF" : "#594226",
                                backgroundColor: isDark
                                    ? "#FFFFFF"
                                    : "#594226",
                                marginTop: "12px"
                            }, className: "africa global-map-d-line h-[56px] md:h-[80px] lg:h-[117px]" })))),
            react_1["default"].createElement("div", { className: "absolute md:left-[59.4%] md:top-[33%] left-[58%] top-[39%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("span", { className: "dot dot-oman" }),
                    react_1["default"].createElement("div", { className: "absolute right-0 top-[15px] flex flex-row items-end xl:right-[4px] xl:top-[30px] rtl:flex-row-reverse " },
                        react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.oman),
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                                color: isDark ? "#FFFFFF" : "#594226",
                                backgroundColor: isDark
                                    ? "#FFFFFF"
                                    : "#594226",
                                marginTop: "12px"
                            }, className: "africa global-map-d-line h-[56px] md:h-[80px] lg:h-[135px]" })))),
            react_1["default"].createElement("div", { className: "europe-top-space absolute left-[46.7%] top-[18%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("div", { className: "rlt:flex-row-reverse absolute bottom-[20px] left-0 flex flex-row items-start lg:bottom-[30px] xl:left-[4px]" },
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                                color: isDark ? "#FFFFFF" : "#594226",
                                backgroundColor: isDark
                                    ? "#FFFFFF"
                                    : "#594226"
                            }, className: "europe global-map-d-line h-[62px] md:h-[82px] lg:h-[117px]" }),
                        react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.europe)),
                    react_1["default"].createElement("span", { className: "dot" }))),
            react_1["default"].createElement("div", { className: "asia-top-space absolute left-[66.5%] top-[28%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("div", { className: "absolute bottom-[20px] left-0 flex flex-row items-start lg:bottom-[30px] xl:left-[4px] rtl:flex-row-reverse" },
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", style: {
                                color: isDark ? "#FFFFFF" : "#594226",
                                backgroundColor: isDark
                                    ? "#FFFFFF"
                                    : "#594226"
                            }, className: "asia global-map-d-line h-[75px] md:h-[105px] lg:h-[162px]" }),
                        react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.asia)),
                    react_1["default"].createElement("span", { className: "dot" }))),
            react_1["default"].createElement("div", { className: "australia-top-space absolute left-[75%] top-[76%] lg:left-[74%] lg:top-[76%] xl:left-[75.5%] xl:top-[80%]" },
                react_1["default"].createElement("div", { className: "dot-container" },
                    react_1["default"].createElement("div", { className: "flex" },
                        react_1["default"].createElement("div", { className: "absolute left-[20px] top-[8px] flex flex-row flex-col items-end gap-[6px] lg:left-[30px] xl:top-[12px] rtl:flex-row-reverse " },
                            react_1["default"].createElement(antd_1.Divider, { style: {
                                    color: isDark ? "#FFFFFF" : "#594226",
                                    backgroundColor: isDark
                                        ? "#FFFFFF"
                                        : "#594226",
                                    height: "1px",
                                    margin: "0px",
                                    padding: "0px"
                                }, className: "australia global-map-d-line w-[86px] md:w-[96px] lg:w-[125px]" }),
                            react_1["default"].createElement("p", { className: "global-map-p font-DINABold text-[12px] font-bold leading-[11.06px] lg:text-[20px]  lg:leading-[30px] rtl:font-TajawalBold" }, continentData === null || continentData === void 0 ? void 0 : continentData.australia)),
                        react_1["default"].createElement("span", { className: "dot" }))))),
        react_1["default"].createElement("div", { className: "counter-global-map-container mt-[32px] flex justify-center gap-[30px] sm:gap-[80px] lg:mt-[-30px] lg:gap-0  " + (currentLang === "en" ? "flex-row" : "flex-row-reverse") }, counterData === null || counterData === void 0 ? void 0 : counterData.map(function (value, index) {
            return (react_1["default"].createElement("div", { key: index, className: "flex w-fit flex-col items-center gap-[8px] sm:gap-[16px] lg:w-full  lg:max-w-[220px] xl:gap-[20px]" },
                react_1["default"].createElement("p", { className: "globalIndicators font-poppinsSemiBold rtl:font-TajawalBold" }, value === null || value === void 0 ? void 0 : value.count),
                react_1["default"].createElement("p", { className: "paragrapghLg font-bold rtl:font-TajawalBold" }, value === null || value === void 0 ? void 0 : value.title)));
        }))));
};
exports["default"] = GlobalFootprintMap;
