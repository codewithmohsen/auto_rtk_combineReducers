"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/user/page",{

/***/ "(app-pages-browser)/./src/app/user/page.tsx":
/*!*******************************!*\
  !*** ./src/app/user/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.slice */ \"(app-pages-browser)/./src/app/user/user.slice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const { data, error, isLoading, refetch } = (0,_user_slice__WEBPACK_IMPORTED_MODULE_2__.useGetAllQuery)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Users\"\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 13,\n                columnNumber: 27\n            }, undefined),\n            !isLoading && error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Error:\",\n                    state.error\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 36\n            }, undefined) : null,\n            !isLoading && data.items.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: state.items.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: user.name\n                    }, user.id, false, {\n                        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 25\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n                lineNumber: 16,\n                columnNumber: 17\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mohsen/personal-projects/smart_combineReducers/src/app/user/page.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Page, \"I6nfznt4M4XQHwM/IlGaqsrGiaY=\", false, function() {\n    return [\n        _user_slice__WEBPACK_IMPORTED_MODULE_2__.useGetAllQuery\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlci9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lDO0FBR0s7QUFFOUMsTUFBTUUsT0FBaUI7O0lBQ25CLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsT0FBTyxFQUFFLEdBQUdMLDJEQUFjQTtJQUUxRCxxQkFDSSw4REFBQ007OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7O1lBQ0hILDJCQUFhLDhEQUFDRTswQkFBSTs7Ozs7O1lBQ2xCLENBQUNGLGFBQWFELHNCQUFRLDhEQUFDRzs7b0JBQUk7b0JBQU9FLE1BQU1MLEtBQUs7Ozs7Ozs0QkFBVTtZQUN2RCxDQUFDQyxhQUFhRixLQUFLTyxLQUFLLENBQUNDLE1BQU0saUJBQzVCLDhEQUFDQzswQkFDSUgsTUFBTUMsS0FBSyxDQUFDRyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNDO2tDQUFrQkQsS0FBS0UsSUFBSTt1QkFBbkJGLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs0QkFHeEI7Ozs7Ozs7QUFHaEI7R0FqQk1mOztRQUMwQ0QsdURBQWNBOzs7S0FEeERDO0FBbUJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvdXNlci9wYWdlLnRzeD80ZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBBcHBEaXNwYXRjaCwgUm9vdFN0YXRlIH0gZnJvbSAnLi4vc2ltcGxlU3RvcmUnO1xuaW1wb3J0IHsgdXNlR2V0QWxsUXVlcnkgfSBmcm9tICcuL3VzZXIuc2xpY2UnO1xuXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yLCBpc0xvYWRpbmcsIHJlZmV0Y2ggfSA9IHVzZUdldEFsbFF1ZXJ5KCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPlVzZXJzPC9oMj5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgPGRpdj5sb2FkaW5nLi4uPC9kaXY+fVxuICAgICAgICAgICAgeyFpc0xvYWRpbmcgJiYgZXJyb3IgPyA8ZGl2PkVycm9yOntzdGF0ZS5lcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgeyFpc0xvYWRpbmcgJiYgZGF0YS5pdGVtcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7c3RhdGUuaXRlbXMubWFwKCh1c2VyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT57dXNlci5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlR2V0QWxsUXVlcnkiLCJQYWdlIiwiZGF0YSIsImVycm9yIiwiaXNMb2FkaW5nIiwicmVmZXRjaCIsImRpdiIsImgyIiwic3RhdGUiLCJpdGVtcyIsImxlbmd0aCIsInVsIiwibWFwIiwidXNlciIsImxpIiwibmFtZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/user/page.tsx\n"));

/***/ })

});