"use client";
"use strict";
exports.__esModule = true;
var data_1 = require("@/app/data/data");
var PolygonBg_1 = require("../common/PolygonBg");
var ScreenContainer_1 = require("../common/ScreenContainer");
var OpenDataIndexTable = function (_a) {
    var data = _a.data, locale = _a.locale;
    if (data) {
        var title = data.title, tableData = data.tableData, tableHead = data.tableHead;
        return (React.createElement(PolygonBg_1["default"], null,
            React.createElement(ScreenContainer_1["default"], null,
                React.createElement("div", { className: "flex flex-col gap-[30px]" },
                    title && (React.createElement("h2", { className: "section-heading font-DINABold rtl:font-TajawalBold" }, title)),
                    React.createElement("div", { className: "w-full overflow-x-auto table-container" },
                        React.createElement("table", { className: "lg:w-full w-[950px]" },
                            React.createElement("thead", { className: "border-[1px] theadBorder" },
                                React.createElement("tr", null,
                                    React.createElement("th", { className: "tabelHead relative h-[70px] w-[96px]  text-left rtl:text-right rtl:font-TajawalBold  " },
                                        React.createElement("span", { className: "block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.srNo)),
                                    React.createElement("th", { className: "tabelHead relative h-[70px] w-[335px] rtl:text-right rtl:font-TajawalBold text-left" },
                                        React.createElement("span", { className: "block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.dataSet)),
                                    React.createElement("th", { className: "tabelHead relative h-[70px] w-[220px] text-left rtl:text-right rtl:font-TajawalBold" },
                                        React.createElement("span", { className: "block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.category)),
                                    React.createElement("th", { className: "tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold" },
                                        React.createElement("span", { className: "block h-[70%] w-full  rtl:border-l-[1px] ltr:border-r-[1px]  border-[#5A4427] px-[12px] pt-[12px]" },
                                            " ", tableHead === null || tableHead === void 0 ? void 0 :
                                            tableHead.datasetDes)),
                                    React.createElement("th", { className: "tabelHead w-[229px] p-[20px] text-left lg:h-[70px] rtl:text-right rtl:font-TajawalBold" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.download))),
                            tableData && (React.createElement("tbody", null, tableData === null || tableData === void 0 ? void 0 : tableData.map(function (row, index) {
                                var _a, _b;
                                return (React.createElement("tr", { key: index, className: "" },
                                    React.createElement("td", { className: "paragraph border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium" }, row === null || row === void 0 ? void 0 :
                                        row.id,
                                        "."),
                                    React.createElement("td", { className: "paragraph border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium" }, row === null || row === void 0 ? void 0 : row.dataSet),
                                    React.createElement("td", { className: "paragraph border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium" }, row === null || row === void 0 ? void 0 : row.category),
                                    React.createElement("td", { className: "border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium" },
                                        React.createElement("ul", { className: "px-[20px]" }, (_a = row === null || row === void 0 ? void 0 : row.dataSetDes) === null || _a === void 0 ? void 0 : _a.map(function (desc, index) {
                                            return (React.createElement("li", { key: index, className: "paragraph bullets-col relative flex flex-row gap-[4px] before:absolute before:left-[-16px] before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalMedium rtl:before:left-auto rtl:before:right-[-16px] " }, desc === null || desc === void 0 ? void 0 : desc.content));
                                        }))),
                                    React.createElement("td", { className: "border-[1px] border-[#CCCCCC] p-[20px]" }, (_b = row === null || row === void 0 ? void 0 : row.downloadData) === null || _b === void 0 ? void 0 : _b.map(function (down, index) {
                                        return (React.createElement("button", { className: "justify-center] flex flex-row items-center gap-[13px]", onClick: function () {
                                                data_1.downloadFile(down === null || down === void 0 ? void 0 : down.link);
                                            } },
                                            React.createElement("span", { className: "paragraph shrink-0 rtl:font-TajawalMedium" }, down === null || down === void 0 ? void 0 : down.label),
                                            React.createElement("span", { className: "shrink-0" },
                                                React.createElement("img", { src: down === null || down === void 0 ? void 0 : down.src }))));
                                    }))));
                            })))))))));
    }
    else {
        React.createElement(React.Fragment, null);
    }
};
exports["default"] = OpenDataIndexTable;
