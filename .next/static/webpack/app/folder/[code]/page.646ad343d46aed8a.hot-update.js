"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/folder/[code]/page",{

/***/ "(app-pages-browser)/./src/components/UploadButton.tsx":
/*!*****************************************!*\
  !*** ./src/components/UploadButton.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UploadButton: function() { return /* binding */ UploadButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dropzone */ \"(app-pages-browser)/./node_modules/react-dropzone/dist/es/index.js\");\n/* harmony import */ var _store_folderStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/folderStore */ \"(app-pages-browser)/./src/store/folderStore.ts\");\n/* harmony import */ var _ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/Button */ \"(app-pages-browser)/./src/components/ui/Button.tsx\");\n/* harmony import */ var _barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* __next_internal_client_entry_do_not_use__ UploadButton auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction UploadButton(param) {\n    let { folderCode } = param;\n    _s();\n    const { addFile, getFolder, MAX_STORAGE } = (0,_store_folderStore__WEBPACK_IMPORTED_MODULE_2__.useFolderStore)();\n    const onDrop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((acceptedFiles)=>{\n        const folder = getFolder(folderCode);\n        if (!folder) return;\n        acceptedFiles.forEach((file)=>{\n            const fileData = {\n                name: file.name,\n                size: file.size,\n                type: file.type,\n                uploadedAt: Date.now()\n            };\n            const success = addFile(folderCode, fileData);\n            if (!success) {\n                alert(\"Not enough storage space!\");\n            }\n        });\n    }, [\n        folderCode,\n        addFile,\n        getFolder\n    ]);\n    const { getRootProps, getInputProps, isDragActive } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone)({\n        onDrop,\n        maxSize: MAX_STORAGE\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ...getRootProps(),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ...getInputProps()\n            }, void 0, false, {\n                fileName: \"E:\\\\OG Products\\\\project_latest\\\\src\\\\components\\\\UploadButton.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_Button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                className: \"bg-red-700 text-black hover:bg-gray-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"mr-2 h-4 w-4\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\OG Products\\\\project_latest\\\\src\\\\components\\\\UploadButton.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    \"Upload File\"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\OG Products\\\\project_latest\\\\src\\\\components\\\\UploadButton.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\OG Products\\\\project_latest\\\\src\\\\components\\\\UploadButton.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(UploadButton, \"84aa0l+4kZQWO2pQE4FnIRUsrFo=\", false, function() {\n    return [\n        _store_folderStore__WEBPACK_IMPORTED_MODULE_2__.useFolderStore,\n        react_dropzone__WEBPACK_IMPORTED_MODULE_4__.useDropzone\n    ];\n});\n_c = UploadButton;\nvar _c;\n$RefreshReg$(_c, \"UploadButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNTO0FBQ1E7QUFDaEI7QUFDQztBQU0vQixTQUFTSyxhQUFhLEtBQWlDO1FBQWpDLEVBQUVDLFVBQVUsRUFBcUIsR0FBakM7O0lBQzNCLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRSxHQUFHUCxrRUFBY0E7SUFFMUQsTUFBTVEsU0FBU1Ysa0RBQVdBLENBQUMsQ0FBQ1c7UUFDMUIsTUFBTUMsU0FBU0osVUFBVUY7UUFDekIsSUFBSSxDQUFDTSxRQUFRO1FBRWJELGNBQWNFLE9BQU8sQ0FBQyxDQUFDQztZQUNyQixNQUFNQyxXQUFXO2dCQUNmQyxNQUFNRixLQUFLRSxJQUFJO2dCQUNmQyxNQUFNSCxLQUFLRyxJQUFJO2dCQUNmQyxNQUFNSixLQUFLSSxJQUFJO2dCQUNmQyxZQUFZQyxLQUFLQyxHQUFHO1lBQ3RCO1lBRUEsTUFBTUMsVUFBVWYsUUFBUUQsWUFBWVM7WUFDcEMsSUFBSSxDQUFDTyxTQUFTO2dCQUNaQyxNQUFNO1lBQ1I7UUFDRjtJQUNGLEdBQUc7UUFBQ2pCO1FBQVlDO1FBQVNDO0tBQVU7SUFFbkMsTUFBTSxFQUFFZ0IsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLFlBQVksRUFBRSxHQUFHekIsMkRBQVdBLENBQUM7UUFDaEVTO1FBQ0FpQixTQUFTbEI7SUFDWDtJQUVBLHFCQUNFLDhEQUFDbUI7UUFBSyxHQUFHSixjQUFjOzswQkFDckIsOERBQUNLO2dCQUFPLEdBQUdKLGVBQWU7Ozs7OzswQkFDMUIsOERBQUN0Qiw4Q0FBTUE7Z0JBQUMyQixXQUFVOztrQ0FDaEIsOERBQUMxQixrRkFBTUE7d0JBQUMwQixXQUFVOzs7Ozs7b0JBQWlCOzs7Ozs7Ozs7Ozs7O0FBSzNDO0dBcENnQnpCOztRQUM4QkgsOERBQWNBO1FBcUJKRCx1REFBV0E7OztLQXRCbkRJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VwbG9hZEJ1dHRvbi50c3g/NDEzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgeyB1c2VGb2xkZXJTdG9yZSB9IGZyb20gJ0Avc3RvcmUvZm9sZGVyU3RvcmUnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi91aS9CdXR0b24nO1xuaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcblxuaW50ZXJmYWNlIFVwbG9hZEJ1dHRvblByb3BzIHtcbiAgZm9sZGVyQ29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXBsb2FkQnV0dG9uKHsgZm9sZGVyQ29kZSB9OiBVcGxvYWRCdXR0b25Qcm9wcykge1xuICBjb25zdCB7IGFkZEZpbGUsIGdldEZvbGRlciwgTUFYX1NUT1JBR0UgfSA9IHVzZUZvbGRlclN0b3JlKCk7XG5cbiAgY29uc3Qgb25Ecm9wID0gdXNlQ2FsbGJhY2soKGFjY2VwdGVkRmlsZXM6IEZpbGVbXSkgPT4ge1xuICAgIGNvbnN0IGZvbGRlciA9IGdldEZvbGRlcihmb2xkZXJDb2RlKTtcbiAgICBpZiAoIWZvbGRlcikgcmV0dXJuO1xuXG4gICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICBjb25zdCBmaWxlRGF0YSA9IHtcbiAgICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgdXBsb2FkZWRBdDogRGF0ZS5ub3coKSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBhZGRGaWxlKGZvbGRlckNvZGUsIGZpbGVEYXRhKTtcbiAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICBhbGVydCgnTm90IGVub3VnaCBzdG9yYWdlIHNwYWNlIScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbZm9sZGVyQ29kZSwgYWRkRmlsZSwgZ2V0Rm9sZGVyXSk7XG5cbiAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuICAgIG9uRHJvcCxcbiAgICBtYXhTaXplOiBNQVhfU1RPUkFHRSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYmctcmVkLTcwMCB0ZXh0LWJsYWNrIGhvdmVyOmJnLWdyYXktNTAwXCI+XG4gICAgICAgIDxVcGxvYWQgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgICAgVXBsb2FkIEZpbGVcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZURyb3B6b25lIiwidXNlRm9sZGVyU3RvcmUiLCJCdXR0b24iLCJVcGxvYWQiLCJVcGxvYWRCdXR0b24iLCJmb2xkZXJDb2RlIiwiYWRkRmlsZSIsImdldEZvbGRlciIsIk1BWF9TVE9SQUdFIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsImZvbGRlciIsImZvckVhY2giLCJmaWxlIiwiZmlsZURhdGEiLCJuYW1lIiwic2l6ZSIsInR5cGUiLCJ1cGxvYWRlZEF0IiwiRGF0ZSIsIm5vdyIsInN1Y2Nlc3MiLCJhbGVydCIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJtYXhTaXplIiwiZGl2IiwiaW5wdXQiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/UploadButton.tsx\n"));

/***/ })

});