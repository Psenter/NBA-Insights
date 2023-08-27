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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst GameComponent = ()=>{\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        teamA: \"\",\n        teamB: \"\"\n    });\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchTeams();\n        fetchGames();\n    }, []);\n    const fetchTeams = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\");\n            setTeams(response.data);\n        } catch (error) {\n            console.error(\"Error fetching teams:\", error);\n        }\n    };\n    const fetchGames = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Games/?format=json\");\n            setGames(response.data);\n        } catch (error) {\n            console.error(\"Error fetching games:\", error);\n        }\n    };\n    const handleTeamChange = (e, teamField)=>{\n        const selectedTeamId = e.target.value;\n        setFormData({\n            ...formData,\n            [teamField]: selectedTeamId\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const requestData = {\n            team_id_a: formData.teamA,\n            team_id_b: formData.teamB\n        };\n        console.log(\"Sending data:\", requestData);\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://127.0.0.1:8000/Games/?format=json\", requestData);\n            console.log(\"Response:\", response);\n            if (response.status === 201) {\n                alert(\"Game added successfully\");\n                setFormData({\n                    teamA: \"\",\n                    teamB: \"\"\n                });\n                fetchGames();\n            } else {\n                alert(\"Error adding game\");\n            }\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Add New Game\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamA,\n                        onChange: (e)=>handleTeamChange(e, \"teamA\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: formData.teamB,\n                        onChange: (e)=>handleTeamChange(e, \"teamB\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select Team B\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, undefined),\n                            teams.map((team)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: team.team_id,\n                                    children: team.team_name\n                                }, team.team_id, false, {\n                                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Add Game\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Game List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            \"Team A: \",\n                            game.team_id_a ? game.team_id_a.team_name : \"N/A\",\n                            \", Team B: \",\n                            game.team_id_b ? game.team_id_b.team_name : \"N/A\"\n                        ]\n                    }, game.id, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                        lineNumber: 103,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\GameComponent.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(GameComponent, \"hMkKNX0iORFKSCUW4hEXYyRyVBk=\");\n_c = GameComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameComponent);\nvar _c;\n$RefreshReg$(_c, \"GameComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFckMsTUFBTStCLEdBQUcsQ0FBQyxDQUFDTyxxQkFDViw4REFBQ0M7OzRCQUFpQjs0QkFDUEQsS0FBS3BCLFNBQVMsR0FBR29CLEtBQUtwQixTQUFTLENBQUNnQixTQUFTLEdBQUc7NEJBQU07NEJBQVdJLEtBQUtuQixTQUFTLEdBQUdtQixLQUFLbkIsU0FBUyxDQUFDZSxTQUFTLEdBQUc7O3VCQUQzR0ksS0FBS0UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtHQTFHTS9DO0tBQUFBO0FBNEdOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0dhbWVDb21wb25lbnQuanM/MzZkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEdhbWVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB0ZWFtQTogJycsXHJcbiAgICB0ZWFtQjogJycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFt0ZWFtcywgc2V0VGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtnYW1lcywgc2V0R2FtZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hUZWFtcygpO1xyXG4gICAgZmV0Y2hHYW1lcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUZWFtcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwMDAvVGVhbXMvP2Zvcm1hdD1qc29uJyk7XHJcbiAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdGVhbXM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoR2FtZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovLzEyNy4wLjAuMTo4MDAwL0dhbWVzLz9mb3JtYXQ9anNvbicpO1xyXG4gICAgICBzZXRHYW1lcyhyZXNwb25zZS5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGdhbWVzOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZWFtQ2hhbmdlID0gKGUsIHRlYW1GaWVsZCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUZWFtSWQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldEZvcm1EYXRhKHsgLi4uZm9ybURhdGEsIFt0ZWFtRmllbGRdOiBzZWxlY3RlZFRlYW1JZCB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICB0ZWFtX2lkX2E6IGZvcm1EYXRhLnRlYW1BLFxyXG4gICAgICB0ZWFtX2lkX2I6IGZvcm1EYXRhLnRlYW1CLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZyBkYXRhOicsIHJlcXVlc3REYXRhKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly8xMjcuMC4wLjE6ODAwMC9HYW1lcy8/Zm9ybWF0PWpzb24nLCByZXF1ZXN0RGF0YSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2U6JywgcmVzcG9uc2UpO1xyXG5cclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgYWxlcnQoJ0dhbWUgYWRkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoe1xyXG4gICAgICAgICAgdGVhbUE6ICcnLFxyXG4gICAgICAgICAgdGVhbUI6ICcnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZldGNoR2FtZXMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnRXJyb3IgYWRkaW5nIGdhbWUnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDI+QWRkIE5ldyBHYW1lPC9oMj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRlYW1BfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVUZWFtQ2hhbmdlKGUsICd0ZWFtQScpfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgVGVhbSBBPC9vcHRpb24+XHJcbiAgICAgICAgICB7dGVhbXMubWFwKCh0ZWFtKSA9PiAoXHJcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXt0ZWFtLnRlYW1faWR9IHZhbHVlPXt0ZWFtLnRlYW1faWR9PlxyXG4gICAgICAgICAgICAgIHt0ZWFtLnRlYW1fbmFtZX1cclxuICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEudGVhbUJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVRlYW1DaGFuZ2UoZSwgJ3RlYW1CJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBUZWFtIEI8L29wdGlvbj5cclxuICAgICAgICAgIHt0ZWFtcy5tYXAoKHRlYW0pID0+IChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e3RlYW0udGVhbV9pZH0gdmFsdWU9e3RlYW0udGVhbV9pZH0+XHJcbiAgICAgICAgICAgICAge3RlYW0udGVhbV9uYW1lfVxyXG4gICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBHYW1lPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIDxoMj5HYW1lIExpc3Q8L2gyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2dhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17Z2FtZS5pZH0+XHJcbiAgICAgICAgICAgIFRlYW0gQToge2dhbWUudGVhbV9pZF9hID8gZ2FtZS50ZWFtX2lkX2EudGVhbV9uYW1lIDogJ04vQSd9LCBUZWFtIEI6IHtnYW1lLnRlYW1faWRfYiA/IGdhbWUudGVhbV9pZF9iLnRlYW1fbmFtZSA6ICdOL0EnfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiR2FtZUNvbXBvbmVudCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ0ZWFtQSIsInRlYW1CIiwidGVhbXMiLCJzZXRUZWFtcyIsImdhbWVzIiwic2V0R2FtZXMiLCJmZXRjaFRlYW1zIiwiZmV0Y2hHYW1lcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZVRlYW1DaGFuZ2UiLCJlIiwidGVhbUZpZWxkIiwic2VsZWN0ZWRUZWFtSWQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVxdWVzdERhdGEiLCJ0ZWFtX2lkX2EiLCJ0ZWFtX2lkX2IiLCJsb2ciLCJwb3N0Iiwic3RhdHVzIiwiYWxlcnQiLCJkaXYiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwib3B0aW9uIiwibWFwIiwidGVhbSIsInRlYW1faWQiLCJ0ZWFtX25hbWUiLCJidXR0b24iLCJ0eXBlIiwidWwiLCJnYW1lIiwibGkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GameComponent.js\n"));

/***/ })

});