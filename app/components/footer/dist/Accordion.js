"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Accordion = function (_a) {
    var title = _a.title, answer = _a.answer, children = _a.children, _b = _a.ansBtnCls, ansBtnCls = _b === void 0 ? "sm:py-[20px] py-[12px]" : _b;
    var _c = react_1.useState(false), accordionOpen = _c[0], setAccordionOpen = _c[1];
    var clipId = react_1.useId();
    return (React.createElement("div", { className: "tcvi-wrapper border-b-[1px] border-b-[#FFFFFF26]" },
        React.createElement("button", { onClick: function () { return setAccordionOpen(!accordionOpen); }, className: "flex w-full items-center justify-between " + (accordionOpen ? ansBtnCls + " open" : "sm:py-[20px] py-[12px]") },
            React.createElement("span", { className: "font-DINABold font-bold capitalize text-[#ffffff]  rtl:font-TajawalBold footerLabel" }, title),
            React.createElement("span", { className: "flex h-[30px] w-[30px] flex-col items-center justify-center rounded-full bg-[#D8B97A] md:h-[40px] md:w-[40px] sm:h-[24px] sm:w-[24px]" }, accordionOpen ? (React.createElement("svg", { width: "8", height: "9", viewBox: "0 0 8 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M0 4.5H8", stroke: "white" }))) : (React.createElement("svg", { width: "8", height: "9", viewBox: "0 0 8 9", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("g", { "clip-path": "url(#" + clipId + ")" },
                    React.createElement("path", { d: "M0 4.5H8", stroke: "white" }),
                    React.createElement("path", { d: "M4 0.5L4 8.5", stroke: "white" })),
                React.createElement("defs", null,
                    React.createElement("clipPath", { id: clipId },
                        React.createElement("rect", { width: "8", height: "8", fill: "white", transform: "translate(0 0.75)" }))))))),
        React.createElement("div", { className: "grid overflow-hidden text-sm text-slate-600 transition-all duration-300 ease-in-out " + (accordionOpen
                ? "mt-[30] grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0 ") },
            React.createElement("div", { className: "overflow-hidden " + (accordionOpen ? "mb-[20px] sm:mb-[30px]" : "") }, children))));
};
exports["default"] = Accordion;
