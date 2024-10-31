"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var modules_1 = require("swiper/modules");
var react_2 = require("swiper/react");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var i18n_config_1 = require("@/i18n.config");
var HomeBanner = function (_a) {
    var data = _a.data, locale = _a.locale;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_2.Swiper, { pagination: {
                clickable: true
            }, modules: [modules_1.Pagination], className: "homeSlider" }, data.map(function (item) { return (react_1["default"].createElement(react_2.SwiperSlide, { key: item.id },
            react_1["default"].createElement("div", { className: "relative flex h-full w-full items-center" },
                item.type === "video" ? (react_1["default"].createElement("video", { autoPlay: true, muted: true, loop: true, className: "absolute left-0 top-0 z-[0] h-full w-full object-cover" },
                    react_1["default"].createElement("source", { src: item.source, type: "video/mp4" }))) : (react_1["default"].createElement("img", { src: item.source, alt: item.title, className: "absolute left-0 top-0 z-[0] h-full w-full object-cover" })),
                react_1["default"].createElement(ScreenContainer_1["default"], null,
                    react_1["default"].createElement("div", { className: "relative z-[1] w-[100%] lg:w-[60%]" },
                        react_1["default"].createElement("h1", { className: "heroHeading mb-[50px] text-white rtl:font-TajawalBold" },
                            react_1["default"].createElement("span", { className: "block" }, item.title),
                            item.subTitle && (react_1["default"].createElement("span", null, item.subTitle))),
                        (item === null || item === void 0 ? void 0 : item.btnLabel) && (react_1["default"].createElement(i18n_config_1.Link, { href: item === null || item === void 0 ? void 0 : item.link },
                            react_1["default"].createElement("span", { className: "cta flex items-center rounded-[4px] bg-white px-[20px] py-[15px] rtl:font-TajawalMedium font-medium w-fit" },
                                item.btnLabel,
                                react_1["default"].createElement("span", { className: locale === "ar"
                                        ? "mr-[40px]"
                                        : "ml-[40px]" },
                                    react_1["default"].createElement("img", { src: "/assets/images/download.svg", alt: "download" })))))))))); }))));
};
exports["default"] = HomeBanner;
