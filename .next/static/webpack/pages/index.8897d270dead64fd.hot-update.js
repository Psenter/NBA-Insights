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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction GameForm() {\n    _s();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTeamA, setSelectedTeamA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedTeamB, setSelectedTeamB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submissionStatus, setSubmissionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching teams:\", error);\n        });\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:8000/api/games/\", {\n                team_id_a: selectedTeamA,\n                team_id_b: selectedTeamB\n            });\n            if (response.status === 201) {\n                setSubmissionStatus(\"Game created successfully.\");\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n                    setTeams(response.data);\n                }).catch((error)=>{\n                    console.error(\"Error fetching teams:\", error);\n                });\n            } else {\n                setSubmissionStatus(\"Failed to create game.\");\n            }\n        } catch (error) {\n            console.error(\"Error creating game:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create a New Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"teamA\",\n                                children: \"Team A:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"teamA\",\n                                value: selectedTeamA,\n                                onChange: (e)=>setSelectedTeamA(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Team A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 25\n                                    }, this),\n                                    teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: team.id,\n                                            children: team.team_name\n                                        }, team.id, false, {\n                                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 55,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"teamB\",\n                                children: \"Team B:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 69,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"teamB\",\n                                value: selectedTeamB,\n                                onChange: (e)=>setSelectedTeamB(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Team B\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 25\n                                    }, this),\n                                    teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: team.id,\n                                            children: team.team_name\n                                        }, team.id, false, {\n                                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 29\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>router.reload(),\n                        type: \"submit\",\n                        children: \"Create Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: submissionStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 86,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\n_s(GameForm, \"fAAdA0a4mjUniBFHBmFm3Rpfgag=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GameForm;\nfunction GameList() {\n    _s1();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameTeams, setGameTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Games/?format=json\").then((response)=>{\n            setGames(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching games:\", error);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setGameTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching teams:\", error);\n        });\n    }, []);\n    const getTeamDataById = (teamId)=>{\n        const team = gameTeams.find((team)=>team.id === teamId);\n        return team ? {\n            teamName: team.team_name,\n            mediaUrl: team.media_id.asset_url\n        } : null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Games List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 120,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            getTeamDataById(game.team_id_a) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: getTeamDataById(game.team_id_a).asset_url,\n                                        alt: getTeamDataById(game.team_id_a).teamName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 33\n                                    }, this),\n                                    getTeamDataById(game.team_id_a).teamName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 125,\n                                columnNumber: 29\n                            }, this),\n                            \"vs.\",\n                            getTeamDataById(game.team_id_b) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: getTeamDataById(game.team_id_b).asset_url,\n                                        alt: getTeamDataById(game.team_id_b).teamName\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 33\n                                    }, this),\n                                    getTeamDataById(game.team_id_b).teamName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 134,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, game.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 123,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 121,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 119,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameList, \"PA0KUKrBOrp9WNCVXQYZXFuAO/g=\");\n_c1 = GameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"GameForm\");\n$RefreshReg$(_c1, \"GameList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUM7d0NBQUlDLEtBQUtYLGdCQUFnQlMsS0FBS3BDLFNBQVMsRUFBRWlDLFNBQVM7d0NBQUVNLEtBQUtaLGdCQUFnQlMsS0FBS3BDLFNBQVMsRUFBRThCLFFBQVE7Ozs7OztvQ0FDakdILGdCQUFnQlMsS0FBS3BDLFNBQVMsRUFBRThCLFFBQVE7Ozs7Ozs7O3VCQWIzQ00sS0FBSzNCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQnJDO0lBckRTYTtNQUFBQTtBQXdEVCwrREFBZTVDLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2FtZUNvbXBvbmVudC5qcz8zNmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmZ1bmN0aW9uIEdhbWVGb3JtKCkge1xyXG4gICAgY29uc3QgW3RlYW1zLCBzZXRUZWFtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUZWFtQSwgc2V0U2VsZWN0ZWRUZWFtQV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUZWFtQiwgc2V0U2VsZWN0ZWRUZWFtQl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc3VibWlzc2lvblN0YXR1cywgc2V0U3VibWlzc2lvblN0YXR1c10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLz9mb3JtYXQ9anNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2dhbWVzLycsIHtcclxuICAgICAgICAgICAgICAgIHRlYW1faWRfYTogc2VsZWN0ZWRUZWFtQSxcclxuICAgICAgICAgICAgICAgIHRlYW1faWRfYjogc2VsZWN0ZWRUZWFtQixcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN1Ym1pc3Npb25TdGF0dXMoJ0dhbWUgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvVGVhbXMvP2Zvcm1hdD1qc29uJylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0U3VibWlzc2lvblN0YXR1cygnRmFpbGVkIHRvIGNyZWF0ZSBnYW1lLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZ2FtZTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5DcmVhdGUgYSBOZXcgR2FtZTwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlYW1BXCI+VGVhbSBBOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlYW1BXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGVhbUF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRUZWFtQShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFRlYW0gQTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGVhbXMubWFwKHRlYW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RlYW0uaWR9IHZhbHVlPXt0ZWFtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbS50ZWFtX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWFtQlwiPlRlYW0gQjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZWFtQlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRlYW1CfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlbGVjdGVkVGVhbUIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBUZWFtIEI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RlYW1zLm1hcCh0ZWFtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0ZWFtLmlkfSB2YWx1ZT17dGVhbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlYW0udGVhbV9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5yZWxvYWQoKX0gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBHYW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHA+e3N1Ym1pc3Npb25TdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICA8R2FtZUxpc3QgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEdhbWVMaXN0KCkge1xyXG4gICAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZ2FtZVRlYW1zLCBzZXRHYW1lVGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvR2FtZXMvP2Zvcm1hdD1qc29uJylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnYW1lczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8/Zm9ybWF0PWpzb24nKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRHYW1lVGVhbXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0ZWFtczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGNvbnN0IGdldFRlYW1EYXRhQnlJZCA9ICh0ZWFtSWQpID0+IHtcclxuICAgICAgICBjb25zdCB0ZWFtID0gZ2FtZVRlYW1zLmZpbmQodGVhbSA9PiB0ZWFtLmlkID09PSB0ZWFtSWQpO1xyXG4gICAgICAgIHJldHVybiB0ZWFtID8geyB0ZWFtTmFtZTogdGVhbS50ZWFtX25hbWUsIG1lZGlhVXJsOiB0ZWFtLm1lZGlhX2lkLmFzc2V0X3VybCB9IDogbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+R2FtZXMgTGlzdDwvaDI+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtnYW1lcy5tYXAoZ2FtZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2dhbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VGVhbURhdGFCeUlkKGdhbWUudGVhbV9pZF9hKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRUZWFtRGF0YUJ5SWQoZ2FtZS50ZWFtX2lkX2EpLmFzc2V0X3VybH0gYWx0PXtnZXRUZWFtRGF0YUJ5SWQoZ2FtZS50ZWFtX2lkX2EpLnRlYW1OYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUZWFtRGF0YUJ5SWQoZ2FtZS50ZWFtX2lkX2EpLnRlYW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2cy5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRUZWFtRGF0YUJ5SWQoZ2FtZS50ZWFtX2lkX2IpICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dldFRlYW1EYXRhQnlJZChnYW1lLnRlYW1faWRfYikuYXNzZXRfdXJsfSBhbHQ9e2dldFRlYW1EYXRhQnlJZChnYW1lLnRlYW1faWRfYikudGVhbU5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFRlYW1EYXRhQnlJZChnYW1lLnRlYW1faWRfYikudGVhbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVGb3JtO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIkdhbWVGb3JtIiwidGVhbXMiLCJzZXRUZWFtcyIsInNlbGVjdGVkVGVhbUEiLCJzZXRTZWxlY3RlZFRlYW1BIiwic2VsZWN0ZWRUZWFtQiIsInNldFNlbGVjdGVkVGVhbUIiLCJzdWJtaXNzaW9uU3RhdHVzIiwic2V0U3VibWlzc2lvblN0YXR1cyIsInJvdXRlciIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0ZWFtX2lkX2EiLCJ0ZWFtX2lkX2IiLCJzdGF0dXMiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9wdGlvbiIsIm1hcCIsInRlYW0iLCJ0ZWFtX25hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicmVsb2FkIiwidHlwZSIsInAiLCJHYW1lTGlzdCIsImdhbWVzIiwic2V0R2FtZXMiLCJnYW1lVGVhbXMiLCJzZXRHYW1lVGVhbXMiLCJnZXRUZWFtRGF0YUJ5SWQiLCJ0ZWFtSWQiLCJmaW5kIiwidGVhbU5hbWUiLCJtZWRpYVVybCIsIm1lZGlhX2lkIiwiYXNzZXRfdXJsIiwiaDIiLCJ1bCIsImdhbWUiLCJpbWciLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});