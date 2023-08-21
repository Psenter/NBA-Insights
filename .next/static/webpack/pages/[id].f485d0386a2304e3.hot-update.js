"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./src/pages/[id].js":
/*!***************************!*\
  !*** ./src/pages/[id].js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TeamDetail() {\n    _s();\n    const [teamDetails, setTeamDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [teamPlayers, setTeamPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\".concat(id, \"/?format=json\")).then((response)=>{\n                setTeamDetails(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching team details:\", error);\n            });\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Players/?format=json&team=\".concat(id)).then((response)=>{\n                setTeamPlayers(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching team players:\", error);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (!teamDetails || !teamPlayers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n            lineNumber: 33,\n            columnNumber: 16\n        }, this);\n    }\n    const handleGoBack = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: teamDetails.team_name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Wins: \",\n                    teamDetails.wins\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Losses: \",\n                    teamDetails.losses\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Players:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: teamPlayers.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    player.first_name,\n                                    \" \",\n                                    player.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Position: \",\n                                    player.position\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Jersey Number: \",\n                                    player.jersey_number\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, player.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>router.back(),\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n        lineNumber: 41,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamDetail, \"ZHsIu7gmxnWub0Cnu60rT3IkobM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = TeamDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamDetail);\nvar _c;\n$RefreshReg$(_c, \"TeamDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDb0I7QUFDTjtBQUV4QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTVEsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0JYLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVUsSUFBSTtZQUNKUixpREFBUyxDQUFDLCtCQUFrQyxPQUFIUSxJQUFHLGtCQUN2Q0csSUFBSSxDQUFDLENBQUNDO2dCQUNIUixlQUFlUSxTQUFTQyxJQUFJO1lBQ2hDLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7WUFDbEQ7WUFFSmYsaURBQVMsQ0FBQyxtREFBc0QsT0FBSFEsS0FDeERHLElBQUksQ0FBQyxDQUFDQztnQkFDSE4sZUFBZU0sU0FBU0MsSUFBSTtZQUNoQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ0pDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQ2xEO1FBQ1I7SUFDSixHQUFHO1FBQUNQO0tBQUc7SUFFUCxJQUFJLENBQUNMLGVBQWUsQ0FBQ0UsYUFBYTtRQUM5QixxQkFBTyw4REFBQ1k7c0JBQUk7Ozs7OztJQUNoQjtJQUVBLE1BQU1DLGVBQWU7UUFDakJYLE9BQU9ZLElBQUksQ0FBQztJQUNoQjtJQUVBLHFCQUNJLDhEQUFDRjtRQUFJRyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQUlsQixZQUFZbUIsU0FBUzs7Ozs7OzBCQUMxQiw4REFBQ0M7O29CQUFFO29CQUFPcEIsWUFBWXFCLElBQUk7Ozs7Ozs7MEJBQzFCLDhEQUFDRDs7b0JBQUU7b0JBQVNwQixZQUFZc0IsTUFBTTs7Ozs7OzswQkFDOUIsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJdEIsWUFBWXVCLEdBQUcsQ0FBQyxDQUFDQyx1QkFDZCw4REFBQ0M7OzBDQUNHLDhEQUFDQzs7b0NBQVFGLE9BQU9HLFVBQVU7b0NBQUM7b0NBQUVILE9BQU9JLFNBQVM7Ozs7Ozs7MENBQzdDLDhEQUFDVjs7b0NBQUU7b0NBQVdNLE9BQU9LLFFBQVE7Ozs7Ozs7MENBQzdCLDhEQUFDWDs7b0NBQUU7b0NBQWdCTSxPQUFPTSxhQUFhOzs7Ozs7Ozt1QkFIbENOLE9BQU9yQixFQUFFOzs7Ozs7Ozs7OzBCQU8xQiw4REFBQzRCO2dCQUFPQyxNQUFLO2dCQUFTQyxTQUFTLElBQU0vQixPQUFPZ0MsSUFBSTswQkFBSTs7Ozs7Ozs7Ozs7O0FBR2hFO0dBcERTckM7O1FBR1VELGtEQUFTQTs7O0tBSG5CQztBQXNEVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW2lkXS5qcz8xZDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gVGVhbURldGFpbCgpIHtcclxuICAgIGNvbnN0IFt0ZWFtRGV0YWlscywgc2V0VGVhbURldGFpbHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdGVhbVBsYXllcnMsIHNldFRlYW1QbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLyR7aWR9Lz9mb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUZWFtRGV0YWlscyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlYW0gZGV0YWlsczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9QbGF5ZXJzLz9mb3JtYXQ9anNvbiZ0ZWFtPSR7aWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRlYW1QbGF5ZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdGVhbSBwbGF5ZXJzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICBpZiAoIXRlYW1EZXRhaWxzIHx8ICF0ZWFtUGxheWVycykge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlR29CYWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgxPnt0ZWFtRGV0YWlscy50ZWFtX25hbWV9PC9oMT5cclxuICAgICAgICAgICAgPHA+V2luczoge3RlYW1EZXRhaWxzLndpbnN9PC9wPlxyXG4gICAgICAgICAgICA8cD5Mb3NzZXM6IHt0ZWFtRGV0YWlscy5sb3NzZXN9PC9wPlxyXG4gICAgICAgICAgICA8aDI+UGxheWVyczo8L2gyPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7dGVhbVBsYXllcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwbGF5ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwbGF5ZXIuZmlyc3RfbmFtZX0ge3BsYXllci5sYXN0X25hbWV9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBvc2l0aW9uOiB7cGxheWVyLnBvc2l0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+SmVyc2V5IE51bWJlcjoge3BsYXllci5qZXJzZXlfbnVtYmVyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9Plg8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1EZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJUZWFtRGV0YWlsIiwidGVhbURldGFpbHMiLCJzZXRUZWFtRGV0YWlscyIsInRlYW1QbGF5ZXJzIiwic2V0VGVhbVBsYXllcnMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiaGFuZGxlR29CYWNrIiwicHVzaCIsImNsYXNzTmFtZSIsImgxIiwidGVhbV9uYW1lIiwicCIsIndpbnMiLCJsb3NzZXMiLCJoMiIsInVsIiwibWFwIiwicGxheWVyIiwibGkiLCJzdHJvbmciLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicG9zaXRpb24iLCJqZXJzZXlfbnVtYmVyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[id].js\n"));

/***/ })

});