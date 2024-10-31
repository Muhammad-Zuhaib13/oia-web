"use client";
"use strict";
exports.__esModule = true;
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var NumbersBgVideo = function (_a) {
    var data = _a.data, locale = _a.locale;
    console.log("data is", data === null || data === void 0 ? void 0 : data.videoSrcOne);
    var isDarkMode = useDarkMode_1["default"]();
    console.log("The current mode is dark? ", isDarkMode);
    return (React.createElement("section", { className: "number-video-container py-[40px] sm:py-[60px] lg:py-[100px] h-auto w-full" },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("div", { className: "flex h-auto w-full flex-col lg:gap-[64px] sm:gap-[50px] gap-[30px]" },
                React.createElement("div", { className: "" },
                    React.createElement("h2", { className: "mainHeading  rtl:font-TajawalBold" }, locale === "en" ? "Key Indicators" : "المؤشرات الرئيسية")),
                React.createElement("div", { className: "w-full overflow-hidden" },
                    React.createElement("div", { className: "grid w-[101%] grid-cols-2  gap-[20px] sm:gap-x-[20px] sm:gap-y-[79px] lg:grid-cols-4 lg:gap-0" },
                        React.createElement("div", { className: "flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]" },
                            React.createElement("div", { className: "sm:w-[70%] w-[90%]" },
                                React.createElement("h4", { className: "homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium" }, locale === "en" ? "Asset Size" : "حجم أصول الجهاز حتى نهاية 2023م")),
                            React.createElement("div", { className: "text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative mr-auto rtl:ml-auto" },
                                React.createElement("div", { className: "tvc-video" },
                                    React.createElement("video", { autoPlay: true, muted: true, loop: true, className: "m-auto h-full w-[98%] object-cover py-[2px]" },
                                        React.createElement("source", { src: data === null || data === void 0 ? void 0 : data.videoSrcOne, type: "video/mp4" }))),
                                React.createElement("div", { className: "tvc-text " + (!isDarkMode ? "tvc-text-light" : "tvc-text-dark") + " flex flex-row" },
                                    React.createElement("h2", { className: "tvc-text-row justify-start flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse rtl:justify-end lg:px-[2px] px-[4px]" },
                                        React.createElement("span", { className: "font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]" }, "19.2"),
                                        React.createElement("span", { className: "flex flex-col justify-around font-DINABold rtl:font-TajawalBold  text-[8px] leading-normal leading-bold sm:text-[14px] sm:leading-[14px] md:text-[20px] md:leading-[20px] rtl:text-left" },
                                            React.createElement("span", null, locale === "en" ? "Bn." : " مليار "),
                                            React.createElement("span", null, locale === "en" ? "OMR" : " ريال عماني")))))),
                        React.createElement("div", { className: "flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]" },
                            React.createElement("div", { className: "lg:w-[60%] w-[90%] lg:mx-auto sm:w-[60%]" },
                                React.createElement("h4", { className: "homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium" }, locale === "en" ? "Average Returns" : "العائد على الاستثمار خلال 2023م")),
                            React.createElement("div", { className: "text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative md:mx-auto rtl:mr-0 mr-auto" },
                                React.createElement("div", { className: "tvc-video" },
                                    React.createElement("video", { autoPlay: true, muted: true, loop: true, className: "m-auto h-full w-[98%] object-cover py-[2px]" },
                                        React.createElement("source", { src: data === null || data === void 0 ? void 0 : data.videoSrcOne, type: "video/mp4" }))),
                                React.createElement("div", { className: "tvc-text " + (!isDarkMode ? "tvc-text-light" : "tvc-text-dark") + " flex flex-row" },
                                    React.createElement("h2", { className: "tvc-text-row lg:justify-center justify-start rtl:lg:justify-center rtl:justify-end flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse lg:px-[2px] px-[4px]" },
                                        React.createElement("span", { className: "font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]" }, "9.95"),
                                        React.createElement("span", { className: "mt-[10px] flex flex-col justify-start font-DINABold rtl:font-TajawalBold text-[8px] leading-normal sm:text-[14px] font-bold sm:leading-[14px] md:text-[20px] md:leading-[20px]" },
                                            React.createElement("span", null, "%"),
                                            React.createElement("span", null)))))),
                        React.createElement("div", { className: "flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden  ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]" },
                            React.createElement("div", { className: "lg:w-[60%] w-[90%] lg:mx-auto sm:w-[60%]" },
                                React.createElement("h4", { className: "homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium" }, locale === "en"
                                    ? "Investments in more than 50 countries"
                                    : "تتوزع استثمارات جهاز الاستثمار العماني وأصوله جغرافيًا على أكثر من 50 دولة حول العالم - حتى نهاية 3202م.")),
                            React.createElement("div", { className: "text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative mx-auto" },
                                React.createElement("div", { className: "tvc-video" },
                                    React.createElement("video", { autoPlay: true, muted: true, loop: true, className: "m-auto h-full w-[98%] object-cover py-[2px]" },
                                        React.createElement("source", { src: data === null || data === void 0 ? void 0 : data.videoSrcOne, type: "video/mp4" }))),
                                React.createElement("div", { className: "tvc-text " + (!isDarkMode ? "tvc-text-light" : "tvc-text-dark") + " flex flex-row" },
                                    React.createElement("h2", { className: "tvc-text-row lg:justify-center justify-start flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse rtl:lg:justify-center rtl:justify-end lg:px-[2px] px-[4px]" },
                                        React.createElement("span", { className: "font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]" }, "50"),
                                        React.createElement("span", { className: "flex flex-col justify-start mt-[10px] font-DINABold rtl:font-TajawalBold text-[8px] leading-normal sm:text-[14px] font-bold sm:leading-[14px] md:text-[20px] md:leading-[20px]" },
                                            React.createElement("span", null, "+"),
                                            React.createElement("span", null)))))),
                        React.createElement("div", { className: "flex h-auto gap-[10px] md:gap-[22px] w-full flex-col justify-between overflow-hidden ltr:lg:border-r-[1px] rtl:lg:border-l-[1px] rtl:border-l-[#CCCCCC] lg:border-r-[#CCCCCC]" },
                            React.createElement("div", { className: "lg:w-[60%] w-[90%] lg:mx-auto sm:w-[60%]" },
                                React.createElement("h4", { className: "homeIndicatorsLabel text-left rtl:text-right rtl:font-TajawalMedium" }, locale === "en" ? "Contribution to GDP in 2022" : "المساهمة في الناتج المحلي في 2022م")),
                            React.createElement("div", { className: "text-video-content max-[232px] w-[96%] md:h-[96px] h-[42px] sm:h-[76px] relative mx-auto" },
                                React.createElement("div", { className: "tvc-video" },
                                    React.createElement("video", { autoPlay: true, muted: true, loop: true, className: "m-auto h-full w-[98%] object-cover py-[2px]" },
                                        React.createElement("source", { src: data === null || data === void 0 ? void 0 : data.videoSrcOne, type: "video/mp4" }))),
                                React.createElement("div", { className: "tvc-text " + (!isDarkMode ? "tvc-text-light" : "tvc-text-dark") + " flex flex-row" },
                                    React.createElement("h2", { className: "tvc-text-row lg:justify-center rtl:lg:justify-center justify-start rtl:justify-end flex w-full md:gap-[10px] gap-[2px] rtl:flex-row-reverse lg:px-[2px] px-[4px]" },
                                        React.createElement("span", { className: "font-poppinsBold font-bold text-[30px] leading-normal sm:text-[76px] sm:leading-[76px] md:text-[96px] md:leading-[96px]" }, "2.6"),
                                        React.createElement("span", { className: "flex flex-col justify-around font-DINABold rtl:font-TajawalBold text-[8px] leading-normal sm:text-[14px] font-bold sm:leading-[14px] md:text-[20px] md:leading-[20px] rtl:text-left " },
                                            React.createElement("span", null, locale === "en" ? "Bn." : " مليار "),
                                            React.createElement("span", null, locale === "en" ? "OMR" : " ريال عماني"))))))))))));
};
exports["default"] = NumbersBgVideo;
