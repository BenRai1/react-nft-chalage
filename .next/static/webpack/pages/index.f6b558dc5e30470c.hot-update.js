"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Apelist.js":
/*!*******************************!*\
  !*** ./components/Apelist.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Apelist; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CollectionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CollectionCard */ \"./components/CollectionCard.js\");\n\n\n\nvar styles = {\n    apeList: \"flex bg-black overflow-x-auto no-scrollbar\"\n};\nfunction Apelist(param) {\n    var apeListData = param.apeListData;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.apeList,\n        children: apeListData.map(function(ape) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CollectionCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    id: ape.token_id,\n                    name: ape.name,\n                    url: ape.image_url\n                }, ape.token_id, false, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Apelist.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/benrai/folder/react-nft-chalange/components/Apelist.js\",\n                lineNumber: 12,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/benrai/folder/react-nft-chalange/components/Apelist.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n};\n_c = Apelist;\nvar _c;\n$RefreshReg$(_c, \"Apelist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwZWxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDb0I7QUFFN0MsSUFBTUUsTUFBTSxHQUFHO0lBQ1hDLE9BQU8sRUFBRyw0Q0FBMEM7Q0FDdkQ7QUFFYyxTQUFTQyxPQUFPLENBQUMsS0FBZSxFQUFFO1FBQWpCLFdBQWEsR0FBYixLQUFlLENBQWJDLFdBQVc7O0lBQ3pDLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUwsTUFBTSxDQUFDQyxPQUFPO2tCQUN6QkUsV0FBVyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsR0FBRztpQ0FDakIsOERBQUNILEtBQUc7MEJBQ0EsNEVBQUNMLHVEQUFjO29CQUVYUyxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsUUFBUTtvQkFDaEJDLElBQUksRUFBRUgsR0FBRyxDQUFDRyxJQUFJO29CQUNkQyxHQUFHLEVBQUVKLEdBQUcsQ0FBQ0ssU0FBUzttQkFIYkwsR0FBRyxDQUFDRSxRQUFROzs7O3lCQUluQjs7Ozs7cUJBQ0E7U0FDVCxDQUFDOzs7OztZQUNBLENBQ1Q7Q0FDSjtBQWZ1QlAsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FwZWxpc3QuanM/YTZiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBDb2xsZWN0aW9uQ2FyZCBmcm9tIFwiLi9Db2xsZWN0aW9uQ2FyZFwiXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcGVMaXN0OiBgZmxleCBiZy1ibGFjayBvdmVyZmxvdy14LWF1dG8gbm8tc2Nyb2xsYmFyYCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBlbGlzdCh7IGFwZUxpc3REYXRhIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwZUxpc3R9PlxuICAgICAgICAgICAge2FwZUxpc3REYXRhLm1hcCgoYXBlKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPENvbGxlY3Rpb25DYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2FwZS50b2tlbl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXthcGUudG9rZW5faWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXthcGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YXBlLmltYWdlX3VybH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb2xsZWN0aW9uQ2FyZCIsInN0eWxlcyIsImFwZUxpc3QiLCJBcGVsaXN0IiwiYXBlTGlzdERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJhcGUiLCJpZCIsInRva2VuX2lkIiwibmFtZSIsInVybCIsImltYWdlX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Apelist.js\n"));

/***/ })

});