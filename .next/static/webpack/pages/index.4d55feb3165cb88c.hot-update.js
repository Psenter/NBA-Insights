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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction GameForm() {\n    _s();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedTeamA, setSelectedTeamA] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedTeamB, setSelectedTeamB] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submissionStatus, setSubmissionStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch teams from your API\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching teams:\", error);\n        });\n    }, []);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://127.0.0.1:8000/api/games/\", {\n                team_id_a: selectedTeamA,\n                team_id_b: selectedTeamB\n            });\n            if (response.status === 201) {\n                setSubmissionStatus(\"Game created successfully.\");\n                // Fetch the teams again to include the new game\n                axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n                    setTeams(response.data);\n                }).catch((error)=>{\n                    console.error(\"Error fetching teams:\", error);\n                });\n            } else {\n                setSubmissionStatus(\"Failed to create game.\");\n            }\n        } catch (error) {\n            console.error(\"Error creating game:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Create a New Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"teamA\",\n                                children: \"Team A:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"teamA\",\n                                value: selectedTeamA,\n                                onChange: (e)=>setSelectedTeamA(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Team A\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 25\n                                    }, this),\n                                    teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: team.id,\n                                            children: team.team_name\n                                        }, team.id, false, {\n                                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"teamB\",\n                                children: \"Team B:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 71,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                id: \"teamB\",\n                                value: selectedTeamB,\n                                onChange: (e)=>setSelectedTeamB(e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select Team B\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, this),\n                                    teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: team.id,\n                                            children: team.team_name\n                                        }, team.id, false, {\n                                            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 29\n                                        }, this))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 70,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>router.refresh(),\n                        type: \"submit\",\n                        children: \"Create Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: submissionStatus\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameList, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 90,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(GameForm, \"fAAdA0a4mjUniBFHBmFm3Rpfgag=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = GameForm;\nfunction GameList() {\n    _s1();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch games from your API\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/Games/?format=json\").then((response)=>{\n            setGames(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching games:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Games List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            game.team_id_a ? game.team_id_a.team_name : \"Team A not found\",\n                            \" vs. \",\n                            game.team_id_b ? game.team_id_b.team_name : \"Team B not found\"\n                        ]\n                    }, game.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 114,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 112,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 110,\n        columnNumber: 9\n    }, this);\n}\n_s1(GameList, \"Qv+Imzbbm47aMqW5lWWxooDvX6M=\");\n_c1 = GameList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameForm);\nvar _c, _c1;\n$RefreshReg$(_c, \"GameForm\");\n$RefreshReg$(_c1, \"GameList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lQ29tcG9uZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEM7QUFDbEI7QUFDYztBQUV4QyxTQUFTSTs7SUFDTCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNLENBQUNPLGVBQWVDLGlCQUFpQixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNTLGVBQWVDLGlCQUFpQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNXLGtCQUFrQkMsb0JBQW9CLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pELE1BQU1hLFNBQVNWLHNEQUFTQTtJQUV4QkYsZ0RBQVNBLENBQUM7UUFDTiw0QkFBNEI7UUFDNUJDLGlEQUFTLENBQUMsNENBQ0xhLElBQUksQ0FBQ0MsQ0FBQUE7WUFDRlYsU0FBU1UsU0FBU0MsSUFBSTtRQUMxQixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0hDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ1IsR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUVoQixJQUFJO1lBQ0EsTUFBTVAsV0FBVyxNQUFNZCxrREFBVSxDQUFDLG9DQUFvQztnQkFDbEV1QixXQUFXbEI7Z0JBQ1htQixXQUFXakI7WUFDZjtZQUVBLElBQUlPLFNBQVNXLE1BQU0sS0FBSyxLQUFLO2dCQUN6QmYsb0JBQW9CO2dCQUVwQixnREFBZ0Q7Z0JBQ2hEVixpREFBUyxDQUFDLDRDQUNMYSxJQUFJLENBQUNDLENBQUFBO29CQUNGVixTQUFTVSxTQUFTQyxJQUFJO2dCQUMxQixHQUNDQyxLQUFLLENBQUNDLENBQUFBO29CQUNIQyxRQUFRRCxLQUFLLENBQUMseUJBQXlCQTtnQkFDM0M7WUFDUixPQUFPO2dCQUNIUCxvQkFBb0I7WUFDeEI7UUFDSixFQUFFLE9BQU9PLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDMUM7SUFDSjtJQUVBLHFCQUNJLDhEQUFDUzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFLQyxVQUFVVjs7a0NBQ1osOERBQUNPOzswQ0FDRyw4REFBQ0k7Z0NBQU1DLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUNDO2dDQUNHQyxJQUFHO2dDQUNIQyxPQUFPN0I7Z0NBQ1A4QixVQUFVLENBQUNmLElBQU1kLGlCQUFpQmMsRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSzs7a0RBRWhELDhEQUFDRzt3Q0FBT0gsT0FBTTtrREFBRzs7Ozs7O29DQUNoQi9CLE1BQU1tQyxHQUFHLENBQUNDLENBQUFBLHFCQUNQLDhEQUFDRjs0Q0FBcUJILE9BQU9LLEtBQUtOLEVBQUU7c0RBQy9CTSxLQUFLQyxTQUFTOzJDQURORCxLQUFLTixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNaEMsOERBQUNQOzswQ0FDRyw4REFBQ0k7Z0NBQU1DLFNBQVE7MENBQVE7Ozs7OzswQ0FDdkIsOERBQUNDO2dDQUNHQyxJQUFHO2dDQUNIQyxPQUFPM0I7Z0NBQ1A0QixVQUFVLENBQUNmLElBQU1aLGlCQUFpQlksRUFBRWdCLE1BQU0sQ0FBQ0YsS0FBSzs7a0RBRWhELDhEQUFDRzt3Q0FBT0gsT0FBTTtrREFBRzs7Ozs7O29DQUNoQi9CLE1BQU1tQyxHQUFHLENBQUNDLENBQUFBLHFCQUNQLDhEQUFDRjs0Q0FBcUJILE9BQU9LLEtBQUtOLEVBQUU7c0RBQy9CTSxLQUFLQyxTQUFTOzJDQURORCxLQUFLTixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNaEMsOERBQUNRO3dCQUFPQyxTQUFTLElBQU0vQixPQUFPZ0MsT0FBTzt3QkFBSUMsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQ0M7MEJBQUdwQzs7Ozs7OzBCQUdKLDhEQUFDcUM7Ozs7Ozs7Ozs7O0FBR2I7R0F4RlM1Qzs7UUFLVUQsa0RBQVNBOzs7S0FMbkJDO0FBMEZULFNBQVM0Qzs7SUFDTCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2xELCtDQUFRQSxDQUFDLEVBQUU7SUFFckNDLGdEQUFTQSxDQUFDO1FBQ04sNEJBQTRCO1FBQzVCQyxpREFBUyxDQUFDLDRDQUNMYSxJQUFJLENBQUNDLENBQUFBO1lBQ0ZrQyxTQUFTbEMsU0FBU0MsSUFBSTtRQUMxQixHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0hDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQzNDO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNTOzswQkFDRyw4REFBQ3VCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNJSCxNQUFNVCxHQUFHLENBQUNhLENBQUFBLHFCQUNQLDhEQUFDQzs7NEJBQ0lELEtBQUs1QixTQUFTLEdBQUc0QixLQUFLNUIsU0FBUyxDQUFDaUIsU0FBUyxHQUFHOzRCQUM1Qzs0QkFDQVcsS0FBSzNCLFNBQVMsR0FBRzJCLEtBQUszQixTQUFTLENBQUNnQixTQUFTLEdBQUc7O3VCQUh4Q1csS0FBS2xCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEM7SUE1QlNhO01BQUFBO0FBK0JULCtEQUFlNUMsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lQ29tcG9uZW50LmpzPzM2ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gR2FtZUZvcm0oKSB7XHJcbiAgICBjb25zdCBbdGVhbXMsIHNldFRlYW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRlYW1BLCBzZXRTZWxlY3RlZFRlYW1BXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRlYW1CLCBzZXRTZWxlY3RlZFRlYW1CXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzdWJtaXNzaW9uU3RhdHVzLCBzZXRTdWJtaXNzaW9uU3RhdHVzXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRmV0Y2ggdGVhbXMgZnJvbSB5b3VyIEFQSVxyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLz9mb3JtYXQ9anNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2dhbWVzLycsIHtcclxuICAgICAgICAgICAgICAgIHRlYW1faWRfYTogc2VsZWN0ZWRUZWFtQSxcclxuICAgICAgICAgICAgICAgIHRlYW1faWRfYjogc2VsZWN0ZWRUZWFtQixcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFN1Ym1pc3Npb25TdGF0dXMoJ0dhbWUgY3JlYXRlZCBzdWNjZXNzZnVsbHkuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRmV0Y2ggdGhlIHRlYW1zIGFnYWluIHRvIGluY2x1ZGUgdGhlIG5ldyBnYW1lXHJcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8/Zm9ybWF0PWpzb24nKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGVhbXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0ZWFtczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTdWJtaXNzaW9uU3RhdHVzKCdGYWlsZWQgdG8gY3JlYXRlIGdhbWUuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBnYW1lOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNyZWF0ZSBhIE5ldyBHYW1lPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGVhbUFcIj5UZWFtIEE6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGVhbUFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRUZWFtQX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWxlY3RlZFRlYW1BKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGVhbSBBPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWFtcy5tYXAodGVhbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dGVhbS5pZH0gdmFsdWU9e3RlYW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZWFtLnRlYW1fbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRlYW1CXCI+VGVhbSBCOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRlYW1CXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGVhbUJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VsZWN0ZWRUZWFtQihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFRlYW0gQjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGVhbXMubWFwKHRlYW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RlYW0uaWR9IHZhbHVlPXt0ZWFtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVhbS50ZWFtX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnJlZnJlc2goKX0gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBHYW1lPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHA+e3N1Ym1pc3Npb25TdGF0dXN9PC9wPlxyXG5cclxuICAgICAgICAgICAgey8qIEluY2x1ZGUgdGhlIEdhbWVMaXN0IGNvbXBvbmVudCAqL31cclxuICAgICAgICAgICAgPEdhbWVMaXN0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBHYW1lTGlzdCgpIHtcclxuICAgIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gRmV0Y2ggZ2FtZXMgZnJvbSB5b3VyIEFQSVxyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL0dhbWVzLz9mb3JtYXQ9anNvbicpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEdhbWVzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZ2FtZXM6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5HYW1lcyBMaXN0PC9oMj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge2dhbWVzLm1hcChnYW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtnYW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUudGVhbV9pZF9hID8gZ2FtZS50ZWFtX2lkX2EudGVhbV9uYW1lIDogJ1RlYW0gQSBub3QgZm91bmQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7JyB2cy4gJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAge2dhbWUudGVhbV9pZF9iID8gZ2FtZS50ZWFtX2lkX2IudGVhbV9uYW1lIDogJ1RlYW0gQiBub3QgZm91bmQnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJHYW1lRm9ybSIsInRlYW1zIiwic2V0VGVhbXMiLCJzZWxlY3RlZFRlYW1BIiwic2V0U2VsZWN0ZWRUZWFtQSIsInNlbGVjdGVkVGVhbUIiLCJzZXRTZWxlY3RlZFRlYW1CIiwic3VibWlzc2lvblN0YXR1cyIsInNldFN1Ym1pc3Npb25TdGF0dXMiLCJyb3V0ZXIiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGVhbV9pZF9hIiwidGVhbV9pZF9iIiwic3RhdHVzIiwiZGl2IiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcHRpb24iLCJtYXAiLCJ0ZWFtIiwidGVhbV9uYW1lIiwiYnV0dG9uIiwib25DbGljayIsInJlZnJlc2giLCJ0eXBlIiwicCIsIkdhbWVMaXN0IiwiZ2FtZXMiLCJzZXRHYW1lcyIsImgyIiwidWwiLCJnYW1lIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});