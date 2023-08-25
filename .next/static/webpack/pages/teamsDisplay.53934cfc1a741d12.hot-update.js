"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/teamsDisplay",{

/***/ "./src/components/TeamsDisplay.js":
/*!****************************************!*\
  !*** ./src/components/TeamsDisplay.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction TeamsDisplay() {\n    _s();\n    const [teams, setTeams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://127.0.0.1:8000/Teams/?format=json\").then((response)=>{\n            setTeams(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"col-3 display-6\",\n            children: teams.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/[id]\",\n                    as: \"/\".concat(item.id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: [\n                            item.team_name,\n                            item.media_id.media_url\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, this)\n                }, item.id, false, {\n                    fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n                    lineNumber: 23,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\components\\\\TeamsDisplay.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(TeamsDisplay, \"nt+I693XwTdNiKlXHWfWa22BjIk=\");\n_c = TeamsDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TeamsDisplay);\nvar _c;\n$RefreshReg$(_c, \"TeamsDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UZWFtc0Rpc3BsYXkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ0c7QUFDaUI7QUFFOUMsU0FBU0s7O0lBQ0wsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDO1FBQ05FLGlEQUFTLENBQUMsNENBQ0xNLElBQUksQ0FBQyxDQUFDQztZQUNISCxTQUFTRyxTQUFTQyxJQUFJO1FBQzFCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUMxQztJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNWVixNQUFNVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1IsOERBQUNkLGtEQUFJQTtvQkFBZWUsTUFBTztvQkFBUUMsSUFBSSxJQUFZLE9BQVJGLEtBQUtHLEVBQUU7OEJBQzlDLDRFQUFDTjt3QkFBSUMsV0FBVTs7NEJBQ1ZFLEtBQUtJLFNBQVM7NEJBQ2RKLEtBQUtLLFFBQVEsQ0FBQ0MsU0FBUzs7Ozs7OzttQkFIckJOLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQVV0QztHQTNCU2hCO0tBQUFBO0FBNkJULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RlYW1zRGlzcGxheS5qcz9kODJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIFRlYW1zRGlzcGxheSgpIHtcclxuICAgIGNvbnN0IFt0ZWFtcywgc2V0VGVhbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwL1RlYW1zLz9mb3JtYXQ9anNvblwiKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRlYW1zKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMyBkaXNwbGF5LTZcIj5cclxuICAgICAgICAgICAgICAgIHt0ZWFtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0uaWR9IGhyZWY9e2AvW2lkXWB9IGFzPXtgLyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50ZWFtX25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5tZWRpYV9pZC5tZWRpYV91cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1zRGlzcGxheTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkxpbmsiLCJUZWFtc0Rpc3BsYXkiLCJ0ZWFtcyIsInNldFRlYW1zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsImhyZWYiLCJhcyIsImlkIiwidGVhbV9uYW1lIiwibWVkaWFfaWQiLCJtZWRpYV91cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TeamsDisplay.js\n"));

/***/ })

});