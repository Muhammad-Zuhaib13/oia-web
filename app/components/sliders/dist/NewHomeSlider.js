"use client";
"use strict";
exports.__esModule = true;
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var i18n_config_1 = require("@/i18n.config");
require("swiper/css");
require("swiper/css/free-mode");
require("swiper/css/navigation");
require("swiper/css/pagination");
var modules_1 = require("swiper/modules");
var react_1 = require("swiper/react");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var NewHomeSlider = function (_a) {
    var _b, _c;
    var data = _a.data;
    var isDark = useDarkMode_1["default"]();
    return (React.createElement("section", { className: "simple-slider py-[40px] sm:py-[50px] lg:pb-[88px] lg:pt-[94px]" },
        React.createElement("div", { className: "simple-slider-container  flex flex-col gap-[20px] sm:gap-[50px]" },
            React.createElement(ScreenContainer_1["default"], null,
                React.createElement("div", { className: "flex w-full max-w-[988px] flex-col gap-[6px] md:gap-[33px] lg:gap-[24px]" },
                    React.createElement("h2", { className: "mainHeading  rtl:font-TajawalBold" }, data === null || data === void 0 ? void 0 : data.title),
                    React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, data === null || data === void 0 ? void 0 : data.para))),
            React.createElement("div", { className: "relative flex w-full flex-col gap-[12px] sm:gap-[18px] lg:gap-[80px]" },
                React.createElement(ScreenContainer_1["default"], null,
                    React.createElement(react_1.Swiper, { slidesPerView: "auto", centeredSlides: false, speed: 11000, freeMode: true, modules: [
                            modules_1.A11y,
                            modules_1.Navigation,
                            modules_1.FreeMode,
                            modules_1.Autoplay,
                            modules_1.Pagination,
                        ], autoplay: {
                            delay: 2500,
                            disableOnInteraction: true
                        }, breakpoints: {
                            640: {
                                slidesPerView: "auto",
                                spaceBetween: 12
                            },
                            768: {
                                slidesPerView: "auto",
                                spaceBetween: 24
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24
                            }
                        }, pagination: {
                            clickable: true,
                            el: ".custom-bullets",
                            renderBullet: function (index, className) {
                                return "<span class=\"" + className + " custom-bullet\"></span>";
                            }
                        }, className: "swiper-slider-common flex w-full flex-col", loop: true }, (_b = data === null || data === void 0 ? void 0 : data.sliderData) === null || _b === void 0 ? void 0 :
                        _b.map(function (item, index) { return (React.createElement(react_1.SwiperSlide, { virtualIndex: index, key: item === null || item === void 0 ? void 0 : item.id, className: "!w-auto ltr:mr-[12px] ltr:md:!mr-[24px] rtl:!ml-[12px] rtl:md:!ml-[24px]" },
                            React.createElement("div", { className: "relative flex h-auto  w-full max-w-[170px] flex-col gap-[5px] sm:max-w-[250px] md:max-w-[297px]" },
                                React.createElement("div", { className: "h-[170px] w-full overflow-hidden rounded-[4px] sm:h-[250px] lg:h-[240px]" },
                                    React.createElement("img", { src: item === null || item === void 0 ? void 0 : item.src, alt: item === null || item === void 0 ? void 0 : item.alt, className: "h-full w-full rounded-[4px] object-cover " }),
                                    React.createElement("div", { className: "absolute left-0 top-0 flex w-full h-full flex-col justify-end rounded-[4px] p-[13px]", style: { background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #5A4427 100%)" } },
                                        React.createElement("div", { className: "g:gap-[18px] flex flex-col gap-[10px] sm:gap-[16px]" },
                                            React.createElement("p", { className: "profileCard rtl:font-TajawalBold" }, item === null || item === void 0 ? void 0 : item.title),
                                            React.createElement("p", { className: "profileRole rtl:font-TajawalRegular" }, item === null || item === void 0 ? void 0 : item.desc))))))); }),
                        React.createElement("div", { className: "custom-bullets mt-[18px] flex justify-center lg:mt-[50px] lg:!hidden" }))),
                React.createElement(ScreenContainer_1["default"], null,
                    React.createElement("div", { className: "grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[24px]" }, (_c = data === null || data === void 0 ? void 0 : data.investmentsLink) === null || _c === void 0 ? void 0 : _c.map(function (item, index) { return (React.createElement(i18n_config_1.Link, { href: item === null || item === void 0 ? void 0 : item.link, className: "block w-full " },
                        React.createElement("div", { className: "cardBgBottom flex w-full  items-center justify-between rounded-[4px] px-[13px] py-[12px] " },
                            React.createElement("h4", { className: "homeCardTitle line-clamp-1 capitalize  rtl:font-TajawalMedium rtl:font-medium" }, item === null || item === void 0 ? void 0 : item.title),
                            React.createElement("span", { className: "rtl:rotate-180" },
                                React.createElement("img", { src: isDark
                                        ? "/assets/icons/arrow-sq-b.svg"
                                        : "/assets/icons/arrow-sq.svg", alt: "link" }))))); })))))));
};
exports["default"] = NewHomeSlider;
