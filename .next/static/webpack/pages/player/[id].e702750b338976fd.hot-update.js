"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[id]",{

/***/ "./src/components/PlayerDetail.js":
/*!****************************************!*\
  !*** ./src/components/PlayerDetail.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction PlayerDetail() {\n    _s();\n    const [playerDetails, setPlayerDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playerTeam, setPlayerTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            //GETS all details about a player that is clicked on\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Players/\".concat(id, \"/?format=json\")).then((response)=>{\n                setPlayerDetails(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching player details:\", error);\n            });\n            //GETS all details of all teams\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\").then((response)=>{\n                // find the team associated with the player through the player ID, stores data in playerTeam\n                const teamForPlayer = response.data.find((team)=>team.players.includes(parseInt(id, 10)));\n                setPlayerTeam(teamForPlayer);\n            }).catch((error)=>{\n                console.error(\"Error fetching team details\", error);\n            });\n        }\n    }, [\n        id\n    ]);\n    //returns a loading message if one or the other is empty\n    if (!playerDetails || !playerTeam) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n            lineNumber: 38,\n            columnNumber: 16\n        }, this);\n    }\n    //Displays all the information about a player\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 col text-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>router.back(),\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col text-center\",\n                    children: [\n                        playerDetails.first_name,\n                        \" \",\n                        playerDetails.last_name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                    lineNumber: 48,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Jersey Number: \",\n                            playerDetails.jersey_number\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Position: \",\n                            playerDetails.position\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: \"col-4\",\n                        href: \"/[id]\",\n                        as: \"/\".concat(playerTeam.id),\n                        children: [\n                            \"Team: \",\n                            playerTeam.team_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Weight: \",\n                            playerDetails.weight,\n                            \"lbs.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Height \",\n                            playerDetails.height,\n                            \"in.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"PPG: \",\n                            playerDetails.ppg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"RPG: \",\n                            playerDetails.rpg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"APG: \",\n                            playerDetails.apg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"SPG: \",\n                            playerDetails.spg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"BPG: \",\n                            playerDetails.bpg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Field goal percentage: \",\n                            playerDetails.field_goal_percent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Three pointer percentage: \",\n                            playerDetails.three_pointer_percent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Free throw percentage: \",\n                            playerDetails.free_throw_percent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Turnovers: \",\n                            playerDetails.turnovers\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Minutes: \",\n                            playerDetails.minutes_played\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(PlayerDetail, \"hJ3HaPuVxEJZpUKWD2t5KKkec2M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlayerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerDetail);\nvar _c;\n$RefreshReg$(_c, \"PlayerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBTXJCLGNBQWN1QyxHQUFHOzs7Ozs7O2tDQUM5Qyw4REFBQ25CO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBd0JyQixjQUFjd0Msa0JBQWtCOzs7Ozs7O2tDQUMvRSw4REFBQ3BCO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBMkJyQixjQUFjeUMscUJBQXFCOzs7Ozs7Ozs7Ozs7OzBCQUV6Riw4REFBQ3JCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUF3QnJCLGNBQWMwQyxrQkFBa0I7Ozs7Ozs7a0NBQy9FLDhEQUFDdEI7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFZckIsY0FBYzJDLFNBQVM7Ozs7Ozs7a0NBQzFELDhEQUFDdkI7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFVckIsY0FBYzRDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0U7R0F2RVM3Qzs7UUFHVUYsa0RBQVNBOzs7S0FIbkJFO0FBeUVULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllckRldGFpbC5qcz9iZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmZ1bmN0aW9uIFBsYXllckRldGFpbCgpIHtcclxuICAgIGNvbnN0IFtwbGF5ZXJEZXRhaWxzLCBzZXRQbGF5ZXJEZXRhaWxzXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3BsYXllclRlYW0sIHNldFBsYXllclRlYW1dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAvL0dFVFMgYWxsIGRldGFpbHMgYWJvdXQgYSBwbGF5ZXIgdGhhdCBpcyBjbGlja2VkIG9uXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1BsYXllcnMvJHtpZH0vP2Zvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBsYXllckRldGFpbHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwbGF5ZXIgZGV0YWlsczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL0dFVFMgYWxsIGRldGFpbHMgb2YgYWxsIHRlYW1zXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zL2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSB0ZWFtIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGxheWVyIHRocm91Z2ggdGhlIHBsYXllciBJRCwgc3RvcmVzIGRhdGEgaW4gcGxheWVyVGVhbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1Gb3JQbGF5ZXIgPSByZXNwb25zZS5kYXRhLmZpbmQodGVhbSA9PiB0ZWFtLnBsYXllcnMuaW5jbHVkZXMocGFyc2VJbnQoaWQsIDEwKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFBsYXllclRlYW0odGVhbUZvclBsYXllcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZWFtIGRldGFpbHNcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICAvL3JldHVybnMgYSBsb2FkaW5nIG1lc3NhZ2UgaWYgb25lIG9yIHRoZSBvdGhlciBpcyBlbXB0eVxyXG4gICAgaWYgKCFwbGF5ZXJEZXRhaWxzIHx8ICFwbGF5ZXJUZWFtKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH1cclxuXHJcbiAgICAvL0Rpc3BsYXlzIGFsbCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSBwbGF5ZXJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGNvbCB0ZXh0LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcm91dGVyLmJhY2soKX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgbXQtNSBtYi01IGRpc3BsYXktNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgdGV4dC1jZW50ZXJcIj57cGxheWVyRGV0YWlscy5maXJzdF9uYW1lfSB7cGxheWVyRGV0YWlscy5sYXN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IG1iLTUgZGlzcGxheS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+SmVyc2V5IE51bWJlcjoge3BsYXllckRldGFpbHMuamVyc2V5X251bWJlcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5Qb3NpdGlvbjoge3BsYXllckRldGFpbHMucG9zaXRpb259PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJjb2wtNFwiIGhyZWY9e2AvW2lkXWB9IGFzPXtgLyR7cGxheWVyVGVhbS5pZH1gfT5UZWFtOiB7cGxheWVyVGVhbS50ZWFtX25hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgbXQtNSBtYi01IGRpc3BsYXktNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPldlaWdodDoge3BsYXllckRldGFpbHMud2VpZ2h0fWxicy48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5IZWlnaHQge3BsYXllckRldGFpbHMuaGVpZ2h0fWluLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlBQRzoge3BsYXllckRldGFpbHMucHBnfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgbXQtNSBtYi01IGRpc3BsYXktNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlJQRzoge3BsYXllckRldGFpbHMucnBnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPkFQRzoge3BsYXllckRldGFpbHMuYXBnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlNQRzoge3BsYXllckRldGFpbHMuc3BnfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgbXQtNSBtYi01IGRpc3BsYXktNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPkJQRzoge3BsYXllckRldGFpbHMuYnBnfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPkZpZWxkIGdvYWwgcGVyY2VudGFnZToge3BsYXllckRldGFpbHMuZmllbGRfZ29hbF9wZXJjZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlRocmVlIHBvaW50ZXIgcGVyY2VudGFnZToge3BsYXllckRldGFpbHMudGhyZWVfcG9pbnRlcl9wZXJjZW50fTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgbXQtNSBtYi01IGRpc3BsYXktNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPkZyZWUgdGhyb3cgcGVyY2VudGFnZToge3BsYXllckRldGFpbHMuZnJlZV90aHJvd19wZXJjZW50fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlR1cm5vdmVyczoge3BsYXllckRldGFpbHMudHVybm92ZXJzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPk1pbnV0ZXM6IHtwbGF5ZXJEZXRhaWxzLm1pbnV0ZXNfcGxheWVkfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckRldGFpbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkxpbmsiLCJQbGF5ZXJEZXRhaWwiLCJwbGF5ZXJEZXRhaWxzIiwic2V0UGxheWVyRGV0YWlscyIsInBsYXllclRlYW0iLCJzZXRQbGF5ZXJUZWFtIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsInRlYW1Gb3JQbGF5ZXIiLCJmaW5kIiwidGVhbSIsInBsYXllcnMiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJiYWNrIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImplcnNleV9udW1iZXIiLCJwb3NpdGlvbiIsImhyZWYiLCJhcyIsInRlYW1fbmFtZSIsIndlaWdodCIsImhlaWdodCIsInBwZyIsInJwZyIsImFwZyIsInNwZyIsImJwZyIsImZpZWxkX2dvYWxfcGVyY2VudCIsInRocmVlX3BvaW50ZXJfcGVyY2VudCIsImZyZWVfdGhyb3dfcGVyY2VudCIsInR1cm5vdmVycyIsIm1pbnV0ZXNfcGxheWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PlayerDetail.js\n"));

/***/ })

});