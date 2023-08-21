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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TeamDetail() {\n    _s();\n    const [teamDetails, setTeamDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [teamPlayers, setTeamPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            // Fetch team details\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\".concat(id, \"/?format=json\")).then((response)=>{\n                setTeamDetails(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching team details:\", error);\n            });\n            // Fetch team players\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Players/?format=json&team=\".concat(id)).then((response)=>{\n                setTeamPlayers(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching team players:\", error);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (!teamDetails || !teamPlayers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n            lineNumber: 35,\n            columnNumber: 16\n        }, this);\n    }\n    const handleGoBack = ()=>{\n        router.push(\"/\"); // Navigate back to the teams page\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: teamDetails.team_name\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Wins: \",\n                    teamDetails.wins\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Losses: \",\n                    teamDetails.losses\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Players:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: teamPlayers.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    player.first_name,\n                                    \" \",\n                                    player.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Position: \",\n                                    player.position\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Jersey Number: \",\n                                    player.jersey_number\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, player.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleGoBack,\n                children: \"Go Back\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamDetail, \"ZHsIu7gmxnWub0Cnu60rT3IkobM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = TeamDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamDetail);\nvar _c;\n$RefreshReg$(_c, \"TeamDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDb0I7QUFDTjtBQUV4QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTVEsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0JYLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVUsSUFBSTtZQUNKLHFCQUFxQjtZQUNyQlIsaURBQVMsQ0FBQywrQkFBa0MsT0FBSFEsSUFBRyxrQkFDdkNHLElBQUksQ0FBQyxDQUFDQztnQkFDSFIsZUFBZVEsU0FBU0MsSUFBSTtZQUNoQyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0M7Z0JBQ0pDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQ2xEO1lBRUoscUJBQXFCO1lBQ3JCZixpREFBUyxDQUFDLG1EQUFzRCxPQUFIUSxLQUN4REcsSUFBSSxDQUFDLENBQUNDO2dCQUNITixlQUFlTSxTQUFTQyxJQUFJO1lBQ2hDLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7WUFDbEQ7UUFDUjtJQUNKLEdBQUc7UUFBQ1A7S0FBRztJQUVQLElBQUksQ0FBQ0wsZUFBZSxDQUFDRSxhQUFhO1FBQzlCLHFCQUFPLDhEQUFDWTtzQkFBSTs7Ozs7O0lBQ2hCO0lBRUEsTUFBTUMsZUFBZTtRQUNqQlgsT0FBT1ksSUFBSSxDQUFDLE1BQU0sa0NBQWtDO0lBQ3hEO0lBRUEscUJBQ0ksOERBQUNGO1FBQUlHLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBSWxCLFlBQVltQixTQUFTOzs7Ozs7MEJBQzFCLDhEQUFDQzs7b0JBQUU7b0JBQU9wQixZQUFZcUIsSUFBSTs7Ozs7OzswQkFDMUIsOERBQUNEOztvQkFBRTtvQkFBU3BCLFlBQVlzQixNQUFNOzs7Ozs7OzBCQUM5Qiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQ0l0QixZQUFZdUIsR0FBRyxDQUFDLENBQUNDLHVCQUNkLDhEQUFDQzs7MENBQ0csOERBQUNDOztvQ0FBUUYsT0FBT0csVUFBVTtvQ0FBQztvQ0FBRUgsT0FBT0ksU0FBUzs7Ozs7OzswQ0FDN0MsOERBQUNWOztvQ0FBRTtvQ0FBV00sT0FBT0ssUUFBUTs7Ozs7OzswQ0FDN0IsOERBQUNYOztvQ0FBRTtvQ0FBZ0JNLE9BQU9NLGFBQWE7Ozs7Ozs7O3VCQUhsQ04sT0FBT3JCLEVBQUU7Ozs7Ozs7Ozs7MEJBUTFCLDhEQUFDNEI7Z0JBQU9DLFNBQVNuQjswQkFBYzs7Ozs7Ozs7Ozs7O0FBRzNDO0dBdkRTaEI7O1FBR1VELGtEQUFTQTs7O0tBSG5CQztBQXlEVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW2lkXS5qcz8xZDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gVGVhbURldGFpbCgpIHtcclxuICAgIGNvbnN0IFt0ZWFtRGV0YWlscywgc2V0VGVhbURldGFpbHNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdGVhbVBsYXllcnMsIHNldFRlYW1QbGF5ZXJzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIC8vIEZldGNoIHRlYW0gZGV0YWlsc1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8ke2lkfS8/Zm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGVhbURldGFpbHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZWFtIGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gRmV0Y2ggdGVhbSBwbGF5ZXJzXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1BsYXllcnMvP2Zvcm1hdD1qc29uJnRlYW09JHtpZH1gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGVhbVBsYXllcnMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZWFtIHBsYXllcnM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmICghdGVhbURldGFpbHMgfHwgIXRlYW1QbGF5ZXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVHb0JhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gTmF2aWdhdGUgYmFjayB0byB0aGUgdGVhbXMgcGFnZVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMT57dGVhbURldGFpbHMudGVhbV9uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDxwPldpbnM6IHt0ZWFtRGV0YWlscy53aW5zfTwvcD5cclxuICAgICAgICAgICAgPHA+TG9zc2VzOiB7dGVhbURldGFpbHMubG9zc2VzfTwvcD5cclxuICAgICAgICAgICAgPGgyPlBsYXllcnM6PC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3RlYW1QbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cGxheWVyLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cGxheWVyLmZpcnN0X25hbWV9IHtwbGF5ZXIubGFzdF9uYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3NpdGlvbjoge3BsYXllci5wb3NpdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkplcnNleSBOdW1iZXI6IHtwbGF5ZXIuamVyc2V5X251bWJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEaXNwbGF5IG90aGVyIHBsYXllciBhdHRyaWJ1dGVzIGFzIG5lZWRlZCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlR29CYWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiVGVhbURldGFpbCIsInRlYW1EZXRhaWxzIiwic2V0VGVhbURldGFpbHMiLCJ0ZWFtUGxheWVycyIsInNldFRlYW1QbGF5ZXJzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImhhbmRsZUdvQmFjayIsInB1c2giLCJjbGFzc05hbWUiLCJoMSIsInRlYW1fbmFtZSIsInAiLCJ3aW5zIiwibG9zc2VzIiwiaDIiLCJ1bCIsIm1hcCIsInBsYXllciIsImxpIiwic3Ryb25nIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBvc2l0aW9uIiwiamVyc2V5X251bWJlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/[id].js\n"));

/***/ })

});