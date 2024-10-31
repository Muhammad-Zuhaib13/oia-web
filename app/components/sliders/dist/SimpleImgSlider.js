"use client";
"use strict";
exports.__esModule = true;
require("swiper/css");
require("swiper/css/navigation");
var modules_1 = require("swiper/modules");
var react_1 = require("swiper/react");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var SimpleImgSlider = function (_a) {
    var data = _a.data, locale = _a.locale, style = _a.style;
    var sliderData = (data || {}).sliderData;
    var handleRoute = function (link) {
        if (link) {
            window.open(link, "_blank", 'noopener,noreferrer');
        }
    };
    return (React.createElement("div", { className: "relative mb-[60px]  h-[70px] lg:mb-[100px]  " + style },
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("div", { className: "rounded-[6px] bg-[#fff] py-[20px]" },
                React.createElement(react_1.Swiper, { slidesPerView: "auto", centeredSlides: false, speed: 11000, freeMode: true, modules: [modules_1.A11y, modules_1.Navigation, modules_1.FreeMode, modules_1.Autoplay], pagination: {
                        clickable: true
                    }, className: "slider-brand  w-full", loop: false }, data === null || data === void 0 ? void 0 : data.map(function (item, index) { return (React.createElement(react_1.SwiperSlide, { virtualIndex: index, key: item === null || item === void 0 ? void 0 : item.id, className: "!w-auto ltr:mr-[12px] ltr:md:!mr-[92px] rtl:!ml-[12px] rtl:md:!ml-[92px] cursor-pointer", onClick: function () { return handleRoute(item === null || item === void 0 ? void 0 : item.link); } },
                    React.createElement("div", { className: "flex h-auto w-auto" },
                        React.createElement("div", { className: "h-[60px] w-auto" },
                            React.createElement("img", { src: item === null || item === void 0 ? void 0 : item.src, alt: item === null || item === void 0 ? void 0 : item.alt, className: "h-full w-full rounded-[4px] object-cover" }))))); }))))));
};
exports["default"] = SimpleImgSlider;
