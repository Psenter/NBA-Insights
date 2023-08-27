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

/***/ "./src/components/GameComponent.js":
/*!*****************************************!*\
  !*** ./src/components/GameComponent.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction GameForm() {\n    _s();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTeamA, setSelectedTeamA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedTeamB, setSelectedTeamB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submissionStatus, setSubmissionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch teams from your API\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching teams:\", error);\n        });\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:8000/api/games/\", {\n                team_id_a: selectedTeamA,\n                team_id_b: selectedTeamB\n            });\n            if (response.status === 201) {\n                setSubmissionStatus(\"Game created successfully.\");\n                // Fetch the teams again to include the new game\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n                    setTeams(response.data);\n                }).catch((error)=>{\n                    console.error(\"Error fetching teams:\", error);\n                });\n            } else {\n                setSubmissionStatus(\"Failed to create game.\");\n            }\n        } catch (error) {\n            console.error(\"Error creating game:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create a New Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"teamA\",\n                                children: \"Team A:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"teamA\",\n                                value: selectedTeamA,\n                                onChange: (e)=>setSelectedTeamA(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Team A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this),\n                                    teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: team.id,\n                                            children: team.team_name\n                                        }, team.id, false, {\n                                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"teamB\",\n                                children: \"Team B:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"teamB\",\n                                value: selectedTeamB,\n                                onChange: (e)=>setSelectedTeamB(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Team B\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this),\n                                    teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: team.id,\n                                            children: team.team_name\n                                        }, team.id, false, {\n                                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 29\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>router.reload(),\n                        type: \"submit\",\n                        children: \"Create Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: submissionStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(GameForm, \"fAAdA0a4mjUniBFHBmFm3Rpfgag=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GameForm;\nfunction GameList() {\n    _s1();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameTeams, setGameTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch games from your API\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Games/?format=json\").then((response)=>{\n            setGames(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching games:\", error);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setGameTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching teams:\", error);\n        });\n    }, []);\n    const getTeamNameById = (teamId)=>{\n        const team = gameTeams.find((team)=>team.id === teamId);\n        return team ? team.team_name : \"Team not found\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Games List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            getTeamNameById(game.team_id_a),\n                            \" vs. \",\n                            getTeamNameById(game.team_id_b)\n                        ]\n                    }, game.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 128,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 124,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameList, \"PA0KUKrBOrp9WNCVXQYZXFuAO/g=\");\n_c1 = GameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"GameForm\");\n$RefreshReg$(_c1, \"GameList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU9DLFNBQVMsR0FBR2xELCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDbUQsV0FBV0MsYUFBYSxHQUFHcEQsK0NBQVFBLENBQUMsRUFBRTtJQUU3Q0MsZ0RBQVNBLENBQUM7UUFDTiw0QkFBNEI7UUFDNUJDLGlEQUFTLENBQUMsNENBQ0xhLElBQUksQ0FBQ0MsQ0FBQUE7WUFDRmtDLFNBQVNsQyxTQUFTQyxJQUFJO1FBQzFCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDSEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDM0M7UUFFSmpCLGlEQUFTLENBQUMsNENBQ0xhLElBQUksQ0FBQ0MsQ0FBQUE7WUFDRm9DLGFBQWFwQyxTQUFTQyxJQUFJO1FBQzlCLEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDSEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDM0M7SUFDUixHQUFHLEVBQUU7SUFFTCxNQUFNa0Msa0JBQWtCLENBQUNDO1FBQ3JCLE1BQU1iLE9BQU9VLFVBQVVJLElBQUksQ0FBQ2QsQ0FBQUEsT0FBUUEsS0FBS04sRUFBRSxLQUFLbUI7UUFDaEQsT0FBT2IsT0FBT0EsS0FBS0MsU0FBUyxHQUFHO0lBQ25DO0lBRUEscUJBQ0ksOERBQUNkOzswQkFDRyw4REFBQzRCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJUixNQUFNVCxHQUFHLENBQUNrQixDQUFBQSxxQkFDUCw4REFBQzlCOzs0QkFDSXlCLGdCQUFnQkssS0FBS2pDLFNBQVM7NEJBQUU7NEJBQU00QixnQkFBZ0JLLEtBQUtoQyxTQUFTOzt1QkFEL0RnQyxLQUFLdkIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztJQXhDU2E7TUFBQUE7QUEyQ1QsK0RBQWU1QyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhbWVDb21wb25lbnQuanM/MzZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5mdW5jdGlvbiBHYW1lRm9ybSgpIHtcclxuICAgIGNvbnN0IFt0ZWFtcywgc2V0VGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVGVhbUEsIHNldFNlbGVjdGVkVGVhbUFdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVGVhbUIsIHNldFNlbGVjdGVkVGVhbUJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3N1Ym1pc3Npb25TdGF0dXMsIHNldFN1Ym1pc3Npb25TdGF0dXNdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBGZXRjaCB0ZWFtcyBmcm9tIHlvdXIgQVBJXHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvVGVhbXMvP2Zvcm1hdD1qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VGVhbXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0ZWFtczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hcGkvZ2FtZXMvJywge1xyXG4gICAgICAgICAgICAgICAgdGVhbV9pZF9hOiBzZWxlY3RlZFRlYW1BLFxyXG4gICAgICAgICAgICAgICAgdGVhbV9pZF9iOiBzZWxlY3RlZFRlYW1CLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0U3VibWlzc2lvblN0YXR1cygnR2FtZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGZXRjaCB0aGUgdGVhbXMgYWdhaW4gdG8gaW5jbHVkZSB0aGUgbmV3IGdhbWVcclxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLz9mb3JtYXQ9anNvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZWFtcyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRlYW1zOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFN1Ym1pc3Npb25TdGF0dXMoJ0ZhaWxlZCB0byBjcmVhdGUgZ2FtZS4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGdhbWU6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q3JlYXRlIGEgTmV3IEdhbWU8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWFtQVwiPlRlYW0gQTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWFtQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRlYW1BfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkVGVhbUEoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBUZWFtIEE8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1zLm1hcCh0ZWFtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0ZWFtLmlkfSB2YWx1ZT17dGVhbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlYW0udGVhbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVhbUJcIj5UZWFtIEI6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVhbUJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRUZWFtQn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFRlYW1CKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGVhbSBCPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWFtcy5tYXAodGVhbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dGVhbS5pZH0gdmFsdWU9e3RlYW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWFtLnRlYW1fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucmVsb2FkKCl9IHR5cGU9XCJzdWJtaXRcIj5DcmVhdGUgR2FtZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxwPntzdWJtaXNzaW9uU3RhdHVzfTwvcD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBJbmNsdWRlIHRoZSBHYW1lTGlzdCBjb21wb25lbnQgKi99XHJcbiAgICAgICAgICAgIDxHYW1lTGlzdCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gR2FtZUxpc3QoKSB7XHJcbiAgICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtnYW1lVGVhbXMsIHNldEdhbWVUZWFtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBGZXRjaCBnYW1lcyBmcm9tIHlvdXIgQVBJXHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvR2FtZXMvP2Zvcm1hdD1qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnYW1lczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8/Zm9ybWF0PWpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lVGVhbXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0ZWFtczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldFRlYW1OYW1lQnlJZCA9ICh0ZWFtSWQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gZ2FtZVRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmlkID09PSB0ZWFtSWQpO1xyXG4gICAgICAgIHJldHVybiB0ZWFtID8gdGVhbS50ZWFtX25hbWUgOiAnVGVhbSBub3QgZm91bmQnO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5HYW1lcyBMaXN0PC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2dhbWVzLm1hcChnYW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Z2FtZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUZWFtTmFtZUJ5SWQoZ2FtZS50ZWFtX2lkX2EpfSB2cy4ge2dldFRlYW1OYW1lQnlJZChnYW1lLnRlYW1faWRfYil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJHYW1lRm9ybSIsInRlYW1zIiwic2V0VGVhbXMiLCJzZWxlY3RlZFRlYW1BIiwic2V0U2VsZWN0ZWRUZWFtQSIsInNlbGVjdGVkVGVhbUIiLCJzZXRTZWxlY3RlZFRlYW1CIiwic3VibWlzc2lvblN0YXR1cyIsInNldFN1Ym1pc3Npb25TdGF0dXMiLCJyb3V0ZXIiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGVhbV9pZF9hIiwidGVhbV9pZF9iIiwic3RhdHVzIiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcHRpb24iLCJtYXAiLCJ0ZWFtIiwidGVhbV9uYW1lIiwiYnV0dG9uIiwib25DbGljayIsInJlbG9hZCIsInR5cGUiLCJwIiwiR2FtZUxpc3QiLCJnYW1lcyIsInNldEdhbWVzIiwiZ2FtZVRlYW1zIiwic2V0R2FtZVRlYW1zIiwiZ2V0VGVhbU5hbWVCeUlkIiwidGVhbUlkIiwiZmluZCIsImgyIiwidWwiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});