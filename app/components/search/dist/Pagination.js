"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Pagination = function (_a) {
    var locale = _a.locale, page = _a.page, setPage = _a.setPage, totalItems = _a.totalItems;
    var itemsPerPage = 6; // Number of items per page
    var totalPages = Math.ceil(totalItems / itemsPerPage); // Calculate total pages
    var _b = react_1.useState(1), num = _b[0], setNum = _b[1]; // Current page number
    // Update the pages whenever totalPages changes
    var pages = Array.from({ length: totalPages }, function (_, i) { return i + 1; }); // Generate page numbers
    function Next() {
        if (num < totalPages) {
            setNum(num + 1);
        }
    }
    function Back() {
        if (num > 1) {
            setNum(num - 1);
        }
    }
    react_1.useEffect(function () {
        setPage(num); // Update the parent component's page state whenever num changes
    }, [num, setPage]);
    return (react_1["default"].createElement("div", { className: "flex " + (locale === "en" ? "flex-row" : "flex-row-reverse") + " justify-between sm:h-[48px]" },
        react_1["default"].createElement("button", { onClick: Back, className: "prev sm:w-[48px] sm:h-[48px] w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#F5F6F6] hover:text-[#8B8B8B]" },
            react_1["default"].createElement("svg", { className: "w-4 h-4 fill-current ", viewBox: "0 0 20 20" },
                react_1["default"].createElement("path", { d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z", clipRule: "evenodd", fillRule: "evenodd" }))),
        react_1["default"].createElement("div", { className: "flex sm:gap-[29px] gap-[6px] " + (locale === "en" ? "flex-row" : "flex-row-reverse") }, pages.map(function (pg) { return (react_1["default"].createElement("button", { key: pg, onClick: function () { return setNum(pg); }, className: "sm:h-[48px] rounded-full flex justify-center items-center \n            sm:w-[48px] w-[25px] h-[25px] md:text-[17px] text-[9px] leading-[11px] md:leading-[21px] \n            " + (num === pg ? 'bg-white text-[#202020] font-bold border-[#EEEEEE] border-[1px] font-DINABold' : 'text-[#848484] font-medium font-DINAMedium bg-[#fff]') }, pg)); })),
        react_1["default"].createElement("button", { onClick: Next, className: "next sm:w-[48px] sm:h-[48px] w-[25px] h-[25px] flex justify-center items-center rounded-full bg-[#F5F6F6] hover:text-[#8B8B8B]" },
            react_1["default"].createElement("svg", { className: "w-4 h-4 fill-current ", viewBox: "0 0 20 20" },
                react_1["default"].createElement("path", { d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd", fillRule: "evenodd" })))));
};
exports["default"] = Pagination;
