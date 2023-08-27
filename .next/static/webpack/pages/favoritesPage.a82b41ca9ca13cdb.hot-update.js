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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction FavoritesComponent() {\n    _s();\n    const [teamFavorites, setTeamFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [playerFavorites, setPlayerFavorites] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [teamNameMap, setTeamNameMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [playerNameMap, setPlayerNameMap] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch favorite teams\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/FavoriteTeams/?format=json\").then((response)=>{\n            setTeamFavorites(response.data);\n            const teamMap = {};\n            response.data.forEach((favorite)=>{\n                axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Teams/\".concat(favorite.team_id, \"/?format=json\")).then((teamResponse)=>{\n                    teamMap[favorite.team_id] = teamResponse.data.team_name;\n                    setTeamNameMap(teamMap);\n                }).catch((error)=>{\n                    console.error(\"Error fetching team details:\", error);\n                });\n            });\n        }).catch((error)=>{\n            console.error(\"Error fetching favorite teams:\", error);\n        });\n        // Fetch favorite players\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/FavoritePlayers/?format=json\").then((response)=>{\n            setPlayerFavorites(response.data);\n            const playerMap = {};\n            response.data.forEach((favorite)=>{\n                axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Players/\".concat(favorite.player_id, \"/?format=json\")).then((playerResponse)=>{\n                    playerMap[favorite.player_id] = \"\".concat(playerResponse.data.first_name, \" \").concat(playerResponse.data.last_name);\n                    setPlayerNameMap(playerMap);\n                }).catch((error)=>{\n                    console.error(\"Error fetching player details:\", error);\n                });\n            });\n        }).catch((error)=>{\n            console.error(\"Error fetching favorite players:\", error);\n        });\n    }, []);\n    const handleDeleteTeam = (teamId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://127.0.0.1:8000/FavoriteTeams/\".concat(teamId, \"/?format=json\")).then((response)=>{\n            // Remove the deleted team from the state\n            setTeamFavorites(teamFavorites.filter((team)=>team.team_id !== teamId));\n        }).catch((error)=>{\n            console.error(\"Error deleting favorite team:\", error);\n        });\n    };\n    const handleDeletePlayer = (playerId)=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"http://127.0.0.1:8000/FavoritePlayers/\".concat(playerId, \"/?format=json\")).then((response)=>{\n            // Remove the deleted player from the state\n            setPlayerFavorites(playerFavorites.filter((player1)=>player1.player_id !== playerId));\n        }).catch((error)=>{\n            console.error(\"Error deleting favorite player:\", error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Favorite Teams:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: teamFavorites.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            teamNameMap[team.team_id],\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeleteTeam(player.player_id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 82,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, team.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                        lineNumber: 80,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 78,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Favorite Players:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: playerFavorites.map((player1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            playerNameMap[player1.player_id],\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleDeletePlayer(player1.player_id),\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                                lineNumber: 92,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, player1.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                        lineNumber: 90,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\FavoritesComponent.js\",\n        lineNumber: 76,\n        columnNumber: 9\n    }, this);\n}\n_s(FavoritesComponent, \"KA12dANlAe5oScqXRvtmFFxT2x8=\");\n_c = FavoritesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FavoritesComponent);\nvar _c;\n$RefreshReg$(_c, \"FavoritesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQ1AscUJBQ2hCLDhEQUFDUTs7NEJBQ0lsQyxXQUFXLENBQUMwQixLQUFLZixPQUFPLENBQUM7MENBQzFCLDhEQUFDd0I7Z0NBQU9DLFNBQVMsSUFBTWQsaUJBQWlCTyxPQUFPWCxTQUFTOzBDQUFHOzs7Ozs7O3VCQUZ0RFEsS0FBS1csRUFBRTs7Ozs7Ozs7OzswQkFPeEIsOERBQUNOOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJbEMsZ0JBQWdCbUMsR0FBRyxDQUFDLENBQUNKLHdCQUNsQiw4REFBQ0s7OzRCQUNJaEMsYUFBYSxDQUFDMkIsUUFBT1gsU0FBUyxDQUFDOzBDQUNoQyw4REFBQ2lCO2dDQUFPQyxTQUFTLElBQU1ULG1CQUFtQkUsUUFBT1gsU0FBUzswQ0FBRzs7Ozs7Ozt1QkFGeERXLFFBQU9RLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEM7R0E5RlMxQztLQUFBQTtBQWdHVCwrREFBZUEsa0JBQWtCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zhdm9yaXRlc0NvbXBvbmVudC5qcz8zYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIEZhdm9yaXRlc0NvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IFt0ZWFtRmF2b3JpdGVzLCBzZXRUZWFtRmF2b3JpdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwbGF5ZXJGYXZvcml0ZXMsIHNldFBsYXllckZhdm9yaXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdGVhbU5hbWVNYXAsIHNldFRlYW1OYW1lTWFwXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtwbGF5ZXJOYW1lTWFwLCBzZXRQbGF5ZXJOYW1lTWFwXSA9IHVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIEZldGNoIGZhdm9yaXRlIHRlYW1zXHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL0Zhdm9yaXRlVGVhbXMvP2Zvcm1hdD1qc29uXCIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGVhbUZhdm9yaXRlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlYW1NYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaCgoZmF2b3JpdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8ke2Zhdm9yaXRlLnRlYW1faWR9Lz9mb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh0ZWFtUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlYW1NYXBbZmF2b3JpdGUudGVhbV9pZF0gPSB0ZWFtUmVzcG9uc2UuZGF0YS50ZWFtX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUZWFtTmFtZU1hcCh0ZWFtTWFwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlYW0gZGV0YWlsczpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZmF2b3JpdGUgdGVhbXM6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZldGNoIGZhdm9yaXRlIHBsYXllcnNcclxuICAgICAgICBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvRmF2b3JpdGVQbGF5ZXJzLz9mb3JtYXQ9anNvblwiKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBsYXllckZhdm9yaXRlcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBsYXllck1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKChmYXZvcml0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL1BsYXllcnMvJHtmYXZvcml0ZS5wbGF5ZXJfaWR9Lz9mb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChwbGF5ZXJSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyTWFwW2Zhdm9yaXRlLnBsYXllcl9pZF0gPSBgJHtwbGF5ZXJSZXNwb25zZS5kYXRhLmZpcnN0X25hbWV9ICR7cGxheWVyUmVzcG9uc2UuZGF0YS5sYXN0X25hbWV9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFBsYXllck5hbWVNYXAocGxheWVyTWFwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHBsYXllciBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBmYXZvcml0ZSBwbGF5ZXJzOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVRlYW0gPSAodGVhbUlkKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvRmF2b3JpdGVUZWFtcy8ke3RlYW1JZH0vP2Zvcm1hdD1qc29uYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGRlbGV0ZWQgdGVhbSBmcm9tIHRoZSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgc2V0VGVhbUZhdm9yaXRlcyh0ZWFtRmF2b3JpdGVzLmZpbHRlcih0ZWFtID0+IHRlYW0udGVhbV9pZCAhPT0gdGVhbUlkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBmYXZvcml0ZSB0ZWFtOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlUGxheWVyID0gKHBsYXllcklkKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZGVsZXRlKGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvRmF2b3JpdGVQbGF5ZXJzLyR7cGxheWVySWR9Lz9mb3JtYXQ9anNvbmApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBkZWxldGVkIHBsYXllciBmcm9tIHRoZSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgc2V0UGxheWVyRmF2b3JpdGVzKHBsYXllckZhdm9yaXRlcy5maWx0ZXIocGxheWVyID0+IHBsYXllci5wbGF5ZXJfaWQgIT09IHBsYXllcklkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkZWxldGluZyBmYXZvcml0ZSBwbGF5ZXI6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+RmF2b3JpdGUgVGVhbXM6PC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3RlYW1GYXZvcml0ZXMubWFwKCh0ZWFtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dGVhbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWFtTmFtZU1hcFt0ZWFtLnRlYW1faWRdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRlYW0ocGxheWVyLnBsYXllcl9pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDxoMj5GYXZvcml0ZSBQbGF5ZXJzOjwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwbGF5ZXJGYXZvcml0ZXMubWFwKChwbGF5ZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwbGF5ZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGxheWVyTmFtZU1hcFtwbGF5ZXIucGxheWVyX2lkXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQbGF5ZXIocGxheWVyLnBsYXllcl9pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdm9yaXRlc0NvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkZhdm9yaXRlc0NvbXBvbmVudCIsInRlYW1GYXZvcml0ZXMiLCJzZXRUZWFtRmF2b3JpdGVzIiwicGxheWVyRmF2b3JpdGVzIiwic2V0UGxheWVyRmF2b3JpdGVzIiwidGVhbU5hbWVNYXAiLCJzZXRUZWFtTmFtZU1hcCIsInBsYXllck5hbWVNYXAiLCJzZXRQbGF5ZXJOYW1lTWFwIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsInRlYW1NYXAiLCJmb3JFYWNoIiwiZmF2b3JpdGUiLCJ0ZWFtX2lkIiwidGVhbVJlc3BvbnNlIiwidGVhbV9uYW1lIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJwbGF5ZXJNYXAiLCJwbGF5ZXJfaWQiLCJwbGF5ZXJSZXNwb25zZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJoYW5kbGVEZWxldGVUZWFtIiwidGVhbUlkIiwiZGVsZXRlIiwiZmlsdGVyIiwidGVhbSIsImhhbmRsZURlbGV0ZVBsYXllciIsInBsYXllcklkIiwicGxheWVyIiwiZGl2IiwiaDIiLCJ1bCIsIm1hcCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FavoritesComponent.js\n"));

/***/ })

});