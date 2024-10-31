"use client";
"use strict";
exports.__esModule = true;
var DesktopHeader_1 = require("./DesktopHeader");
var RespHeader_1 = require("./RespHeader");
var stripLocale = function (pathname) {
    var parts = pathname.split("/");
    if (parts[1] && ["en", "ar"].includes(parts[1])) {
        return "/" + parts.slice(2).join("/");
    }
    return pathname;
};
var Header = function (_a) {
    var data = _a.data, locale = _a.locale, navData = _a.navData;
    return (React.createElement("div", { className: "header-section sticky left-0 right-0 top-[-1px] z-[1000]" },
        React.createElement("div", { className: "hidden xl:block" },
            React.createElement(DesktopHeader_1["default"], { data: data, locale: locale, navData: navData })),
        React.createElement("div", { className: "block xl:hidden" },
            React.createElement(RespHeader_1["default"], { data: data, locale: locale, navData: navData })),
        React.createElement("div", { className: "w-full h-[1px] bg-[#0000004D]" })));
};
exports["default"] = Header;
