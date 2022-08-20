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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_redfur_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/redfur.jpg */ \"./assets/redfur.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    main: \"flex bg-black max-h-50px border border-[#3f6212] p-3\",\n    apeContainer: \"flex border border-sky-500 w-full\",\n    imageContainer: \"w-60 mr-[10px]\",\n    image: \" rounded-[30px]\",\n    info: \"flex-col content-between border-2  border-rose-500 \",\n    header: \"flex\",\n    name: \"text-white text-3xl  mr-5 \",\n    id: \"text-[#64748b] text-3xl\",\n    ownerInfo: \"flex  border-2 border border-[#facc15]\",\n    ownerImageContainer: \"rounded-full overflow-hidden w-10 mr-3\",\n    profilePicture: \"\",\n    walletAddress: \"text-white text-xs\",\n    owner: \"text-sx text-[#84cc16]\",\n    icons: \"flex border  \",\n    icon: \"text-white w-10 rounded-full border border-white w-10 h-10 p-2\"\n};\nfunction Main(param) {\n    var selectedApe = param.selectedApe, apeListData = param.apeListData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(apeListData[0]), activeApe = ref[0], setActiveApe = ref[1];\n    console.log(\"Selected Ape Id:\");\n    console.log(selectedApe);\n    console.log(\"Ape List Data:\");\n    console.log(apeListData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setActiveApe(apeListData[selectedApe]);\n        console.log(\"Active Ape:\");\n        console.log(activeApe);\n    }, [\n        selectedApe,\n        apeListData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.main,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: styles.apeContainer,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.imageContainer,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: activeApe.image_original_url,\n                        className: styles.image\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.info,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.header,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.name,\n                                    children: activeApe.name\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.id,\n                                    children: [\n                                        \"#\",\n                                        activeApe.token_id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.ownerInfo,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.ownerImageContainer,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: activeApe.owner.profile_img_url,\n                                        className: styles.profilePicture\n                                    }, void 0, false, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: styles.walletAddress,\n                                            children: activeApe.owner.address\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: styles.owner,\n                                            children: \"@benburger\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.icons,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsInstagram, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiTwitter, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbDots, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n};\n_s(Main, \"yz2cAU4RDDKrW/pXd/FmCywFWt0=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDTixLQUFLLENBQUNnQixlQUFlO3dDQUNwQ0wsU0FBUyxFQUFFeEIsTUFBTSxDQUFDVyxjQUFjOzs7Ozs0Q0FDbEM7Ozs7O3dDQUNBOzhDQUNOLDhEQUFDWSxLQUFHOztzREFDQSw4REFBQ0EsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFFeEIsTUFBTSxDQUFDWSxhQUFhO3NEQUFHTyxTQUFTLENBQUNOLEtBQUssQ0FBQ2lCLE9BQU87Ozs7O2dEQUFPO3NEQUNyRSw4REFBQ1AsS0FBRzs0Q0FBQ0MsU0FBUyxFQUFFeEIsTUFBTSxDQUFDYSxLQUFLO3NEQUFFLFlBQVU7Ozs7O2dEQUFNOzs7Ozs7d0NBQzVDOzs7Ozs7Z0NBQ0o7Ozs7Ozt3QkFDSjs4QkFDTiw4REFBQ1UsS0FBRztvQkFBQ0MsU0FBUyxFQUFFeEIsTUFBTSxDQUFDYyxLQUFLOztzQ0FDeEIsOERBQUNqQix1REFBVzs0QkFBQzJCLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2UsSUFBSTs7Ozs7Z0NBQUk7c0NBQ3ZDLDhEQUFDakIscURBQVM7NEJBQUMwQixTQUFTLEVBQUV4QixNQUFNLENBQUNlLElBQUk7Ozs7O2dDQUFJO3NDQUNyQyw4REFBQ2hCLGtEQUFNOzRCQUFDeUIsU0FBUyxFQUFFeEIsTUFBTSxDQUFDZSxJQUFJOzs7OztnQ0FBSTs7Ozs7O3dCQUNoQzs7Ozs7O2dCQUNKOzs7OztZQUNKLENBQ1Q7Q0FDSjtHQTdDdUJDLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01haW4uanM/NjhlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgcGljdHVyZSBmcm9tIFwiLi4vYXNzZXRzL3JlZGZ1ci5qcGdcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCB7IEJzSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7IEZpVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiXG5pbXBvcnQgeyBUYkRvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvdGJcIlxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgbWFpbjogYGZsZXggYmctYmxhY2sgbWF4LWgtNTBweCBib3JkZXIgYm9yZGVyLVsjM2Y2MjEyXSBwLTNgLFxuICAgIGFwZUNvbnRhaW5lcjogYGZsZXggYm9yZGVyIGJvcmRlci1za3ktNTAwIHctZnVsbGAsXG4gICAgaW1hZ2VDb250YWluZXI6IGB3LTYwIG1yLVsxMHB4XWAsXG4gICAgaW1hZ2U6IGAgcm91bmRlZC1bMzBweF1gLFxuICAgIGluZm86IGBmbGV4LWNvbCBjb250ZW50LWJldHdlZW4gYm9yZGVyLTIgIGJvcmRlci1yb3NlLTUwMCBgLFxuICAgIGhlYWRlcjogYGZsZXhgLFxuICAgIG5hbWU6IGB0ZXh0LXdoaXRlIHRleHQtM3hsICBtci01IGAsXG4gICAgaWQ6IGB0ZXh0LVsjNjQ3NDhiXSB0ZXh0LTN4bGAsXG4gICAgb3duZXJJbmZvOiBgZmxleCAgYm9yZGVyLTIgYm9yZGVyIGJvcmRlci1bI2ZhY2MxNV1gLFxuICAgIG93bmVySW1hZ2VDb250YWluZXI6IGByb3VuZGVkLWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIHctMTAgbXItM2AsXG4gICAgcHJvZmlsZVBpY3R1cmU6IGBgLFxuICAgIHdhbGxldEFkZHJlc3M6IGB0ZXh0LXdoaXRlIHRleHQteHNgLFxuICAgIG93bmVyOiBgdGV4dC1zeCB0ZXh0LVsjODRjYzE2XWAsXG4gICAgaWNvbnM6IGBmbGV4IGJvcmRlciAgYCxcbiAgICBpY29uOiBgdGV4dC13aGl0ZSB3LTEwIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlIHctMTAgaC0xMCBwLTJgLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKHsgc2VsZWN0ZWRBcGUsIGFwZUxpc3REYXRhIH0pIHtcbiAgICBjb25zdCBbYWN0aXZlQXBlLCBzZXRBY3RpdmVBcGVdID0gdXNlU3RhdGUoYXBlTGlzdERhdGFbMF0pXG4gICAgY29uc29sZS5sb2coXCJTZWxlY3RlZCBBcGUgSWQ6XCIpXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRBcGUpXG4gICAgY29uc29sZS5sb2coXCJBcGUgTGlzdCBEYXRhOlwiKVxuICAgIGNvbnNvbGUubG9nKGFwZUxpc3REYXRhKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlQXBlKGFwZUxpc3REYXRhW3NlbGVjdGVkQXBlXSlcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGl2ZSBBcGU6XCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZUFwZSlcbiAgICB9LCBbc2VsZWN0ZWRBcGUsIGFwZUxpc3REYXRhXSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YWN0aXZlQXBlLmltYWdlX29yaWdpbmFsX3VybH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57YWN0aXZlQXBlLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlkfT4je2FjdGl2ZUFwZS50b2tlbl9pZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJJbmZvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJJbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2FjdGl2ZUFwZS5vd25lci5wcm9maWxlX2ltZ191cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaWN0dXJlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53YWxsZXRBZGRyZXNzfT57YWN0aXZlQXBlLm93bmVyLmFkZHJlc3N9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vd25lcn0+QGJlbmJ1cmdlcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgICAgICAgICA8QnNJbnN0YWdyYW0gY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpVHdpdHRlciBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8VGJEb3RzIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwaWN0dXJlIiwiSW1hZ2UiLCJCc0luc3RhZ3JhbSIsIkZpVHdpdHRlciIsIlRiRG90cyIsInN0eWxlcyIsIm1haW4iLCJhcGVDb250YWluZXIiLCJpbWFnZUNvbnRhaW5lciIsImltYWdlIiwiaW5mbyIsImhlYWRlciIsIm5hbWUiLCJpZCIsIm93bmVySW5mbyIsIm93bmVySW1hZ2VDb250YWluZXIiLCJwcm9maWxlUGljdHVyZSIsIndhbGxldEFkZHJlc3MiLCJvd25lciIsImljb25zIiwiaWNvbiIsIk1haW4iLCJzZWxlY3RlZEFwZSIsImFwZUxpc3REYXRhIiwiYWN0aXZlQXBlIiwic2V0QWN0aXZlQXBlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlX29yaWdpbmFsX3VybCIsInRva2VuX2lkIiwicHJvZmlsZV9pbWdfdXJsIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});