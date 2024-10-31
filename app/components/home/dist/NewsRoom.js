"use client";
"use strict";
exports.__esModule = true;
var i18n_config_1 = require("@/i18n.config");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var useDarkMode_1 = require("@/app/hooks/useDarkMode");
var NewsRoom = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
    var data = _a.data;
    var router = i18n_config_1.useRouter();
    var newsRoomTitleBtn = {
        title: data === null || data === void 0 ? void 0 : data.title,
        btnText: data === null || data === void 0 ? void 0 : data.btnText
    };
    var locale = (data === null || data === void 0 ? void 0 : data.currentLang) || "en";
    var cardData = [
        {
            id: (_c = (_b = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _b === void 0 ? void 0 : _b.newsCardOne) === null || _c === void 0 ? void 0 : _c.id,
            content: (_e = (_d = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _d === void 0 ? void 0 : _d.newsCardOne) === null || _e === void 0 ? void 0 : _e.content,
            date: (_g = (_f = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _f === void 0 ? void 0 : _f.newsCardOne) === null || _g === void 0 ? void 0 : _g.date,
            img: (_j = (_h = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _h === void 0 ? void 0 : _h.newsCardOne) === null || _j === void 0 ? void 0 : _j.img,
            locale: locale,
            desc: (_l = (_k = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _k === void 0 ? void 0 : _k.newsCardOne) === null || _l === void 0 ? void 0 : _l.desc,
            newsId: 2
        },
        {
            id: (_o = (_m = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _m === void 0 ? void 0 : _m.newsCardTwo) === null || _o === void 0 ? void 0 : _o.id,
            content: (_q = (_p = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _p === void 0 ? void 0 : _p.newsCardTwo) === null || _q === void 0 ? void 0 : _q.content,
            date: (_s = (_r = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _r === void 0 ? void 0 : _r.newsCardTwo) === null || _s === void 0 ? void 0 : _s.date,
            img: (_u = (_t = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _t === void 0 ? void 0 : _t.newsCardTwo) === null || _u === void 0 ? void 0 : _u.img,
            locale: locale,
            desc: (_w = (_v = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _v === void 0 ? void 0 : _v.newsCardTwo) === null || _w === void 0 ? void 0 : _w.desc,
            newsId: 3
        },
        {
            id: (_y = (_x = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _x === void 0 ? void 0 : _x.newsCardThree) === null || _y === void 0 ? void 0 : _y.id,
            content: (_0 = (_z = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _z === void 0 ? void 0 : _z.newsCardThree) === null || _0 === void 0 ? void 0 : _0.content,
            date: (_2 = (_1 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _1 === void 0 ? void 0 : _1.newsCardThree) === null || _2 === void 0 ? void 0 : _2.date,
            img: (_4 = (_3 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _3 === void 0 ? void 0 : _3.newsCardThree) === null || _4 === void 0 ? void 0 : _4.img,
            desc: (_6 = (_5 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _5 === void 0 ? void 0 : _5.newsCardThree) === null || _6 === void 0 ? void 0 : _6.desc,
            locale: locale,
            newsId: 4
        },
    ];
    var isDark = useDarkMode_1["default"]();
    return (React.createElement(ScreenContainer_1["default"], null,
        React.createElement("div", { className: "lg:pb-[95px] lg:pt-[80px] sm:py-[50px] py-[40px] flex flex-col lg:gap-[50px] sm:gap-[32px] gap-[20px]" },
            React.createElement("div", { className: "flex items-center justify-between\t" },
                React.createElement("div", null,
                    React.createElement("h2", { className: "mainHeading  rtl:font-TajawalBold" }, newsRoomTitleBtn === null || newsRoomTitleBtn === void 0 ? void 0 : newsRoomTitleBtn.title)),
                React.createElement("button", { className: "flex lg:h-[48px] w-auto cursor-default flex-row items-center gap-[8px] font-bold h-[30px]" },
                    React.createElement("span", { className: "cta  font-bold rtl:font-TajawalBold  text-[#9F8555]" }, newsRoomTitleBtn === null || newsRoomTitleBtn === void 0 ? void 0 : newsRoomTitleBtn.btnText),
                    React.createElement("span", { className: "btn-circle-hover shrink-0 flex lg:h-[48px] lg:w-[48px] sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] cursor-pointer items-center justify-center rounded-full pl-[2px] " + (locale === "en" ? "" : "btn-ar-img-rotate") },
                        React.createElement("img", { src: "/assets/icons/chervon-left-white.svg", className: "lg:h-[14px] lg:w-[9px] h-[9px] w-[6px] relative z-10", style: { filter: isDark ? "invert(1)" : "" }, alt: "chevron" })))),
            React.createElement("div", { className: " flex lg:flex-row sm:flex-col flex-col border-0 border-t-[1px] border-[#DCDEE0]" },
                React.createElement("div", { onClick: function () { return router.push(locale + "/media-center/news-details/" + 1); }, className: "flex-1 border-0 " + ((data === null || data === void 0 ? void 0 : data.currentLang) === "en" ? "lg:border-r-[1px]" : "lg:border-l-[1px]") + " border-[#DCDEE0] " + ((data === null || data === void 0 ? void 0 : data.currentLang) === "en" ? "lg:pr-[46px] sm:pr-0 pr-0" : "lg:pl-[46px] sm:pl-0 pl-0") + "  lg:pt-[20px] sm:pt-[18px] pt-[10px]" },
                    React.createElement("div", { className: "flex h-full w-full flex-col lg:gap-[22px] sm:gap-[18px] gap-[10px]" },
                        React.createElement("div", { className: "lg:h-[233px] sm:h-[250] h-[140px] w-full" },
                            React.createElement("img", { src: (_8 = (_7 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _7 === void 0 ? void 0 : _7.newsCardFour) === null || _8 === void 0 ? void 0 : _8.img, alt: "news1", className: "h-full w-full object-cover" })),
                        React.createElement("div", { className: "flex h-full flex-col  lg:gap-[50px] sm:gap-[30px] gap-[20px]" },
                            React.createElement("div", null,
                                React.createElement("p", { className: "line-clamp-2 rtl:font-TajawalMedium newsMainTitle" }, (_10 = (_9 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _9 === void 0 ? void 0 : _9.newsCardFour) === null || _10 === void 0 ? void 0 : _10.content),
                                React.createElement("p", { className: "line-clamp-2 paragraph rtl:font-TajawalRegular mt-[10px] !text-[16px]" }, (_12 = (_11 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _11 === void 0 ? void 0 : _11.newsCardFour) === null || _12 === void 0 ? void 0 : _12.desc)),
                            React.createElement("p", { className: "newsCreatedDate font-poppinsRegular rtl:font-TajawalBold" }, (_14 = (_13 = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _13 === void 0 ? void 0 : _13.newsCardFour) === null || _14 === void 0 ? void 0 : _14.date)))),
                React.createElement("div", { className: "flex flex-1 flex-col lg:gap-[20px] sm:gap-0 " + ((data === null || data === void 0 ? void 0 : data.currentLang) === "en" ? "lg:pl-[46px] sm:pl-0" : "lg:pr-[46px] sm:pr-0") + "  lg:pt-[20px] sm:pt-[30px] pt-[20px]" }, cardData === null || cardData === void 0 ? void 0 : cardData.map(function (value, index) {
                    var _a, _b;
                    return (React.createElement("div", { onClick: function () { return router.push(locale + "/media-center/news-details/" + (value === null || value === void 0 ? void 0 : value.newsId)); }, key: value.id, className: "flex cursor-pointer lg:gap-[31px] sm:gap-[48px] gap-[27px] border-t-[1px] lg:border-t-0 border-[#DCDEE0] " + (index !== (cardData === null || cardData === void 0 ? void 0 : cardData.length) - 1 ? "lg:border-b-[1px]" : "") + " lg:pb-[20px] lg:pt-0  sm:pt-[22px] pt-[12.6px] " + (index !== (cardData === null || cardData === void 0 ? void 0 : cardData.length) - 1 ? "sm:pb-[32px] pb-[20.4px]" : "sm:pb-0 pb-0") },
                        " ",
                        React.createElement("div", { className: "flex w-full lg:max-w-[326px] lg:h-[146px] sm:h-[161px] h-[90px] max-w-full flex-col   justify-between" },
                            React.createElement("div", { className: "h-[90px]" },
                                React.createElement("p", { className: "line-clamp-3 rtl:font-TajawalMedium newsListsTitle " }, value === null || value === void 0 ? void 0 : value.content),
                                React.createElement("p", { className: "line-clamp-2 paragraph rtl:font-TajawalRegular mt-[10px] " }, (_b = (_a = data === null || data === void 0 ? void 0 : data.newsRoomCards) === null || _a === void 0 ? void 0 : _a.newsCardFour) === null || _b === void 0 ? void 0 : _b.desc)),
                            React.createElement("p", { className: "newsCreatedDate rtl:font-TajawalBold lg:pb-0 sm:pb-[16px] pb-0" }, value === null || value === void 0 ? void 0 : value.date)),
                        React.createElement("div", { className: "w-full rounded-[6px]  lg:max-w-[239px] sm:max-w-[256px] sm:h-[161px] overflow-hidden max-w-[143.33px] h-[90px]" },
                            React.createElement("img", { src: value === null || value === void 0 ? void 0 : value.img, alt: "news1", className: "h-full w-full object-cover" }))));
                }))))));
};
exports["default"] = NewsRoom;
