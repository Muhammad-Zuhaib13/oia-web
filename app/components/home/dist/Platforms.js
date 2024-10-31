"use client";
"use strict";
exports.__esModule = true;
var PolygonBg_1 = require("@/app/components/common/PolygonBg");
var react_1 = require("react");
require("swiper/css");
require("swiper/css/pagination");
var modules_1 = require("swiper/modules");
var react_2 = require("swiper/react");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var SimpleHeadingandText_1 = require("../simple-heading-text/SimpleHeadingandText");
var PlatformCard_1 = require("./PlatformCard");
var Platforms = function (_a) {
    var data = _a.data, locale = _a.locale;
    var arDataSlider = [
        {
            id: "2",
            image: "/assets/images/home/jadarah-slide-img.jpg",
            icon: "/assets/images/home/jadarah-icon.svg",
            desc: "",
            title: "جدارة",
            btn: "تعرف على المزيد",
            locale: locale,
            link: "https://jadarah.oia.gov.om/"
        },
        {
            id: "1",
            image: "/assets/images/home/qiman-slide-img.jpg",
            icon: "/assets/images/home/qimam-icon.svg",
            desc: "",
            title: "قمم",
            btn: "تعرف على المزيد",
            locale: locale,
            link: "https://qimam.oia.gov.om/"
        },
        {
            id: "4",
            image: "/assets/images/home/future-of-oman-slide-img.jpg",
            icon: "/assets/images/home/future-fund-icon.svg",
            desc: "",
            title: "صندوق عمان المستقبل",
            btn: "تعرف على المزيد",
            locale: locale,
            link: "https://www.futurefund.om/FutureFund/Home"
        },
        {
            id: "3",
            image: "/assets/images/home/e-procurement-slide-img.jpg",
            icon: "",
            desc: "",
            title: "تسجيل الموردين",
            btn: "تعرف على المزيد",
            locale: locale,
            link: "http://supplier.oia.gov.om/"
        },
        {
            id: "6",
            image: "/assets/images/home/tiqat-slide-img.jpg",
            icon: "/assets/images/home/thiqat-icon.svg",
            desc: "",
            title: "ثقات",
            btn: "تعرف على المزيد",
            locale: locale,
            link: "https://thiqat.oia.gov.om/index1.html"
        },
        {
            id: "5",
            image: "/assets/images/home/whistleblowing-slide-img.jpg",
            icon: "",
            desc: "",
            title: "الإبلاغ عن المخالفات",
            btn: "تعرف على المزيد",
            locale: locale,
            link: "/governance/whistleblow"
        }
    ];
    var enDataSlider = [
        {
            id: "2",
            image: "/assets/images/home/jadarah-slide-img.jpg",
            icon: "/assets/images/home/jadarah-icon.svg",
            desc: "Attract, Motivate, Develop, and Retain Top Talents.",
            title: "Jadarah",
            link: "https://jadarah.oia.gov.om/",
            btn: "Learn More",
            locale: locale
        },
        {
            id: "1",
            image: "/assets/images/home/qiman-slide-img.jpg",
            icon: "/assets/images/home/qimam-icon.svg",
            desc: "SME research, development and innovation programmes.",
            title: "Qimam",
            link: "https://qimam.oia.gov.om/",
            btn: "Learn More",
            locale: locale
        },
        {
            id: "4",
            image: "/assets/images/home/future-of-oman-slide-img.jpg",
            icon: "/assets/images/home/future-fund-icon.svg",
            desc: "Shaping the future of Oman through innovation and investment.",
            title: "Future of Oman",
            link: "https://www.futurefund.om/FutureFund/Home",
            btn: "Learn More",
            locale: locale
        },
        {
            id: "3",
            image: "/assets/images/home/e-procurement-slide-img.jpg",
            icon: "",
            desc: "Streamlining procurement processes for enhanced efficiency.",
            title: "E-Procurement",
            link: "http://supplier.oia.gov.om/",
            btn: "Learn More",
            locale: locale
        },
        {
            id: "6",
            image: "/assets/images/home/tiqat-slide-img.jpg",
            icon: "/assets/images/home/thiqat-icon.svg",
            desc: "Apply for board memberships in Entities affiliated with OIA.",
            title: "Thiqat",
            link: "https://thiqat.oia.gov.om/index1.html",
            btn: "Learn More",
            locale: locale
        },
        {
            id: "5",
            image: "/assets/images/home/whistleblowing-slide-img.jpg",
            icon: "",
            desc: "Confidentially report concerns related to unethical behavior.",
            title: "Whistleblowing",
            link: "/governance/whistleblow",
            btn: "Learn More",
            locale: locale
        }
    ];
    var quicklink = {
        title: locale === "en" ? "Platforms" : "روابط المنصات ",
        para: "",
        locale: locale
    };
    var qlSliderData = locale === "en" ? enDataSlider : arDataSlider;
    return (react_1["default"].createElement(PolygonBg_1["default"], null,
        react_1["default"].createElement("div", { className: "flex flex-col gap-[30px] lg:gap-[50px]  " },
            react_1["default"].createElement(SimpleHeadingandText_1["default"], { data: quicklink }),
            react_1["default"].createElement(ScreenContainer_1["default"], null,
                react_1["default"].createElement("div", { className: "relative flex w-full flex-col gap-[12px] sm:gap-[18px] lg:gap-[50px]" },
                    react_1["default"].createElement(react_2.Swiper, { slidesPerView: "auto", spaceBetween: 0, centeredSlides: false, freeMode: true, speed: 11000, grabCursor: true, modules: [
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
                                slidesPerView: 5,
                                spaceBetween: 24
                            }
                        }, pagination: {
                            clickable: true,
                            el: ".custom-bullets",
                            renderBullet: function (index, className) {
                                return "<span class=\"" + className + " custom-bullet\"></span>";
                            }
                        }, className: "swiper-slider-common w-full abcd", loop: true }, qlSliderData === null || qlSliderData === void 0 ? void 0 :
                        qlSliderData.map(function (value, index) { return (react_1["default"].createElement(react_2.SwiperSlide, { virtualIndex: index, key: index, className: "!w-auto ltr:mr-[12px] ltr:md:!mr-[24px] rtl:!ml-[12px] rtl:md:!ml-[24px]" },
                            react_1["default"].createElement(PlatformCard_1["default"], { data: value, locale: locale, key: index }))); }),
                        react_1["default"].createElement("div", { className: "custom-bullets mt-[18px] flex justify-center lg:mt-[50px] lg:!hidden" })))))));
};
exports["default"] = Platforms;
