"use client";
"use strict";
exports.__esModule = true;
var i18n_config_1 = require("@/i18n.config");
var PlatformCard = function (_a) {
    var locale = _a.locale, data = _a.data;
    var ImgCard = "/assets/images/home/platform-1.svg";
    var image = data.image, icon = data.icon, title = data.title, desc = data.desc, btn = data.btn, link = data.link;
    var router = i18n_config_1.useRouter();
    var handleRoute = function () {
        if (link) {
            window.open(link, "_blank", 'noopener,noreferrer');
        }
    };
    return (React.createElement("div", { className: "platfrom-card-container group relative flex h-auto w-[170px] cursor-pointer flex-col gap-[5px] sm:w-[250px] lg:w-[233px]", onClick: handleRoute },
        React.createElement("div", { className: "relative h-[170px] w-full overflow-hidden rounded-[4px] sm:min-h-[250px] lg:min-h-[235px]" },
            image ? (React.createElement("img", { src: image, className: "absolute h-full w-full rounded-[4px] object-cover", alt: title })) : (React.createElement("div", { className: "h-full w-full rounded-[4px] bg-[#FFF9ED]" })),
            React.createElement("div", { className: "duration-400 relative z-10 flex h-full w-full flex-col items-center justify-between bg-[#00000080] transition-opacity ease-in-out lg:bg-transparent lg:group-hover:bg-[#00000080]  " },
                React.createElement("div", { className: "m-auto flex h-[30px] w-auto items-center justify-center sm:h-[44px] lg:h-[50px]" }, icon && (React.createElement("img", { src: icon, alt: title, className: "duration-400 h-full w-auto object-fill transition-opacity ease-in-out lg:opacity-0 lg:group-hover:opacity-100" }))))),
        React.createElement("div", { className: "cardBgBottom w-full  rounded-[4px] " },
            React.createElement("h4", { className: "homeCardTitle px-[13px] py-[7px] max-[639px]:text-center rtl:font-TajawalMedium rtl:font-medium" }, title))));
};
exports["default"] = PlatformCard;
