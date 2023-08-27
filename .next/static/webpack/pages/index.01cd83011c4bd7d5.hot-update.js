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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GameForm = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        description: \"\",\n        image: \"\",\n        teamA: \"\",\n        teamB: \"\"\n    });\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTeams();\n    }, []);\n    const fetchTeams = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\");\n            setTeams(response.data);\n        } catch (error) {\n            console.error(\"Error fetching teams:\", error);\n        }\n    };\n    const handleTeamChange = (e, teamField)=>{\n        const selectedTeamId = e.target.value;\n        setFormData({\n            ...formData,\n            [teamField]: selectedTeamId\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(\"Sending data:\", formData); // Log the data you're sending\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:8000/Games/?format=json\", formData);\n            if (response.status === 201) {\n                alert(\"Game added successfully\");\n                setFormData({\n                    title: \"\",\n                    description: \"\",\n                    image: \"\",\n                    teamA: \"\",\n                    teamB: \"\"\n                });\n            } else {\n                alert(\"Error adding game\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    const selectedTeamA = teams.find((team)=>team.team_id === formData.teamA);\n    const selectedTeamB = teams.find((team)=>team.team_id === formData.teamB);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Title\",\n                        value: formData.title,\n                        onChange: (e)=>setFormData({\n                                ...formData,\n                                title: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamA,\n                        onChange: (e)=>handleTeamChange(e, \"teamA\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamB,\n                        onChange: (e)=>handleTeamChange(e, \"teamB\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 92,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            selectedTeamA && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Selected Team A: \",\n                    selectedTeamA.team_name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 94,\n                columnNumber: 25\n            }, undefined),\n            selectedTeamB && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Selected Team B: \",\n                    selectedTeamB.team_name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 95,\n                columnNumber: 25\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GameForm, \"rZsVmKH6n6qSXXpibEKi/PUMOKM=\");\n_c = GameForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameForm);\nvar _c;\n$RefreshReg$(_c, \"GameForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTOzs7Ozs7Ozs7Ozs7WUFFdkJULCtCQUFpQiw4REFBQ2lCOztvQkFBRTtvQkFBa0JqQixjQUFjZSxTQUFTOzs7Ozs7O1lBQzdEWCwrQkFBaUIsOERBQUNhOztvQkFBRTtvQkFBa0JiLGNBQWNXLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFHcEU7R0E5Rk0zQztLQUFBQTtBQWdHTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9HYW1lQ29tcG9uZW50LmpzPzM2ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBHYW1lRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgIGltYWdlOiAnJyxcclxuICAgIHRlYW1BOiAnJyxcclxuICAgIHRlYW1COiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3RlYW1zLCBzZXRUZWFtc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaFRlYW1zKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRlYW1zID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9UZWFtcy8/Zm9ybWF0PWpzb24nKTtcclxuICAgICAgc2V0VGVhbXMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB0ZWFtczonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGVhbUNoYW5nZSA9IChlLCB0ZWFtRmllbGQpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVGVhbUlkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbdGVhbUZpZWxkXTogc2VsZWN0ZWRUZWFtSWQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZyBkYXRhOicsIGZvcm1EYXRhKTsgLy8gTG9nIHRoZSBkYXRhIHlvdSdyZSBzZW5kaW5nXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvR2FtZXMvP2Zvcm1hdD1qc29uJywgZm9ybURhdGEpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnQoJ0dhbWUgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgaW1hZ2U6ICcnLFxyXG4gICAgICAgICAgdGVhbUE6ICcnLFxyXG4gICAgICAgICAgdGVhbUI6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KCdFcnJvciBhZGRpbmcgZ2FtZScpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRUZWFtQSA9IHRlYW1zLmZpbmQoKHRlYW0pID0+IHRlYW0udGVhbV9pZCA9PT0gZm9ybURhdGEudGVhbUEpO1xyXG4gIGNvbnN0IHNlbGVjdGVkVGVhbUIgPSB0ZWFtcy5maW5kKCh0ZWFtKSA9PiB0ZWFtLnRlYW1faWQgPT09IGZvcm1EYXRhLnRlYW1CKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGl0bGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS50ZWFtQX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlVGVhbUNoYW5nZShlLCAndGVhbUEnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFRlYW0gQTwvb3B0aW9uPlxyXG4gICAgICAgICAge3RlYW1zLm1hcCgodGVhbSkgPT4gKFxyXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17dGVhbS50ZWFtX2lkfSB2YWx1ZT17dGVhbS50ZWFtX2lkfT5cclxuICAgICAgICAgICAgICB7dGVhbS50ZWFtX25hbWV9XHJcbiAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRlYW1CfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUZWFtQ2hhbmdlKGUsICd0ZWFtQicpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGVhbSBCPC9vcHRpb24+XHJcbiAgICAgICAgICB7dGVhbXMubWFwKCh0ZWFtKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0ZWFtLnRlYW1faWR9IHZhbHVlPXt0ZWFtLnRlYW1faWR9PlxyXG4gICAgICAgICAgICAgIHt0ZWFtLnRlYW1fbmFtZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZGQgR2FtZTwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIHtzZWxlY3RlZFRlYW1BICYmIDxwPlNlbGVjdGVkIFRlYW0gQToge3NlbGVjdGVkVGVhbUEudGVhbV9uYW1lfTwvcD59XHJcbiAgICAgIHtzZWxlY3RlZFRlYW1CICYmIDxwPlNlbGVjdGVkIFRlYW0gQjoge3NlbGVjdGVkVGVhbUIudGVhbV9uYW1lfTwvcD59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZUZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJHYW1lRm9ybSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0ZWFtQSIsInRlYW1CIiwidGVhbXMiLCJzZXRUZWFtcyIsImZldGNoVGVhbXMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVUZWFtQ2hhbmdlIiwiZSIsInRlYW1GaWVsZCIsInNlbGVjdGVkVGVhbUlkIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImxvZyIsInBvc3QiLCJzdGF0dXMiLCJhbGVydCIsInNlbGVjdGVkVGVhbUEiLCJmaW5kIiwidGVhbSIsInRlYW1faWQiLCJzZWxlY3RlZFRlYW1CIiwiZGl2IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInNlbGVjdCIsIm9wdGlvbiIsIm1hcCIsInRlYW1fbmFtZSIsImJ1dHRvbiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});