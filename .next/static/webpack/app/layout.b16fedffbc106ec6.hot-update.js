"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/layout.tsx":
/*!****************************!*\
  !*** ./src/app/layout.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _simpleStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simpleStore */ \"(app-pages-browser)/./src/app/simpleStore.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ \"(app-pages-browser)/./node_modules/react-query/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// import { store } from './smartStore';\n\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\nfunction RootLayout(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: _simpleStore__WEBPACK_IMPORTED_MODULE_1__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n                lang: \"en\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/layout.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/layout.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/layout.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/layout.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGF5b3V0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDc0M7QUFDdEMsd0NBQXdDO0FBQ0Q7QUFDa0M7QUFDekUsTUFBTUksY0FBYyxJQUFJRixvREFBV0E7QUFFcEIsU0FBU0csV0FBVyxLQUlsQztRQUprQyxFQUNqQ0MsUUFBUSxFQUdULEdBSmtDO0lBS2pDLHFCQUNFLDhEQUFDSCw0REFBbUJBO1FBQUNJLFFBQVFIO2tCQUMzQiw0RUFBQ0gsaURBQVFBO1lBQUNELE9BQU9BLCtDQUFLQTtzQkFDcEIsNEVBQUNRO2dCQUFLQyxNQUFLOzBCQUNULDRFQUFDQzs4QkFDRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1iO0tBaEJ3QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sYXlvdXQudHN4PzU3YTkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3NpbXBsZVN0b3JlJztcbi8vIGltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zbWFydFN0b3JlJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7XG4gIGNoaWxkcmVuLFxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17cXVlcnlDbGllbnR9PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICk7XG59Il0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsIlJvb3RMYXlvdXQiLCJjaGlsZHJlbiIsImNsaWVudCIsImh0bWwiLCJsYW5nIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/layout.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/simpleStore.ts":
/*!********************************!*\
  !*** ./src/app/simpleStore.ts ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _counter_counter_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter/counter.slice */ \"(app-pages-browser)/./src/app/counter/counter.slice.ts\");\n/* harmony import */ var _post_post_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/post.slice */ \"(app-pages-browser)/./src/app/post/post.slice.ts\");\n/* harmony import */ var _user_user_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.slice */ \"(app-pages-browser)/./src/app/user/user.slice.ts\");\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.configureStore)({\n    reducer: {\n        counter: _counter_counter_slice__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        post: _post_post_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        [_user_user_slice__WEBPACK_IMPORTED_MODULE_2__.userApi.reducerPath]: _user_user_slice__WEBPACK_IMPORTED_MODULE_2__.userApi.reducer\n    },\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_user_user_slice__WEBPACK_IMPORTED_MODULE_2__.userApi.middleware)\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2ltcGxlU3RvcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBa0Q7QUFDRztBQUNUO0FBQ0E7QUFFckMsTUFBTUksUUFBUUosZ0VBQWNBLENBQUM7SUFDbkNLLFNBQVM7UUFDUkMsU0FBU0wsOERBQWNBO1FBQ3ZCTSxNQUFNTCx3REFBV0E7UUFDakIsQ0FBQ0MscURBQU9BLENBQUNLLFdBQVcsQ0FBQyxFQUFFTCxxREFBT0EsQ0FBQ0UsT0FBTztJQUN2QztJQUNBSSxZQUFZLENBQUNDLHVCQUF5QkEsdUJBQXVCQyxNQUFNLENBQUNSLHFEQUFPQSxDQUFDTSxVQUFVO0FBQ3ZGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaW1wbGVTdG9yZS50cz9lNDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgY291bnRlclJlZHVjZXIgZnJvbSAnLi9jb3VudGVyL2NvdW50ZXIuc2xpY2UnO1xuaW1wb3J0IHBvc3RSZWR1Y2VyIGZyb20gJy4vcG9zdC9wb3N0LnNsaWNlJztcbmltcG9ydCB7IHVzZXJBcGkgfSBmcm9tICcuL3VzZXIvdXNlci5zbGljZSc7XG5cbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcblx0cmVkdWNlcjoge1xuXHRcdGNvdW50ZXI6IGNvdW50ZXJSZWR1Y2VyLFxuXHRcdHBvc3Q6IHBvc3RSZWR1Y2VyLFxuXHRcdFt1c2VyQXBpLnJlZHVjZXJQYXRoXTogdXNlckFwaS5yZWR1Y2VyLFxuXHR9LFxuXHRtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+IGdldERlZmF1bHRNaWRkbGV3YXJlKCkuY29uY2F0KHVzZXJBcGkubWlkZGxld2FyZSksXG59KTtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPjtcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoO1xuIl0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwiY291bnRlclJlZHVjZXIiLCJwb3N0UmVkdWNlciIsInVzZXJBcGkiLCJzdG9yZSIsInJlZHVjZXIiLCJjb3VudGVyIiwicG9zdCIsInJlZHVjZXJQYXRoIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/simpleStore.ts\n"));

/***/ })

});