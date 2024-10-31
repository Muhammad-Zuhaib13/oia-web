"use client";
"use strict";
exports.__esModule = true;
var i18n_config_1 = require("@/i18n.config");
// import Divider from "@mui/material/Divider";
var antd_1 = require("antd");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var fontResize_1 = require("../../utils/fontResize");
var RespLocaleSwitcher_1 = require("../RespLocaleSwitcher");
var ScreenContainer_1 = require("../screencontainer/ScreenContainer");
var stripLocale = function (pathname) {
    var parts = pathname.split("/");
    if (parts[1] && ["en", "ar"].includes(parts[1])) {
        return "/" + parts.slice(2).join("/");
    }
    return pathname;
};
var RespHeader = function (_a) {
    var data = _a.data, locale = _a.locale, navData = _a.navData;
    var pathname = navigation_1.usePathname();
    var strippedPathname = stripLocale(pathname);
    var isActive = function (href) {
        return strippedPathname === href;
    };
    var isAnySubLinkActive = function (subMenu) {
        var links = subMenu === null || subMenu === void 0 ? void 0 : subMenu.map(function (item) { return item.href; });
        return links === null || links === void 0 ? void 0 : links.some(function (link) { return isActive(link); });
    };
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var toggleDrawer = function (newOpen) { return function () {
        setOpen(newOpen);
    }; };
    var _c = react_1.useState(null), theme = _c[0], setTheme = _c[1];
    var _d = react_1.useState(false), subMenu = _d[0], setSubMenu = _d[1];
    //
    var _e = react_1.useState(null), openMenuId = _e[0], setOpenMenuId = _e[1];
    react_1.useEffect(function () {
        document.body.style.overflowY = open ? "clip" : "auto";
        return function () {
            document.body.style.overflowY = "auto";
        };
    }, [open]);
    var toggleSubMenu = function (menuId) {
        if (openMenuId === menuId) {
            setOpenMenuId(null);
        }
        else {
            setOpenMenuId(menuId);
        }
    };
    var toggleTheme = function () {
        var newTheme = theme === "dark" ? "light" : "dark";
        localStorage === null || localStorage === void 0 ? void 0 : localStorage.setItem("theme", newTheme);
        document.body.classList.remove("dark", "light");
        document.body.classList.add(newTheme);
        setTheme(newTheme);
    };
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement("div", { className: "relative" },
        react_1["default"].createElement("div", { className: "nav-pattern resp-header-section  realtive  !h-[80px] w-full pb-[13px] pt-[15px]" },
            react_1["default"].createElement(ScreenContainer_1["default"], null,
                react_1["default"].createElement("nav", { className: "relative z-20 flex items-center justify-between" },
                    react_1["default"].createElement("div", { className: "flex flex-row" },
                        react_1["default"].createElement("div", { className: "h-[40px]  w-auto shrink-0" },
                            react_1["default"].createElement("img", { src: "/assets/icons/nav-resp-logo.svg", alt: "OIA", className: "object-fit h-full w-full", onClick: function () {
                                    router.push("/");
                                } })),
                        react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "mx-[10px] my-auto h-[40px] bg-[#D0D0D0] sm:mx-[20px]" }),
                        react_1["default"].createElement("div", { className: "h-[40px] w-auto shrink-0" },
                            react_1["default"].createElement("img", { src: "/assets/icons/nav-resp-2040.svg", alt: "Oman 2040", className: "object-fit h-full w-full" }))),
                    react_1["default"].createElement("div", { className: "flex items-center justify-center gap-[9px]" },
                        react_1["default"].createElement("div", { className: "h-[30px] rounded-[3.33px] border-[0.83px] border-[#F4C76C] px-[6px]" },
                            react_1["default"].createElement(RespLocaleSwitcher_1["default"]
                            // @ts-ignore
                            , { 
                                // @ts-ignore
                                locale: locale, imgCls: "hidden" })),
                        react_1["default"].createElement("button", { onClick: function () { } },
                            react_1["default"].createElement("img", { src: "/assets/icons/nav-search.svg", alt: "navbar", className: "object-fit h-[30px] w-[30px]" })),
                        react_1["default"].createElement("button", { onClick: toggleDrawer(true) },
                            react_1["default"].createElement("img", { src: "/assets/icons/nav-hamburger.svg", alt: "navbar", className: "object-fit h-[30px] w-[30px]" }))))),
            react_1["default"].createElement("div", { className: "drawer w-full h-screen fixed inset-0 z-[999] transition-transform duration-300 " + (open ? "translate-x-0" : "translate-x-[110%] rtl:translate-x-[-110%]") },
                react_1["default"].createElement("div", { className: "h-screen w-full bg-[#FFFFFF]" },
                    react_1["default"].createElement("div", { className: "mid-max-px nav-pattern-resp fixed flex h-[60px] w-full items-center justify-between bg-[url('/assets/images/header-resp-patttern.png')] bg-cover bg-no-repeat py-[15px]" },
                        react_1["default"].createElement("div", { className: "flex flex-row" },
                            react_1["default"].createElement("div", { className: "h-[40px]  w-auto shrink-0" },
                                react_1["default"].createElement("img", { src: "/assets/icons/nav-resp-logo.svg", alt: "OIA", className: "object-fit h-full w-full", onClick: function () {
                                        router.push("/");
                                    } })),
                            react_1["default"].createElement(antd_1.Divider, { type: "vertical", className: "mx-[10px] my-auto h-[40px] bg-[#D0D0D0] sm:mx-[20px]" }),
                            react_1["default"].createElement("div", { className: "h-[40px] w-auto shrink-0" },
                                react_1["default"].createElement("img", { src: "/assets/icons/nav-resp-2040.svg", alt: "Oman 2040", className: "object-fit h-full w-full" }))),
                        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center" },
                            react_1["default"].createElement("button", { onClick: function () {
                                    setOpen(false);
                                }, className: "flex flex-col items-center justify-center" },
                                react_1["default"].createElement("img", { src: "/assets/icons/close-black.svg", alt: "close button" })))),
                    react_1["default"].createElement("div", { className: "bg-resp-nav h-screen overflow-y-auto w-full pb-[40px] pt-[100px] dark:bg-black " },
                        react_1["default"].createElement(ScreenContainer_1["default"], { className: "bg-resp-nav" },
                            react_1["default"].createElement("div", { className: "flex flex-col gap-[30px] pb-[40px]" },
                                react_1["default"].createElement("div", { className: "flex flex-row gap-[10px]" },
                                    react_1["default"].createElement("button", { className: "flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC] text-[18px] font-normal text-white", onClick: function () {
                                            return fontResize_1.increaseCSSProperties();
                                        } },
                                        react_1["default"].createElement("span", null, "A+")),
                                    react_1["default"].createElement("button", { className: "flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC] text-[18px] font-normal text-white", onClick: function () { return fontResize_1.resetCSSProperties(); } },
                                        react_1["default"].createElement("span", null, "A")),
                                    react_1["default"].createElement("button", { className: "flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC] text-[18px] font-normal text-white", onClick: function () {
                                            return fontResize_1.decreaseCSSProperties();
                                        } },
                                        react_1["default"].createElement("span", null, "A-")),
                                    react_1["default"].createElement("button", { className: "flex h-[38px] w-[38px] flex-col items-center justify-center bg-[#5F3F06CC]", onClick: function () { return toggleTheme(); } },
                                        react_1["default"].createElement("img", { src: "/assets/icons/theme-switch-white.svg", className: "object-fit h-[24px] w-[18px]" }))),
                                react_1["default"].createElement("nav", { className: "flex flex-col" },
                                    react_1["default"].createElement("div", { className: "nav-memu " },
                                        react_1["default"].createElement("ul", { className: "flex flex-col" }, navData &&
                                            navData.map(function (item, index) {
                                                return (react_1["default"].createElement("li", { key: index, className: (index === 0 ? "pb-[22px] sm:pb-[20px]" : "py-[22px] sm:py-[20px]") + " " + (navData.length - 1 ===
                                                        index
                                                        ? ""
                                                        : "border-b-[1px] border-b-[#C2C2C2]") }, item.subMenu &&
                                                    item.subMenu.length >
                                                        0 ? (react_1["default"].createElement("div", null,
                                                    react_1["default"].createElement("button", { onClick: function () {
                                                            return toggleSubMenu(item.id);
                                                        }, className: "navbarFontResp flex flex-row items-center gap-[8px] font-DINARegular " + (isAnySubLinkActive((item === null || item === void 0 ? void 0 : item.subMenu) ||
                                                            [])
                                                            ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                                            : "font-normal rtl:font-TajawalRegular") }, item === null || item === void 0 ? void 0 :
                                                        item.title,
                                                        react_1["default"].createElement("span", { className: "btn-chevron-down transform transition-transform" },
                                                            react_1["default"].createElement("img", { src: "/assets/icons/chevron-down.svg", className: "object-fit h-auto w-auto", alt: "chevron" }))),
                                                    openMenuId ===
                                                        item.id && (react_1["default"].createElement("ul", { className: "mt-[8px] flex flex-col gap-[4px] px-[14px] sm:mt-[20px] sm:gap-[20px]" }, item.subMenu.map(function (subItem, subIndex) { return (react_1["default"].createElement("li", { key: subIndex, onClick: function () {
                                                            return setOpen(false);
                                                        } }, (subItem === null || subItem === void 0 ? void 0 : subItem.href) ? (react_1["default"].createElement(i18n_config_1.Link, { href: "/" + (subItem === null || subItem === void 0 ? void 0 : subItem.href), onClick: function () {
                                                            return setOpenMenuId(null);
                                                        }, className: "navbarFontResp font-DINARegular  " + (isActive(subItem === null || subItem === void 0 ? void 0 : subItem.href)
                                                            ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                                            : "font-normal rtl:font-TajawalRegular") }, subItem === null || subItem === void 0 ? void 0 : subItem.title)) : (react_1["default"].createElement("span", { className: "navbarFontResp font-DINARegular " + (isActive(subItem === null || subItem === void 0 ? void 0 : subItem.href)
                                                            ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                                            : "font-normal rtl:font-TajawalRegular") }, subItem === null || subItem === void 0 ? void 0 : subItem.title)))); }))))) : (react_1["default"].createElement(i18n_config_1.Link, { href: "" + (item === null || item === void 0 ? void 0 : item.href), className: "navbarFontResp font-DINARegular   " + (isActive(item === null || item === void 0 ? void 0 : item.href)
                                                        ? "font-DINABold font-bold !text-[#5a4427] rtl:font-TajawalBold"
                                                        : "font-normal rtl:font-TajawalRegular"), onClick: function () {
                                                        return setOpen(false);
                                                    } }, item === null || item === void 0 ? void 0 : item.title))));
                                            }))))))))))));
};
exports["default"] = RespHeader;
