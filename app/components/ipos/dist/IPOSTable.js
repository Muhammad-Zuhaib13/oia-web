"use client";
"use strict";
exports.__esModule = true;
var ScreenContainer_1 = require("../common/ScreenContainer");
var IPOSTable = function (_a) {
    var data = _a.data, locale = _a.locale;
    var iposTable = data.iposTable, tableHead = data.tableHead;
    return (React.createElement(React.Fragment, null,
        React.createElement(ScreenContainer_1["default"], { className: "!pb-[50px] !sm:pb-[60px] !lg:pb-[100px]" },
            React.createElement("div", { className: "table-container w-full overflow-x-auto" },
                React.createElement("table", { className: "w-[950px] lg:w-full" },
                    React.createElement("thead", { className: "theadBorder border-[1px]" },
                        React.createElement("tr", null,
                            React.createElement("th", { className: "tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold" },
                                React.createElement("span", { className: "block h-[70%] w-full  border-[#5A4427] px-[12px]  pt-[12px] ltr:border-r-[1px] rtl:border-l-[1px]" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.typeInvestCol)),
                            React.createElement("th", { className: "tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold" },
                                React.createElement("span", { className: "block h-[70%] w-full  border-[#5A4427] px-[12px]  pt-[12px] ltr:border-r-[1px] rtl:border-l-[1px]" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.industryCol)),
                            React.createElement("th", { className: "tabelHead relative h-[70px] w-[445px] text-left rtl:text-right rtl:font-TajawalBold" },
                                React.createElement("span", { className: "block h-[70%] w-full  border-[#5A4427] px-[12px]  pt-[12px] ltr:border-r-[0px] rtl:border-l-[0px]" }, tableHead === null || tableHead === void 0 ? void 0 : tableHead.assetsCol)))),
                    React.createElement("tbody", { className: "border-[1px] border-[#CCCCCC]" }, iposTable.map(function (investment, index) {
                        return investment.relatedIndustries.map(function (industry, industryIndex) {
                            return industry.assets.map(function (asset, assetIndex) { return (React.createElement("tr", { key: index + "-" + industryIndex + "-" + assetIndex, className: "border-[1px] border-[#CCCCCC]" },
                                industryIndex === 0 &&
                                    assetIndex === 0 && (React.createElement("td", { className: "paragraph  border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium", rowSpan: investment.relatedIndustries.reduce(function (acc, ind) {
                                        return acc +
                                            ind.assets.length;
                                    }, 0) }, investment.typeOfInvest)),
                                assetIndex === 0 && (React.createElement("td", { className: "paragraph  border-[1px] border-[#CCCCCC] p-[20px] rtl:font-TajawalMedium", rowSpan: industry.assets.length }, industry.industry)),
                                React.createElement("td", { className: "paragraph flex justify-between p-[20px] rtl:font-TajawalMedium" },
                                    React.createElement("span", null, asset === null || asset === void 0 ? void 0 : asset.label),
                                    React.createElement("img", { src: asset === null || asset === void 0 ? void 0 : asset.src, className: "" })))); });
                        });
                    })))))));
};
exports["default"] = IPOSTable;
