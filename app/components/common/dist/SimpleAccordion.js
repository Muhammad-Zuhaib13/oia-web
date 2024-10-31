"use client";
"use strict";
exports.__esModule = true;
var Accordion = function (_a) {
    var data = _a.data, isOpen = _a.isOpen, onClick = _a.onClick, locale = _a.locale, className = _a.className;
    var _b = data || {}, title = _b.title, paras = _b.paras, list = _b.list;
    return (React.createElement("div", { className: className + " " },
        React.createElement("button", { onClick: onClick, className: "flex w-full items-center justify-between  py-[12px] sm:py-[20px] lg:py-[24px]" },
            React.createElement("span", { className: "subHeading !font-medium rtl:font-TajawalBold" }, title),
            isOpen ? (React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("g", { "clip-path": "url(#clip0_1356_2123)" },
                    React.createElement("path", { d: "M27 10H-7", stroke: "#CCCCCC", "stroke-width": "2" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_1356_2123" },
                        React.createElement("rect", { width: "20", height: "20", fill: "white", transform: "matrix(-1 0 0 1 20 0)" }))))) : (React.createElement("svg", { width: "20", height: "21", viewBox: "0 0 20 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("g", { "clip-path": "url(#clip0_3209_18)" },
                    React.createElement("path", { d: "M27 10.1523H-7", stroke: "#CCCCCC", "stroke-width": "2" }),
                    React.createElement("path", { d: "M10 -6.84766L10 27.1523", stroke: "#CCCCCC", "stroke-width": "2" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: "clip0_3209_18" },
                        React.createElement("rect", { width: "20", height: "20", fill: "white", transform: "matrix(-1 0 0 1 20 0.152344)" })))))),
        React.createElement("div", { className: "grid overflow-hidden  transition-all duration-300 ease-in-out  " + (isOpen
                ? "faq-answer mt-[30] grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 ") },
            React.createElement("div", { className: "overflow-hidden " },
                React.createElement("div", { className: "flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] pb-[12px] sm:pb-[20px] lg:pb-[24px]" },
                    paras &&
                        paras.map(function (para, index) {
                            return (React.createElement("div", { key: index },
                                React.createElement("p", { className: "paragraph rtl:font-TajawalRegular" }, para)));
                        }),
                    list && (React.createElement("ul", { className: "flex flex-col  gap-[16px] sm:gap-[20px] lg:gap-[24px] ltr:pl-[20px] rtl:pr-[20px]" }, list.map(function (item, index) { return (React.createElement("li", { key: index, className: "flex flex-row items-baseline gap-[12px]" },
                        React.createElement("span", { className: "relative flex flex-row gap-[4px] bullets-col  " + (locale === "ar"
                                ? "before:left-auto before:right-[-16px]"
                                : "before:left-[-16px]") + " paragraph before:absolute before:top-[14px] before:h-[10px] before:w-[10px] before:-translate-y-1/2 before:transform before:rounded-full before:content-[''] rtl:font-TajawalRegular " }, item))); }))))))));
};
exports["default"] = Accordion;
