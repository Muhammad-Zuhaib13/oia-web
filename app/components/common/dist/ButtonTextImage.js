"use client";
"use strict";
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var data_1 = require("@/app/data/data");
var ButtonTextImage = function (_a) {
    var data = _a.data, _b = _a.orderText, orderText = _b === void 0 ? 1 : _b, _c = _a.orderImg, orderImg = _c === void 0 ? 2 : _c, _d = _a.marginY, marginY = _d === void 0 ? "100px" : _d, _e = _a.isShowMarginYResp, isShowMarginYResp = _e === void 0 ? true : _e, _f = _a.isListShow, isListShow = _f === void 0 ? false : _f, _g = _a.classesContainer, classesContainer = _g === void 0 ? "" : _g;
    var title = data.title, img = data.img, paras = data.paras, list = data.list, endPara = data.endPara, btn = data.btn, paraHeading = data.paraHeading;
    var onButtonClick = function () {
        var pdfUrl = "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
        var link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("target", "_blank"); // Open in new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (React.createElement(ScreenContainer_1["default"], null,
        React.createElement(Box_1["default"], { className: "about-text-with-img-container " + classesContainer + " flex flex-col items-start gap-[16px] sm:gap-[32px] lg:flex-row lg:gap-[70px] ", sx: {
                "@media (min-width: 1024px)": {
                    padding: marginY + " 0 !important"
                },
                "@media (min-width: 640px)": {
                    padding: isShowMarginYResp ? "50px 0" : "0"
                },
                "@media (max-width: 639px)": {
                    padding: isShowMarginYResp ? "40px 0" : "0"
                }
            } },
            React.createElement("div", { className: "text-section flex w-full max-w-full  grow  flex-col justify-center  gap-[16px] sm:gap-[32px] lg:gap-[40px]", style: { order: orderText } },
                title && (React.createElement("h2", { className: "mainHeading rtl:font-TajawalBold" }, title)),
                React.createElement("div", { className: "flex flex-col gap-[15px]" },
                    paraHeading && (React.createElement("h3", { className: "subHeading rtl:font-TajawalBold" },
                        " ", data === null || data === void 0 ? void 0 :
                        data.paraHeading)),
                    paras &&
                        paras.map(function (para, index) {
                            return (React.createElement("div", { key: index },
                                React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, para)));
                        }),
                    btn && (btn === null || btn === void 0 ? void 0 : btn.map(function (value, index) {
                        return (React.createElement("button", { className: "flex h-auto  w-full sm:w-[343px]  shrink-0 flex-row items-center justify-between gap-[40px] rounded-[4px] bg-[#7B6134] px-[10px] sm:px-[20px] py-[15px]", onClick: function () { data_1.downloadFile(value === null || value === void 0 ? void 0 : value.link); } },
                            React.createElement("span", { className: "cta  !text-white rtl:font-TajawalRegular" }, value === null || value === void 0 ? void 0 : value.label),
                            React.createElement("span", null,
                                React.createElement("img", { src: "/assets/icons/arrow-sq.svg", className: "h-[18px] w-[18px] rotate-90 object-fill", alt: "arrow" }))));
                    })),
                    isListShow && list && (React.createElement("ul", { className: "disc-br flex flex-col  gap-[15px] ltr:pl-[20px] rtl:pr-[20px]" }, list.map(function (item, index) { return (React.createElement("li", { key: index, className: "flex flex-row items-baseline gap-[12px]" },
                        React.createElement("span", { className: "rtl:font-GESndBookRegular relative flex flex-row gap-[4px] font-DINARegular text-[14px] font-normal leading-[20px] text-[#202020] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:bg-[#9F8555] before:content-[''] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[26px]" }, item))); }))),
                    endPara && (endPara === null || endPara === void 0 ? void 0 : endPara.map(function (para, index) {
                        return (React.createElement("div", { key: index },
                            React.createElement("p", { className: "rtl:font-GESndBookRegular font-DINARegular text-[14px] font-normal leading-[20px] text-[#202020] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[26px]" }, para)));
                    })))),
            React.createElement("div", { className: "img-section h-[200px] w-full max-w-full overflow-hidden rounded-[6px] sm:h-[360px] lg:h-[425px] lg:max-w-[514px]", style: { order: orderImg } }, img && (React.createElement("img", { src: img, alt: title, className: " h-full w-full object-contain " }))))));
};
exports["default"] = ButtonTextImage;
