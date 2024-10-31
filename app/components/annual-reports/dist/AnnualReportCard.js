"use client";
"use strict";
exports.__esModule = true;
var data_1 = require("../../data/data");
var onButtonClick = function () {
    var pdfUrl = "https://conasems-ava-prod.s3.sa-east-1.amazonaws.com/aulas/ava/dummy-1641923583.pdf"; // The correct URL to your PDF
    var link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("target", "_blank"); // Open in new tab
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
var AnnualReportCard = function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: "flex lg:h-[346px] h-auto w-full lg:max-w-[394px] flex-col justify-between lg:gap-[30px] gap-[20px]" },
        React.createElement("div", { className: "lg:h-[300px] h-[260px] overflow-hidden bg-[#FEFAEF] lg:px-[48px] sm:px-[61px] lg:pb-[66px] lg:pt-[60px] sm:py-[68px] py-[50px] flex flex-col justify-center items-center relative" },
            React.createElement("div", { className: "h-full max-w-[212px] w-full " },
                React.createElement("img", { src: data === null || data === void 0 ? void 0 : data.imgSrc, alt: data === null || data === void 0 ? void 0 : data.title, className: "w-full h-full object-contain" })),
            React.createElement("div", { className: "lg:w-[37px] lg:h-[45px] w-[28px] h-[34px] absolute top-[20px] " + ((data === null || data === void 0 ? void 0 : data.locale) === "en" ? "right-[20px]" : "left-[20px]"), onClick: onButtonClick },
                React.createElement("img", { src: "/assets/icons/download-pdf-icon.svg", alt: "pdf", className: "object-cover w-full h-full " }))),
        React.createElement("div", null,
            React.createElement("h3", { className: "line-clamp-1 " + data_1.setFontFamily((data === null || data === void 0 ? void 0 : data.locale) || "en", "bold") + " font-bold lg:text-[24px] sm:text-[20px] sm:leading-[24px] text-[16px] leading-[19px] capitalize lg:leading-[29px] text-[#202020]" }, data.title))));
};
exports["default"] = AnnualReportCard;
