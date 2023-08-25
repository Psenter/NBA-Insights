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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nfunction TeamsDisplay() {\n    _s();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-6\",\n            children: teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/[id]\",\n                            as: \"/\".concat(team.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: team.team_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                                lineNumber: 25,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \"Media ID: \",\n                                team.media_id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TeamMedia, {\n                            mediaId: team.media_id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PlayersList, {\n                            players: team.players\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, team.id, true, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamsDisplay, \"nt+I693XwTdNiKlXHWfWa22BjIk=\");\n_c = TeamsDisplay;\nfunction TeamMedia(param) {\n    let { mediaId } = param;\n    _s1();\n    const [assetUrl, setAssetUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (mediaId) {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Media/\".concat(mediaId, \"/?format=json\")).then((response)=>{\n                if (response.data.length > 0) {\n                    setAssetUrl(response.data[0].asset_url);\n                }\n            }).catch((error)=>{\n                console.error(\"Error fetching media:\", error);\n            });\n        }\n    }, [\n        mediaId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: assetUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    children: \"Team Asset:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 58,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: assetUrl,\n                    alt: \"Team Asset\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 59,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n            lineNumber: 57,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_s1(TeamMedia, \"7tu8kF6NA7uAoCajia1JiIL4yf8=\");\n_c1 = TeamMedia;\nfunction PlayersList(param) {\n    let { players } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: \"Players:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: players.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: player.player_name\n                    }, player.id, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_c2 = PlayersList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamsDisplay);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"TeamsDisplay\");\n$RefreshReg$(_c1, \"TeamMedia\");\n$RefreshReg$(_c2, \"PlayersList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWFtc0Rpc3BsYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ0c7QUFDaUI7QUFFOUMsU0FBU0s7O0lBQ0wsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ05FLGlEQUFTLENBQUMsNENBQ0xNLElBQUksQ0FBQyxDQUFDQztZQUNISCxTQUFTRyxTQUFTQyxJQUFJO1FBQzFCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNWVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNIO29CQUFrQkMsV0FBVTs7c0NBQ3pCLDhEQUFDWixrREFBSUE7NEJBQUNlLE1BQU87NEJBQVFDLElBQUksSUFBWSxPQUFSRixLQUFLRyxFQUFFO3NDQUM1Qiw0RUFBQ0M7MENBQUlKLEtBQUtLLFNBQVM7Ozs7Ozs7Ozs7O3NDQUUzQiw4REFBQ1I7O2dDQUFJO2dDQUFXRyxLQUFLTSxRQUFROzs7Ozs7O3NDQUM3Qiw4REFBQ0M7NEJBQVVDLFNBQVNSLEtBQUtNLFFBQVE7Ozs7OztzQ0FDakMsOERBQUNHOzRCQUFZQyxTQUFTVixLQUFLVSxPQUFPOzs7Ozs7O21CQU41QlYsS0FBS0csRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBWXJDO0dBN0JTaEI7S0FBQUE7QUErQlQsU0FBU29CLFVBQVUsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYOztJQUNmLE1BQU0sQ0FBQ0csVUFBVUMsWUFBWSxHQUFHNUIsK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ04sSUFBSXlCLFNBQVM7WUFDVHZCLGlEQUFTLENBQUMsK0JBQXVDLE9BQVJ1QixTQUFRLGtCQUM1Q2pCLElBQUksQ0FBQyxDQUFDQztnQkFDSCxJQUFJQSxTQUFTQyxJQUFJLENBQUNvQixNQUFNLEdBQUcsR0FBRztvQkFDMUJELFlBQVlwQixTQUFTQyxJQUFJLENBQUMsRUFBRSxDQUFDcUIsU0FBUztnQkFDMUM7WUFDSixHQUNDcEIsS0FBSyxDQUFDLENBQUNDO2dCQUNKQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtZQUMzQztRQUNSO0lBQ0osR0FBRztRQUFDYTtLQUFRO0lBRVoscUJBQ0ksOERBQUNYO2tCQUNJYywwQkFDRyw4REFBQ2Q7OzhCQUNHLDhEQUFDa0I7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQUlDLEtBQUtOO29CQUFVTyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QztJQTNCU1g7TUFBQUE7QUE2QlQsU0FBU0UsWUFBWSxLQUFXO1FBQVgsRUFBRUMsT0FBTyxFQUFFLEdBQVg7SUFDakIscUJBQ0ksOERBQUNiOzswQkFDRyw4REFBQ2tCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNJOzBCQUNJVCxRQUFRWCxHQUFHLENBQUMsQ0FBQ3FCLHVCQUNWLDhEQUFDQztrQ0FBb0JELE9BQU9FLFdBQVc7dUJBQTlCRixPQUFPakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QztNQVhTTTtBQWFULCtEQUFldEIsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UZWFtc0Rpc3BsYXkuanM/ZDgyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBUZWFtc0Rpc3BsYXkoKSB7XHJcbiAgICBjb25zdCBbdGVhbXMsIHNldFRlYW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChcImh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8/Zm9ybWF0PWpzb25cIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRUZWFtcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cclxuICAgICAgICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGVhbS5pZH0gY2xhc3NOYW1lPVwibWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1tpZF1gfSBhcz17YC8ke3RlYW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0ZWFtLnRlYW1fbmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TWVkaWEgSUQ6IHt0ZWFtLm1lZGlhX2lkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGVhbU1lZGlhIG1lZGlhSWQ9e3RlYW0ubWVkaWFfaWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJzTGlzdCBwbGF5ZXJzPXt0ZWFtLnBsYXllcnN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUZWFtTWVkaWEoeyBtZWRpYUlkIH0pIHtcclxuICAgIGNvbnN0IFthc3NldFVybCwgc2V0QXNzZXRVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobWVkaWFJZCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9NZWRpYS8ke21lZGlhSWR9Lz9mb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFzc2V0VXJsKHJlc3BvbnNlLmRhdGFbMF0uYXNzZXRfdXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBtZWRpYTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lZGlhSWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHthc3NldFVybCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND5UZWFtIEFzc2V0OjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Fzc2V0VXJsfSBhbHQ9XCJUZWFtIEFzc2V0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUGxheWVyc0xpc3QoeyBwbGF5ZXJzIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0PlBsYXllcnM6PC9oND5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3BsYXllcnMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwbGF5ZXIuaWR9PntwbGF5ZXIucGxheWVyX25hbWV9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbXNEaXNwbGF5O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiTGluayIsIlRlYW1zRGlzcGxheSIsInRlYW1zIiwic2V0VGVhbXMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJ0ZWFtIiwiaHJlZiIsImFzIiwiaWQiLCJoMiIsInRlYW1fbmFtZSIsIm1lZGlhX2lkIiwiVGVhbU1lZGlhIiwibWVkaWFJZCIsIlBsYXllcnNMaXN0IiwicGxheWVycyIsImFzc2V0VXJsIiwic2V0QXNzZXRVcmwiLCJsZW5ndGgiLCJhc3NldF91cmwiLCJoNCIsImltZyIsInNyYyIsImFsdCIsInVsIiwicGxheWVyIiwibGkiLCJwbGF5ZXJfbmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TeamsDisplay.js\n"));

/***/ })

});