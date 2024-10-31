"use strict";
exports.__esModule = true;
var data_1 = require("../../data/data");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var Box_1 = require("@mui/material/Box");
var AboutWithImg = function (_a) {
    var _b;
    var data = _a.data, _c = _a.orderText, orderText = _c === void 0 ? 1 : _c, _d = _a.orderImg, orderImg = _d === void 0 ? 2 : _d, _e = _a.marginY, marginY = _e === void 0 ? "100px" : _e, _f = _a.isShowMarginYResp, isShowMarginYResp = _f === void 0 ? true : _f;
    return (React.createElement(ScreenContainer_1["default"], null,
        React.createElement(Box_1["default"], { className: "flex lg:flex-row flex-col lg:gap-[55px] sm:gap-[32px] gap-[16px] items-center about-text-with-img-container ", sx: {
                "@media (min-width: 1024px)": { margin: marginY + " 0 !important" },
                "@media (min-width: 640px)": { margin: isShowMarginYResp ? '50px 0' : '0' },
                "@media (max-width: 639px)": { margin: isShowMarginYResp ? '40px 0' : '0' }
            } },
            React.createElement("div", { className: "text-section flex w-full lg:max-w-[408px] max-w-full  flex-col justify-center  lg:gap-[30px] sm:gap-[32px] gap-[16px]", style: { order: orderText } },
                React.createElement("h2", { className: data_1.setFontFamily((data === null || data === void 0 ? void 0 : data.locale) || "en", "bold") + " sm:text-[36px] text-[20px] leading-[43px] font-bold lg:leading-[43px] sm:leading-[76px] text-[#9F8555]" }, data.title),
                React.createElement("div", { className: "flex flex-col gap-[15px]" }, (_b = data.paragraphs) === null || _b === void 0 ? void 0 : _b.map(function (paragraph) { return (React.createElement("div", { key: paragraph === null || paragraph === void 0 ? void 0 : paragraph.id },
                    React.createElement("p", { className: "font-medium " + data_1.setFontFamily((paragraph === null || paragraph === void 0 ? void 0 : paragraph.locale) || "en", "medium") + " text-[18px] leading-[27px] text-[#202020]" }, paragraph === null || paragraph === void 0 ? void 0 : paragraph.subHeading),
                    React.createElement("p", { className: "font-medium " + data_1.setFontFamily((paragraph === null || paragraph === void 0 ? void 0 : paragraph.locale) || "en", "medium") + " lg:text-[18px] sm:text-[24px] text-[14px] lg:leading-[27px] sm:leading-[36px] leading-[20px] text-[#202020]" }, paragraph === null || paragraph === void 0 ? void 0 :
                        paragraph.text,
                        React.createElement("br", null), paragraph === null || paragraph === void 0 ? void 0 :
                        paragraph.text2))); }))),
            React.createElement("div", { className: "img-section lg:h-[380px] sm:h-[360px] h-[200px] w-full lg:max-w-[796px] max-w-full", style: { order: orderImg } },
                React.createElement("img", { src: data === null || data === void 0 ? void 0 : data.src, alt: data === null || data === void 0 ? void 0 : data.alt, className: "w-full h-full object-cover" })))));
};
exports["default"] = AboutWithImg;
