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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TeamDetail() {\n    _s();\n    const [teamDetails, setTeamDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [teamPlayers, setTeamPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\".concat(id, \"/?format=json\")).then((response)=>{\n                setTeamDetails(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching team details:\", error);\n            });\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Players/?format=json\").then((response)=>{\n                const filteredPlayers = response.data.filter((player)=>teamDetails.players.includes(player.id));\n                setTeamPlayers(filteredPlayers);\n            }).catch((error)=>{\n                console.error(\"Error fetching players:\", error);\n            });\n        }\n    }, [\n        id,\n        teamDetails\n    ]);\n    if (!teamDetails || !teamPlayers.length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n            lineNumber: 36,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col text-center mt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: teamDetails.team_name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-6\",\n                        children: [\n                            \"Wins: \",\n                            teamDetails.wins\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-6\",\n                        children: [\n                            \"Losses: \",\n                            teamDetails.losses\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-3\",\n                children: \"Players:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: teamPlayers.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-4\",\n                                children: [\n                                    player.first_name,\n                                    \" \",\n                                    player.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 52,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-4\",\n                                children: [\n                                    \"Position: \",\n                                    player.position\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-4\",\n                                children: [\n                                    \"Jersey Number: \",\n                                    player.jersey_number\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, player.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"button\",\n                onClick: ()=>router.back(),\n                children: \"X\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\pages\\\\[id].js\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamDetail, \"ZHsIu7gmxnWub0Cnu60rT3IkobM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = TeamDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamDetail);\nvar _c;\n$RefreshReg$(_c, \"TeamDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW2lkXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDb0I7QUFDTjtBQUV4QyxTQUFTSzs7SUFDTCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTVEsU0FBU04sc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU8sRUFBRSxFQUFFLEdBQUdELE9BQU9FLEtBQUs7SUFFM0JYLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVUsSUFBSTtZQUNKUixpREFBUyxDQUFDLCtCQUFrQyxPQUFIUSxJQUFHLGtCQUN2Q0csSUFBSSxDQUFDLENBQUNDO2dCQUNIUixlQUFlUSxTQUFTQyxJQUFJO1lBQ2hDLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztnQkFDSkMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7WUFDbEQ7WUFFSmYsaURBQVMsQ0FBRSw4Q0FDTlcsSUFBSSxDQUFDLENBQUNDO2dCQUNILE1BQU1LLGtCQUFrQkwsU0FBU0MsSUFBSSxDQUFDSyxNQUFNLENBQUNDLENBQUFBLFNBQ3pDaEIsWUFBWWlCLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixPQUFPWCxFQUFFO2dCQUUxQ0YsZUFBZVc7WUFDbkIsR0FDQ0gsS0FBSyxDQUFDLENBQUNDO2dCQUNKQyxRQUFRRCxLQUFLLENBQUMsMkJBQTJCQTtZQUM3QztRQUNSO0lBQ0osR0FBRztRQUFDUDtRQUFJTDtLQUFZO0lBRXBCLElBQUksQ0FBQ0EsZUFBZSxDQUFDRSxZQUFZaUIsTUFBTSxFQUFFO1FBQ3JDLHFCQUFPLDhEQUFDQztzQkFBSTs7Ozs7O0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNBO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0M7OEJBQUl0QixZQUFZdUIsU0FBUzs7Ozs7Ozs7Ozs7MEJBRTlCLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBT3JCLFlBQVl3QixJQUFJOzs7Ozs7O2tDQUM5Qyw4REFBQ0o7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFTckIsWUFBWXlCLE1BQU07Ozs7Ozs7Ozs7Ozs7MEJBRXRELDhEQUFDQztnQkFBR0wsV0FBVTswQkFBbUI7Ozs7OzswQkFDakMsOERBQUNEOzBCQUNJbEIsWUFBWXlCLEdBQUcsQ0FBQyxDQUFDWCx1QkFDZCw4REFBQ0k7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRDtnQ0FBSUMsV0FBVTs7b0NBQVNMLE9BQU9ZLFVBQVU7b0NBQUM7b0NBQUVaLE9BQU9hLFNBQVM7Ozs7Ozs7MENBQzVELDhEQUFDVDtnQ0FBSUMsV0FBVTs7b0NBQVE7b0NBQVdMLE9BQU9jLFFBQVE7Ozs7Ozs7MENBQ2pELDhEQUFDVjtnQ0FBSUMsV0FBVTs7b0NBQVE7b0NBQWdCTCxPQUFPZSxhQUFhOzs7Ozs7Ozt1QkFIekJmLE9BQU9YLEVBQUU7Ozs7Ozs7Ozs7MEJBT3ZELDhEQUFDMkI7Z0JBQU9DLE1BQUs7Z0JBQVNDLFNBQVMsSUFBTTlCLE9BQU8rQixJQUFJOzBCQUFJOzs7Ozs7Ozs7Ozs7QUFHaEU7R0F2RFNwQzs7UUFHVUQsa0RBQVNBOzs7S0FIbkJDO0FBeURULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9baWRdLmpzPzFkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBUZWFtRGV0YWlsKCkge1xyXG4gICAgY29uc3QgW3RlYW1EZXRhaWxzLCBzZXRUZWFtRGV0YWlsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0ZWFtUGxheWVycywgc2V0VGVhbVBsYXllcnNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvVGVhbXMvJHtpZH0vP2Zvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRlYW1EZXRhaWxzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdGVhbSBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1BsYXllcnMvP2Zvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkUGxheWVycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKHBsYXllciA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZWFtRGV0YWlscy5wbGF5ZXJzLmluY2x1ZGVzKHBsYXllci5pZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRlYW1QbGF5ZXJzKGZpbHRlcmVkUGxheWVycyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwbGF5ZXJzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWQsIHRlYW1EZXRhaWxzXSk7XHJcblxyXG4gICAgaWYgKCF0ZWFtRGV0YWlscyB8fCAhdGVhbVBsYXllcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHRleHQtY2VudGVyIG10LTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dGVhbURldGFpbHMudGVhbV9uYW1lfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IGRpc3BsYXktNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPldpbnM6IHt0ZWFtRGV0YWlscy53aW5zfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPkxvc3Nlczoge3RlYW1EZXRhaWxzLmxvc3Nlc308L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0zXCI+UGxheWVyczo8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RlYW1QbGF5ZXJzLm1hcCgocGxheWVyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIiBrZXk9e3BsYXllci5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj57cGxheWVyLmZpcnN0X25hbWV9IHtwbGF5ZXIubGFzdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+UG9zaXRpb246IHtwbGF5ZXIucG9zaXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5KZXJzZXkgTnVtYmVyOiB7cGxheWVyLmplcnNleV9udW1iZXJ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5iYWNrKCl9Plg8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1EZXRhaWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJUZWFtRGV0YWlsIiwidGVhbURldGFpbHMiLCJzZXRUZWFtRGV0YWlscyIsInRlYW1QbGF5ZXJzIiwic2V0VGVhbVBsYXllcnMiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZmlsdGVyZWRQbGF5ZXJzIiwiZmlsdGVyIiwicGxheWVyIiwicGxheWVycyIsImluY2x1ZGVzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0ZWFtX25hbWUiLCJ3aW5zIiwibG9zc2VzIiwiaDIiLCJtYXAiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicG9zaXRpb24iLCJqZXJzZXlfbnVtYmVyIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[id].js\n"));

/***/ })

});