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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_redfur_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/redfur.jpg */ \"./assets/redfur.jpg\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/tb */ \"./node_modules/react-icons/tb/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    main: \"flex bg-black max-h-50px border border-[#3f6212] p-3\",\n    apeContainer: \"flex border border-sky-500 w-full\",\n    imageContainer: \"w-60 mr-[10px]\",\n    image: \" rounded-[30px]\",\n    info: \"flex-col content-between border-2  border-rose-500 \",\n    header: \"flex\",\n    name: \"text-white text-3xl  mr-5 \",\n    id: \"text-[#64748b] text-3xl\",\n    ownerInfo: \"flex  border-2 border border-[#facc15]\",\n    ownerImageContainer: \"rounded-full overflow-hidden w-10 mr-3\",\n    profilePicture: \"\",\n    walletAddress: \"text-white text-xs\",\n    owner: \"text-sx text-[#84cc16]\",\n    icons: \"flex border-2 \",\n    icon: \"text-white w-10 rounded-full border-2 border-white w-20\"\n};\nfunction Main(param) {\n    var selectedApe = param.selectedApe, apeListData = param.apeListData;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(apeListData[0]), activeApe = ref[0], setActiveApe = ref[1];\n    console.log(\"Selected Ape Id:\");\n    console.log(selectedApe);\n    console.log(\"Ape List Data:\");\n    console.log(apeListData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setActiveApe(apeListData[selectedApe]);\n        console.log(\"Active Ape:\");\n        console.log(activeApe);\n    }, [\n        selectedApe,\n        apeListData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.main,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: styles.apeContainer,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.imageContainer,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: activeApe.image_original_url,\n                        className: styles.image\n                    }, void 0, false, {\n                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                        lineNumber: 43,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.info,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.header,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.name,\n                                    children: activeApe.name\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.id,\n                                    children: [\n                                        \"#\",\n                                        activeApe.token_id\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: styles.ownerInfo,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: styles.ownerImageContainer,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: activeApe.owner.profile_img_url,\n                                        className: styles.profilePicture\n                                    }, void 0, false, {\n                                        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: styles.walletAddress,\n                                            children: activeApe.owner.address\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: styles.owner,\n                                            children: \"@benburger\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: styles.icons,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsInstagram, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiTwitter, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 65,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_tb__WEBPACK_IMPORTED_MODULE_6__.TbDots, {\n                            className: styles.icon\n                        }, void 0, false, {\n                            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/benrai/folder/react-nft-chalange/components/Main.js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n};\n_s(Main, \"yz2cAU4RDDKrW/pXd/FmCywFWt0=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ04sS0FBSyxDQUFDZ0IsZUFBZTt3Q0FDcENMLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ1csY0FBYzs7Ozs7NENBQ2xDOzs7Ozt3Q0FDQTs4Q0FDTiw4REFBQ1ksS0FBRzs7c0RBQ0EsOERBQUNBLEtBQUc7NENBQUNDLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ1ksYUFBYTtzREFBR08sU0FBUyxDQUFDTixLQUFLLENBQUNpQixPQUFPOzs7OztnREFBTztzREFDckUsOERBQUNQLEtBQUc7NENBQUNDLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2EsS0FBSztzREFBRSxZQUFVOzs7OztnREFBTTs7Ozs7O3dDQUM1Qzs7Ozs7O2dDQUNKOzs7Ozs7d0JBQ0o7OEJBQ04sOERBQUNVLEtBQUc7b0JBQUNDLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2MsS0FBSzs7c0NBQ3hCLDhEQUFDakIsdURBQVc7NEJBQUMyQixTQUFTLEVBQUV4QixNQUFNLENBQUNlLElBQUk7Ozs7O2dDQUFJO3NDQUN2Qyw4REFBQ2pCLHFEQUFTOzRCQUFDMEIsU0FBUyxFQUFFeEIsTUFBTSxDQUFDZSxJQUFJOzs7OztnQ0FBSTtzQ0FDckMsOERBQUNoQixrREFBTTs0QkFBQ3lCLFNBQVMsRUFBRXhCLE1BQU0sQ0FBQ2UsSUFBSTs7Ozs7Z0NBQUk7Ozs7Ozt3QkFDaEM7Ozs7OztnQkFDSjs7Ozs7WUFDSixDQUNUO0NBQ0o7R0E3Q3VCQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluLmpzPzY4ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHBpY3R1cmUgZnJvbSBcIi4uL2Fzc2V0cy9yZWRmdXIuanBnXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBCc0luc3RhZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGaVR3aXR0ZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxuaW1wb3J0IHsgVGJEb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL3RiXCJcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIG1haW46IGBmbGV4IGJnLWJsYWNrIG1heC1oLTUwcHggYm9yZGVyIGJvcmRlci1bIzNmNjIxMl0gcC0zYCxcbiAgICBhcGVDb250YWluZXI6IGBmbGV4IGJvcmRlciBib3JkZXItc2t5LTUwMCB3LWZ1bGxgLFxuICAgIGltYWdlQ29udGFpbmVyOiBgdy02MCBtci1bMTBweF1gLFxuICAgIGltYWdlOiBgIHJvdW5kZWQtWzMwcHhdYCxcbiAgICBpbmZvOiBgZmxleC1jb2wgY29udGVudC1iZXR3ZWVuIGJvcmRlci0yICBib3JkZXItcm9zZS01MDAgYCxcbiAgICBoZWFkZXI6IGBmbGV4YCxcbiAgICBuYW1lOiBgdGV4dC13aGl0ZSB0ZXh0LTN4bCAgbXItNSBgLFxuICAgIGlkOiBgdGV4dC1bIzY0NzQ4Yl0gdGV4dC0zeGxgLFxuICAgIG93bmVySW5mbzogYGZsZXggIGJvcmRlci0yIGJvcmRlciBib3JkZXItWyNmYWNjMTVdYCxcbiAgICBvd25lckltYWdlQ29udGFpbmVyOiBgcm91bmRlZC1mdWxsIG92ZXJmbG93LWhpZGRlbiB3LTEwIG1yLTNgLFxuICAgIHByb2ZpbGVQaWN0dXJlOiBgYCxcbiAgICB3YWxsZXRBZGRyZXNzOiBgdGV4dC13aGl0ZSB0ZXh0LXhzYCxcbiAgICBvd25lcjogYHRleHQtc3ggdGV4dC1bIzg0Y2MxNl1gLFxuICAgIGljb25zOiBgZmxleCBib3JkZXItMiBgLFxuICAgIGljb246IGB0ZXh0LXdoaXRlIHctMTAgcm91bmRlZC1mdWxsIGJvcmRlci0yIGJvcmRlci13aGl0ZSB3LTIwYCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbih7IHNlbGVjdGVkQXBlLCBhcGVMaXN0RGF0YSB9KSB7XG4gICAgY29uc3QgW2FjdGl2ZUFwZSwgc2V0QWN0aXZlQXBlXSA9IHVzZVN0YXRlKGFwZUxpc3REYXRhWzBdKVxuICAgIGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgQXBlIElkOlwiKVxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkQXBlKVxuICAgIGNvbnNvbGUubG9nKFwiQXBlIExpc3QgRGF0YTpcIilcbiAgICBjb25zb2xlLmxvZyhhcGVMaXN0RGF0YSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEFjdGl2ZUFwZShhcGVMaXN0RGF0YVtzZWxlY3RlZEFwZV0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJBY3RpdmUgQXBlOlwiKVxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVBcGUpXG4gICAgfSwgW3NlbGVjdGVkQXBlLCBhcGVMaXN0RGF0YV0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2FjdGl2ZUFwZS5pbWFnZV9vcmlnaW5hbF91cmx9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e2FjdGl2ZUFwZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pZH0+I3thY3RpdmVBcGUudG9rZW5faWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm93bmVySW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm93bmVySW1hZ2VDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthY3RpdmVBcGUub3duZXIucHJvZmlsZV9pbWdfdXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlUGljdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2FsbGV0QWRkcmVzc30+e2FjdGl2ZUFwZS5vd25lci5hZGRyZXNzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3duZXJ9PkBiZW5idXJnZXI8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgICAgICAgICAgICAgPEJzSW5zdGFncmFtIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDxGaVR3aXR0ZXIgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRiRG90cyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGljdHVyZSIsIkltYWdlIiwiQnNJbnN0YWdyYW0iLCJGaVR3aXR0ZXIiLCJUYkRvdHMiLCJzdHlsZXMiLCJtYWluIiwiYXBlQ29udGFpbmVyIiwiaW1hZ2VDb250YWluZXIiLCJpbWFnZSIsImluZm8iLCJoZWFkZXIiLCJuYW1lIiwiaWQiLCJvd25lckluZm8iLCJvd25lckltYWdlQ29udGFpbmVyIiwicHJvZmlsZVBpY3R1cmUiLCJ3YWxsZXRBZGRyZXNzIiwib3duZXIiLCJpY29ucyIsImljb24iLCJNYWluIiwic2VsZWN0ZWRBcGUiLCJhcGVMaXN0RGF0YSIsImFjdGl2ZUFwZSIsInNldEFjdGl2ZUFwZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZV9vcmlnaW5hbF91cmwiLCJ0b2tlbl9pZCIsInByb2ZpbGVfaW1nX3VybCIsImFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Main.js\n"));

/***/ })

});