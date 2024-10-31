"use client";
"use strict";
exports.__esModule = true;
var Accordion = function (_a) {
    var _b;
    var data = _a.data, isOpen = _a.isOpen, onClick = _a.onClick, locale = _a.locale, className = _a.className;
    var _c = data || {}, title = _c.title, paras = _c.paras, metaData = _c.metaData, downloadDataset = _c.downloadDataset;
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
    return (React.createElement("div", { className: className + " " },
        React.createElement("button", { onClick: onClick, className: "flex w-full items-center justify-between  py-[12px] sm:py-[20px] lg:py-[24px]" },
            React.createElement("span", { className: "subHeading subHeadingFontClrBW !font-medium rtl:font-TajawalBold" }, title),
            isOpen ? (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("g", { "clip-path": "url(#clip0_1356_2123)" },
                    React.createElement("path", { d: "M27 10H-7", stroke: "#CCCCCC", "stroke-width": "2" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_1356_2123" },
                        React.createElement("rect", { width: "20", height: "20", fill: "white", transform: "matrix(-1 0 0 1 20 0)" }))))) : (React.createElement("svg", { width: "20", height: "21", viewBox: "0 0 20 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("g", { "clip-path": "url(#clip0_3209_18)" },
                    React.createElement("path", { d: "M27 10.1523H-7", stroke: "#CCCCCC", "stroke-width": "2" }),
                    React.createElement("path", { d: "M10 -6.84766L10 27.1523", stroke: "#CCCCCC", "stroke-width": "2" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_3209_18" },
                        React.createElement("rect", { width: "20", height: "20", fill: "white", transform: "matrix(-1 0 0 1 20 0.152344)" })))))),
        React.createElement("div", { className: "grid overflow-hidden  transition-all duration-300 ease-in-out  " + (isOpen
                ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 ") },
            React.createElement("div", { className: "overflow-hidden" },
                React.createElement("div", { className: "flex flex-col gap-[16px] pb-[12px] sm:pb-[20px] md:gap-[20px] lg:gap-[24px] lg:pb-[24px]" },
                    paras &&
                        paras.map(function (para, index) {
                            return (React.createElement("div", { key: index },
                                React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, para)));
                        }),
                    React.createElement("div", { className: "flex flex-col lg:flex-row lg:gap-[77px]" },
                        React.createElement("div", { className: "border-col flex w-full max-w-[478px] flex-col gap-[30px] border-l-[1px] px-[20px] rtl:border-r-[1px]" },
                            React.createElement("h4", { className: "subHeading subHeadingFontClrBW rtl:font-TajawalBold" }, metaData === null || metaData === void 0 ? void 0 : metaData.title),
                            React.createElement("ul", { className: "flex flex-col gap-[21px] pl-[20px] rtl:pr-[20px]" },
                                React.createElement("li", { className: "paragraph bullets-col relative flex flex-row gap-[4px] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalRegular rtl:before:left-auto rtl:before:right-[-16px]" },
                                    React.createElement("span", { className: "shrink-0" },
                                        React.createElement("b", null, metaData === null || metaData === void 0 ? void 0 : metaData.labelPD)),
                                    React.createElement("span", { className: "" }, metaData === null || metaData === void 0 ? void 0 : metaData.publishDate)),
                                React.createElement("li", { className: "paragraph bullets-col relative flex flex-row gap-[4px] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalRegular rtl:before:left-auto rtl:before:right-[-16px]" },
                                    React.createElement("span", { className: "shrink-0" },
                                        React.createElement("b", null, metaData === null || metaData === void 0 ? void 0 : metaData.labelDO)),
                                    React.createElement("span", { className: "" }, metaData === null || metaData === void 0 ? void 0 : metaData.dateOwner)))),
                        React.createElement("div", { className: "border-col flex w-full max-w-[478px] flex-col gap-[30px] border-l-[1px] px-[20px] rtl:border-r-[1px]" },
                            React.createElement("h4", { className: "subHeading subHeadingFontClrBW rtl:font-TajawalBold" }, downloadDataset === null || downloadDataset === void 0 ? void 0 : downloadDataset.title),
                            (downloadDataset === null || downloadDataset === void 0 ? void 0 : downloadDataset.donwloadPdf) && (React.createElement("ul", { className: "flex flex-row gap-[20px]" }, (_b = downloadDataset === null || downloadDataset === void 0 ? void 0 : downloadDataset.donwloadPdf) === null || _b === void 0 ? void 0 : _b.map(function (dataSet, index) {
                                return (React.createElement("li", { className: "cursor-pointer", key: index, onClick: function () {
                                        return onButtonClick(dataSet === null || dataSet === void 0 ? void 0 : dataSet.link);
                                    } },
                                    React.createElement("img", { src: dataSet === null || dataSet === void 0 ? void 0 : dataSet.src, className: "" })));
                            }))))))))));
};
exports["default"] = Accordion;
