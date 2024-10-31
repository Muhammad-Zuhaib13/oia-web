"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var fontResize_1 = require("../../utils/fontResize");
var LocaleSwitcher_1 = require("../LocaleSwitcher");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var Navbar_1 = require("./Navbar");
var stripLocale = function (pathname) {
    var parts = pathname.split("/");
    if (parts[1] && ["en", "ar"].includes(parts[1])) {
        return "/" + parts.slice(2).join("/");
    }
    return pathname;
};
var DesktopHeader = function (_a) {
    var data = _a.data, navData = _a.navData, locale = _a.locale;
    var pathname = navigation_1.usePathname();
    var strippedPathname = stripLocale(pathname);
    var _b = react_1.useState(null), theme = _b[0], setTheme = _b[1];
    var isActive = function (href) {
        return strippedPathname === href;
    };
    var isAnySubLinkActive = function (links) {
        return links.some(function (link) { return isActive(link); });
    };
    var _c = react_1.useState(false), addCollapseClass = _c[0], setAddCollapseClass = _c[1];
    var addToggleClass = function () {
        setAddCollapseClass(!addCollapseClass);
    };
    react_1["default"].useState(null);
    var _d = react_1["default"].useState(null), anchorElAccess = _d[0], setAnchorElAcess = _d[1];
    var openAccess = Boolean(anchorElAccess);
    var handleClickAccess = function (event) {
        setAnchorElAcess(event.currentTarget);
    };
    var handleCloseAccess = function () {
        setAnchorElAcess(null);
    };
    var _e = react_1.useState(false), isOpen = _e[0], setIsOpen = _e[1];
    var dropdownRef = react_1.useRef(null);
    var toggleDropdown = function () {
        setIsOpen(!isOpen);
    };
    react_1.useEffect(function () {
        var handleClickOutside = function (event) {
            var _a;
            if ((dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) &&
                !((_a = dropdownRef === null || dropdownRef === void 0 ? void 0 : dropdownRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                setIsOpen(false);
            }
        };
        window.addEventListener("click", handleClickOutside);
        return function () {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);
    var toggleTheme = function () {
        var newTheme = theme === "dark" ? "light" : "dark";
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("theme", newTheme);
        document.body.classList.remove("dark", "light");
        document.body.classList.add(newTheme);
        setTheme(newTheme);
    };
    var dirChange = locale === "en" ? "row" : "rtl:flex-row-reverse";
    //
    var router = navigation_1.useRouter();
    var _f = react_1.useState(""), searchQuery = _f[0], setSearchQuery = _f[1];
    var handleSearch = function (event) {
        setSearchQuery(event.target.value);
    };
    var handleKeyDown = function (event) {
        if (event.key === "Enter" && searchQuery.length >= 1) {
            router.push("/search/" + searchQuery);
        }
    };
    return (react_1["default"].createElement("div", { className: " nav-pattern desktop-header-section w-full flex items-center justify-center" },
        react_1["default"].createElement(ScreenContainer_1["default"], null,
            react_1["default"].createElement("div", { className: "relative flex items-center justify-between" },
                react_1["default"].createElement("div", { className: "flex items-baseline gap-[20px]" },
                    react_1["default"].createElement("img", { src: "/assets/icons/oia-nav.svg", alt: "oia-logo", className: "object-fit cursor-pointer", onClick: function () { router.push('/'); } }),
                    react_1["default"].createElement("img", { src: "/assets/icons/oia-2024.svg", alt: "oia-2024", className: "object-fit h-full w-full" })),
                react_1["default"].createElement("div", { className: "flex flex-col gap-[27px]" },
                    react_1["default"].createElement("div", { className: "relative z-30 flex justify-end" },
                        react_1["default"].createElement("ul", { className: "flex  flex-row gap-[10px] rtl:flex-row-reverse items-center" },
                            react_1["default"].createElement("li", { className: "flex items-center relative" },
                                react_1["default"].createElement("div", { ref: dropdownRef, className: "flex items-center relative" },
                                    react_1["default"].createElement("button", { className: "", id: "access", onClick: toggleDropdown },
                                        react_1["default"].createElement("img", { src: "/assets/icons/access-icon.svg", className: "object-fit h-[36px] w-[46px]", alt: "accessibility" })),
                                    react_1["default"].createElement("div", { className: " " + (isOpen ? "h-auto opacity-100" : "h-0 opacity-0 hidden") + " transition-all duration-300 ease-in-out translate-x-[-84%] rtl:translate-x-[84%] translate-y-[18px] min-w-[250px] w-full max-w-auto absolute top-[36px]" },
                                        react_1["default"].createElement("div", { className: "access-dropdown relative before:right-[8px] rtl:before:right-auto rtl:before:left-[6px] w-full border-t-[3px] border-t-[#F4C76C] bg-[#594226] ", style: {
                                                boxShadow: "0px 0px 20px 0px #0000001A"
                                            } },
                                            react_1["default"].createElement("ul", null,
                                                react_1["default"].createElement("li", null,
                                                    react_1["default"].createElement("span", { className: "block border-b-[1px] border-b-[#F4C76C] px-[20px] py-[12px] font-DINABold text-[14px] font-bold leading-[17px] text-[#F4C76C] rtl:font-TajawalBold ", onClick: handleCloseAccess }, locale === "en"
                                                        ? "Accessibility"
                                                        : "إمكانية الوصول")),
                                                react_1["default"].createElement("li", null,
                                                    react_1["default"].createElement("span", { className: "flex flex-row items-center justify-between border-b-[1px] border-b-[#F4C76C] px-[20px] py-[12px]" },
                                                        react_1["default"].createElement("span", { className: "font-DINAMedium text-[14px] font-medium leading-[17px] text-[#F4C76C] rtl:font-TajawalMedium " }, locale === "en"
                                                            ? "Font Size"
                                                            : "حجم الخط"),
                                                        react_1["default"].createElement("span", { className: "flex flex-row items-center" },
                                                            react_1["default"].createElement("button", { className: "border-r-[1px] border-r-[#FFFFFF] px-[8px] font-DINAMedium text-[14px] font-medium leading-[16px] text-[#F4C76C] rtl:border-r-0 rtl:font-TajawalMedium", onClick: fontResize_1.decreaseCSSProperties }, "A-"),
                                                            react_1["default"].createElement("button", { className: "border-r-[1px] border-r-[#FFFFFF] px-[8px] font-DINAMedium text-[14px] font-medium leading-[16px] text-[#F4C76C] rtl:border-l-[1px] rtl:border-l-[#FFFFFF] rtl:font-TajawalMedium", onClick: fontResize_1.resetCSSProperties }, "A"),
                                                            react_1["default"].createElement("button", { className: "pl-[8px] font-DINAMedium text-[14px] font-medium leading-[16px] text-[#F4C76C] rtl:px-[8px] rtl:font-TajawalMedium", onClick: fontResize_1.increaseCSSProperties }, "A+")))),
                                                react_1["default"].createElement("li", { onClick: function () { handleCloseAccess(); toggleTheme(); } },
                                                    react_1["default"].createElement("span", { className: "flex flex-row items-center justify-between border-b-[1px] border-b-[#F4C76C] px-[20px] py-[12px] cursor-pointer" },
                                                        react_1["default"].createElement("span", { className: "font-DINAMedium text-[14px] font-medium leading-[17px] text-[#F4C76C] rtl:font-TajawalMedium" }, locale === "en"
                                                            ? "Contrast"
                                                            : "مقابلة"),
                                                        react_1["default"].createElement("span", { className: "" },
                                                            react_1["default"].createElement("img", { src: "/assets/icons/theme-switch-br.svg", alt: "contrast", className: "object-fit h-auto w-auto" }))))))))),
                            react_1["default"].createElement("li", { className: "flex items-center" },
                                react_1["default"].createElement("div", { className: "relative flex w-full items-center" },
                                    react_1["default"].createElement("input", { 
                                        // type="text"
                                        className: "rtl:font-GESndBookMedium h-[32px] w-[220px] rounded-[4px] border-[1px]  border-[#F4C76C] bg-transparent px-[12px] py-[9px] font-DINAMedium text-[12px] font-medium text-[#FFFFFF] placeholder:font-DINAMedium placeholder:text-[#FFFFFF] focus:border-[#9F8555] focus:outline-none placeholder:rtl:font-TajawalMedium", onChange: handleSearch, onKeyDown: handleKeyDown, type: "search", placeholder: locale === "en" ? "Search" : "يبحث" }),
                                    react_1["default"].createElement("button", { className: "absolute right-3 flex items-center rtl:right-[88%]" },
                                        react_1["default"].createElement("img", { src: "/assets/icons/search-icon-white.svg", alt: "search icon", width: 20, height: 20 })))),
                            react_1["default"].createElement("li", { className: "h-[32px] w-[80px]  rounded-[4px] border-[1px] border-[#F4C76C]" },
                                react_1["default"].createElement(LocaleSwitcher_1["default"], { locale: locale })))),
                    react_1["default"].createElement(Navbar_1["default"], { locale: locale, data: navData }))))));
};
exports["default"] = DesktopHeader;
