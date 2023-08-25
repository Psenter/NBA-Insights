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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PlayerDetail() {\n    _s();\n    const [playerDetails, setPlayerDetails] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [playerTeam, setPlayerTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (id) {\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Players/\".concat(id, \"/?format=json\")).then((response)=>{\n                setPlayerDetails(response.data);\n            }).catch((error)=>{\n                console.error(\"Error fetching player details:\", error);\n            });\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\").then((response)=>{\n                // Find the team associated with the player\n                const teamForPlayer = response.data.find((team1)=>team1.players.includes(parseInt(id, 10)));\n                setPlayerTeam(teamForPlayer);\n            }).catch((error)=>{\n                console.error(\"Error fetching team details\", error);\n            });\n        }\n    }, [\n        id\n    ]);\n    if (!playerDetails || !playerTeam) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n            lineNumber: 34,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 col text-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>router.back(),\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col text-center\",\n                    children: [\n                        playerDetails.first_name,\n                        \" \",\n                        playerDetails.last_name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                    lineNumber: 43,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Jersey Number: \",\n                            playerDetails.jersey_number\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Position: \",\n                            playerDetails.position\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        className: \"col-4\",\n                        href: \"/[id]\",\n                        as: \"/\".concat(team.id),\n                        children: [\n                            \"Team: \",\n                            playerTeam.team_name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Weight: \",\n                            playerDetails.weight,\n                            \"lbs.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Height \",\n                            playerDetails.height,\n                            \"in.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"PPG: \",\n                            playerDetails.ppg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"RPG: \",\n                            playerDetails.rpg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"APG: \",\n                            playerDetails.apg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"SPG: \",\n                            playerDetails.spg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"BPG: \",\n                            playerDetails.bpg\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Field goal percentage: \",\n                            playerDetails.field_goal_percent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Three pointer percentage: \",\n                            playerDetails.three_pointer_percent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row text-center mt-5 mb-5 display-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Free throw percentage: \",\n                            playerDetails.free_throw_percent\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Turnovers: \",\n                            playerDetails.turnovers\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-4\",\n                        children: [\n                            \"Minutes: \",\n                            playerDetails.minutes_played\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayerDetail.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(PlayerDetail, \"hJ3HaPuVxEJZpUKWD2t5KKkec2M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PlayerDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerDetail);\nvar _c;\n$RefreshReg$(_c, \"PlayerDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw4REFBQ3BCO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBd0JyQixjQUFjeUMsa0JBQWtCOzs7Ozs7O2tDQUMvRSw4REFBQ3JCO3dCQUFJQyxXQUFVOzs0QkFBUTs0QkFBMkJyQixjQUFjMEMscUJBQXFCOzs7Ozs7Ozs7Ozs7OzBCQUV6Riw4REFBQ3RCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUF3QnJCLGNBQWMyQyxrQkFBa0I7Ozs7Ozs7a0NBQy9FLDhEQUFDdkI7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFZckIsY0FBYzRDLFNBQVM7Ozs7Ozs7a0NBQzFELDhEQUFDeEI7d0JBQUlDLFdBQVU7OzRCQUFROzRCQUFVckIsY0FBYzZDLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0U7R0FuRVM5Qzs7UUFHVUQsa0RBQVNBOzs7S0FIbkJDO0FBcUVULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllckRldGFpbC5qcz9iZmM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBQbGF5ZXJEZXRhaWwoKSB7XHJcbiAgICBjb25zdCBbcGxheWVyRGV0YWlscywgc2V0UGxheWVyRGV0YWlsc10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJUZWFtLCBzZXRQbGF5ZXJUZWFtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvUGxheWVycy8ke2lkfS8/Zm9ybWF0PWpzb25gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGxheWVyRGV0YWlscyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXllciBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zL2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSB0ZWFtIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVhbUZvclBsYXllciA9IHJlc3BvbnNlLmRhdGEuZmluZCh0ZWFtID0+IHRlYW0ucGxheWVycy5pbmNsdWRlcyhwYXJzZUludChpZCwgMTApKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UGxheWVyVGVhbSh0ZWFtRm9yUGxheWVyKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlYW0gZGV0YWlsc1wiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpZF0pO1xyXG5cclxuICAgIGlmICghcGxheWVyRGV0YWlscyB8fCAhcGxheWVyVGVhbSkge1xyXG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgY29sIHRleHQtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIuYmFjaygpfT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IG1iLTUgZGlzcGxheS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPntwbGF5ZXJEZXRhaWxzLmZpcnN0X25hbWV9IHtwbGF5ZXJEZXRhaWxzLmxhc3RfbmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyIG10LTUgbWItNSBkaXNwbGF5LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5KZXJzZXkgTnVtYmVyOiB7cGxheWVyRGV0YWlscy5qZXJzZXlfbnVtYmVyfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPlBvc2l0aW9uOiB7cGxheWVyRGV0YWlscy5wb3NpdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImNvbC00XCIgaHJlZj17YC9baWRdYH0gYXM9e2AvJHt0ZWFtLmlkfWB9PlRlYW06IHtwbGF5ZXJUZWFtLnRlYW1fbmFtZX08L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IG1iLTUgZGlzcGxheS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+V2VpZ2h0OiB7cGxheWVyRGV0YWlscy53ZWlnaHR9bGJzLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNFwiPkhlaWdodCB7cGxheWVyRGV0YWlscy5oZWlnaHR9aW4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+UFBHOiB7cGxheWVyRGV0YWlscy5wcGd9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IG1iLTUgZGlzcGxheS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+UlBHOiB7cGxheWVyRGV0YWlscy5ycGd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+QVBHOiB7cGxheWVyRGV0YWlscy5hcGd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+U1BHOiB7cGxheWVyRGV0YWlscy5zcGd9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IG1iLTUgZGlzcGxheS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+QlBHOiB7cGxheWVyRGV0YWlscy5icGd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+RmllbGQgZ29hbCBwZXJjZW50YWdlOiB7cGxheWVyRGV0YWlscy5maWVsZF9nb2FsX3BlcmNlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+VGhyZWUgcG9pbnRlciBwZXJjZW50YWdlOiB7cGxheWVyRGV0YWlscy50aHJlZV9wb2ludGVyX3BlcmNlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlciBtdC01IG1iLTUgZGlzcGxheS02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+RnJlZSB0aHJvdyBwZXJjZW50YWdlOiB7cGxheWVyRGV0YWlscy5mcmVlX3Rocm93X3BlcmNlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+VHVybm92ZXJzOiB7cGxheWVyRGV0YWlscy50dXJub3ZlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+TWludXRlczoge3BsYXllckRldGFpbHMubWludXRlc19wbGF5ZWR9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyRGV0YWlsO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiUGxheWVyRGV0YWlsIiwicGxheWVyRGV0YWlscyIsInNldFBsYXllckRldGFpbHMiLCJwbGF5ZXJUZWFtIiwic2V0UGxheWVyVGVhbSIsInJvdXRlciIsImlkIiwicXVlcnkiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJ0ZWFtRm9yUGxheWVyIiwiZmluZCIsInRlYW0iLCJwbGF5ZXJzIiwiaW5jbHVkZXMiLCJwYXJzZUludCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiYmFjayIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJqZXJzZXlfbnVtYmVyIiwicG9zaXRpb24iLCJMaW5rIiwiaHJlZiIsImFzIiwidGVhbV9uYW1lIiwid2VpZ2h0IiwiaGVpZ2h0IiwicHBnIiwicnBnIiwiYXBnIiwic3BnIiwiYnBnIiwiZmllbGRfZ29hbF9wZXJjZW50IiwidGhyZWVfcG9pbnRlcl9wZXJjZW50IiwiZnJlZV90aHJvd19wZXJjZW50IiwidHVybm92ZXJzIiwibWludXRlc19wbGF5ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PlayerDetail.js\n"));

/***/ })

});