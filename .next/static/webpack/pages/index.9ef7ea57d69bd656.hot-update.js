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

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/FormControl */ \"./node_modules/react-bootstrap/esm/FormControl.js\");\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ \"./src/context/GlobalState.js\");\n/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ \"./src/services/auth.service.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction CustomNavbar() {\n    _s();\n    const { state, dispatch } = (0,_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleLogout = ()=>{\n        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__[\"default\"].logout();\n        dispatch({\n            type: \"LOGOUT_USER\"\n        });\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex justify-content-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            bg: \"light\",\n            expand: \"lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Brand, {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Toggle, {\n                    \"aria-controls\": \"basic-navbar-nav\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 23,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Collapse, {\n                    id: \"basic-navbar-nav\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"mr-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/teamsDisplay\",\n                                    children: \"Teams\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/standings\",\n                                    children: \"Standings\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/playersDisplay\",\n                                    children: \"Players\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 25\n                                }, this),\n                                state.user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                    href: \"/favorites\",\n                                    children: \"Favorites\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 40\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                inline: true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_FormControl__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        type: \"text\",\n                                        placeholder: \"Search\",\n                                        className: \"mr-sm-2\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        variant: \"outline-success\",\n                                        children: \"Search\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 32,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            className: \"ml-auto\",\n                            children: state.user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                onClick: handleLogout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 39,\n                                columnNumber: 29\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Link, {\n                                href: \"/loginPage\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                                lineNumber: 41,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\Navbar.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomNavbar, \"uXqR85FDQBwNCkCrN50MyXaiaOo=\", false, function() {\n    return [\n        _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__.useGlobalState,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomNavbar);\nvar _c;\n$RefreshReg$(_c, \"CustomNavbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQjtBQUNMO0FBQ1g7QUFDeUI7QUFDTjtBQUUzRCxTQUFTVzs7SUFDTCxNQUFNLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdQLG9FQUFjQTtJQUMxQyxNQUFNUSxTQUFTTixzREFBU0E7SUFFeEIsTUFBTU8sZUFBZTtRQUNqQlIscUVBQWtCO1FBQ2xCTSxTQUFTO1lBQUVJLE1BQU07UUFBYztRQUMvQkgsT0FBT0ksSUFBSSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNuQiw4REFBTUE7WUFBQ29CLElBQUc7WUFBUUMsUUFBTzs7OEJBQ3RCLDhEQUFDckIsb0VBQVk7b0JBQUN1QixNQUFLOzhCQUFJOzs7Ozs7OEJBQ3ZCLDhEQUFDdkIscUVBQWE7b0JBQUN5QixpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ3pCLHVFQUFlO29CQUFDMkIsSUFBRzs7c0NBQ2hCLDhEQUFDMUIsMkRBQUdBOzRCQUFDa0IsV0FBVTs7OENBQ1gsOERBQUNsQixnRUFBUTtvQ0FBQ3NCLE1BQUs7OENBQWdCOzs7Ozs7OENBQy9CLDhEQUFDdEIsZ0VBQVE7b0NBQUNzQixNQUFLOzhDQUFhOzs7Ozs7OENBQzVCLDhEQUFDdEIsZ0VBQVE7b0NBQUNzQixNQUFLOzhDQUFrQjs7Ozs7O2dDQUNoQ1osTUFBTWtCLElBQUksa0JBQUksOERBQUM1QixnRUFBUTtvQ0FBQ3NCLE1BQUs7OENBQWE7Ozs7Ozs7Ozs7OztzQ0FFL0MsOERBQUNMOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDakIsNERBQUlBO2dDQUFDNEIsTUFBTTs7a0RBQ1IsOERBQUMzQixtRUFBV0E7d0NBQUNhLE1BQUs7d0NBQU9lLGFBQVk7d0NBQVNaLFdBQVU7Ozs7OztrREFDeEQsOERBQUNmLCtEQUFNQTt3Q0FBQzRCLFNBQVE7a0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHMUMsOERBQUMvQiwyREFBR0E7NEJBQUNrQixXQUFVO3NDQUNWUixNQUFNa0IsSUFBSSxpQkFDUCw4REFBQzVCLGdFQUFRO2dDQUFDZ0MsU0FBU25COzBDQUFjOzs7OztxREFFakMsOERBQUNiLGdFQUFRO2dDQUFDc0IsTUFBTzswQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xRDtHQXZDU2I7O1FBQ3VCTCxnRUFBY0E7UUFDM0JFLGtEQUFTQTs7O0tBRm5CRztBQXlDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanM/M2QwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE5hdmJhciwgTmF2LCBGb3JtLCBGb3JtQ29udHJvbCwgQnV0dG9uIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyB1c2VHbG9iYWxTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L0dsb2JhbFN0YXRlXCI7XHJcbmltcG9ydCBhdXRoU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhVXNlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIEN1c3RvbU5hdmJhcigpIHtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VHbG9iYWxTdGF0ZSgpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGF1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0xPR09VVF9VU0VSJyB9KTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPE5hdmJhciBiZz1cImxpZ2h0XCIgZXhwYW5kPVwibGdcIj5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5Ib21lPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwiYmFzaWMtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi90ZWFtc0Rpc3BsYXlcIj5UZWFtczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3N0YW5kaW5nc1wiPlN0YW5kaW5nczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BsYXllcnNEaXNwbGF5XCI+UGxheWVyczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0ZS51c2VyICYmIDxOYXYuTGluayBocmVmPVwiL2Zhdm9yaXRlc1wiPkZhdm9yaXRlczwvTmF2Lkxpbms+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGlubGluZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibXItc20tMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIj5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUudXNlciA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj17YC9sb2dpblBhZ2VgfT5Mb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21OYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIk5hdiIsIkZvcm0iLCJGb3JtQ29udHJvbCIsIkJ1dHRvbiIsInVzZUdsb2JhbFN0YXRlIiwiYXV0aFNlcnZpY2UiLCJ1c2VSb3V0ZXIiLCJGb250QXdlc29tZUljb24iLCJmYVVzZXIiLCJDdXN0b21OYXZiYXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwibG9nb3V0IiwidHlwZSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJiZyIsImV4cGFuZCIsIkJyYW5kIiwiaHJlZiIsIlRvZ2dsZSIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwiTGluayIsInVzZXIiLCJpbmxpbmUiLCJwbGFjZWhvbGRlciIsInZhcmlhbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.js\n"));

/***/ })

});