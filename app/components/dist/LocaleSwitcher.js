"use client";
"use strict";
exports.__esModule = true;
var i18n_config_1 = require("@/i18n.config");
function LocaleSwitcher(_a) {
    var locale = _a.locale, _b = _a.imgCls, imgCls = _b === void 0 ? "" : _b;
    var pathname = i18n_config_1.usePathname();
    var router = i18n_config_1.useRouter();
    var getNextLocale = function (currentLocale) {
        var currentIndex = i18n_config_1.locales.indexOf(currentLocale);
        var nextIndex = (currentIndex + 1) % i18n_config_1.locales.length;
        return i18n_config_1.locales[nextIndex];
    };
    var changeLang = function () {
        var newLocale = getNextLocale(locale);
        router.replace(pathname, { locale: newLocale });
    };
    var switchText = function () {
        if (locale === "en") {
            return "العربية";
        }
        else if (locale === "ar") {
            return "English";
        }
    };
    return (React.createElement("div", { className: "lang-switch h-full flex items-center justify-center w-full" },
        React.createElement("button", { className: "lang-dropdown-select flex justify-center items-center cursor-pointer flex-row gap-[4px]  rounded-[6px] bg-transparent text-white ", style: { direction: "ltr" }, onClick: changeLang },
            React.createElement("span", { className: "font-medium text-[14px] leading-[14px] text-white uppercase rtl:font-fontDINAMedium ltr:font-TajawalMedium" }, switchText()),
            React.createElement("img", { src: "/assets/icons/chervon-left-white.svg", alt: "chevron", className: "" + imgCls }))));
}
exports["default"] = LocaleSwitcher;
