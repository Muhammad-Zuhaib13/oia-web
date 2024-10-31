"use client";
"use strict";
exports.__esModule = true;
var AnnualReportCard = function (_a) {
    var data = _a.data;
    var imgSrc = data.imgSrc, title = data.title, locale = data.locale, link = data.link;
    var onButtonClick = function (fileUrl) {
        if (!fileUrl) {
            console.error("File URL is undefined or null");
            return;
        }
        var linkElement = document.createElement("a");
        linkElement.href = fileUrl;
        var fileName = fileUrl.split("/").pop() || "file.pdf";
        linkElement.setAttribute("download", fileName);
        linkElement.click();
    };
    return (React.createElement("div", { className: "flex h-auto w-full cursor-pointer flex-col justify-between gap-[20px] lg:h-[346px] lg:max-w-[394px] lg:gap-[30px]", onClick: function () { return onButtonClick(link); } },
        React.createElement("div", { className: "relative flex h-[260px] flex-col items-center justify-center overflow-hidden bg-[#FEFAEF] py-[50px] sm:px-[61px] sm:py-[68px] lg:h-[300px] lg:px-[48px] lg:pb-[66px] lg:pt-[60px]" },
            React.createElement("div", { className: "h-full w-full max-w-[212px] " }, imgSrc && (React.createElement("img", { src: imgSrc, alt: title || "", className: "h-full w-full object-contain" }))),
            React.createElement("div", { className: "absolute  " + (locale === "en" ? "right-[20px]" : "left-[20px]") + " top-[20px] h-[34px] w-[28px] lg:h-[45px] lg:w-[37px]" },
                React.createElement("img", { src: "/assets/icons/download-pdf-icon.svg", className: "h-full w-full object-cover " }))),
        title && (React.createElement("div", null,
            React.createElement("h3", { className: "publicationsYear" }, title)))));
};
exports["default"] = AnnualReportCard;
