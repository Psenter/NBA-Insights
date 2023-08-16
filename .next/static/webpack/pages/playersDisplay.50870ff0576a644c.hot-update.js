"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/playersDisplay",{

/***/ "./src/components/PlayersDisplay.js":
/*!******************************************!*\
  !*** ./src/components/PlayersDisplay.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction PlayersDisplay() {\n    _s();\n    const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"http://127.0.0.1:8000/Players/?format=json\").then((response)=>{\n            setPlayers(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: players.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-2\",\n                    children: [\n                        item.first_name,\n                        \" \",\n                        item.last_name,\n                        \" #\",\n                        item.jersey_number,\n                        \" \",\n                        item.position,\n                        \" \",\n                        item.height,\n                        \"in. \",\n                        item.weight,\n                        \"lbs.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayersDisplay.js\",\n                    lineNumber: 21,\n                    columnNumber: 21\n                }, this)\n            }, item.id, false, {\n                fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayersDisplay.js\",\n                lineNumber: 20,\n                columnNumber: 17\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\PlayersDisplay.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(PlayersDisplay, \"X/Tdqu5+Xz4mrEJLe3+u4Igo5rg=\");\n_c = PlayersDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayersDisplay);\nvar _c;\n$RefreshReg$(_c, \"PlayersDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QbGF5ZXJzRGlzcGxheS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUN6QjtBQUUxQixTQUFTSTs7SUFDTCxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDTkUsaURBQVMsQ0FBQyw4Q0FDTEssSUFBSSxDQUFDLENBQUNDO1lBQ0hILFdBQVdHLFNBQVNDLElBQUk7UUFDNUIsR0FDQ0MsS0FBSyxDQUFDLENBQUNDO1lBQ0pDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQzFDO0lBQ1IsR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVU7a0JBQ1ZWLFFBQVFXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0g7MEJBQ0csNEVBQUNBO29CQUFJQyxXQUFVOzt3QkFBUUUsS0FBS0MsVUFBVTt3QkFBQzt3QkFBRUQsS0FBS0UsU0FBUzt3QkFBQzt3QkFBR0YsS0FBS0csYUFBYTt3QkFBQzt3QkFBRUgsS0FBS0ksUUFBUTt3QkFBQzt3QkFBRUosS0FBS0ssTUFBTTt3QkFBQzt3QkFBS0wsS0FBS00sTUFBTTt3QkFBQzs7Ozs7OztlQUR2SE4sS0FBS08sRUFBRTs7Ozs7Ozs7OztBQU1qQztHQXRCU3BCO0tBQUFBO0FBd0JULCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BsYXllcnNEaXNwbGF5LmpzP2U4MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gUGxheWVyc0Rpc3BsYXkoKSB7XHJcbiAgICBjb25zdCBbcGxheWVycywgc2V0UGxheWVyc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvUGxheWVycy8/Zm9ybWF0PWpzb25cIilcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQbGF5ZXJzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtwbGF5ZXJzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPntpdGVtLmZpcnN0X25hbWV9IHtpdGVtLmxhc3RfbmFtZX0gI3tpdGVtLmplcnNleV9udW1iZXJ9IHtpdGVtLnBvc2l0aW9ufSB7aXRlbS5oZWlnaHR9aW4uIHtpdGVtLndlaWdodH1sYnMuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJzRGlzcGxheTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIlBsYXllcnNEaXNwbGF5IiwicGxheWVycyIsInNldFBsYXllcnMiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImplcnNleV9udW1iZXIiLCJwb3NpdGlvbiIsImhlaWdodCIsIndlaWdodCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/PlayersDisplay.js\n"));

/***/ })

});