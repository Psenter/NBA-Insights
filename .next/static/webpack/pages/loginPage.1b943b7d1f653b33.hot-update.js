"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/loginPage",{

/***/ "./src/services/auth.service.js":
/*!**************************************!*\
  !*** ./src/services/auth.service.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalStateProvider: function() { return /* binding */ GlobalStateProvider; },\n/* harmony export */   useGlobalState: function() { return /* binding */ useGlobalState; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n// Define the initial state\nconst initialState = {\n    user: null\n};\n// Create a context object\nconst GlobalStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"SET_USER\":\n            return {\n                ...state,\n                user: action.payload\n            };\n        case \"LOGOUT_USER\":\n            return {\n                ...state,\n                user: null\n            };\n        default:\n            return state;\n    }\n}\n// Provider component to wrap the app\nfunction GlobalStateProvider(param) {\n    let { children } = param;\n    _s();\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStateContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\parke\\\\Documents\\\\GitHub\\\\NBA-Insights\\\\src\\\\services\\\\auth.service.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(GlobalStateProvider, \"6JWkGZ32UPfojeNx+xqn8ZU8A0Q=\");\n_c = GlobalStateProvider;\n// Custom hook to use the global state\nfunction useGlobalState() {\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GlobalStateContext);\n}\n_s1(useGlobalState, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nvar _c;\n$RefreshReg$(_c, \"GlobalStateProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThEO0FBQzlELDJCQUEyQjtBQUMzQixNQUFNRyxlQUFlO0lBQ25CQyxNQUFNO0FBQ1I7QUFDQSwwQkFBMEI7QUFDMUIsTUFBTUMsbUNBQXFCTCxvREFBYUE7QUFDeEMsU0FBU00sUUFBUUMsS0FBSyxFQUFFQyxNQUFNO0lBQzVCLE9BQVFBLE9BQU9DLElBQUk7UUFDakIsS0FBSztZQUNILE9BQU87Z0JBQUUsR0FBR0YsS0FBSztnQkFBRUgsTUFBTUksT0FBT0UsT0FBTztZQUFDO1FBQzFDLEtBQUs7WUFDSCxPQUFPO2dCQUFFLEdBQUdILEtBQUs7Z0JBQUVILE1BQU07WUFBSztRQUNoQztZQUNFLE9BQU9HO0lBQ1g7QUFDRjtBQUNBLHFDQUFxQztBQUM5QixTQUFTSSxvQkFBb0IsS0FBWTtRQUFaLEVBQUVDLFFBQVEsRUFBRSxHQUFaOztJQUNsQyxNQUFNLENBQUNMLE9BQU9NLFNBQVMsR0FBR1osaURBQVVBLENBQUNLLFNBQVNIO0lBQzlDLHFCQUNFLDhEQUFDRSxtQkFBbUJTLFFBQVE7UUFBQ0MsT0FBTztZQUFFUjtZQUFPTTtRQUFTO2tCQUNuREQ7Ozs7OztBQUdQO0dBUGdCRDtLQUFBQTtBQVFoQixzQ0FBc0M7QUFDL0IsU0FBU0s7O0lBQ2QsT0FBT2QsaURBQVVBLENBQUNHO0FBQ3BCO0lBRmdCVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzPzY5MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuLy8gRGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG59O1xyXG4vLyBDcmVhdGUgYSBjb250ZXh0IG9iamVjdFxyXG5jb25zdCBHbG9iYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1NFVF9VU0VSJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlICdMT0dPVVRfVVNFUic6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VyOiBudWxsIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbi8vIFByb3ZpZGVyIGNvbXBvbmVudCB0byB3cmFwIHRoZSBhcHBcclxuZXhwb3J0IGZ1bmN0aW9uIEdsb2JhbFN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxHbG9iYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0dsb2JhbFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbi8vIEN1c3RvbSBob29rIHRvIHVzZSB0aGUgZ2xvYmFsIHN0YXRlXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VHbG9iYWxTdGF0ZSgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChHbG9iYWxTdGF0ZUNvbnRleHQpO1xyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJHbG9iYWxTdGF0ZUNvbnRleHQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkdsb2JhbFN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUdsb2JhbFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/auth.service.js\n"));

/***/ })

});