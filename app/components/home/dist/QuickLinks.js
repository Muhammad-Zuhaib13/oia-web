"use client";
"use strict";
exports.__esModule = true;
var Box_1 = require("@mui/material/Box");
var react_1 = require("react");
var modules_1 = require("swiper/modules");
var react_2 = require("swiper/react");
var data_1 = require("../../data/data");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var SimpleHeadingandText_1 = require("../simple-heading-text/SimpleHeadingandText");
var PlatformCard_1 = require("./PlatformCard");
var QuickLinks = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36;
    var data = _a.data;
    var quicklink = {
        title: data === null || data === void 0 ? void 0 : data.title,
        para: data === null || data === void 0 ? void 0 : data.para,
        locale: data === null || data === void 0 ? void 0 : data.currentLang
    };
    var qlSliderData = [
        {
            id: (_c = (_b = data === null || data === void 0 ? void 0 : data.slider) === null || _b === void 0 ? void 0 : _b.slideOne) === null || _c === void 0 ? void 0 : _c.id,
            image: (_e = (_d = data === null || data === void 0 ? void 0 : data.slider) === null || _d === void 0 ? void 0 : _d.slideOne) === null || _e === void 0 ? void 0 : _e.image,
            icon: (_g = (_f = data === null || data === void 0 ? void 0 : data.slider) === null || _f === void 0 ? void 0 : _f.slideOne) === null || _g === void 0 ? void 0 : _g.icon,
            desc: (_j = (_h = data === null || data === void 0 ? void 0 : data.slider) === null || _h === void 0 ? void 0 : _h.slideOne) === null || _j === void 0 ? void 0 : _j.desc,
            title: (_l = (_k = data === null || data === void 0 ? void 0 : data.slider) === null || _k === void 0 ? void 0 : _k.slideOne) === null || _l === void 0 ? void 0 : _l.title,
            btn: (_o = (_m = data === null || data === void 0 ? void 0 : data.slider) === null || _m === void 0 ? void 0 : _m.slideOne) === null || _o === void 0 ? void 0 : _o.btn,
            locale: data === null || data === void 0 ? void 0 : data.currentLang
        },
        {
            id: (_q = (_p = data === null || data === void 0 ? void 0 : data.slider) === null || _p === void 0 ? void 0 : _p.slideTwo) === null || _q === void 0 ? void 0 : _q.id,
            image: (_s = (_r = data === null || data === void 0 ? void 0 : data.slider) === null || _r === void 0 ? void 0 : _r.slideTwo) === null || _s === void 0 ? void 0 : _s.image,
            icon: (_u = (_t = data === null || data === void 0 ? void 0 : data.slider) === null || _t === void 0 ? void 0 : _t.slideTwo) === null || _u === void 0 ? void 0 : _u.icon,
            desc: (_w = (_v = data === null || data === void 0 ? void 0 : data.slider) === null || _v === void 0 ? void 0 : _v.slideTwo) === null || _w === void 0 ? void 0 : _w.desc,
            title: (_y = (_x = data === null || data === void 0 ? void 0 : data.slider) === null || _x === void 0 ? void 0 : _x.slideTwo) === null || _y === void 0 ? void 0 : _y.title,
            btn: (_0 = (_z = data === null || data === void 0 ? void 0 : data.slider) === null || _z === void 0 ? void 0 : _z.slideTwo) === null || _0 === void 0 ? void 0 : _0.btn,
            locale: data === null || data === void 0 ? void 0 : data.currentLang
        },
        {
            id: (_2 = (_1 = data === null || data === void 0 ? void 0 : data.slider) === null || _1 === void 0 ? void 0 : _1.slideThree) === null || _2 === void 0 ? void 0 : _2.id,
            image: (_4 = (_3 = data === null || data === void 0 ? void 0 : data.slider) === null || _3 === void 0 ? void 0 : _3.slideThree) === null || _4 === void 0 ? void 0 : _4.image,
            icon: (_6 = (_5 = data === null || data === void 0 ? void 0 : data.slider) === null || _5 === void 0 ? void 0 : _5.slideThree) === null || _6 === void 0 ? void 0 : _6.icon,
            desc: (_8 = (_7 = data === null || data === void 0 ? void 0 : data.slider) === null || _7 === void 0 ? void 0 : _7.slideThree) === null || _8 === void 0 ? void 0 : _8.desc,
            title: (_10 = (_9 = data === null || data === void 0 ? void 0 : data.slider) === null || _9 === void 0 ? void 0 : _9.slideThree) === null || _10 === void 0 ? void 0 : _10.title,
            btn: (_12 = (_11 = data === null || data === void 0 ? void 0 : data.slider) === null || _11 === void 0 ? void 0 : _11.slideThree) === null || _12 === void 0 ? void 0 : _12.btn,
            locale: data === null || data === void 0 ? void 0 : data.currentLang
        },
        {
            id: (_14 = (_13 = data === null || data === void 0 ? void 0 : data.slider) === null || _13 === void 0 ? void 0 : _13.slideFour) === null || _14 === void 0 ? void 0 : _14.id,
            image: (_16 = (_15 = data === null || data === void 0 ? void 0 : data.slider) === null || _15 === void 0 ? void 0 : _15.slideFour) === null || _16 === void 0 ? void 0 : _16.image,
            icon: (_18 = (_17 = data === null || data === void 0 ? void 0 : data.slider) === null || _17 === void 0 ? void 0 : _17.slideFour) === null || _18 === void 0 ? void 0 : _18.icon,
            desc: (_20 = (_19 = data === null || data === void 0 ? void 0 : data.slider) === null || _19 === void 0 ? void 0 : _19.slideFour) === null || _20 === void 0 ? void 0 : _20.desc,
            title: (_22 = (_21 = data === null || data === void 0 ? void 0 : data.slider) === null || _21 === void 0 ? void 0 : _21.slideFour) === null || _22 === void 0 ? void 0 : _22.title,
            btn: (_24 = (_23 = data === null || data === void 0 ? void 0 : data.slider) === null || _23 === void 0 ? void 0 : _23.slideFour) === null || _24 === void 0 ? void 0 : _24.btn,
            locale: data === null || data === void 0 ? void 0 : data.currentLang
        },
        {
            id: (_26 = (_25 = data === null || data === void 0 ? void 0 : data.slider) === null || _25 === void 0 ? void 0 : _25.slideFive) === null || _26 === void 0 ? void 0 : _26.id,
            image: (_28 = (_27 = data === null || data === void 0 ? void 0 : data.slider) === null || _27 === void 0 ? void 0 : _27.slideFive) === null || _28 === void 0 ? void 0 : _28.image,
            icon: (_30 = (_29 = data === null || data === void 0 ? void 0 : data.slider) === null || _29 === void 0 ? void 0 : _29.slideFive) === null || _30 === void 0 ? void 0 : _30.icon,
            desc: (_32 = (_31 = data === null || data === void 0 ? void 0 : data.slider) === null || _31 === void 0 ? void 0 : _31.slideFive) === null || _32 === void 0 ? void 0 : _32.desc,
            title: (_34 = (_33 = data === null || data === void 0 ? void 0 : data.slider) === null || _33 === void 0 ? void 0 : _33.slideFive) === null || _34 === void 0 ? void 0 : _34.title,
            btn: (_36 = (_35 = data === null || data === void 0 ? void 0 : data.slider) === null || _35 === void 0 ? void 0 : _35.slideFive) === null || _36 === void 0 ? void 0 : _36.btn,
            locale: data === null || data === void 0 ? void 0 : data.currentLang
        },
    ];
    var locale = data === null || data === void 0 ? void 0 : data.currentLang;
    return (
    // <div className="bg-[#FEFAF1] ">
    react_1["default"].createElement("div", { className: "bg-[url('/assets/images/light-pattern-bg.png')] bg-cover py-[40px] sm:py-[50px] lg:py-[90px]" },
        react_1["default"].createElement(SimpleHeadingandText_1["default"], { data: quicklink }),
        react_1["default"].createElement(ScreenContainer_1["default"], null,
            react_1["default"].createElement("div", { className: "mb-[60px] mt-[30px] hidden items-center gap-[16px] lg:flex" },
                react_1["default"].createElement("button", { className: "flex h-[30px] w-auto cursor-default flex-row items-center gap-[8px] font-bold lg:h-[48px]" },
                    react_1["default"].createElement("span", { className: "text-[16px] leading-[9.57px] sm:text-[24px] sm:leading-[17.06px] lg:text-[18px] lg:leading-[22px] " + data_1.setFontFamily(locale, "bold") + " font-bold  text-[#9F8555]" }, data === null || data === void 0 ? void 0 : data.btnText),
                    react_1["default"].createElement("span", { className: "btn-circle-hover flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-[#594226] pl-[2px] sm:h-[40px] sm:w-[40px] lg:h-[48px] lg:w-[48px] " + (locale === "en" ? "" : "btn-ar-img-rotate") },
                        react_1["default"].createElement("img", { src: "/assets/icons/chervon-left-white.svg", className: "relative z-10 h-[9px] w-[6px] lg:h-[14px] lg:w-[9px]", alt: "chevron" }))))),
        react_1["default"].createElement(Box_1["default"], { className: "", sx: {
                "@media (min-width: 1024px)": {
                    display: "block"
                },
                "@media (max-width: 1023px)": { display: "none" }
            } },
            react_1["default"].createElement(ScreenContainer_1["default"], null,
                react_1["default"].createElement("div", { className: "flex justify-between" }, qlSliderData === null || qlSliderData === void 0 ? void 0 : qlSliderData.map(function (data, index) {
                    return (react_1["default"].createElement(PlatformCard_1["default"], { data: data, locale: locale, key: index }));
                })))),
        react_1["default"].createElement(Box_1["default"], { className: "sm:h-[280px] h-[260px] relative mt-[30px] sm:mt-[50px]", sx: {
                "@media (min-width: 1024px)": { display: "none" },
                "@media (max-width: 1023px)": {
                    display: "block"
                }
            } },
            react_1["default"].createElement(react_2.Swiper, { slidesPerView: "auto", spaceBetween: 24, centeredSlides: false, speed: 11000, freeMode: true, modules: [
                    modules_1.A11y,
                    modules_1.Navigation,
                    modules_1.FreeMode,
                    modules_1.Autoplay,
                ], breakpoints: {
                    480: {
                        spaceBetween: 12
                    }
                }, className: "simple-slider-swipper w-full", loop: false }, qlSliderData === null || qlSliderData === void 0 ? void 0 : qlSliderData.map(function (value, index) { return (react_1["default"].createElement(react_2.SwiperSlide, { virtualIndex: index, key: index, className: "!w-auto " + (index === 0 && (value === null || value === void 0 ? void 0 : value.locale) === "en" ? "ml-[20px] sm:ml-[60px]" : "") + " " + (index === (qlSliderData === null || qlSliderData === void 0 ? void 0 : qlSliderData.length) - 1 && (value === null || value === void 0 ? void 0 : value.locale) === "en" ? "mr-[20px] sm:mr-[60px]" : "") + " " + (index === 0 && (value === null || value === void 0 ? void 0 : value.locale) === "ar" ? "mr-[20px] sm:mr-[60px]" : "") },
                react_1["default"].createElement(PlatformCard_1["default"], { data: value, locale: locale, key: index }))); })))));
};
exports["default"] = QuickLinks;
