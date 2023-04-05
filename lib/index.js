/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lpackage"] = factory(require("vue"));
	else
		root["lpackage"] = factory(root["Vue"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_vue__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./packages/button/lib/button.js":
/*!***************************************!*\
  !*** ./packages/button/lib/button.js ***!
  \***************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = button;\nfunction button() {\n  return \"Hello from button\";\n}\n\n//# sourceURL=webpack://lpackage/./packages/button/lib/button.js?");

/***/ }),

/***/ "./packages/icon/lib/icon.js":
/*!***********************************!*\
  !*** ./packages/icon/lib/icon.js ***!
  \***********************************/
/***/ ((module) => {

eval("\n\nmodule.exports = button;\nfunction button() {\n  return \"Hello from button\";\n}\n\n//# sourceURL=webpack://lpackage/./packages/icon/lib/icon.js?");

/***/ }),

/***/ "./packages/lpackage/index.ts":
/*!************************************!*\
  !*** ./packages/lpackage/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* reexport default from dynamic */ _lpackage_button__WEBPACK_IMPORTED_MODULE_0___default.a),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lpackage_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lpackage/button */ \"./packages/button/lib/button.js\");\n/* harmony import */ var _lpackage_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lpackage_button__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lpackage_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lpackage/icon */ \"./packages/icon/lib/icon.js\");\n/* harmony import */ var _lpackage_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lpackage_icon__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst components = [(_lpackage_button__WEBPACK_IMPORTED_MODULE_0___default()), (_lpackage_icon__WEBPACK_IMPORTED_MODULE_1___default())];\nconst install = app => {\n  components.forEach(component => {\n    app.component(component.name, component);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  install,\n  components\n});\n\n//# sourceURL=webpack://lpackage/./packages/lpackage/index.ts?");

/***/ }),

/***/ "vue":
/*!******************************************************************!*\
  !*** external {"root":"Vue","commonjs":"vue","commonjs2":"vue"} ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./packages/lpackage/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});