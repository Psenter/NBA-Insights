"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/teamsDisplay",{

/***/ "./src/components/TeamsDisplay.js":
/*!****************************************!*\
  !*** ./src/components/TeamsDisplay.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction TeamsDisplay() {\n    _s();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-6\",\n            children: teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/[id]\",\n                            as: \"/\".concat(team.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: team.team_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                                lineNumber: 25,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Media ID: \",\n                                team.media_id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TeamMedia, {\n                            mediaId: team.media_id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, team.id, true, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamsDisplay, \"nt+I693XwTdNiKlXHWfWa22BjIk=\");\n_c = TeamsDisplay;\nfunction TeamMedia(param) {\n    let { mediaId } = param;\n    _s1();\n    const [assetUrl, setAssetUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mediaId) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Media/\".concat(mediaId, \"/?format=json\")).then((response)=>{\n                setAssetUrl(response.data.asset_url);\n            }).catch((error)=>{\n                console.error(\"Error fetching media:\", error);\n            });\n        }\n    }, [\n        mediaId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: assetUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Team Asset:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: assetUrl,\n                    alt: \"Team Asset\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n            lineNumber: 54,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s1(TeamMedia, \"7tu8kF6NA7uAoCajia1JiIL4yf8=\");\n_c1 = TeamMedia;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamsDisplay);\nvar _c, _c1;\n$RefreshReg$(_c, \"TeamsDisplay\");\n$RefreshReg$(_c1, \"TeamMedia\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWFtc0Rpc3BsYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ0c7QUFDaUI7QUFFOUMsU0FBU0s7O0lBQ0wsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ05FLGlEQUFTLENBQUMsNENBQ0xNLElBQUksQ0FBQyxDQUFDQztZQUNISCxTQUFTRyxTQUFTQyxJQUFJO1FBQzFCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNWVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNIO29CQUFrQkMsV0FBVTs7c0NBQ3pCLDhEQUFDWixrREFBSUE7NEJBQUNlLE1BQU87NEJBQVFDLElBQUksSUFBWSxPQUFSRixLQUFLRyxFQUFFO3NDQUM1Qiw0RUFBQ0M7MENBQUlKLEtBQUtLLFNBQVM7Ozs7Ozs7Ozs7O3NDQUUzQiw4REFBQ1I7O2dDQUFJO2dDQUFXRyxLQUFLTSxRQUFROzs7Ozs7O3NDQUM3Qiw4REFBQ0M7NEJBQVVDLFNBQVNSLEtBQUtNLFFBQVE7Ozs7Ozs7bUJBTDNCTixLQUFLRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUFXckM7R0E1QlNoQjtLQUFBQTtBQThCVCxTQUFTb0IsVUFBVSxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7O0lBQ2YsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDTixJQUFJeUIsU0FBUztZQUNUdkIsaURBQVMsQ0FBQywrQkFBdUMsT0FBUnVCLFNBQVEsa0JBQzVDakIsSUFBSSxDQUFDLENBQUNDO2dCQUNIa0IsWUFBWWxCLFNBQVNDLElBQUksQ0FBQ2tCLFNBQVM7WUFDdkMsR0FDQ2pCLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDM0M7UUFDUjtJQUNKLEdBQUc7UUFBQ2E7S0FBUTtJQUVaLHFCQUNJLDhEQUFDWDtrQkFDSVksMEJBQ0csOERBQUNaOzs4QkFDRyw4REFBQ2U7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQUlDLEtBQUtMO29CQUFVTSxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztJQXpCU1I7TUFBQUE7QUEyQlQsK0RBQWVwQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlYW1zRGlzcGxheS5qcz9kODJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRlYW1zRGlzcGxheSgpIHtcclxuICAgIGNvbnN0IFt0ZWFtcywgc2V0VGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLz9mb3JtYXQ9anNvblwiKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICAgICAge3RlYW1zLm1hcCgodGVhbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt0ZWFtLmlkfSBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvW2lkXWB9IGFzPXtgLyR7dGVhbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3RlYW0udGVhbV9uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5NZWRpYSBJRDoge3RlYW0ubWVkaWFfaWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZWFtTWVkaWEgbWVkaWFJZD17dGVhbS5tZWRpYV9pZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRlYW1NZWRpYSh7IG1lZGlhSWQgfSkge1xyXG4gICAgY29uc3QgW2Fzc2V0VXJsLCBzZXRBc3NldFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZWRpYUlkKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL01lZGlhLyR7bWVkaWFJZH0vP2Zvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEFzc2V0VXJsKHJlc3BvbnNlLmRhdGEuYXNzZXRfdXJsKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIG1lZGlhOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWVkaWFJZF0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2Fzc2V0VXJsICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlRlYW0gQXNzZXQ6PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXNzZXRVcmx9IGFsdD1cIlRlYW0gQXNzZXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtc0Rpc3BsYXk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiVGVhbXNEaXNwbGF5IiwidGVhbXMiLCJzZXRUZWFtcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInRlYW0iLCJocmVmIiwiYXMiLCJpZCIsImgyIiwidGVhbV9uYW1lIiwibWVkaWFfaWQiLCJUZWFtTWVkaWEiLCJtZWRpYUlkIiwiYXNzZXRVcmwiLCJzZXRBc3NldFVybCIsImFzc2V0X3VybCIsImg0IiwiaW1nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TeamsDisplay.js\n"));

/***/ })

});