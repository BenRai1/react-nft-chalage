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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _home_benrai_folder_react_nft_chalange_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_benrai_folder_react_nft_chalange_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_benrai_folder_react_nft_chalange_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_Apelist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Apelist */ \"./components/Apelist.js\");\n/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Main */ \"./components/Main.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]), apeListData = ref[0], setApeListData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0), selectedApeId = ref1[0], setSelectedApeId = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function() {\n        var getMyNfts = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_home_benrai_folder_react_nft_chalange_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var openseaData;\n                return _home_benrai_folder_react_nft_chalange_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return axios__WEBPACK_IMPORTED_MODULE_8___default().get(\"https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0xf888D486EB686ECcb44ff354D8B2cB5388bcf25C&order_direction=desc&offset=0&limit=20&include_orders=false\");\n                        case 2:\n                            openseaData = _ctx.sent;\n                            console.log(openseaData.data.assets);\n                            setApeListData(openseaData.data.assets);\n                            console.log(\"Apelist Data: \".concat(apeListData));\n                        case 6:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getMyNfts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        return getMyNfts;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/benrai/folder/react-nft-chalange/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                selctedApe: selectedApeId,\n                apeListData: apeListData\n            }, void 0, false, {\n                fileName: \"/home/benrai/folder/react-nft-chalange/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Apelist__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                apeListData: apeListData,\n                setSelectedApeId: setSelectedApeId,\n                selectedApeId: selectedApeId\n            }, void 0, false, {\n                fileName: \"/home/benrai/folder/react-nft-chalange/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/benrai/folder/react-nft-chalange/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"DE7JtGNpSRLmzKOxWAHDsA8vHVU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTRCO0FBQ0U7QUFDVztBQUNFO0FBQ047QUFDTTtBQUNsQjtBQUVWLFNBQVNRLElBQUksR0FBRzs7SUFDM0IsSUFBc0NILEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBM0NJLFdBQVcsR0FBb0JKLEdBQVksR0FBaEMsRUFBRUssY0FBYyxHQUFJTCxHQUFZLEdBQWhCO0lBQ2xDLElBQTBDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEVBQTlDTSxhQUFhLEdBQXNCTixJQUFXLEdBQWpDLEVBQUVPLGdCQUFnQixHQUFJUCxJQUFXLEdBQWY7SUFFdENDLGdEQUFTLENBQUMsV0FBTTtRQUNaLElBQU1PLFNBQVM7dUJBQUcseVBBQVk7b0JBQ3BCQyxXQUFXOzs7OzttQ0FBU1AsZ0RBQVMsQ0FDL0IsNktBQTZLLENBQ2hMOzs0QkFGS08sV0FBVyxZQUVoQjs0QkFDREUsT0FBTyxDQUFDQyxHQUFHLENBQUNILFdBQVcsQ0FBQ0ksSUFBSSxDQUFDQyxNQUFNLENBQUM7NEJBQ3BDVCxjQUFjLENBQUNJLFdBQVcsQ0FBQ0ksSUFBSSxDQUFDQyxNQUFNLENBQUM7NEJBQ3ZDSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZSxDQUFjLE9BQVpSLFdBQVcsQ0FBRSxDQUFDOzs7Ozs7YUFDOUM7NEJBUEtJLFNBQVM7OztXQU9kO1FBQ0QsT0FBT0EsU0FBUztLQUNuQixFQUFFLEVBQUUsQ0FBQztJQUVOLHFCQUNJLDhEQUFDTyxLQUFHOzswQkFDQSw4REFBQ2xCLDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDRSx3REFBSTtnQkFBQ2lCLFVBQVUsRUFBRVYsYUFBYTtnQkFBRUYsV0FBVyxFQUFFQSxXQUFXOzs7OztvQkFBSTswQkFDN0QsOERBQUNOLDJEQUFPO2dCQUNKTSxXQUFXLEVBQUVBLFdBQVc7Z0JBQ3hCRyxnQkFBZ0IsRUFBRUEsZ0JBQWdCO2dCQUNsQ0QsYUFBYSxFQUFFQSxhQUFhOzs7OztvQkFDOUI7Ozs7OztZQUNBLENBQ1Q7Q0FDSjtHQTNCdUJILElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBBcGVsaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwZWxpc3RcIlxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFpblwiXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFthcGVMaXN0RGF0YSwgc2V0QXBlTGlzdERhdGFdID0gdXNlU3RhdGUoW10pXG4gICAgY29uc3QgW3NlbGVjdGVkQXBlSWQsIHNldFNlbGVjdGVkQXBlSWRdID0gdXNlU3RhdGUoMClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldE15TmZ0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5zZWFEYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly90ZXN0bmV0cy1hcGkub3BlbnNlYS5pby9hcGkvdjEvYXNzZXRzP2Fzc2V0X2NvbnRyYWN0X2FkZHJlc3M9MHhmODg4RDQ4NkVCNjg2RUNjYjQ0ZmYzNTREOEIyY0I1Mzg4YmNmMjVDJm9yZGVyX2RpcmVjdGlvbj1kZXNjJm9mZnNldD0wJmxpbWl0PTIwJmluY2x1ZGVfb3JkZXJzPWZhbHNlXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wZW5zZWFEYXRhLmRhdGEuYXNzZXRzKVxuICAgICAgICAgICAgc2V0QXBlTGlzdERhdGEob3BlbnNlYURhdGEuZGF0YS5hc3NldHMpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgQXBlbGlzdCBEYXRhOiAke2FwZUxpc3REYXRhfWApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldE15TmZ0c1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxNYWluIHNlbGN0ZWRBcGU9e3NlbGVjdGVkQXBlSWR9IGFwZUxpc3REYXRhPXthcGVMaXN0RGF0YX0gLz5cbiAgICAgICAgICAgIDxBcGVsaXN0XG4gICAgICAgICAgICAgICAgYXBlTGlzdERhdGE9e2FwZUxpc3REYXRhfVxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkQXBlSWQ9e3NldFNlbGVjdGVkQXBlSWR9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRBcGVJZD17c2VsZWN0ZWRBcGVJZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJIZWFkZXIiLCJBcGVsaXN0IiwiTWFpbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIb21lIiwiYXBlTGlzdERhdGEiLCJzZXRBcGVMaXN0RGF0YSIsInNlbGVjdGVkQXBlSWQiLCJzZXRTZWxlY3RlZEFwZUlkIiwiZ2V0TXlOZnRzIiwib3BlbnNlYURhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImFzc2V0cyIsImRpdiIsInNlbGN0ZWRBcGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});