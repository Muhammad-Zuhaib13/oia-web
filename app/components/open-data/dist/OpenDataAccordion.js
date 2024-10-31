"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var PolygonBg_1 = require("../common/PolygonBg");
var ScreenContainer_1 = require("../common/ScreenContainer");
var Accordion_1 = require("./Accordion");
var OpenDataAccordion = function (_a) {
    var data = _a.data, locale = _a.locale;
    console.table(data);
    var _b = react_1.useState(1), activeAccordion = _b[0], setActiveAccordion = _b[1];
    var toggleAccordion = function (id) {
        setActiveAccordion(activeAccordion === id ? null : id);
    };
    if (data) {
        return (React.createElement(PolygonBg_1["default"], null,
            React.createElement(ScreenContainer_1["default"], null, data === null || data === void 0 ? void 0 : data.map(function (item, index) {
                return (React.createElement(Accordion_1["default"], { key: index, data: item, locale: locale, isOpen: activeAccordion === item.id, onClick: function () {
                        return toggleAccordion(item.id);
                    }, className: index === 0
                        ? "border-b-[1px] border-t-[1px] border-col"
                        : "border-b-[1px] border-col" }));
            }))));
    }
    else {
        React.createElement(React.Fragment, null);
    }
};
exports["default"] = OpenDataAccordion;
