"use client";
"use strict";
exports.__esModule = true;
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var Box_1 = require("@mui/material/Box");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var data_1 = require("@/app/data/data");
var TextWIthImg = function (_a) {
    var locale = _a.locale, data = _a.data, _b = _a.orderText, orderText = _b === void 0 ? 1 : _b, _c = _a.orderImg, orderImg = _c === void 0 ? 2 : _c, _d = _a.marginY, marginY = _d === void 0 ? "100px" : _d, _e = _a.isShowMarginYResp, isShowMarginYResp = _e === void 0 ? true : _e, _f = _a.isListShow, isListShow = _f === void 0 ? false : _f, _g = _a.classesContainer, classesContainer = _g === void 0 ? "" : _g, _h = _a.listBold, listBold = _h === void 0 ? false : _h, _j = _a.swap, swap = _j === void 0 ? false : _j;
    var title = data.title, img = data.img, paras = data.paras, list = data.list, endPara = data.endPara, btn = data.btn, paraHeading = data.paraHeading, listHeading = data.listHeading;
    // const onButtonClick = () => {
    //   const pdfUrl =
    //     "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
    //   const link = document.createElement("a");
    //   link.href = pdfUrl;
    //   link.setAttribute("target", "_blank"); // Open in new tab
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    // };
    var isDark = useDarkMode_1["default"]();
    return (React.createElement(ScreenContainer_1["default"], null,
        React.createElement(Box_1["default"], { className: classesContainer + " flex flex-col items-start gap-[16px] sm:gap-[30px] lg:flex-row lg:gap-[60px] ", sx: {
                "@media (min-width: 1024px)": {
                    padding: marginY + " 0 !important"
                },
                "@media (min-width: 640px)": {
                    padding: isShowMarginYResp ? "60px 0" : "0"
                },
                "@media (max-width: 639px)": {
                    padding: isShowMarginYResp ? "40px 0" : "0"
                }
            } },
            React.createElement("div", { className: "flex w-full max-w-full grow flex-col justify-center gap-[20px] lg:gap-[30px] \n          " + (swap ? "order-" + (orderText === 1 ? 2 : 1) + " lg:order-" + (orderText === 1 ? 1 : 2) : "order-" + orderText + " lg:order-" + orderText) },
                title && (React.createElement("h2", { className: "mainHeading  rtl:font-TajawalBold" }, title)),
                React.createElement("div", { className: "flex flex-col " + (paraHeading ? "gap-[16px]" : "") },
                    paraHeading && (React.createElement("h3", { className: "subHeading !text-dbrown rtl:font-TajawalBold " }, data === null || data === void 0 ? void 0 : data.paraHeading)),
                    paras && (React.createElement("div", { className: "flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px]" }, paras.map(function (para, index) { return (React.createElement("div", { key: index, className: "last:mb-0" },
                        React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, para))); }))),
                    btn && (React.createElement("button", { className: "mt-[20px] flex h-auto w-[178px] shrink-0 flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[20px] py-[16px] lg:mt-[30px]", onClick: function () { data_1.downloadFile(btn === null || btn === void 0 ? void 0 : btn.link); } },
                        React.createElement("span", { className: "paragraph !text-white rtl:font-TajawalRegular" }, btn === null || btn === void 0 ? void 0 : btn.label),
                        React.createElement("span", null,
                            React.createElement("img", { src: "/assets/icons/pdf-icon.svg", className: "h-[18px] w-[18px] object-fill rtl:rotate-180", alt: "arrow" })))),
                    listHeading && (React.createElement("div", { className: "flex flex-col pt-[20px] lg:pt-[30px]" },
                        React.createElement("h3", { className: "paragraph !font-bold !text-black rtl:font-TajawalBold " },
                            " ", data === null || data === void 0 ? void 0 :
                            data.listHeading))),
                    isListShow && list && (React.createElement("ul", { className: "grid grid-cols-1 gap-[16px] sm:grid-cols-2 sm:gap-[20px] lg:grid-cols-1 lg:gap-[24px] ltr:pl-[20px] rtl:pr-[20px] " + (listHeading || paras ? " mt-[20px] lg:mt-[30px]" : "") }, list === null || list === void 0 ? void 0 : list.map(function (item, index) { return (React.createElement("li", { key: index, className: "flex flex-row items-baseline gap-[12px]" },
                        React.createElement("span", { className: "relative flex flex-row gap-[4px] " + (locale === "ar"
                                ? "before:left-auto before:right-[-16px]"
                                : "before:left-[-16px]") + " paragraph rtl:font-TajawalRegular " + (listBold ? "!font-bold" : "") + " before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full  bullets-col before:content-[''] " }, item))); }))),
                    endPara && (endPara === null || endPara === void 0 ? void 0 : endPara.map(function (para, index) {
                        return (React.createElement("div", { key: index },
                            React.createElement("p", { className: "paragraph pt-[20px] text-[#202020] lg:pt-[30px] rtl:font-TajawalRegular  " }, para)));
                    })))),
            React.createElement("div", { className: "h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[380px] lg:h-[425px] lg:max-w-[514px] \n          " + (swap ? "order-" + (orderImg === 1 ? 2 : 1) + " lg:order-" + (orderImg === 1 ? 1 : 2) : "order-" + orderImg + " lg:order-" + orderImg) }, img && (React.createElement("img", { src: img, alt: title, className: " h-full w-full object-cover " }))))));
};
exports["default"] = TextWIthImg;
