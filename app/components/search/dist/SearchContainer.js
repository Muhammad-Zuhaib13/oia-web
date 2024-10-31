"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var ImageBanner_1 = require("../banners/ImageBanner");
var ScreenContainer_1 = require("../common/ScreenContainer");
var Pagination_1 = require("./Pagination");
var i18n_config_1 = require("@/i18n.config");
var SearchDataContainer = function (_a) {
    var locale = _a.locale;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(""), searchQuery = _b[0], setSearchQuery = _b[1];
    var handleSearch = function (event) {
        setSearchQuery(event.target.value);
    };
    var handleKeyDown = function (event) {
        if (event.key === "Enter" && searchQuery.length >= 1) {
            router.push("/search/" + searchQuery);
        }
    };
    var params = navigation_1.useParams();
    var bannerData = {
        title: "Search",
        description: "",
        image: "",
        locale: locale
    };
    var bannerDataAr = {
        title: "يبحث",
        description: "",
        image: "",
        locale: locale
    };
    var results = [
        {
            id: 1,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
        {
            id: 2,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
        {
            id: 3,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
        {
            id: 4,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
        {
            id: 5,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
        {
            id: 6,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
        {
            id: 7,
            title: "Oman",
            desc: "Oman is a country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes, including deserts, mountains, and a long coastline. Its capital, Muscat, is a historic city that reflects the nation’s rich maritime trade heritage. Oman is famous for its cultural blend of Arab, African, and South Asian influences, offering a variety of traditional music, crafts, and cuisine. In recent years, the country has become a popular tourist destination, attracting visitors with its natural beauty and outdoor activities like desert safaris and mountain trekking. While Oman’s economy has long been driven by oil, it is actively diversifying into sectors such as tourism and logistics.",
            link: "/oman"
        },
    ];
    var _c = react_1.useState(1), page = _c[0], setPage = _c[1];
    var paginatedCards = results === null || results === void 0 ? void 0 : results.slice((page - 1) * 6, page * 6);
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(ImageBanner_1["default"], { data: locale === "en" ? bannerData : bannerDataAr }),
        react_1["default"].createElement(ScreenContainer_1["default"], null,
            react_1["default"].createElement("div", { className: "py-[50px]" },
                react_1["default"].createElement("div", { className: "flex w-full flex-col gap-[20px]" },
                    react_1["default"].createElement("div", { className: "relative w-full" },
                        react_1["default"].createElement("input", { type: "text", className: "h-[57px] w-full rounded-[4px] border-[1px] border-[#E6E9EB] px-[55px] py-[16px] focus:outline-none rtl:font-GESndBookMedium font-DINAMedium placeholder:font-DINAMedium placeholder:text-[#30303099] focus:border-[#9F8555]  placeholder:rtl:font-TajawalMedium", onChange: handleSearch, onKeyDown: handleKeyDown, placeholder: locale === "en" ? "Search" : "يبحث" }),
                        react_1["default"].createElement("button", { className: "absolute left-[30px] rtl:right-[30px] top-[18px] z-10 h-[21px] w-[21px]" },
                            react_1["default"].createElement("img", { src: "/assets/icons/search-icon.svg", className: "" }))),
                    react_1["default"].createElement("div", { className: "flex justify-between" },
                        react_1["default"].createElement("div", null),
                        react_1["default"].createElement("div", { className: "h-[56px] w-full max-w-[444px] border-[1px] border-[#E6E9EB]" },
                            react_1["default"].createElement("select", { className: "news-select h-full w-full px-[20px] py-[16px] " + (locale === "en" ? "request-select-en" : "request-select-ar") + " placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal focus:outline-none rtl:placeholder:font-TajawalRegular" },
                                react_1["default"].createElement("option", null, "This Month"),
                                react_1["default"].createElement("option", null, "Last Month"),
                                react_1["default"].createElement("option", null, "This Year"))))),
                react_1["default"].createElement("div", { className: "search-results" }, paginatedCards === null || paginatedCards === void 0 ? void 0 : paginatedCards.map(function (item, index) { return (react_1["default"].createElement(i18n_config_1.Link, { href: item.link, key: index, passHref: true },
                    react_1["default"].createElement("div", { className: "flex flex-col gap-[30px] pt-[30px] cursor-pointer" },
                        react_1["default"].createElement("h2", { className: "mainHeading rtl:font-TajawalBold" }, item === null || item === void 0 ? void 0 : item.title),
                        react_1["default"].createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, item === null || item === void 0 ? void 0 : item.desc),
                        react_1["default"].createElement("hr", null)))); })),
                react_1["default"].createElement("div", { className: "mt-[20px] sm:mt-[50px] lg:mt-[100px]" },
                    react_1["default"].createElement(Pagination_1["default"], { locale: locale, totalItems: results === null || results === void 0 ? void 0 : results.length, page: page, setPage: setPage }))))));
};
exports["default"] = SearchDataContainer;
