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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GameComponent = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        teamA: \"\",\n        teamB: \"\"\n    });\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTeams();\n        fetchGames();\n    }, []);\n    const fetchTeams = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\");\n            setTeams(response.data);\n        } catch (error) {\n            console.error(\"Error fetching teams:\", error);\n        }\n    };\n    const fetchGames = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Games/?format=json\");\n            setGames(response.data);\n        } catch (error) {\n            console.error(\"Error fetching games:\", error);\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const requestData = {\n            team_id_a: formData.teamA,\n            team_id_b: formData.teamB\n        };\n        console.log(\"Sending data:\", requestData);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:8000/Games/?format=json\", requestData);\n            console.log(\"Response:\", response);\n            if (response.status === 201) {\n                alert(\"Game added successfully\");\n                setFormData({\n                    teamA: \"\",\n                    teamB: \"\"\n                });\n                fetchGames();\n            } else {\n                alert(\"Error adding game\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Add New Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamA,\n                        onChange: (e)=>handleTeamChange(e, \"teamA\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamB,\n                        onChange: (e)=>handleTeamChange(e, \"teamB\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 86,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Game List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Team A: \",\n                            game.team_id_a ? game.team_id_a.team_name : \"N/A\",\n                            \", Team B: \",\n                            game.team_id_b ? game.team_id_b.team_name : \"N/A\"\n                        ]\n                    }, game.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GameComponent, \"hMkKNX0iORFKSCUW4hEXYyRyVBk=\");\n_c = GameComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameComponent);\nvar _c;\n$RefreshReg$(_c, \"GameComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDaUIsU0FBUyxHQUFHOzt1QkFEM0dJLEtBQUtFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUI7R0F0R001QztLQUFBQTtBQXdHTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lQ29tcG9uZW50LmpzPzM2ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBHYW1lQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdGVhbUE6ICcnLFxyXG4gICAgdGVhbUI6ICcnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbdGVhbXMsIHNldFRlYW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoVGVhbXMoKTtcclxuICAgIGZldGNoR2FtZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVGVhbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLz9mb3JtYXQ9anNvbicpO1xyXG4gICAgICBzZXRUZWFtcyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHRlYW1zOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaEdhbWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9HYW1lcy8/Zm9ybWF0PWpzb24nKTtcclxuICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBnYW1lczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCByZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgdGVhbV9pZF9hOiBmb3JtRGF0YS50ZWFtQSxcclxuICAgICAgdGVhbV9pZF9iOiBmb3JtRGF0YS50ZWFtQixcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcgZGF0YTonLCByZXF1ZXN0RGF0YSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvR2FtZXMvP2Zvcm1hdD1qc29uJywgcmVxdWVzdERhdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlOicsIHJlc3BvbnNlKTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFsZXJ0KCdHYW1lIGFkZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIHNldEZvcm1EYXRhKHtcclxuICAgICAgICAgIHRlYW1BOiAnJyxcclxuICAgICAgICAgIHRlYW1COiAnJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBmZXRjaEdhbWVzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoJ0Vycm9yIGFkZGluZyBnYW1lJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgyPkFkZCBOZXcgR2FtZTwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS50ZWFtQX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVGVhbUNoYW5nZShlLCAndGVhbUEnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFRlYW0gQTwvb3B0aW9uPlxyXG4gICAgICAgICAge3RlYW1zLm1hcCgodGVhbSkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17dGVhbS50ZWFtX2lkfSB2YWx1ZT17dGVhbS50ZWFtX2lkfT5cclxuICAgICAgICAgICAgICB7dGVhbS50ZWFtX25hbWV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRlYW1CfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUZWFtQ2hhbmdlKGUsICd0ZWFtQicpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGVhbSBCPC9vcHRpb24+XHJcbiAgICAgICAgICB7dGVhbXMubWFwKCh0ZWFtKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0ZWFtLnRlYW1faWR9IHZhbHVlPXt0ZWFtLnRlYW1faWR9PlxyXG4gICAgICAgICAgICAgIHt0ZWFtLnRlYW1fbmFtZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgR2FtZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8aDI+R2FtZSBMaXN0PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2dhbWUuaWR9PlxyXG4gICAgICAgICAgICBUZWFtIEE6IHtnYW1lLnRlYW1faWRfYSA/IGdhbWUudGVhbV9pZF9hLnRlYW1fbmFtZSA6ICdOL0EnfSwgVGVhbSBCOiB7Z2FtZS50ZWFtX2lkX2IgPyBnYW1lLnRlYW1faWRfYi50ZWFtX25hbWUgOiAnTi9BJ31cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkdhbWVDb21wb25lbnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidGVhbUEiLCJ0ZWFtQiIsInRlYW1zIiwic2V0VGVhbXMiLCJnYW1lcyIsInNldEdhbWVzIiwiZmV0Y2hUZWFtcyIsImZldGNoR2FtZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXF1ZXN0RGF0YSIsInRlYW1faWRfYSIsInRlYW1faWRfYiIsImxvZyIsInBvc3QiLCJzdGF0dXMiLCJhbGVydCIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0Iiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImhhbmRsZVRlYW1DaGFuZ2UiLCJvcHRpb24iLCJtYXAiLCJ0ZWFtIiwidGVhbV9pZCIsInRlYW1fbmFtZSIsImJ1dHRvbiIsInR5cGUiLCJ1bCIsImdhbWUiLCJsaSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});