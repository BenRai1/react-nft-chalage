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

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_redfur_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/redfur.jpg */ \"./assets/redfur.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar _obj;\nvar styles = (_obj = {\n    main: \"flex bg-[#334155] max-h-50px \",\n    apeContainer: \"flex\",\n    imageContainer: \"w-60 mr-[10px]\",\n    image: \"w-1/4 rounded-[30px]\",\n    info: \"content-between border-2  border-rose-500 \",\n    header: \"flex\",\n    name: \"text-white text-3xl  mr-5 \",\n    id: \"text-gray text-3xl\",\n    ownerInfo: \"flex  border-2\",\n    ownerImageContainer: \"rounded-full overflow-hidden w-10 mr-3\"\n}, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_obj, \"ownerInfo\", \"flex\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_obj, \"profilePicture\", \"\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_obj, \"walletAddress\", \"text-white text-xs\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_obj, \"owner\", \"text-sx text-[#84cc16]\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_obj, \"icons\", \"flex border-2 \"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_obj, \"icon\", \"text-white w-10 rounded-full border-2 border-white \"), _obj);\nfunction Main(selectedApe, apeListData) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(apeListData[0]), activeApe = ref[0], setActiveApe = ref[1];\n    console.log(\"Selected Ape Id:\");\n    console.log(selectedApe);\n    console.log(\"Ape List Data:\");\n    console.log(apeListData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // console.log(\"Selected Ape Id:\")\n        // console.log(selectedApe)\n        // console.log(\"Ape List Data:\")\n        // console.log(apeListData)\n        setActiveApe(apeListData[selectedApe.selectedApe]);\n        console.log(activeApe);\n    }, [\n        selectedApe,\n        apeListData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.main,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: styles.apeContainer,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.imageContainer,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _assets_redfur_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                        //src={activeApe.image_url}\n                        className: styles.image\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 46,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.info,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.header,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.name,\n                                    children: \"Mixed Ape #0005\"\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.id,\n                                    children: \"#4\"\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.ownerInfo,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.ownerImageContainer,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        src: _assets_redfur_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                                        className: styles.profilePicture\n                                    }, void 0, false, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: styles.walletAddress,\n                                            children: \"0x1E3a7fF5De47b18fb5cb12e044925F26433A6bce\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: styles.owner,\n                                            children: \"@benburger\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.icons,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsInstagram, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__.FiTwitter, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 71,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__.TbDots, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n            lineNumber: 44,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n};\n_s(Main, \"yz2cAU4RDDKrW/pXd/FmCywFWt0=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Rzs0QkFBQ0MsU0FBUyxFQUFFeEIsTUFBTSxDQUFDUyxTQUFTOzs4Q0FDNUIsOERBQUNjLEtBQUc7b0NBQUNDLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ1UsbUJBQW1COzhDQUN0Qyw0RUFBQ2QsbURBQUs7d0NBQUM2QixHQUFHLEVBQUU5QiwwREFBTzt3Q0FBRTZCLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ1csY0FBYzs7Ozs7NENBQUk7Ozs7O3dDQUN2RDs4Q0FDTiw4REFBQ1ksS0FBRzs7c0RBQ0EsOERBQUNBLEtBQUc7NENBQUNDLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ1ksYUFBYTtzREFBRSw0Q0FFdEM7Ozs7O2dEQUFNO3NEQUNOLDhEQUFDVyxLQUFHOzRDQUFDQyxTQUFTLEVBQUV4QixNQUFNLENBQUNhLEtBQUs7c0RBQUUsWUFBVTs7Ozs7Z0RBQU07Ozs7Ozt3Q0FDNUM7Ozs7OztnQ0FDSjs7Ozs7O3dCQUNKOzhCQUNOLDhEQUFDVSxLQUFHO29CQUFDQyxTQUFTLEVBQUV4QixNQUFNLENBQUNjLEtBQUs7O3NDQUN4Qiw4REFBQ2pCLHVEQUFXOzRCQUFDMkIsU0FBUyxFQUFFeEIsTUFBTSxDQUFDZSxJQUFJOzs7OztnQ0FBSTtzQ0FDdkMsOERBQUNqQixxREFBUzs0QkFBQzBCLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2UsSUFBSTs7Ozs7Z0NBQUk7c0NBQ3JDLDhEQUFDaEIsa0RBQU07NEJBQUN5QixTQUFTLEVBQUV4QixNQUFNLENBQUNlLElBQUk7Ozs7O2dDQUFJOzs7Ozs7d0JBQ2hDOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0osQ0FDVDtDQUNKO0dBbER1QkMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFpbi5qcz82OGUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBwaWN0dXJlIGZyb20gXCIuLi9hc3NldHMvcmVkZnVyLmpwZ1wiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IHsgQnNJbnN0YWdyYW0gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmlUd2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCJcbmltcG9ydCB7IFRiRG90cyB9IGZyb20gXCJyZWFjdC1pY29ucy90YlwiXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBtYWluOiBgZmxleCBiZy1bIzMzNDE1NV0gbWF4LWgtNTBweCBgLFxuICAgIGFwZUNvbnRhaW5lcjogYGZsZXhgLFxuICAgIGltYWdlQ29udGFpbmVyOiBgdy02MCBtci1bMTBweF1gLFxuICAgIGltYWdlOiBgdy0xLzQgcm91bmRlZC1bMzBweF1gLFxuICAgIGluZm86IGBjb250ZW50LWJldHdlZW4gYm9yZGVyLTIgIGJvcmRlci1yb3NlLTUwMCBgLFxuICAgIGhlYWRlcjogYGZsZXhgLFxuICAgIG5hbWU6IGB0ZXh0LXdoaXRlIHRleHQtM3hsICBtci01IGAsXG4gICAgaWQ6IGB0ZXh0LWdyYXkgdGV4dC0zeGxgLFxuICAgIG93bmVySW5mbzogYGZsZXggIGJvcmRlci0yYCxcbiAgICBvd25lckltYWdlQ29udGFpbmVyOiBgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiB3LTEwIG1yLTNgLFxuICAgIG93bmVySW5mbzogYGZsZXhgLFxuICAgIHByb2ZpbGVQaWN0dXJlOiBgYCxcbiAgICB3YWxsZXRBZGRyZXNzOiBgdGV4dC13aGl0ZSB0ZXh0LXhzYCxcbiAgICBvd25lcjogYHRleHQtc3ggdGV4dC1bIzg0Y2MxNl1gLFxuICAgIGljb25zOiBgZmxleCBib3JkZXItMiBgLFxuICAgIGljb246IGB0ZXh0LXdoaXRlIHctMTAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci13aGl0ZSBgLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHNlbGVjdGVkQXBlLCBhcGVMaXN0RGF0YSkge1xuICAgIGNvbnN0IFthY3RpdmVBcGUsIHNldEFjdGl2ZUFwZV0gPSB1c2VTdGF0ZShhcGVMaXN0RGF0YVswXSlcbiAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEFwZSBJZDpcIilcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEFwZSlcbiAgICBjb25zb2xlLmxvZyhcIkFwZSBMaXN0IERhdGE6XCIpXG4gICAgY29uc29sZS5sb2coYXBlTGlzdERhdGEpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEFwZSBJZDpcIilcbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRBcGUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQXBlIExpc3QgRGF0YTpcIilcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBlTGlzdERhdGEpXG4gICAgICAgIHNldEFjdGl2ZUFwZShhcGVMaXN0RGF0YVtzZWxlY3RlZEFwZS5zZWxlY3RlZEFwZV0pXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZUFwZSlcbiAgICB9LCBbc2VsZWN0ZWRBcGUsIGFwZUxpc3REYXRhXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc3JjPXthY3RpdmVBcGUuaW1hZ2VfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT5NaXhlZCBBcGUgIzAwMDU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWR9PiM0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm93bmVySW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm93bmVySW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3BpY3R1cmV9IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaWN0dXJlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FsbGV0QWRkcmVzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDB4MUUzYTdmRjVEZTQ3YjE4ZmI1Y2IxMmUwNDQ5MjVGMjY0MzNBNmJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJ9PkBiZW5idXJnZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgICAgICAgICAgICAgPEJzSW5zdGFncmFtIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaVR3aXR0ZXIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRiRG90cyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGljdHVyZSIsIkltYWdlIiwiQnNJbnN0YWdyYW0iLCJGaVR3aXR0ZXIiLCJUYkRvdHMiLCJzdHlsZXMiLCJtYWluIiwiYXBlQ29udGFpbmVyIiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZSIsImluZm8iLCJoZWFkZXIiLCJuYW1lIiwiaWQiLCJvd25lckluZm8iLCJvd25lckltYWdlQ29udGFpbmVyIiwicHJvZmlsZVBpY3R1cmUiLCJ3YWxsZXRBZGRyZXNzIiwib3duZXIiLCJpY29ucyIsImljb24iLCJNYWluIiwic2VsZWN0ZWRBcGUiLCJhcGVMaXN0RGF0YSIsImFjdGl2ZUFwZSIsInNldEFjdGl2ZUFwZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});