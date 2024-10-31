"use client";
"use strict";
exports.__esModule = true;
var data_1 = require("../../data/data");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var ImageBanner = function (_a) {
    var data = _a.data, _b = _a.width, width = _b === void 0 ? "841px" : _b;
    return (React.createElement("section", { className: "img-banner-text relative h-[200px] md:h-[380px] lg:h-[400px]" },
        !(data === null || data === void 0 ? void 0 : data.image) && !(data === null || data === void 0 ? void 0 : data.tabImg) && !(data === null || data === void 0 ? void 0 : data.mobileImg) ? (React.createElement("div", { className: "h-full w-full bg-[#5A4427]" })) : (React.createElement(React.Fragment, null,
            React.createElement("img", { src: data.image, className: "imgbanner-img hidden h-full w-full object-cover lg:block", alt: "banner img" }),
            React.createElement("img", { src: data.tabImg || data.image, className: "imgbanner-img hidden h-full w-full object-cover md:block lg:hidden", alt: "banner img" }),
            React.createElement("img", { src: data.mobileImg || data.image, className: "imgbanner-img block h-full w-full object-cover md:hidden lg:hidden", alt: "banner img" }))),
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("div", { className: "imgbanner-container absolute top-0 flex h-full flex-col justify-center gap-[16px] pr-[20px] sm:gap-[20px] sm:pr-[60px] lg:gap-[30px] lg:pr-0 rtl:pl-[20px] rtl:sm:pl-[60px] rtl:lg:pl-0" },
                (data === null || data === void 0 ? void 0 : data.title) && (React.createElement("h3", { className: "heroHeading !text-white rtl:font-TajawalBold" }, data === null || data === void 0 ? void 0 : data.title)),
                React.createElement("div", { className: "w-full \r\n          ", style: { maxWidth: width } }, (data === null || data === void 0 ? void 0 : data.description) && (React.createElement("p", { className: data_1.setFontFamily((data === null || data === void 0 ? void 0 : data.locale) || "en", "medium") + " imgbanner-text-p  text-white" }, data === null || data === void 0 ? void 0 : data.description)))))));
};
exports["default"] = ImageBanner;
