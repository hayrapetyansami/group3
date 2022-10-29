/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/test */ \"./src/js/modules/test.js\");\n// import { a, b, hello as hi } from \"./modules/test.js\";\r\n// import {asdlkasfkjhksdjhfksldjgklfds as c} from \"./modules/test\";\r\n// import * as data from \"./modules/test\";\r\n\r\n\r\n(0,_modules_test__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\n// const {a, b, hello:hi, asdlkasfkjhksdjhfksldjgklfds:c} = data;\r\n\r\nconsole.log(_modules_test__WEBPACK_IMPORTED_MODULE_0__.a);\r\nconsole.log(_modules_test__WEBPACK_IMPORTED_MODULE_0__.b);\r\n// console.log(c);\r\n// console.log(hi(\"Ashot\"));\n\n//# sourceURL=webpack://esmodules/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modules/test.js":
/*!********************************!*\
  !*** ./src/js/modules/test.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"asdlkasfkjhksdjhfksldjgklfds\": () => (/* binding */ asdlkasfkjhksdjhfksldjgklfds),\n/* harmony export */   \"b\": () => (/* binding */ b),\n/* harmony export */   \"default\": () => (/* binding */ sayBye),\n/* harmony export */   \"hello\": () => (/* binding */ hello),\n/* harmony export */   \"state\": () => (/* binding */ state)\n/* harmony export */ });\nconst a = 15;\r\n\r\nconst b = 10;\r\n\r\nconst asdlkasfkjhksdjhfksldjgklfds = \"Hello World !!!\";\r\n\r\nfunction hello (name) {\r\n\treturn `Hello dear ${name}`\r\n}\r\n\r\nlet state = false;\r\n\r\n\r\n\r\nfunction sayBye () {\r\n\tconsole.log(\"Bye Bye !!!\");\r\n}\n\n//# sourceURL=webpack://esmodules/./src/js/modules/test.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;