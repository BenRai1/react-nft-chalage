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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_redfur_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/redfur.jpg */ \"./assets/redfur.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    main: \"flex bg-black max-h-50px border-b border-sky-500 p-3 justify-between\",\n    apeContainer: \"flex border border-[#3f6212] w-full \",\n    imageContainer: \"w-60 mr-[10px]\",\n    image: \" rounded-[30px]\",\n    info: \"flex flex-col justify-between border-2 \",\n    header: \"flex\",\n    name: \"text-white text-3xl  mr-5 \",\n    id: \"text-[#64748b] text-3xl\",\n    ownerInfo: \"flex  border-2 border border-[#facc15]\",\n    ownerImageContainer: \"rounded-full overflow-hidden w-10 mr-3\",\n    profilePicture: \"\",\n    walletAddress: \"text-white text-xs\",\n    owner: \"text-sx text-[#84cc16]\",\n    icons: \"flex border\",\n    icon: \"text-white w-10 rounded-full border border-white w-10 h-10 p-2\"\n};\nfunction Main(param) {\n    var selectedApe = param.selectedApe, apeListData = param.apeListData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(apeListData[0]), activeApe = ref[0], setActiveApe = ref[1];\n    console.log(\"Selected Ape Id:\");\n    console.log(selectedApe);\n    console.log(\"Ape List Data:\");\n    console.log(apeListData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setActiveApe(apeListData[selectedApe]);\n        console.log(\"Active Ape:\");\n        console.log(activeApe);\n    }, [\n        selectedApe,\n        apeListData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.main,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.apeContainer,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.imageContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: activeApe.image_original_url,\n                            className: styles.image\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: styles.info,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.header,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: styles.name,\n                                        children: activeApe.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: styles.id,\n                                        children: [\n                                            \"#\",\n                                            activeApe.token_id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.ownerInfo,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: styles.ownerImageContainer,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: activeApe.owner.profile_img_url,\n                                            className: styles.profilePicture\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: styles.walletAddress,\n                                                children: activeApe.owner.address\n                                            }, void 0, false, {\n                                                fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                                lineNumber: 58,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: styles.owner,\n                                                children: \"@benburger\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.icons,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsInstagram, {\n                        className: styles.icon\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiTwitter, {\n                        className: styles.icon\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbDots, {\n                        className: styles.icon\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n};\n_s(Main, \"yz2cAU4RDDKrW/pXd/FmCywFWt0=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UCxTQUFTLENBQUNOLEtBQUssQ0FBQ2dCLGVBQWU7NENBQ3BDTCxTQUFTLEVBQUV4QixNQUFNLENBQUNXLGNBQWM7Ozs7O2dEQUNsQzs7Ozs7NENBQ0E7a0RBQ04sOERBQUNZLEtBQUc7OzBEQUNBLDhEQUFDQSxLQUFHO2dEQUFDQyxTQUFTLEVBQUV4QixNQUFNLENBQUNZLGFBQWE7MERBQUdPLFNBQVMsQ0FBQ04sS0FBSyxDQUFDaUIsT0FBTzs7Ozs7b0RBQU87MERBQ3JFLDhEQUFDUCxLQUFHO2dEQUFDQyxTQUFTLEVBQUV4QixNQUFNLENBQUNhLEtBQUs7MERBQUUsWUFBVTs7Ozs7b0RBQU07Ozs7Ozs0Q0FDNUM7Ozs7OztvQ0FDSjs7Ozs7OzRCQUNKOzs7Ozs7b0JBQ0o7MEJBQ04sOERBQUNVLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2MsS0FBSzs7a0NBQ3hCLDhEQUFDakIsdURBQVc7d0JBQUMyQixTQUFTLEVBQUV4QixNQUFNLENBQUNlLElBQUk7Ozs7OzRCQUFJO2tDQUN2Qyw4REFBQ2pCLHFEQUFTO3dCQUFDMEIsU0FBUyxFQUFFeEIsTUFBTSxDQUFDZSxJQUFJOzs7Ozs0QkFBSTtrQ0FDckMsOERBQUNoQixrREFBTTt3QkFBQ3lCLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2UsSUFBSTs7Ozs7NEJBQUk7Ozs7OztvQkFDaEM7Ozs7OztZQUNKLENBQ1Q7Q0FDSjtHQTdDdUJDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4uanM/NjhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgcGljdHVyZSBmcm9tIFwiLi4vYXNzZXRzL3JlZGZ1ci5qcGdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IEJzSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7IEZpVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgeyBUYkRvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIlxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgbWFpbjogYGZsZXggYmctYmxhY2sgbWF4LWgtNTBweCBib3JkZXItYiBib3JkZXItc2t5LTUwMCBwLTMganVzdGlmeS1iZXR3ZWVuYCxcbiAgICBhcGVDb250YWluZXI6IGBmbGV4IGJvcmRlciBib3JkZXItWyMzZjYyMTJdIHctZnVsbCBgLFxuICAgIGltYWdlQ29udGFpbmVyOiBgdy02MCBtci1bMTBweF1gLFxuICAgIGltYWdlOiBgIHJvdW5kZWQtWzMwcHhdYCxcbiAgICBpbmZvOiBgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLTIgYCxcbiAgICBoZWFkZXI6IGBmbGV4YCxcbiAgICBuYW1lOiBgdGV4dC13aGl0ZSB0ZXh0LTN4bCAgbXItNSBgLFxuICAgIGlkOiBgdGV4dC1bIzY0NzQ4Yl0gdGV4dC0zeGxgLFxuICAgIG93bmVySW5mbzogYGZsZXggIGJvcmRlci0yIGJvcmRlciBib3JkZXItWyNmYWNjMTVdYCxcbiAgICBvd25lckltYWdlQ29udGFpbmVyOiBgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiB3LTEwIG1yLTNgLFxuICAgIHByb2ZpbGVQaWN0dXJlOiBgYCxcbiAgICB3YWxsZXRBZGRyZXNzOiBgdGV4dC13aGl0ZSB0ZXh0LXhzYCxcbiAgICBvd25lcjogYHRleHQtc3ggdGV4dC1bIzg0Y2MxNl1gLFxuICAgIGljb25zOiBgZmxleCBib3JkZXJgLFxuICAgIGljb246IGB0ZXh0LXdoaXRlIHctMTAgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUgdy0xMCBoLTEwIHAtMmAsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oeyBzZWxlY3RlZEFwZSwgYXBlTGlzdERhdGEgfSkge1xuICAgIGNvbnN0IFthY3RpdmVBcGUsIHNldEFjdGl2ZUFwZV0gPSB1c2VTdGF0ZShhcGVMaXN0RGF0YVswXSlcbiAgICBjb25zb2xlLmxvZyhcIlNlbGVjdGVkIEFwZSBJZDpcIilcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZEFwZSlcbiAgICBjb25zb2xlLmxvZyhcIkFwZSBMaXN0IERhdGE6XCIpXG4gICAgY29uc29sZS5sb2coYXBlTGlzdERhdGEpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRBY3RpdmVBcGUoYXBlTGlzdERhdGFbc2VsZWN0ZWRBcGVdKVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWN0aXZlIEFwZTpcIilcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlQXBlKVxuICAgIH0sIFtzZWxlY3RlZEFwZSwgYXBlTGlzdERhdGFdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFwZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthY3RpdmVBcGUuaW1hZ2Vfb3JpZ2luYWxfdXJsfSBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PnthY3RpdmVBcGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWR9PiN7YWN0aXZlQXBlLnRva2VuX2lkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vd25lckluZm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vd25lckltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YWN0aXZlQXBlLm93bmVyLnByb2ZpbGVfaW1nX3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVBpY3R1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndhbGxldEFkZHJlc3N9PnthY3RpdmVBcGUub3duZXIuYWRkcmVzc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm93bmVyfT5AYmVuYnVyZ2VyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgICAgIDxCc0luc3RhZ3JhbSBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgIDxGaVR3aXR0ZXIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8VGJEb3RzIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwaWN0dXJlIiwiSW1hZ2UiLCJCc0luc3RhZ3JhbSIsIkZpVHdpdHRlciIsIlRiRG90cyIsInN0eWxlcyIsIm1haW4iLCJhcGVDb250YWluZXIiLCJpbWFnZUNvbnRhaW5lciIsImltYWdlIiwiaW5mbyIsImhlYWRlciIsIm5hbWUiLCJpZCIsIm93bmVySW5mbyIsIm93bmVySW1hZ2VDb250YWluZXIiLCJwcm9maWxlUGljdHVyZSIsIndhbGxldEFkZHJlc3MiLCJvd25lciIsImljb25zIiwiaWNvbiIsIk1haW4iLCJzZWxlY3RlZEFwZSIsImFwZUxpc3REYXRhIiwiYWN0aXZlQXBlIiwic2V0QWN0aXZlQXBlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlX29yaWdpbmFsX3VybCIsInRva2VuX2lkIiwicHJvZmlsZV9pbWdfdXJsIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});