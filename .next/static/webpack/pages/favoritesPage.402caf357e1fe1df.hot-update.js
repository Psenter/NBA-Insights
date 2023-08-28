"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/favoritesPage",{

/***/ "./src/components/FavoritesComponent.js":
/*!**********************************************!*\
  !*** ./src/components/FavoritesComponent.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction FavoritesComponent() {\n    _s();\n    const [teamFavorites, setTeamFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [playerFavorites, setPlayerFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [teamNameMap, setTeamNameMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [playerNameMap, setPlayerNameMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch favorite teams\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/FavoriteTeams/?format=json\").then((response)=>{\n            setTeamFavorites(response.data);\n            const teamMap = {};\n            const teamPromises = response.data.map((favorite)=>axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\".concat(favorite.team_id, \"/?format=json\")).then((teamResponse)=>{\n                    teamMap[favorite.team_id] = teamResponse.data.team_name;\n                }).catch((error)=>{\n                    console.error(\"Error fetching team details:\", error);\n                }));\n            Promise.all(teamPromises).then(()=>{\n                setTeamNameMap(teamMap);\n            });\n        }).catch((error)=>{\n            console.error(\"Error fetching favorite teams:\", error);\n        });\n        // Fetch favorite players\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/FavoritePlayers/?format=json\").then((response)=>{\n            setPlayerFavorites(response.data);\n            const playerMap = {};\n            const playerPromises = response.data.map((favorite)=>axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Players/\".concat(favorite.player_id, \"/?format=json\")).then((playerResponse)=>{\n                    playerMap[favorite.player_id] = \"\".concat(playerResponse.data.first_name, \" \").concat(playerResponse.data.last_name);\n                }).catch((error)=>{\n                    console.error(\"Error fetching player details:\", error);\n                }));\n            Promise.all(playerPromises).then(()=>{\n                setPlayerNameMap(playerMap);\n            });\n        }).catch((error)=>{\n            console.error(\"Error fetching favorite players:\", error);\n        });\n    }, []);\n    const handleDeleteTeam = (teamId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://127.0.0.1:8000/FavoriteTeams/\".concat(teamId, \"/\")).then(()=>{\n            setTeamFavorites((prevFavorites)=>prevFavorites.filter((team)=>team.id !== teamId));\n        }).catch((error)=>{\n            console.error(\"Error deleting favorite team:\", error);\n        });\n    };\n    const handleDeletePlayer = (playerId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"http://127.0.0.1:8000/FavoritePlayers/\".concat(playerId, \"/\")).then(()=>{\n            setPlayerFavorites((prevFavorites)=>prevFavorites.filter((player)=>player.id !== playerId));\n        }).catch((error)=>{\n            console.error(\"Error deleting favorite player:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-5 display-1\",\n                children: \"Favorite Teams:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: teamFavorites.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row ms-5 me-5 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"display-6 col-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"link-gone\",\n                                    href: \"/[id]\",\n                                    as: \"/\".concat(team.id),\n                                    children: teamNameMap[team.team_id]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, this)\n                            }, team.id, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 99,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"col-2 float-end text-center btn btn-danger\",\n                                onClick: ()=>handleDeleteTeam(team.id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-5 display-1\",\n                children: \"Favorite Players:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: playerFavorites.map((player)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row me-5 ms-5 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"display-6 col-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"link-gone\",\n                                    href: \"/player/\".concat(player.player_id),\n                                    children: playerNameMap[player.player_id]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 15\n                                }, this)\n                            }, player.id, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 119,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"float-end text-center col-2 btn btn-danger\",\n                                onClick: ()=>handleDeletePlayer(player.id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 124,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(FavoritesComponent, \"KA12dANlAe5oScqXRvtmFFxT2x8=\");\n_c = FavoritesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoritesComponent);\nvar _c;\n$RefreshReg$(_c, \"FavoritesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zhdm9yaXRlc0NvbXBvbmVudC5qcz8zYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZnVuY3Rpb24gRmF2b3JpdGVzQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IFt0ZWFtRmF2b3JpdGVzLCBzZXRUZWFtRmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGxheWVyRmF2b3JpdGVzLCBzZXRQbGF5ZXJGYXZvcml0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0ZWFtTmFtZU1hcCwgc2V0VGVhbU5hbWVNYXBdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtwbGF5ZXJOYW1lTWFwLCBzZXRQbGF5ZXJOYW1lTWFwXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIEZldGNoIGZhdm9yaXRlIHRlYW1zXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL0Zhdm9yaXRlVGVhbXMvP2Zvcm1hdD1qc29uXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFRlYW1GYXZvcml0ZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgdGVhbU1hcCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHRlYW1Qcm9taXNlcyA9IHJlc3BvbnNlLmRhdGEubWFwKChmYXZvcml0ZSkgPT5cclxuICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8ke2Zhdm9yaXRlLnRlYW1faWR9Lz9mb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKCh0ZWFtUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICB0ZWFtTWFwW2Zhdm9yaXRlLnRlYW1faWRdID0gdGVhbVJlc3BvbnNlLmRhdGEudGVhbV9uYW1lO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlYW0gZGV0YWlsczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKHRlYW1Qcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUZWFtTmFtZU1hcCh0ZWFtTWFwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBmYXZvcml0ZSB0ZWFtczpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBGZXRjaCBmYXZvcml0ZSBwbGF5ZXJzXHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL0Zhdm9yaXRlUGxheWVycy8/Zm9ybWF0PWpzb25cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0UGxheWVyRmF2b3JpdGVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllck1hcCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHBsYXllclByb21pc2VzID0gcmVzcG9uc2UuZGF0YS5tYXAoKGZhdm9yaXRlKSA9PlxyXG4gICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChcclxuICAgICAgICAgICAgICBgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1BsYXllcnMvJHtmYXZvcml0ZS5wbGF5ZXJfaWR9Lz9mb3JtYXQ9anNvbmBcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAudGhlbigocGxheWVyUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBwbGF5ZXJNYXBbXHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZS5wbGF5ZXJfaWRcclxuICAgICAgICAgICAgICBdID0gYCR7cGxheWVyUmVzcG9uc2UuZGF0YS5maXJzdF9uYW1lfSAke3BsYXllclJlc3BvbnNlLmRhdGEubGFzdF9uYW1lfWA7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcGxheWVyIGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChwbGF5ZXJQcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICBzZXRQbGF5ZXJOYW1lTWFwKHBsYXllck1hcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZmF2b3JpdGUgcGxheWVyczpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRlYW0gPSAodGVhbUlkKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZGVsZXRlKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvRmF2b3JpdGVUZWFtcy8ke3RlYW1JZH0vYClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldFRlYW1GYXZvcml0ZXMoKHByZXZGYXZvcml0ZXMpID0+XHJcbiAgICAgICAgICBwcmV2RmF2b3JpdGVzLmZpbHRlcigodGVhbSkgPT4gdGVhbS5pZCAhPT0gdGVhbUlkKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZGVsZXRpbmcgZmF2b3JpdGUgdGVhbTpcIiwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVQbGF5ZXIgPSAocGxheWVySWQpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5kZWxldGUoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9GYXZvcml0ZVBsYXllcnMvJHtwbGF5ZXJJZH0vYClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHNldFBsYXllckZhdm9yaXRlcygocHJldkZhdm9yaXRlcykgPT5cclxuICAgICAgICAgIHByZXZGYXZvcml0ZXMuZmlsdGVyKChwbGF5ZXIpID0+IHBsYXllci5pZCAhPT0gcGxheWVySWQpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBmYXZvcml0ZSBwbGF5ZXI6XCIsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01IGRpc3BsYXktMVwiPkZhdm9yaXRlIFRlYW1zOjwvaDI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7dGVhbUZhdm9yaXRlcy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1zLTUgbWUtNSBtYi00XCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkaXNwbGF5LTYgY29sLTEwXCIga2V5PXt0ZWFtLmlkfT5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rLWdvbmVcIiBocmVmPXtgL1tpZF1gfSBhcz17YC8ke3RlYW0uaWR9YH0+XHJcbiAgICAgICAgICAgICAgICB7dGVhbU5hbWVNYXBbdGVhbS50ZWFtX2lkXX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMiBmbG9hdC1lbmQgdGV4dC1jZW50ZXIgYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRlYW0odGVhbS5pZCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi01IGRpc3BsYXktMVwiPkZhdm9yaXRlIFBsYXllcnM6PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwbGF5ZXJGYXZvcml0ZXMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1lLTUgbXMtNSBtYi00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc3BsYXktNiBjb2wtOFwiIGtleT17cGxheWVyLmlkfT5cclxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rLWdvbmVcIiBocmVmPXtgL3BsYXllci8ke3BsYXllci5wbGF5ZXJfaWR9YH0+XHJcbiAgICAgICAgICAgICAgICB7cGxheWVyTmFtZU1hcFtwbGF5ZXIucGxheWVyX2lkXX1cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1lbmQgdGV4dC1jZW50ZXIgY29sLTIgYnRuIGJ0bi1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVBsYXllcihwbGF5ZXIuaWQpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0yXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlc0NvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJGYXZvcml0ZXNDb21wb25lbnQiLCJ0ZWFtRmF2b3JpdGVzIiwic2V0VGVhbUZhdm9yaXRlcyIsInBsYXllckZhdm9yaXRlcyIsInNldFBsYXllckZhdm9yaXRlcyIsInRlYW1OYW1lTWFwIiwic2V0VGVhbU5hbWVNYXAiLCJwbGF5ZXJOYW1lTWFwIiwic2V0UGxheWVyTmFtZU1hcCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ0ZWFtTWFwIiwidGVhbVByb21pc2VzIiwibWFwIiwiZmF2b3JpdGUiLCJ0ZWFtX2lkIiwidGVhbVJlc3BvbnNlIiwidGVhbV9uYW1lIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJQcm9taXNlIiwiYWxsIiwicGxheWVyTWFwIiwicGxheWVyUHJvbWlzZXMiLCJwbGF5ZXJfaWQiLCJwbGF5ZXJSZXNwb25zZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJoYW5kbGVEZWxldGVUZWFtIiwidGVhbUlkIiwiZGVsZXRlIiwicHJldkZhdm9yaXRlcyIsImZpbHRlciIsInRlYW0iLCJpZCIsImhhbmRsZURlbGV0ZVBsYXllciIsInBsYXllcklkIiwicGxheWVyIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJ1bCIsImxpIiwiaHJlZiIsImFzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FavoritesComponent.js\n"));

/***/ })

});