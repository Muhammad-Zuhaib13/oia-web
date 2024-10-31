"use client";
"use strict";
exports.__esModule = true;
var ScreenContainer_1 = require("../common/ScreenContainer");
var PolygonBg_1 = require("../common/PolygonBg");
var data_1 = require("@/app/data/data");
var DownloadPdf = function (_a) {
    var data = _a.data, locale = _a.locale, style = _a.style;
    var testData = {
        desc: "This system is an important tool to ensure the integrity and effectiveness of the Oman Investment Authority and contributes to fostering a culture of accountability and responsibility among all employees of the Authority.",
        cta: {
            label: "Download PDF"
        }
    };
    var desc = data.desc, cta = data.cta;
    var onButtonClick = function () {
        var pdfUrl = "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
        var link = document.createElement("a");
        link.href = pdfUrl;
        link.setAttribute("target", "_blank");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (React.createElement("div", { className: "w-full lg:py-[100px] py-[60px] " + style },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement(PolygonBg_1["default"], { isShowPy: false },
                React.createElement("div", { className: "flex lg:flex-row flex-col lg:items-center justify-between  lg:gap-[100px] lg:px-[99px] lg:py-[60px] sm:py-[50px] py-[30px] sm:px-[24px] gap-[30px]  px-[20px]" },
                    desc && (React.createElement("div", { className: "" },
                        React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, desc))),
                    cta && (React.createElement("div", { className: "" },
                        React.createElement("button", { className: "flex flex-row items-center justify-between lg:gap-[40px] sm:gap-[20px] gap-[25px] rounded-[4px] bg-[#7B6134] lg:px-[20px] lg:py-[16px] sm:p-[14px] p-[11px] h-auto lg:w-[216px] w-auto shrink-0", onClick: function () { data_1.downloadFile(cta === null || cta === void 0 ? void 0 : cta.link); } },
                            React.createElement("span", { className: "paragraph rtl:font-TajawalRegular !text-white" }, cta === null || cta === void 0 ? void 0 : cta.label),
                            React.createElement("span", null,
                                React.createElement("img", { src: "/assets/icons/pdf-icon.svg", className: "h-[18px] w-[18px] object-fill ", alt: "arrow" }))))))))));
};
exports["default"] = DownloadPdf;
