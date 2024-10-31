"use client";
"use strict";
exports.__esModule = true;
require("swiper/css");
require("swiper/css/free-mode");
require("swiper/css/navigation");
require("swiper/css/pagination");
var modules_1 = require("swiper/modules");
var react_1 = require("swiper/react");
var data_1 = require("../../data/data");
var PrivateEquitiesSlider = function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: "simple-slider-container sm:h-[114px] h-[70px]" },
        React.createElement(react_1.Swiper, { slidesPerView: "auto", spaceBetween: 10, centeredSlides: false, speed: 11000, 
            // autoplay={{
            //   delay: 1,
            //   disableOnInteraction: false,
            // }}
            freeMode: true, modules: [modules_1.A11y, modules_1.Navigation, modules_1.FreeMode, modules_1.Autoplay], className: "simple-slider-swipper w-full", loop: false }, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
            var _a;
            return (React.createElement(react_1.SwiperSlide, { virtualIndex: index, key: item.id, className: "w-full sm:max-w-[401px] max-w-[237px] " + (index === 0 ? "sm:ml-[60px] ml-[20px]" : "") + "  " + (index === 0 && (item === null || item === void 0 ? void 0 : item.locale) === "ar" && "sm:mr-[60px] mr-[20px]") + " " + (index === ((_a = data === null || data === void 0 ? void 0 : data.sliderData) === null || _a === void 0 ? void 0 : _a.length) - 1 ? "sm:mr-[60px] mr-[20px]" : "") },
                React.createElement("div", { className: "simple-card-one flex sm:h-[114px] h-[70px] w-full max-w-[401px] flex-row overflow-hidden", key: item === null || item === void 0 ? void 0 : item.id },
                    React.createElement("div", { className: "sm:w-[114px] w-[70px] h-full bg-[#FFFBF2] overflow-hidden flex flex-col items-center justify-center" },
                        React.createElement("img", { alt: "equities", src: item === null || item === void 0 ? void 0 : item.image, className: "object-contain sm:w-[60%] w-[60%] h-[60%] sm:h-[60%]" })),
                    React.createElement("div", { className: "sm:w-full flex-1 h-full bg-[#D8B97A] flex flex-col sm:gap-[10px] gap-[4px] sm:px-[20px] sm:py-[19px] px-[12px] py-[11px]" },
                        React.createElement("h3", { className: "line-clamp-1 " + data_1.setFontFamily((item === null || item === void 0 ? void 0 : item.locale) || "en", "bold") + " sm:text-[20px] text-[14px] leading-[17px] font-bold sm:leading-[24px] text-white" }, item === null || item === void 0 ? void 0 : item.title),
                        React.createElement("p", { className: "sm:line-clamp-2 line-clamp-2 " + data_1.setFontFamily((item === null || item === void 0 ? void 0 : item.locale) || "en", "regular") + " sm:text-[18px] text-[12px] leading-[14px] font-normal sm:leading-[21px] text-white" }, item === null || item === void 0 ? void 0 : item.description)))));
        }))));
};
exports["default"] = PrivateEquitiesSlider;
