"use strict";
exports.__esModule = true;
var zustand_1 = require("zustand");
var useFontSizeStore = zustand_1["default"](function (set, get) { return ({
    fontSize: 0,
    initialFontSize: 0,
    increment: function () { return set(function (state) {
        var newFontSize = state.fontSize + 1;
        return { fontSize: newFontSize <= state.initialFontSize + 3 ? newFontSize : state.fontSize };
    }); },
    decrement: function () { return set(function (state) {
        var newFontSize = state.fontSize - 1;
        return { fontSize: newFontSize >= state.initialFontSize - 3 ? newFontSize : state.fontSize };
    }); },
    reset: function () { return set(function (state) { return ({ fontSize: state.initialFontSize }); }); },
    initializeFontSize: function (initialFontSize) { return set({ fontSize: initialFontSize, initialFontSize: initialFontSize }); }
}); });
exports["default"] = useFontSizeStore;
