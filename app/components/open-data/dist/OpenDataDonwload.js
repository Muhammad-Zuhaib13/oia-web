"use client";
"use strict";
exports.__esModule = true;
var PolygonBg_1 = require("../common/PolygonBg");
var ScreenContainer_1 = require("../common/ScreenContainer");
var OpenDataDonwload = function (_a) {
    var data = _a.data, locale = _a.locale, style = _a.style;
    var cta = data.cta, paras = data.paras, list = data.list;
    var onButtonClick = function () {
        var pdfUrl = "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
        var link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (React.createElement("div", { className: "w-full py-[60px] lg:py-[100px] " + style },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement(PolygonBg_1["default"], { isShowPy: false },
                React.createElement("div", { className: "flex flex-col justify-between gap-[30px] px-[20px]  py-[30px] sm:px-[24px] sm:py-[50px] lg:flex-row lg:items-center lg:gap-[100px] lg:px-[99px]  lg:py-[60px]" },
                    React.createElement("div", { className: "flex flex-col gap-[15px]" },
                        paras &&
                            paras.map(function (para, index) {
                                return (React.createElement("div", { key: index },
                                    React.createElement("p", { className: "paragraph text-[#202020] rtl:font-TajawalRegular" }, para)));
                            }),
                        list && (React.createElement("ul", { className: "disc-br flex flex-col  gap-[15px] ltr:pl-[20px] rtl:pr-[20px]" }, list.map(function (item, index) { return (React.createElement("li", { key: index, className: "flex flex-row items-baseline gap-[12px]" },
                            React.createElement("span", { className: "bullets-col paragraph  relative flex flex-row gap-[4px] font-DINARegular font-normal before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full  before:content-[''] rtl:font-TajawalRegular" }, item))); })))),
                    cta && (React.createElement("div", { className: "" },
                        React.createElement("button", { className: "flex h-auto w-max shrink-0 flex-row items-center justify-between gap-[25px] rounded-[4px] bg-[#7B6134] p-[11px] sm:gap-[20px] sm:p-[14px] lg:gap-[40px] lg:px-[20px] lg:py-[16px]", onClick: onButtonClick },
                            React.createElement("span", { className: "paragraph !text-white rtl:font-TajawalRegular" }, cta === null || cta === void 0 ? void 0 : cta.label),
                            React.createElement("span", null,
                                React.createElement("img", { src: "/assets/icons/pdf-down.svg", className: "h-[18px] w-[18px] object-fill ", alt: "arrow" }))))))))));
};
exports["default"] = OpenDataDonwload;
