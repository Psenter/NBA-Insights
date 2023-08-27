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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GameComponent = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        teamA: \"\",\n        teamB: \"\"\n    });\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTeams();\n        fetchGames();\n    }, []);\n    const fetchTeams = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\");\n            setTeams(response.data);\n        } catch (error) {\n            console.error(\"Error fetching teams:\", error);\n        }\n    };\n    const fetchGames = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Games/?format=json\");\n            setGames(response.data);\n        } catch (error) {\n            console.error(\"Error fetching games:\", error);\n        }\n    };\n    const handleTeamChange = (e, teamField)=>{\n        const selectedTeamId = e.target.value;\n        setFormData({\n            ...formData,\n            [teamField]: selectedTeamId\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"Sending data:\", {\n            team_id_a: formData.teamA,\n            team_id_b: formData.teamB\n        });\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:8000/Games/?format=json\", {\n                team_id_a: formData.teamA,\n                team_id_b: formData.teamB\n            });\n            console.log(\"Response:\", response);\n            if (response.status === 201) {\n                alert(\"Game added successfully\");\n                setFormData({\n                    teamA: \"\",\n                    teamB: \"\"\n                });\n                fetchGames(); // Refresh the list of games after adding a new one\n            } else {\n                alert(\"Error adding game\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Add New Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamA,\n                        onChange: (e)=>handleTeamChange(e, \"teamA\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamB,\n                        onChange: (e)=>handleTeamChange(e, \"teamB\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Game List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Team A: \",\n                            game.team_id_a.team_name,\n                            \", Team B: \",\n                            game.team_id_b.team_name\n                        ]\n                    }, game.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GameComponent, \"hMkKNX0iORFKSCUW4hEXYyRyVBk=\");\n_c = GameComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameComponent);\nvar _c;\n$RefreshReg$(_c, \"GameComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7MEJBR3hCLDhEQUFDWDswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDWTswQkFDRXBDLE1BQU04QixHQUFHLENBQUMsQ0FBQ08scUJBQ1YsOERBQUNDOzs0QkFBaUI7NEJBQ1BELEtBQUtuQixTQUFTLENBQUNlLFNBQVM7NEJBQUM7NEJBQVdJLEtBQUtsQixTQUFTLENBQUNjLFNBQVM7O3VCQUQ5REksS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtHQTVHTTlDO0tBQUFBO0FBOEdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhbWVDb21wb25lbnQuanM/MzZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEdhbWVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0ZWFtQTogJycsXHJcbiAgICB0ZWFtQjogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFt0ZWFtcywgc2V0VGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUZWFtcygpO1xyXG4gICAgZmV0Y2hHYW1lcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUZWFtcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvVGVhbXMvP2Zvcm1hdD1qc29uJyk7XHJcbiAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoR2FtZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL0dhbWVzLz9mb3JtYXQ9anNvbicpO1xyXG4gICAgICBzZXRHYW1lcyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGdhbWVzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZWFtQ2hhbmdlID0gKGUsIHRlYW1GaWVsZCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUZWFtSWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFt0ZWFtRmllbGRdOiBzZWxlY3RlZFRlYW1JZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIFxyXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcgZGF0YTonLCB7XHJcbiAgICAgIHRlYW1faWRfYTogZm9ybURhdGEudGVhbUEsXHJcbiAgICAgIHRlYW1faWRfYjogZm9ybURhdGEudGVhbUIsXHJcbiAgICB9KTtcclxuICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL0dhbWVzLz9mb3JtYXQ9anNvbicsIHtcclxuICAgICAgICB0ZWFtX2lkX2E6IGZvcm1EYXRhLnRlYW1BLFxyXG4gICAgICAgIHRlYW1faWRfYjogZm9ybURhdGEudGVhbUIsXHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xyXG4gIFxyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICBhbGVydCgnR2FtZSBhZGRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICBzZXRGb3JtRGF0YSh7XHJcbiAgICAgICAgICB0ZWFtQTogJycsXHJcbiAgICAgICAgICB0ZWFtQjogJycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmV0Y2hHYW1lcygpOyAvLyBSZWZyZXNoIHRoZSBsaXN0IG9mIGdhbWVzIGFmdGVyIGFkZGluZyBhIG5ldyBvbmVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnRXJyb3IgYWRkaW5nIGdhbWUnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+QWRkIE5ldyBHYW1lPC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRlYW1BfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUZWFtQ2hhbmdlKGUsICd0ZWFtQScpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGVhbSBBPC9vcHRpb24+XHJcbiAgICAgICAgICB7dGVhbXMubWFwKCh0ZWFtKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0ZWFtLnRlYW1faWR9IHZhbHVlPXt0ZWFtLnRlYW1faWR9PlxyXG4gICAgICAgICAgICAgIHt0ZWFtLnRlYW1fbmFtZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGVhbUJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVRlYW1DaGFuZ2UoZSwgJ3RlYW1CJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBUZWFtIEI8L29wdGlvbj5cclxuICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RlYW0udGVhbV9pZH0gdmFsdWU9e3RlYW0udGVhbV9pZH0+XHJcbiAgICAgICAgICAgICAge3RlYW0udGVhbV9uYW1lfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBHYW1lPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxoMj5HYW1lIExpc3Q8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2dhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17Z2FtZS5pZH0+XHJcbiAgICAgICAgICAgIFRlYW0gQToge2dhbWUudGVhbV9pZF9hLnRlYW1fbmFtZX0sIFRlYW0gQjoge2dhbWUudGVhbV9pZF9iLnRlYW1fbmFtZX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUNvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsIkdhbWVDb21wb25lbnQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidGVhbUEiLCJ0ZWFtQiIsInRlYW1zIiwic2V0VGVhbXMiLCJnYW1lcyIsInNldEdhbWVzIiwiZmV0Y2hUZWFtcyIsImZldGNoR2FtZXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVUZWFtQ2hhbmdlIiwiZSIsInRlYW1GaWVsZCIsInNlbGVjdGVkVGVhbUlkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZyIsInRlYW1faWRfYSIsInRlYW1faWRfYiIsInBvc3QiLCJzdGF0dXMiLCJhbGVydCIsImRpdiIsImgyIiwiZm9ybSIsIm9uU3VibWl0Iiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJtYXAiLCJ0ZWFtIiwidGVhbV9pZCIsInRlYW1fbmFtZSIsImJ1dHRvbiIsInR5cGUiLCJ1bCIsImdhbWUiLCJsaSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});